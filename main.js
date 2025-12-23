// File: main.js
// Browser-friendly ESM imports (CDN)
import {
    connect,
    isConnected,
    disconnect,
    getLocalStorage,
    openContractCall
} from '@stacks/connect';
import { STACKS_MAINNET } from '@stacks/network';
import { stringAsciiCV, PostConditionMode } from '@stacks/transactions';

// Real-time updates via Chainhook
import { realtimeClient } from './realtime.js';

// WalletConnect integration
import {
    getWalletConnector,
    connectWalletConnect,
    disconnectWalletConnect,
    isWalletConnectConnected,
    getWalletConnectAddress,
    callContractViaWalletConnect
} from './walletconnect.js';

console.log("🚀 System initializing...");

// --- CONFIGURATION ---
const CONTRACT_ADDRESS = "SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T";
const CONTRACT_NAME = "aura-nft-v3";  // V3 with BTC address linking

const IMAGE_URLS = {
    fire: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/images/fire.png",
    water: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/images/water.png",
    stone: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/images/stone.png",
};
const METADATA_URLS = {
    fire: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/metadata/fire.json",
    water: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/metadata/water.json",
    stone: "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/metadata/stone.json",
};

// --- STATE VARIABLES ---
const network = STACKS_MAINNET;
let currentAuraType = null;
let currentMetadataUri = null;
let ownedTokenId = null;      // Token ID if this BTC address has an NFT
let currentNftAura = null;    // Current aura of the NFT
let nftOwner = null;          // Stacks address that owns the NFT for this BTC address
let connectionMethod = null;  // 'stacks-connect' or 'walletconnect'

// --- DOM ELEMENTS ---
const elements = {
    connectBtn: document.getElementById("connectWalletBtn"),
    walletStatus: document.getElementById("walletStatus"),
    statusChip: document.querySelector(".status-chip"),
    heroImage: document.getElementById("heroImage"),
    heroCaption: document.getElementById("heroCaption"),
    scanSection: document.getElementById("scanSection"),
    btcAddress: document.getElementById("btcAddress"),
    scanButton: document.getElementById("scanButton"),
    loading: document.getElementById("loading"),
    resultArea: document.getElementById("result-area"),
    auraTitle: document.getElementById("auraTitle"),
    cardImage: document.getElementById("cardImage"),
    txData: document.getElementById("txData"),
    descData: document.getElementById("descData"),
    mintBtn: document.getElementById("mintBtn"),
    updateBtn: document.getElementById("updateBtn"),
    nftStatus: document.getElementById("nftStatus"),
    ownedTokenId: document.getElementById("ownedTokenId"),
    currentAuraLabel: document.getElementById("currentAuraLabel"),
    txStatus: document.getElementById("txStatus"),
};

// --- 2. NEW AUTH LOGIC (No more UserSession) ---
function scrollToScan() {
    if (elements.scanSection) {
        elements.scanSection.style.display = "block";
        elements.scanSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function updateWalletUI(autoScroll = false) {
    // Check if connected using either method
    const stacksConnected = isConnected();
    const wcConnected = isWalletConnectConnected();
    const anyConnected = stacksConnected || wcConnected;

    if (anyConnected) {
        let address = null;

        if (stacksConnected) {
            // Retrieve data from @stacks/connect local storage
            const userData = getLocalStorage();
            address = userData.addresses.stx[0].address;
            connectionMethod = 'stacks-connect';
        } else if (wcConnected) {
            // Get address from WalletConnect
            address = getWalletConnectAddress();
            connectionMethod = 'walletconnect';
        }

        console.log(`✅ User Connected (${connectionMethod}):`, address);

        if (elements.walletStatus) {
            elements.walletStatus.textContent = `${address.slice(0, 8)}...${address.slice(-4)}`;
            elements.walletStatus.style.color = "#9ae6b4";
            elements.walletStatus.style.display = "block";
        }
        if (elements.statusChip) {
            const method = connectionMethod === 'walletconnect' ? '📱 WalletConnect' : '🔗 Browser';
            elements.statusChip.textContent = method;
            elements.statusChip.style.display = "inline-block";
        }
        elements.connectBtn.textContent = "Disconnect";
        elements.connectBtn.classList.remove("btn-primary");
        elements.connectBtn.classList.add("btn-danger");

        if (elements.scanSection) elements.scanSection.style.display = "block";
        if (autoScroll) scrollToScan();
    } else {
        connectionMethod = null;
        console.log("❌ User Not Connected")
        if (elements.walletStatus) {
            elements.walletStatus.textContent = "Wallet not connected.";
            elements.walletStatus.style.color = "#ff6b6b";
            elements.walletStatus.style.display = "block";
        }
        if (elements.statusChip) {
            elements.statusChip.textContent = "Stacks Mainnet";
            elements.statusChip.style.display = "inline-block";
        }
        elements.connectBtn.textContent = "Connect Wallet";
        elements.connectBtn.classList.remove("btn-danger");
        elements.connectBtn.classList.add("btn-primary");
        if (elements.mintBtn) {
            elements.mintBtn.disabled = true;
        }

        if (elements.scanSection) elements.scanSection.style.display = "none";
        if (elements.resultArea) elements.resultArea.style.display = "none";
    }
}

async function handleConnectClick() {
    console.log("🖱️ Connect button clicked");

    // Check if already connected via either method
    const stacksConnected = isConnected();
    const wcConnected = isWalletConnectConnected();

    if (stacksConnected || wcConnected) {
        // Disconnect from the appropriate provider
        if (stacksConnected) {
            disconnect();
        }
        if (wcConnected) {
            await disconnectWalletConnect();
        }
        connectionMethod = null;
        updateWalletUI();
        return;
    }

    // Use browser extension by default
    try {
        await connect({
            appDetails: {
                name: "Bitcoin Aura",
                icon: window.location.origin + "/img/collection2.png",
            },
            redirectTo: window.location.href,
            onFinish: () => {
                connectionMethod = 'stacks-connect';
                updateWalletUI(true);
            },
        });
        connectionMethod = 'stacks-connect';
        updateWalletUI(true);
    } catch (err) {
        console.error("Connect failed", err);
    }
}

// WalletConnect connection handler
async function handleWalletConnectClick() {
    console.log("📱 WalletConnect button clicked");

    // Check if already connected
    if (isWalletConnectConnected() || isConnected()) {
        // Disconnect first
        if (isConnected()) disconnect();
        if (isWalletConnectConnected()) await disconnectWalletConnect();
        connectionMethod = null;
        updateWalletUI();
        return;
    }

    try {
        const result = await connectWalletConnect();
        if (result && result.address) {
            connectionMethod = 'walletconnect';
            updateWalletUI(true);
        }
    } catch (err) {
        console.error("WalletConnect failed:", err);
        if (elements.txStatus) {
            elements.txStatus.textContent = "WalletConnect failed: " + err.message;
            elements.txStatus.style.color = "orange";
        }
    }
}

if (elements.connectBtn) {
    elements.connectBtn.addEventListener("click", handleConnectClick);
}

// Add WalletConnect button handler if element exists
const wcBtn = document.getElementById("walletConnectBtn");
if (wcBtn) {
    wcBtn.addEventListener("click", handleWalletConnectClick);
}

// --- SCAN AURA LOGIC (Unchanged) ---
async function scanAura() {
    console.log("🕵️ Scan started...");
    const address = elements.btcAddress.value.trim();

    if (!address) {
        alert("Please enter a Bitcoin address first!");
        return;
    }

    elements.loading.style.display = "block";
    elements.resultArea.style.display = "none";
    elements.txStatus.textContent = "";

    try {
        const totalTx = await fetchAddressTxCount(address);

        let auraType = "";
        let imgFile = "";
        let description = "";
        let color = "";

        if (totalTx === 0) {
            auraType = "BUY YOUR FIRST BTC";
            imgFile = "";
            description = "You have no on-chain activity yet. Start with your first Bitcoin transaction.";
            color = "#f7931a";
            currentMetadataUri = METADATA_URLS.stone;
        } else if (totalTx >= 50) {
            auraType = "FIRE TRADER";
            imgFile = IMAGE_URLS.fire;
            description = "🔥 You are hyperactive! Gas fees are not a problem for you.";
            color = "#ff4500";
            currentMetadataUri = METADATA_URLS.fire;
        } else if (totalTx >= 10) {
            auraType = "WATER FLOW";
            imgFile = IMAGE_URLS.water;
            description = "💧 Balanced. You know when to hold and when to spend.";
            color = "#00bfff";
            currentMetadataUri = METADATA_URLS.water;
        } else {
            auraType = "STONE HODLER";
            imgFile = IMAGE_URLS.stone;
            description = "🪨 Stillness is gold. Your hands are diamond strong.";
            color = "#808080";
            currentMetadataUri = METADATA_URLS.stone;
        }

        currentAuraType = auraType;

        elements.auraTitle.innerText = auraType;
        elements.auraTitle.style.color = color;
        if (imgFile) {
            elements.cardImage.src = imgFile;
            elements.cardImage.style.display = "block";
            if (elements.heroImage) elements.heroImage.style.display = "block";
        } else {
            elements.cardImage.style.display = "none";
            if (elements.heroImage) elements.heroImage.style.display = "none";
        }
        elements.txData.innerText = `Total On-Chain Transactions: ${totalTx}`;
        elements.descData.innerText = description;
        const showDetails = totalTx !== 0;
        if (elements.txData) elements.txData.style.display = showDetails ? "block" : "none";
        if (elements.descData) elements.descData.style.display = showDetails ? "block" : "none";

        elements.loading.style.display = "none";
        elements.resultArea.style.display = "flex";

        // V3: Check if this BTC address already has a minted NFT FIRST
        // (No wallet connection required for lookup - we query by BTC address)
        if (totalTx > 0) {
            console.log("🔍 Checking if BTC address has minted NFT...");
            await checkNftOwnership();
            console.log(`🔍 Owned Token ID: ${ownedTokenId}, Current NFT Aura: ${currentNftAura}, New Aura: ${currentAuraType}`);

            // Now decide on button visibility based on NFT status
            if (ownedTokenId) {
                // This BTC address already has an NFT - hide mint, show status
                console.log("🚫 BTC address already minted - hiding MINT button");
                if (elements.mintBtn) elements.mintBtn.style.display = "none";
                updateButtonVisibility();
            } else {
                // No NFT for this BTC address - show mint button
                console.log("✅ BTC address not minted yet - showing MINT button");
                if (elements.mintBtn) {
                    elements.mintBtn.style.display = "block";
                    elements.mintBtn.disabled = false;
                    elements.mintBtn.textContent = "🚀 MINT TO STACKS";
                }
                if (elements.nftStatus) elements.nftStatus.style.display = "none";
                if (elements.updateBtn) elements.updateBtn.style.display = "none";
            }
        } else {
            // No transactions - can't mint
            console.log("⚠️ Skipping NFT check - totalTx is 0");
            if (elements.mintBtn) elements.mintBtn.style.display = "none";
        }
    } catch (error) {
        console.error(error);
        elements.loading.style.display = "none";
        alert("Error: " + error.message + ". API might be unreachable; try again.");
    }
}

async function fetchAddressTxCount(address) {
    const encoded = encodeURIComponent(address);
    const isDev = import.meta.env?.DEV || location.hostname === "localhost" || location.hostname === "127.0.0.1";

    // 1) Try same-origin serverless proxy first (works on Vercel prod)
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 3000);
        const res = await fetch(`/api/txcount?address=${encoded}`, {
            signal: controller.signal,
            headers: { Accept: "application/json" },
            cache: "no-store",
        });
        clearTimeout(timer);
        if (res.ok) {
            const json = await res.json();
            if (typeof json.totalTx === "number") return json.totalTx;
        }
    } catch (err) {
        console.warn("Proxy /api/txcount failed, falling back to client fetch", err);
    }

    const sources = [
        // Production-safe sources (mempool is region-blocked for some users)
        {
            url: `https://blockstream.info/api/address/${encoded}`,
            parser: (j) =>
                (j.chain_stats?.tx_count || 0) +
                (j.mempool_stats?.tx_count || 0),
        },
        {
            url: `https://api.blockcypher.com/v1/btc/main/addrs/${encoded}`,
            parser: (j) =>
                (typeof j.n_tx === "number" ? j.n_tx : 0) +
                (typeof j.unconfirmed_n_tx === "number"
                    ? j.unconfirmed_n_tx
                    : 0),
        },
        {
            url: `https://blockchain.info/rawaddr/${encoded}?cors=true`,
            parser: (j) => (typeof j.n_tx === "number" ? j.n_tx : 0),
        },
        ...(isDev
            ? [
                {
                    url: `https://mempool.space/api/address/${encoded}`,
                    parser: (j) =>
                        (j.chain_stats?.tx_count || 0) +
                        (j.mempool_stats?.tx_count || 0),
                },
            ]
            : []),
    ];

    for (const entry of sources) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 6000);
        try {
            const res = await fetch(entry.url, {
                signal: controller.signal,
                mode: "cors",
                headers: { Accept: "application/json" },
                cache: "no-store",
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            const total = entry.parser(json);
            clearTimeout(timer);
            if (typeof total !== "number" || Number.isNaN(total)) {
                throw new Error("Invalid response");
            }
            return total;
        } catch (err) {
            clearTimeout(timer);
            console.warn("Fetch failed on", entry.url, err);
        }
    }
    throw new Error("Failed to fetch address data (all sources failed)");
}

if (elements.scanButton) {
    elements.scanButton.addEventListener("click", scanAura);
}

// --- MINT NFT LOGIC ---
async function mintNFT() {
    if (!currentAuraType || !currentMetadataUri) {
        alert("Scan your aura first!");
        return;
    }
    if (!isConnected()) {
        alert("Connect your wallet first!");
        return;
    }

    elements.txStatus.textContent = "Preparing transaction...";
    elements.txStatus.style.color = "yellow";

    // V3: Get the scanned BTC address to link with the NFT
    const scannedBtcAddress = elements.btcAddress?.value?.trim();
    if (!scannedBtcAddress) {
        alert("No Bitcoin address scanned!");
        return;
    }

    // V3 mint function: mint(btc-addr, aura-type, metadata-uri)
    const functionArgs = [
        stringAsciiCV(scannedBtcAddress),
        stringAsciiCV(currentAuraType),
        stringAsciiCV(currentMetadataUri),
    ];

    try {
        await openContractCall({
            network,
            contractAddress: CONTRACT_ADDRESS,
            contractName: CONTRACT_NAME,
            functionName: "mint",
            functionArgs,
            postConditionMode: PostConditionMode.Deny,
            appDetails: {
                name: "Bitcoin Aura",
                icon: window.location.origin + "/img/collection2.png",
            },
            onFinish: (data) => {
                const explorerUrl = `https://explorer.hiro.so/txid/${data.txId}?chain=mainnet`;
                elements.txStatus.innerHTML = `✅ Mint Sent! <a href="${explorerUrl}" target="_blank" style="color: #45b5ff;">View Transaction</a>`;
                elements.txStatus.style.color = "#9ae6b4";
                if (elements.scanButton) elements.scanButton.textContent = "Scan Another Wallet Aura";
            },
            onCancel: () => {
                elements.txStatus.textContent = "Mint cancelled.";
                elements.txStatus.style.color = "orange";
            },
        });
    } catch (error) {
        elements.txStatus.textContent = `Mint failed: ${error.message}`;
        elements.txStatus.style.color = "red";
    }
}

if (elements.mintBtn) {
    elements.mintBtn.addEventListener("click", mintNFT);
}

// --- CHECK NFT BY BITCOIN ADDRESS ---
// V3: Query contract's get-token-by-btc to find if this BTC address has a minted NFT
async function checkNftOwnership() {
    const scannedBtcAddress = elements.btcAddress?.value?.trim();

    if (!scannedBtcAddress) {
        ownedTokenId = null;
        currentNftAura = null;
        return;
    }

    try {
        console.log(`[NFT Check V3] Looking up token for BTC address: ${scannedBtcAddress}`);

        // Call contract's get-token-by-btc read-only function
        const apiUrl = `https://api.hiro.so/v2/contracts/call-read/${CONTRACT_ADDRESS}/${CONTRACT_NAME}/get-token-by-btc`;

        // Manually encode string-ascii for the API
        // Format: 0x0d (string-ascii type) + 4-byte length (big-endian) + ASCII bytes
        const btcAddrBytes = new TextEncoder().encode(scannedBtcAddress);
        const lengthHex = btcAddrBytes.length.toString(16).padStart(8, '0');
        let btcAddrHex = '';
        for (const byte of btcAddrBytes) {
            btcAddrHex += byte.toString(16).padStart(2, '0');
        }
        const encodedArg = `0x0d${lengthHex}${btcAddrHex}`;

        console.log(`[NFT Check V3] Encoded arg: ${encodedArg}`);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sender: CONTRACT_ADDRESS,
                arguments: [encodedArg]
            })
        });

        if (!response.ok) {
            console.warn("[NFT Check V3] API error:", response.status);
            ownedTokenId = null;
            currentNftAura = null;
            return;
        }

        const data = await response.json();

        if (data.okay && data.result) {
            // Parse the result: (ok (some uint)) or (ok none)
            const hex = data.result;

            // Check if it's (ok (some uint)) - starts with 0x070a01
            // 0x07 = ok, 0x0a = some, 0x01 = uint
            if (hex.startsWith('0x070a01')) {
                // Extract the uint value (16 bytes after the prefix)
                const tokenIdHex = hex.slice(8, 40); // After 0x070a01
                ownedTokenId = parseInt(tokenIdHex, 16);

                console.log(`[NFT Check V3] Found token #${ownedTokenId} for this BTC address!`);

                // Fetch current aura and owner for this token
                await fetchCurrentAura(ownedTokenId);
                await fetchNftOwner(ownedTokenId);
            } else {
                // (ok none) - no token for this BTC address
                console.log("[NFT Check V3] No NFT exists for this BTC address");
                ownedTokenId = null;
                currentNftAura = null;
                nftOwner = null;
            }
        }
    } catch (error) {
        console.error("[NFT Check V3] Error:", error);
        ownedTokenId = null;
        currentNftAura = null;
        nftOwner = null;
    }
}

// Fetch current aura from contract
async function fetchCurrentAura(tokenId) {
    try {
        const apiUrl = `https://api.hiro.so/v2/contracts/call-read/${CONTRACT_ADDRESS}/${CONTRACT_NAME}/get-aura`;

        // Properly encode uint as Clarity value (16 bytes, big endian)
        const hexTokenId = tokenId.toString(16).padStart(32, '0');
        const uintCV = `0x01${hexTokenId}`; // 0x01 = uint type prefix

        console.log(`[Aura Fetch] Fetching aura for token #${tokenId}`);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sender: CONTRACT_ADDRESS,
                arguments: [uintCV]
            })
        });

        if (!response.ok) {
            console.warn("[Aura Fetch] API error:", response.status);
            return;
        }

        const data = await response.json();

        if (data.okay && data.result) {
            // Decode hex Clarity value to string
            // Format: 0x07 (ok) + 0x0a (some) + 0x0d (string-ascii) + length (4 bytes) + string bytes
            // Or: 0x07 (ok) + 0x09 (none) for no result
            const hex = data.result;

            // Check if it's (ok (some "string"))
            if (hex.startsWith('0x070a0d')) {
                // Extract string length (4 bytes after 0x070a0d)
                const lengthHex = hex.slice(8, 16);
                const length = parseInt(lengthHex, 16);

                // Extract the actual string bytes
                const stringHex = hex.slice(16, 16 + length * 2);

                // Convert hex to ASCII string
                let auraString = '';
                for (let i = 0; i < stringHex.length; i += 2) {
                    auraString += String.fromCharCode(parseInt(stringHex.substr(i, 2), 16));
                }

                currentNftAura = auraString;
                console.log(`[Aura Fetch] Current aura: "${currentNftAura}"`);
            } else {
                console.log("[Aura Fetch] No aura found (none)");
                currentNftAura = null;
            }
        }
    } catch (error) {
        console.error("[Aura Fetch] Error:", error);
    }
}

// Fetch the owner of a token using Hiro NFT API (returns readable address)
async function fetchNftOwner(tokenId) {
    try {
        // Use Hiro's NFT history API to find the current holder
        const tokenHex = `0x01${tokenId.toString(16).padStart(32, '0')}`;
        const apiUrl = `https://api.hiro.so/extended/v1/tokens/nft/history?asset_identifier=${CONTRACT_ADDRESS}.${CONTRACT_NAME}::bitcoin-aura-v3&value=${encodeURIComponent(tokenHex)}`;

        console.log(`[Owner Fetch] Fetching owner for token #${tokenId}`);

        const response = await fetch(apiUrl, {
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) {
            console.warn("[Owner Fetch] API error:", response.status);
            nftOwner = null;
            return;
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // Get the most recent event to find current owner
            // For mints, recipient is the owner; for transfers, check recipient
            const latestEvent = data.results[0];
            nftOwner = latestEvent.recipient || null;
            console.log(`[Owner Fetch] Token #${tokenId} owned by: ${nftOwner}`);
        } else {
            console.log("[Owner Fetch] No history found");
            nftOwner = null;
        }
    } catch (error) {
        console.error("[Owner Fetch] Error:", error);
        nftOwner = null;
    }
}

// Check if connected wallet is the NFT owner
function isConnectedUserOwner() {
    const stacksConnected = isConnected();
    const wcConnected = isWalletConnectConnected();

    if ((!stacksConnected && !wcConnected) || !nftOwner) return false;

    try {
        let userAddress = null;

        if (stacksConnected) {
            const userData = getLocalStorage();
            userAddress = userData.addresses.stx[0].address;
        } else if (wcConnected) {
            userAddress = getWalletConnectAddress();
        }

        if (!userAddress) return false;

        const isOwner = userAddress === nftOwner;
        console.log(`[Owner Check] Connected: ${userAddress}, Owner: ${nftOwner}, Match: ${isOwner}`);

        return isOwner;
    } catch (e) {
        return false;
    }
}

// Update UI to show mint or update button
function updateButtonVisibility() {
    if (!elements.mintBtn || !elements.updateBtn) return;

    console.log(`🎯 updateButtonVisibility called:`);
    console.log(`   - ownedTokenId: ${ownedTokenId}`);
    console.log(`   - currentNftAura: "${currentNftAura}"`);
    console.log(`   - currentAuraType: "${currentAuraType}"`);
    console.log(`   - nftOwner: ${nftOwner ? "exists" : "null"}`);

    if (ownedTokenId && currentAuraType) {
        // This BTC address already has an NFT minted

        // Show NFT status
        if (elements.nftStatus) {
            elements.nftStatus.style.display = "block";
            if (elements.ownedTokenId) elements.ownedTokenId.textContent = ownedTokenId;
            if (elements.currentAuraLabel) elements.currentAuraLabel.textContent = currentNftAura || "Unknown";
        }

        // Hide mint button - this BTC address already has an NFT
        elements.mintBtn.style.display = "none";

        // Check if connected user is the owner
        const userIsOwner = isConnectedUserOwner();

        if (!isConnected() && !isWalletConnectConnected()) {
            // Not connected - prompt to connect
            elements.updateBtn.style.display = "none";
            if (elements.txStatus) {
                elements.txStatus.innerHTML = `⚠️ This Bitcoin address already has an NFT.<br><small style="color: #a1a1aa;">Connect your wallet to update if you're the owner.</small>`;
                elements.txStatus.style.color = "#fbbf24";
            }
        } else if (!userIsOwner) {
            // Connected but NOT the owner - show "minted by another wallet" message
            elements.updateBtn.style.display = "none";
            if (elements.txStatus) {
                elements.txStatus.innerHTML = `🔒 This Bitcoin address was minted by another wallet.<br><small style="color: #a1a1aa;">Owner: ${nftOwner ? nftOwner.slice(0, 12) + '...' : 'Unknown'}</small>`;
                elements.txStatus.style.color = "#ef4444";
            }
        } else {
            // Connected AND is the owner - check if aura needs update
            const needsUpdate = currentNftAura && currentNftAura !== currentAuraType;

            if (needsUpdate) {
                // Show update button
                elements.updateBtn.style.display = "block";
                elements.updateBtn.textContent = `🔄 UPDATE TO ${currentAuraType}`;
                if (elements.txStatus) {
                    elements.txStatus.innerHTML = `<small style="color: #a1a1aa;">You own this NFT. Click to update your aura.</small>`;
                    elements.txStatus.style.color = "#a1a1aa";
                }
            } else {
                // Same aura - already up to date
                elements.updateBtn.style.display = "none";
                if (elements.txStatus) {
                    elements.txStatus.textContent = "✨ Your NFT is already up to date!";
                    elements.txStatus.style.color = "#10b981";
                }
            }
        }
    } else if (ownedTokenId) {
        // BTC address has NFT but no new scan - just show status
        if (elements.nftStatus) {
            elements.nftStatus.style.display = "block";
            if (elements.ownedTokenId) elements.ownedTokenId.textContent = ownedTokenId;
            if (elements.currentAuraLabel) elements.currentAuraLabel.textContent = currentNftAura || "Unknown";
        }
        elements.mintBtn.style.display = "none";
        elements.updateBtn.style.display = "none";
    } else {
        // No NFT exists for this BTC address - show mint button
        if (elements.nftStatus) elements.nftStatus.style.display = "none";
        elements.updateBtn.style.display = "none";
        // mintBtn visibility handled by scanAura
    }
}

// --- UPDATE AURA LOGIC ---
// V3: update-aura(btc-addr, new-aura-type, new-metadata-uri)
async function updateAura() {
    const scannedBtcAddress = elements.btcAddress?.value?.trim();

    if (!scannedBtcAddress) {
        alert("No Bitcoin address to update!");
        return;
    }
    if (!currentAuraType || !currentMetadataUri) {
        alert("Scan your aura first!");
        return;
    }
    if (!isConnected()) {
        alert("Connect your wallet first!");
        return;
    }

    elements.txStatus.textContent = "Preparing update transaction...";
    elements.txStatus.style.color = "yellow";

    // V3 update-aura function: update-aura(btc-addr, new-aura-type, new-metadata-uri)
    const functionArgs = [
        stringAsciiCV(scannedBtcAddress),
        stringAsciiCV(currentAuraType),
        stringAsciiCV(currentMetadataUri),
    ];

    try {
        await openContractCall({
            network,
            contractAddress: CONTRACT_ADDRESS,
            contractName: CONTRACT_NAME,
            functionName: "update-aura",
            functionArgs,
            postConditionMode: PostConditionMode.Deny,
            appDetails: {
                name: "Bitcoin Aura",
                icon: window.location.origin + "/img/collection2.png",
            },
            onFinish: (data) => {
                const explorerUrl = `https://explorer.hiro.so/txid/${data.txId}?chain=mainnet`;
                elements.txStatus.innerHTML = `✅ Aura Updated! <a href="${explorerUrl}" target="_blank" style="color: #45b5ff;">View Transaction</a>`;
                elements.txStatus.style.color = "#9ae6b4";
                // Update local state
                currentNftAura = currentAuraType;
                updateButtonVisibility();
            },
            onCancel: () => {
                elements.txStatus.textContent = "Update cancelled.";
                elements.txStatus.style.color = "orange";
            },
        });
    } catch (error) {
        elements.txStatus.textContent = `Update failed: ${error.message}`;
        elements.txStatus.style.color = "red";
    }
}

if (elements.updateBtn) {
    elements.updateBtn.addEventListener("click", updateAura);
}

// Repurpose connect button for disconnect too (this is a duplicate handler, remove it)
// Note: handleConnectClick already handles this - this block is legacy code
// Remove duplicate event listener to avoid double-binding

// Initialize WalletConnect and UI
async function initializeApp() {
    // Try to initialize WalletConnect (may fail if no project ID)
    try {
        await getWalletConnector();
        console.log("📱 WalletConnect ready");
    } catch (err) {
        console.warn("WalletConnect initialization skipped:", err.message);
    }

    // Check if already connected via either method
    const stacksConnected = isConnected();
    const wcConnected = isWalletConnectConnected();
    const alreadyConnected = stacksConnected || wcConnected;

    if (wcConnected) {
        connectionMethod = 'walletconnect';
    } else if (stacksConnected) {
        connectionMethod = 'stacks-connect';
    }

    updateWalletUI(alreadyConnected);
}

// Run initialization
initializeApp();

// If the user comes back from wallet and focus returns, re-evaluate connection state
window.addEventListener("focus", () => {
    if (isConnected() || isWalletConnectConnected()) updateWalletUI(true);
});

// ============================================
// REAL-TIME UPDATES INTEGRATION
// ============================================

// Set up realtime event handlers
realtimeClient.onConnect = (sessionId) => {
    console.log("🔗 Connected to real-time server:", sessionId);
};

realtimeClient.onDisconnect = () => {
    console.log("📡 Disconnected from real-time server");
};

realtimeClient.onAuraChanged = (data) => {
    console.log("🔮 Aura changed!", data);
    // Update the UI if the address matches current scan
    const currentAddress = elements.btcAddress?.value?.trim();
    if (currentAddress && data.btcAddress === currentAddress) {
        // Trigger a rescan to update the display
        scanAura();
    }
};

realtimeClient.onNftMinted = (data) => {
    console.log("✨ NFT minted!", data);
    // If this is our mint, update the status
    if (elements.txStatus) {
        const explorerUrl = `https://explorer.hiro.so/txid/${data.txId}?chain=mainnet`;
        elements.txStatus.innerHTML = `✅ Mint Confirmed! Token #${data.tokenId} <a href="${explorerUrl}" target="_blank" style="color: #45b5ff;">View on Explorer</a>`;
        elements.txStatus.style.color = "#9ae6b4";
    }
};

realtimeClient.onBtcTransaction = (data) => {
    console.log("🔗 Bitcoin transaction detected:", data);
};

realtimeClient.onStats = (stats) => {
    console.log("📊 Collection stats:", stats);
};

// Request notification permissions
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Connect to realtime server (only in browser environment)
if (typeof window !== 'undefined') {
    // Attempt connection after a short delay to ensure DOM is ready
    setTimeout(() => {
        try {
            realtimeClient.connect();
        } catch (err) {
            console.warn("Real-time connection failed:", err);
        }
    }, 1000);
}

// Subscribe to Bitcoin address updates when user scans
const originalScanAura = scanAura;
async function scanAuraWithSubscription() {
    await originalScanAura();

    // After successful scan, subscribe to real-time updates for this address
    const address = elements.btcAddress?.value?.trim();
    if (address && realtimeClient.connected) {
        realtimeClient.subscribeBitcoin(address);
        console.log("📡 Subscribed to real-time updates for:", address);
    }
}

// Override scan button handler to include subscription
if (elements.scanButton) {
    elements.scanButton.removeEventListener("click", scanAura);
    elements.scanButton.addEventListener("click", scanAuraWithSubscription);
}

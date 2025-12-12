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

console.log("🚀 System initializing...");

// --- CONFIGURATION ---
const CONTRACT_ADDRESS = "SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T"; 
const CONTRACT_NAME = "aura-nft";

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

// --- DOM ELEMENTS ---
const elements = {
    connectBtn: document.getElementById("connectWalletBtn"),
    walletStatus: document.getElementById("walletStatus"),
    statusChip: document.querySelector(".status-chip"),
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
    txStatus: document.getElementById("txStatus"),
};

// --- 2. NEW AUTH LOGIC (No more UserSession) ---
function updateWalletUI() {
    // Check if connected using the new helper
    if (isConnected()) {
        // Retrieve data from new local storage structure
        const userData = getLocalStorage();
        // Access address (v8 structure: addresses.stx[0].address)
        const address = userData.addresses.stx[0].address; 

        console.log("✅ User Connected:", address);

        if (elements.walletStatus) {
            elements.walletStatus.textContent = "";
            elements.walletStatus.style.color = "#9ae6b4";
            elements.walletStatus.style.display = "none";
        }
        if (elements.statusChip) {
            elements.statusChip.style.display = "none";
        }
        elements.connectBtn.textContent = "Disconnect";
        elements.connectBtn.classList.add("danger-btn");

        if (elements.scanSection) elements.scanSection.style.display = "block";
    } else {
        console.log("❌ User Not Connected")
        if (elements.walletStatus) {
            elements.walletStatus.textContent = "Wallet not connected.";
            elements.walletStatus.style.color = "#ff6b6b";
            elements.walletStatus.style.display = "block";
        }
        if (elements.statusChip) {
            elements.statusChip.style.display = "inline-block";
        }
        elements.connectBtn.textContent = "Connect Stacks Wallet";
        elements.connectBtn.classList.remove("danger-btn");
        if (elements.mintBtn) {
            elements.mintBtn.disabled = true;
        }
        
        if (elements.scanSection) elements.scanSection.style.display = "none";
        if (elements.resultArea) elements.resultArea.style.display = "none";
    }
}

if (elements.connectBtn) {
    elements.connectBtn.addEventListener("click", () => {
        console.log("🖱️ Connect button clicked");
        if (isConnected()) {
            // New disconnect method
            disconnect();
            updateWalletUI();
        } else {
            // New connect method (replaces showConnect)
            connect({
                appDetails: {
                    name: "Bitcoin Aura",
                    icon: window.location.origin + "/img/collection2.png",
                },
                onFinish: () => {
                    console.log("🔐 Auth finished");
                    updateWalletUI();
                },
                // No userSession needed here anymore
            });
        }
    });
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
        const response = await fetch(`https://mempool.space/api/address/${address}`);
        if (!response.ok) throw new Error("Failed to fetch data (Check Address)");

        const data = await response.json();
        const totalTx = data.chain_stats.tx_count + data.mempool_stats.tx_count;

        let auraType = "";
        let imgFile = "";
        let description = "";
        let color = "";

        if (totalTx === 0) {
            auraType = "BUY YOUR FIRST BTC";
            imgFile = "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/images/collection2.png";
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
        elements.cardImage.src = imgFile;
        elements.txData.innerText = `Total On-Chain Transactions: ${totalTx}`;
        elements.descData.innerText = description;

        elements.loading.style.display = "none";
        elements.resultArea.style.display = "block";
        if (elements.mintBtn) {
            elements.mintBtn.disabled = false;
            elements.mintBtn.textContent = "MINT TO STACKS";
        }
    } catch (error) {
        console.error(error);
        elements.loading.style.display = "none";
        alert("Error: " + error.message);
    }
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

    const functionArgs = [
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

// Repurpose connect button for disconnect too
if (elements.connectBtn) {
    elements.connectBtn.addEventListener("click", () => {
        if (isConnected()) {
            disconnect();
            updateWalletUI();
        } else {
            connect({
                appDetails: {
                    name: "Bitcoin Aura",
                    icon: window.location.origin + "/img/collection2.png",
                },
                onFinish: () => updateWalletUI(),
            });
        }
    });
}

// Initialize UI
updateWalletUI();

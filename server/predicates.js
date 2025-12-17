// File: server/predicates.js
// Factory functions for Chainhook predicates

import { randomUUID } from 'crypto';

// Contract configuration - V3 with BTC address linking
const CONTRACT_ADDRESS = "SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T";
const CONTRACT_NAME = "aura-nft-v3";

/**
 * Create a predicate to watch a Bitcoin address for incoming/outgoing transactions
 * @param {string} btcAddress - Bitcoin address to monitor (p2wpkh/bech32 format bc1...)
 * @param {string} network - 'mainnet' or 'testnet'
 * @returns {object} ServerPredicate for Bitcoin address monitoring
 */
export function createBitcoinAddressPredicate(btcAddress, network = 'mainnet') {
    const uuid = randomUUID();

    // Determine address type based on prefix
    let addressType = 'p2wpkh'; // Default for bc1q...
    if (btcAddress.startsWith('bc1p') || btcAddress.startsWith('tb1p')) {
        addressType = 'p2tr'; // Taproot
    } else if (btcAddress.startsWith('3') || btcAddress.startsWith('2')) {
        addressType = 'p2sh'; // Pay to script hash
    } else if (btcAddress.startsWith('1') || btcAddress.startsWith('m') || btcAddress.startsWith('n')) {
        addressType = 'p2pkh'; // Legacy
    }

    const networkConfig = {
        if_this: {
            scope: 'outputs',
            [addressType]: {
                equals: btcAddress
            }
        }
    };

    return {
        uuid,
        name: `btc-aura-watch-${btcAddress.slice(0, 8)}`,
        version: 1,
        chain: 'bitcoin',
        networks: {
            [network]: networkConfig
        }
    };
}

/**
 * Create a predicate to watch the aura-nft contract for mint events
 * @param {string} network - 'mainnet', 'testnet', or 'devnet'
 * @returns {object} ServerPredicate for Stacks contract events
 */
export function createStacksMintPredicate(network = 'mainnet') {
    const uuid = randomUUID();

    const networkConfig = {
        if_this: {
            scope: 'contract_call',
            contract_identifier: `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`,
            method: 'mint'
        }
    };

    return {
        uuid,
        name: 'aura-nft-mint-events',
        version: 1,
        chain: 'stacks',
        networks: {
            [network]: networkConfig
        }
    };
}

/**
 * Create a predicate to watch for NFT transfers
 * @param {string} network - 'mainnet', 'testnet', or 'devnet'
 * @returns {object} ServerPredicate for NFT transfer events
 */
export function createStacksTransferPredicate(network = 'mainnet') {
    const uuid = randomUUID();

    const networkConfig = {
        if_this: {
            scope: 'contract_call',
            contract_identifier: `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`,
            method: 'transfer'
        }
    };

    return {
        uuid,
        name: 'aura-nft-transfer-events',
        version: 1,
        chain: 'stacks',
        networks: {
            [network]: networkConfig
        }
    };
}

export { CONTRACT_ADDRESS, CONTRACT_NAME };

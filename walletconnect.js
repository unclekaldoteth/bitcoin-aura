// File: walletconnect.js
// WalletConnect Universal Connector for Stacks blockchain
import { UniversalConnector } from '@reown/appkit-universal-connector';

// Stacks mainnet configuration
const stacksMainnet = {
    id: 1,
    chainNamespace: 'stacks',
    caipNetworkId: 'stacks:mainnet',
    name: 'Stacks Mainnet',
    nativeCurrency: { name: 'STX', symbol: 'STX', decimals: 6 },
    rpcUrls: { default: { http: ['https://api.hiro.so'] } }
};

// WalletConnect methods for Stacks
const stacksMethods = [
    'stx_getAddresses',
    'stx_transferStx',
    'stx_signTransaction',
    'stx_signMessage',
    'stx_callContract'
];

let universalConnector = null;
let wcSession = null;

/**
 * Initialize and return the WalletConnect Universal Connector
 */
export async function getWalletConnector() {
    if (!universalConnector) {
        const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

        if (!projectId) {
            console.warn('⚠️ WalletConnect Project ID not found. Set VITE_WALLETCONNECT_PROJECT_ID in your environment.');
            return null;
        }

        try {
            universalConnector = await UniversalConnector.init({
                projectId,
                metadata: {
                    name: 'Bitcoin Aura',
                    description: 'Discover your on-chain identity based on Bitcoin transaction history',
                    url: window.location.origin,
                    icons: [window.location.origin + '/img/collection2.png']
                },
                networks: [{
                    methods: stacksMethods,
                    chains: [stacksMainnet],
                    events: [],
                    namespace: 'stacks'
                }]
            });

            console.log('✅ WalletConnect initialized successfully');

            // Check for existing session
            if (universalConnector?.provider?.session) {
                wcSession = universalConnector.provider.session;
                console.log('🔗 Restored WalletConnect session');
            }
        } catch (error) {
            console.error('❌ Failed to initialize WalletConnect:', error);
            return null;
        }
    }
    return universalConnector;
}

/**
 * Connect via WalletConnect (shows QR code modal)
 */
export async function connectWalletConnect() {
    const connector = await getWalletConnector();
    if (!connector) {
        throw new Error('WalletConnect not initialized');
    }

    try {
        const { session } = await connector.connect();
        wcSession = session;

        // Extract Stacks address from session
        const stacksAccounts = session?.namespaces?.stacks?.accounts;
        if (stacksAccounts && stacksAccounts.length > 0) {
            // Format: stacks:mainnet:SP...
            const address = stacksAccounts[0].split(':')[2];
            console.log('✅ Connected via WalletConnect:', address);
            return {
                address,
                session
            };
        }

        throw new Error('No Stacks account found in session');
    } catch (error) {
        console.error('❌ WalletConnect connection failed:', error);
        throw error;
    }
}

/**
 * Disconnect WalletConnect session
 */
export async function disconnectWalletConnect() {
    const connector = await getWalletConnector();
    if (connector && wcSession) {
        try {
            await connector.disconnect();
            wcSession = null;
            console.log('👋 WalletConnect disconnected');
        } catch (error) {
            console.error('❌ WalletConnect disconnect failed:', error);
        }
    }
}

/**
 * Check if WalletConnect is connected
 */
export function isWalletConnectConnected() {
    return wcSession !== null && universalConnector?.provider?.session !== undefined;
}

/**
 * Get the current WalletConnect session
 */
export function getWalletConnectSession() {
    return wcSession || universalConnector?.provider?.session;
}

/**
 * Get the connected Stacks address from WalletConnect
 */
export function getWalletConnectAddress() {
    const session = getWalletConnectSession();
    if (!session) return null;

    const stacksAccounts = session?.namespaces?.stacks?.accounts;
    if (stacksAccounts && stacksAccounts.length > 0) {
        return stacksAccounts[0].split(':')[2];
    }
    return null;
}

/**
 * Call a Stacks contract method via WalletConnect
 */
export async function callContractViaWalletConnect(params) {
    const connector = await getWalletConnector();
    if (!connector || !wcSession) {
        throw new Error('WalletConnect not connected');
    }

    try {
        const result = await connector.provider.request({
            method: 'stx_callContract',
            params: {
                contract: `${params.contractAddress}.${params.contractName}`,
                functionName: params.functionName,
                functionArgs: params.functionArgs
            }
        });

        return result;
    } catch (error) {
        console.error('❌ Contract call via WalletConnect failed:', error);
        throw error;
    }
}

/**
 * Sign a transaction via WalletConnect
 */
export async function signTransactionViaWalletConnect(txHex) {
    const connector = await getWalletConnector();
    if (!connector || !wcSession) {
        throw new Error('WalletConnect not connected');
    }

    try {
        const result = await connector.provider.request({
            method: 'stx_signTransaction',
            params: {
                transaction: txHex
            }
        });

        return result;
    } catch (error) {
        console.error('❌ Sign transaction via WalletConnect failed:', error);
        throw error;
    }
}

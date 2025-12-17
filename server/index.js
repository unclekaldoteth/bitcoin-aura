// File: server/index.js
// Main Chainhook server with Express and WebSocket
// Note: We implement webhook handling manually to avoid TypeBox compatibility issues
// with @hirosystems/chainhook-client on newer Node.js versions

import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { randomUUID } from 'crypto';

import {
    createBitcoinAddressPredicate,
    createStacksMintPredicate,
    CONTRACT_ADDRESS,
    CONTRACT_NAME
} from './predicates.js';
import { subscriptionManager } from './subscriptions.js';

// Configuration from environment
const PORT = process.env.SERVER_PORT || 4000;
const CHAINHOOK_NODE_URL = process.env.CHAINHOOK_NODE_URL || 'https://api.hiro.so';
const AUTH_TOKEN = process.env.CHAINHOOK_AUTH_TOKEN || '';
const EXTERNAL_BASE_URL = process.env.EXTERNAL_BASE_URL || `http://localhost:${PORT}`;

// Initialize Express
const app = express();
app.use(express.json());

// CORS middleware for frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Create HTTP server
const httpServer = createServer(app);

// Initialize WebSocket server
const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

// Chainhook Event Observer configuration
const serverOptions = {
    hostname: '0.0.0.0',
    port: PORT,
    auth_token: AUTH_TOKEN,
    external_base_url: EXTERNAL_BASE_URL
};

const chainhookOptions = {
    base_url: CHAINHOOK_NODE_URL
};

// Global Chainhook observer (initialized on startup)
let chainhookObserver = null;

// Store for dynamic predicates
const activePredicates = new Map();

// ============================================
// CHAINHOOK EVENT HANDLER
// ============================================

/**
 * Handle incoming Chainhook events
 */
async function handleChainhookEvent(uuid, payload) {
    console.log(`[Chainhook] Event received for predicate: ${uuid}`);
    console.log(`[Chainhook] Payload type: ${payload.chainhook?.is_streaming_blocks ? 'streaming' : 'apply/rollback'}`);

    try {
        // Determine event chain type
        const chain = payload.chainhook?.predicate?.chain || 'unknown';

        if (chain === 'bitcoin') {
            await handleBitcoinEvent(uuid, payload);
        } else if (chain === 'stacks') {
            await handleStacksEvent(uuid, payload);
        } else {
            console.log(`[Chainhook] Unknown chain type: ${chain}`);
        }
    } catch (error) {
        console.error('[Chainhook] Error handling event:', error);
    }
}

/**
 * Handle Bitcoin transaction events
 */
async function handleBitcoinEvent(uuid, payload) {
    const session = subscriptionManager.getSessionByPredicate(uuid);

    // Process apply blocks (new transactions)
    if (payload.apply && payload.apply.length > 0) {
        for (const block of payload.apply) {
            const transactions = block.transactions || [];
            console.log(`[Bitcoin] Block ${block.block_identifier?.index}: ${transactions.length} transactions`);

            for (const tx of transactions) {
                // Extract transaction details
                const txId = tx.transaction_identifier?.hash;
                const outputs = tx.metadata?.outputs || [];

                console.log(`[Bitcoin] Transaction: ${txId}`);

                // Notify connected client if session exists
                if (session && session.ws) {
                    const message = {
                        type: 'btc_transaction',
                        predicateUuid: uuid,
                        data: {
                            txId,
                            blockHeight: block.block_identifier?.index,
                            outputCount: outputs.length,
                            timestamp: new Date().toISOString()
                        }
                    };

                    if (session.ws.readyState === WebSocket.OPEN) {
                        session.ws.send(JSON.stringify(message));
                        console.log(`[Bitcoin] Notified client: ${session.btcAddress}`);
                    }
                }
            }
        }

        // Trigger aura recalculation if we have a session
        if (session) {
            await recalculateAura(session.btcAddress, uuid);
        }
    }

    // Handle rollbacks
    if (payload.rollback && payload.rollback.length > 0) {
        console.log(`[Bitcoin] Rollback detected: ${payload.rollback.length} blocks`);
        // Could notify client about rollback if needed
    }
}

/**
 * Handle Stacks contract events (mints, transfers)
 */
async function handleStacksEvent(uuid, payload) {
    if (payload.apply && payload.apply.length > 0) {
        for (const block of payload.apply) {
            const transactions = block.transactions || [];
            console.log(`[Stacks] Block ${block.block_identifier?.index}: ${transactions.length} transactions`);

            for (const tx of transactions) {
                const txId = tx.transaction_identifier?.hash;
                const operations = tx.operations || [];
                const metadata = tx.metadata || {};

                // Check if this is a contract call
                if (metadata.kind?.type === 'ContractCall') {
                    const contractCall = metadata.kind.data || {};
                    const method = contractCall.method;

                    console.log(`[Stacks] Contract call: ${method} on ${contractCall.contract_identifier}`);

                    // Handle mint events
                    if (method === 'mint') {
                        const args = contractCall.args || [];
                        const sender = metadata.sender;
                        const success = metadata.success;

                        if (success) {
                            // Parse function arguments (aura-type, metadata-uri)
                            const auraType = args[0] || 'UNKNOWN';
                            const metadataUri = args[1] || '';

                            // Record the mint
                            const result = metadata.result;
                            const tokenId = result ? extractTokenId(result) : 'unknown';

                            subscriptionManager.recordMint(tokenId, sender, auraType);

                            // Broadcast mint event to all clients
                            subscriptionManager.broadcast({
                                type: 'nft_minted',
                                data: {
                                    txId,
                                    tokenId,
                                    owner: sender,
                                    auraType,
                                    blockHeight: block.block_identifier?.index,
                                    timestamp: new Date().toISOString()
                                }
                            });

                            console.log(`[Stacks] NFT Minted: Token #${tokenId} -> ${sender}`);
                        }
                    }

                    // Handle transfer events
                    if (method === 'transfer') {
                        const args = contractCall.args || [];
                        const sender = metadata.sender;
                        const success = metadata.success;

                        if (success) {
                            subscriptionManager.broadcast({
                                type: 'nft_transferred',
                                data: {
                                    txId,
                                    tokenId: args[0] || 'unknown',
                                    from: args[1] || sender,
                                    to: args[2] || 'unknown',
                                    blockHeight: block.block_identifier?.index,
                                    timestamp: new Date().toISOString()
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}

/**
 * Extract token ID from Clarity response
 */
function extractTokenId(result) {
    // Result format: (ok u1) or similar
    const match = result.match(/u(\d+)/);
    return match ? match[1] : 'unknown';
}

/**
 * Recalculate aura for a Bitcoin address
 */
async function recalculateAura(btcAddress, predicateUuid) {
    try {
        // Fetch current transaction count from external API
        const response = await fetch(`https://blockstream.info/api/address/${btcAddress}`);
        if (!response.ok) throw new Error('Failed to fetch address data');

        const data = await response.json();
        const txCount = (data.chain_stats?.tx_count || 0) + (data.mempool_stats?.tx_count || 0);

        // Determine aura type
        let auraType;
        if (txCount >= 50) {
            auraType = 'FIRE TRADER';
        } else if (txCount >= 10) {
            auraType = 'WATER FLOW';
        } else if (txCount > 0) {
            auraType = 'STONE HODLER';
        } else {
            auraType = 'NO AURA';
        }

        // Check if aura changed
        const cached = subscriptionManager.auraCache.get(btcAddress);
        const previousAura = cached?.auraType;

        subscriptionManager.updateAuraCache(btcAddress, txCount, auraType);

        if (previousAura && previousAura !== auraType) {
            // Aura changed! Notify the client
            const session = subscriptionManager.getSessionByPredicate(predicateUuid);
            if (session && session.ws && session.ws.readyState === WebSocket.OPEN) {
                session.ws.send(JSON.stringify({
                    type: 'aura_changed',
                    data: {
                        btcAddress,
                        previousAura,
                        newAura: auraType,
                        txCount,
                        timestamp: new Date().toISOString()
                    }
                }));
                console.log(`[Aura] Changed for ${btcAddress}: ${previousAura} -> ${auraType}`);
            }
        }

        return { txCount, auraType };
    } catch (error) {
        console.error('[Aura] Error recalculating:', error);
        return null;
    }
}

// ============================================
// REST API ENDPOINTS
// ============================================

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        activePredicates: activePredicates.size,
        activeConnections: subscriptionManager.subscriptions.size
    });
});

// Get collection stats
app.get('/api/stats', (req, res) => {
    res.json(subscriptionManager.getStats());
});

// Subscribe to Bitcoin address updates
app.post('/api/subscribe/bitcoin', async (req, res) => {
    try {
        const { btcAddress, sessionId } = req.body;

        if (!btcAddress || !sessionId) {
            return res.status(400).json({ error: 'btcAddress and sessionId required' });
        }

        // Create predicate for this address
        const predicate = createBitcoinAddressPredicate(btcAddress, 'mainnet');

        // Store predicate info
        activePredicates.set(predicate.uuid, {
            type: 'bitcoin',
            btcAddress,
            sessionId,
            createdAt: new Date()
        });

        console.log(`[API] Created Bitcoin predicate: ${predicate.uuid} for ${btcAddress}`);

        // Note: In a full implementation, you would register this with the Chainhook node here
        // For now, we return the predicate info for manual registration or testing

        res.json({
            success: true,
            predicateUuid: predicate.uuid,
            predicate: predicate
        });
    } catch (error) {
        console.error('[API] Subscribe error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Unsubscribe from updates
app.delete('/api/subscribe/:predicateUuid', async (req, res) => {
    try {
        const { predicateUuid } = req.params;

        if (activePredicates.has(predicateUuid)) {
            activePredicates.delete(predicateUuid);
            // Also clean up subscription manager
            for (const [sessionId, sub] of subscriptionManager.subscriptions) {
                if (sub.predicateUuid === predicateUuid) {
                    subscriptionManager.removeSubscription(sessionId);
                    break;
                }
            }
            res.json({ success: true });
        } else {
            res.status(404).json({ error: 'Predicate not found' });
        }
    } catch (error) {
        console.error('[API] Unsubscribe error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Chainhook webhook endpoint (receives events from Chainhook node)
app.post('/api/chainhook/webhook', async (req, res) => {
    try {
        const payload = req.body;
        const uuid = payload.chainhook?.uuid;

        if (uuid) {
            await handleChainhookEvent(uuid, payload);
        }

        res.status(200).json({ received: true });
    } catch (error) {
        console.error('[Webhook] Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// WEBSOCKET HANDLING
// ============================================

wss.on('connection', (ws, req) => {
    const sessionId = randomUUID();
    console.log(`[WebSocket] Client connected: ${sessionId}`);

    // Send welcome message
    ws.send(JSON.stringify({
        type: 'connected',
        sessionId,
        timestamp: new Date().toISOString()
    }));

    // Handle messages from client
    ws.on('message', async (data) => {
        try {
            const message = JSON.parse(data.toString());
            console.log(`[WebSocket] Message from ${sessionId}:`, message.type);

            switch (message.type) {
                case 'subscribe_btc':
                    // Client wants to subscribe to Bitcoin address updates
                    const { btcAddress } = message;
                    if (btcAddress) {
                        const predicate = createBitcoinAddressPredicate(btcAddress, 'mainnet');
                        subscriptionManager.addSubscription(sessionId, btcAddress, predicate.uuid, ws);

                        ws.send(JSON.stringify({
                            type: 'subscribed',
                            btcAddress,
                            predicateUuid: predicate.uuid
                        }));
                    }
                    break;

                case 'unsubscribe':
                    const removedUuid = subscriptionManager.removeSubscription(sessionId);
                    ws.send(JSON.stringify({
                        type: 'unsubscribed',
                        predicateUuid: removedUuid
                    }));
                    break;

                case 'ping':
                    ws.send(JSON.stringify({ type: 'pong', timestamp: new Date().toISOString() }));
                    break;

                case 'get_stats':
                    ws.send(JSON.stringify({
                        type: 'stats',
                        data: subscriptionManager.getStats()
                    }));
                    break;
            }
        } catch (error) {
            console.error('[WebSocket] Message error:', error);
        }
    });

    // Handle disconnect
    ws.on('close', () => {
        console.log(`[WebSocket] Client disconnected: ${sessionId}`);
        subscriptionManager.removeSubscription(sessionId);
    });

    ws.on('error', (error) => {
        console.error(`[WebSocket] Error for ${sessionId}:`, error);
    });
});

// ============================================
// SERVER STARTUP
// ============================================

async function startServer() {
    try {
        // Start HTTP + WebSocket server
        httpServer.listen(PORT, () => {
            console.log('');
            console.log('========================================');
            console.log('🔗 Bitcoin Aura Chainhook Server');
            console.log('========================================');
            console.log(`📡 HTTP Server:     http://localhost:${PORT}`);
            console.log(`🔌 WebSocket:       ws://localhost:${PORT}/ws`);
            console.log(`🪝 Webhook URL:     ${EXTERNAL_BASE_URL}/api/chainhook/webhook`);
            console.log(`📊 Health Check:    http://localhost:${PORT}/health`);
            console.log('========================================');
            console.log('');
        });

        // Initialize global Stacks mint predicate (always watching)
        const mintPredicate = createStacksMintPredicate('mainnet');
        activePredicates.set(mintPredicate.uuid, {
            type: 'stacks_mint',
            global: true,
            createdAt: new Date()
        });
        console.log(`[Startup] Global mint predicate ready: ${mintPredicate.uuid}`);

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n[Shutdown] Cleaning up...');

    // Close WebSocket connections
    wss.clients.forEach(client => {
        client.close();
    });

    // Close HTTP server
    httpServer.close(() => {
        console.log('[Shutdown] Server closed');
        process.exit(0);
    });
});

// Start the server
startServer();

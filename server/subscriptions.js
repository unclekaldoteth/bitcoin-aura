// File: server/subscriptions.js
// Manage active Chainhook subscriptions and WebSocket connections

/**
 * In-memory subscription manager
 * For production, consider using Redis or a database
 */
class SubscriptionManager {
    constructor() {
        // Map: sessionId -> { btcAddress, predicateUuid, ws }
        this.subscriptions = new Map();

        // Map: predicateUuid -> sessionId (reverse lookup)
        this.predicateToSession = new Map();

        // Map: btcAddress -> { txCount, auraType, lastUpdated }
        this.auraCache = new Map();

        // Global stats
        this.stats = {
            totalMints: 0,
            auraDistribution: { fire: 0, water: 0, stone: 0 },
            uniqueHolders: new Set()
        };
    }

    /**
     * Register a new Bitcoin address subscription
     * @param {string} sessionId - Unique session/connection ID
     * @param {string} btcAddress - Bitcoin address being watched
     * @param {string} predicateUuid - Chainhook predicate UUID
     * @param {WebSocket} ws - WebSocket connection for this session
     */
    addSubscription(sessionId, btcAddress, predicateUuid, ws) {
        this.subscriptions.set(sessionId, {
            btcAddress,
            predicateUuid,
            ws,
            createdAt: new Date()
        });
        this.predicateToSession.set(predicateUuid, sessionId);
        console.log(`[Subscriptions] Added: ${sessionId} -> ${btcAddress}`);
    }

    /**
     * Remove a subscription by session ID
     */
    removeSubscription(sessionId) {
        const sub = this.subscriptions.get(sessionId);
        if (sub) {
            this.predicateToSession.delete(sub.predicateUuid);
            this.subscriptions.delete(sessionId);
            console.log(`[Subscriptions] Removed: ${sessionId}`);
            return sub.predicateUuid; // Return UUID for cleanup
        }
        return null;
    }

    /**
     * Get session by predicate UUID
     */
    getSessionByPredicate(predicateUuid) {
        const sessionId = this.predicateToSession.get(predicateUuid);
        if (sessionId) {
            return this.subscriptions.get(sessionId);
        }
        return null;
    }

    /**
     * Update cached aura data for a Bitcoin address
     */
    updateAuraCache(btcAddress, txCount, auraType) {
        this.auraCache.set(btcAddress, {
            txCount,
            auraType,
            lastUpdated: new Date()
        });
    }

    /**
     * Record a new NFT mint
     */
    recordMint(tokenId, owner, auraType) {
        this.stats.totalMints++;
        this.stats.uniqueHolders.add(owner);

        // Update aura distribution
        const normalizedAura = auraType.toLowerCase();
        if (normalizedAura.includes('fire')) {
            this.stats.auraDistribution.fire++;
        } else if (normalizedAura.includes('water')) {
            this.stats.auraDistribution.water++;
        } else if (normalizedAura.includes('stone')) {
            this.stats.auraDistribution.stone++;
        }

        console.log(`[Stats] Mint recorded: Token #${tokenId} -> ${owner} (${auraType})`);
    }

    /**
     * Get collection statistics
     */
    getStats() {
        return {
            totalMints: this.stats.totalMints,
            uniqueHolders: this.stats.uniqueHolders.size,
            auraDistribution: { ...this.stats.auraDistribution },
            activeSubscriptions: this.subscriptions.size
        };
    }

    /**
     * Broadcast message to all connected WebSocket clients
     */
    broadcast(message) {
        const payload = JSON.stringify(message);
        for (const [sessionId, sub] of this.subscriptions) {
            if (sub.ws && sub.ws.readyState === 1) { // WebSocket.OPEN = 1
                sub.ws.send(payload);
            }
        }
    }

    /**
     * Send message to a specific session
     */
    sendToSession(sessionId, message) {
        const sub = this.subscriptions.get(sessionId);
        if (sub && sub.ws && sub.ws.readyState === 1) {
            sub.ws.send(JSON.stringify(message));
            return true;
        }
        return false;
    }
}

// Singleton instance
const subscriptionManager = new SubscriptionManager();

export { subscriptionManager, SubscriptionManager };

// File: realtime.js
// WebSocket client for real-time Chainhook updates

/**
 * RealtimeClient - Auto-reconnecting WebSocket client for Bitcoin Aura
 */
class RealtimeClient {
    constructor(serverUrl = null) {
        // Detect if running on Vercel or other serverless platforms (no WebSocket support)
        const isServerless = window.location.hostname.includes('vercel.app') ||
            window.location.hostname.includes('netlify.app') ||
            window.location.hostname.includes('pages.dev');

        // WebSocket is only available in local development with the server running
        this.isAvailable = !isServerless;

        if (!this.isAvailable) {
            console.log('[Realtime] WebSocket disabled in production (serverless environment)');
            this.serverUrl = null;
            return; // Skip WebSocket setup in serverless environments
        }

        // Auto-detect server URL based on environment
        if (!serverUrl) {
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const host = window.location.hostname;
            const port = window.location.port === '3000' ? '4000' : window.location.port;
            serverUrl = `${protocol}//${host}:${port}/ws`;
        }

        this.serverUrl = serverUrl;
        this.ws = null;
        this.sessionId = null;
        this.connected = false;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 2000;

        // Event handlers (to be set by consumer)
        this.onConnect = null;
        this.onDisconnect = null;
        this.onBtcTransaction = null;
        this.onAuraChanged = null;
        this.onNftMinted = null;
        this.onNftTransferred = null;
        this.onStats = null;
        this.onError = null;

        // Bind methods
        this._handleOpen = this._handleOpen.bind(this);
        this._handleMessage = this._handleMessage.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleError = this._handleError.bind(this);
    }

    /**
     * Connect to the WebSocket server
     */
    connect() {
        if (!this.isAvailable) {
            return; // Don't attempt connection in serverless environments
        }

        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('[Realtime] Already connected');
            return;
        }

        console.log(`[Realtime] Connecting to ${this.serverUrl}...`);

        try {
            this.ws = new WebSocket(this.serverUrl);
            this.ws.onopen = this._handleOpen;
            this.ws.onmessage = this._handleMessage;
            this.ws.onclose = this._handleClose;
            this.ws.onerror = this._handleError;
        } catch (error) {
            console.error('[Realtime] Connection error:', error);
            this._scheduleReconnect();
        }
    }

    /**
     * Disconnect from the server
     */
    disconnect() {
        this.reconnectAttempts = this.maxReconnectAttempts; // Prevent reconnect
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.connected = false;
        this.sessionId = null;
    }

    /**
     * Subscribe to Bitcoin address updates
     */
    subscribeBitcoin(btcAddress) {
        this._send({
            type: 'subscribe_btc',
            btcAddress
        });
    }

    /**
     * Unsubscribe from updates
     */
    unsubscribe() {
        this._send({ type: 'unsubscribe' });
    }

    /**
     * Request current stats
     */
    requestStats() {
        this._send({ type: 'get_stats' });
    }

    /**
     * Send ping to keep connection alive
     */
    ping() {
        this._send({ type: 'ping' });
    }

    // ============================================
    // INTERNAL HANDLERS
    // ============================================

    _handleOpen() {
        console.log('[Realtime] Connected to server');
        this.connected = true;
        this.reconnectAttempts = 0;
    }

    _handleMessage(event) {
        try {
            const message = JSON.parse(event.data);
            console.log('[Realtime] Message:', message.type);

            switch (message.type) {
                case 'connected':
                    this.sessionId = message.sessionId;
                    console.log(`[Realtime] Session ID: ${this.sessionId}`);
                    if (this.onConnect) this.onConnect(this.sessionId);
                    break;

                case 'subscribed':
                    console.log(`[Realtime] Subscribed to ${message.btcAddress}`);
                    break;

                case 'unsubscribed':
                    console.log('[Realtime] Unsubscribed');
                    break;

                case 'btc_transaction':
                    console.log('[Realtime] Bitcoin transaction detected');
                    if (this.onBtcTransaction) this.onBtcTransaction(message.data);
                    this._showNotification('🔗 New Bitcoin Transaction',
                        `Transaction detected: ${message.data.txId?.slice(0, 16)}...`);
                    break;

                case 'aura_changed':
                    console.log('[Realtime] Aura changed!', message.data);
                    if (this.onAuraChanged) this.onAuraChanged(message.data);
                    this._showNotification('🔮 Aura Changed!',
                        `Your aura evolved from ${message.data.previousAura} to ${message.data.newAura}!`);
                    break;

                case 'nft_minted':
                    console.log('[Realtime] NFT minted', message.data);
                    if (this.onNftMinted) this.onNftMinted(message.data);
                    this._showNotification('✨ NFT Minted!',
                        `Token #${message.data.tokenId} minted with ${message.data.auraType} aura`);
                    break;

                case 'nft_transferred':
                    console.log('[Realtime] NFT transferred', message.data);
                    if (this.onNftTransferred) this.onNftTransferred(message.data);
                    break;

                case 'stats':
                    console.log('[Realtime] Stats:', message.data);
                    if (this.onStats) this.onStats(message.data);
                    break;

                case 'pong':
                    // Heartbeat response, connection is alive
                    break;
            }
        } catch (error) {
            console.error('[Realtime] Parse error:', error);
        }
    }

    _handleClose(event) {
        console.log('[Realtime] Disconnected', event.code, event.reason);
        this.connected = false;
        this.sessionId = null;

        if (this.onDisconnect) this.onDisconnect();

        this._scheduleReconnect();
    }

    _handleError(error) {
        console.error('[Realtime] WebSocket error:', error);
        if (this.onError) this.onError(error);
    }

    _send(data) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data));
        } else {
            console.warn('[Realtime] Not connected, cannot send message');
        }
    }

    _scheduleReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = this.reconnectDelay * this.reconnectAttempts;
            console.log(`[Realtime] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})`);
            setTimeout(() => this.connect(), delay);
        } else {
            console.log('[Realtime] Max reconnect attempts reached');
        }
    }

    /**
     * Show browser notification (if permitted)
     */
    _showNotification(title, body) {
        // Check if notifications are supported and permitted
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, { body, icon: '/img/collection2.png' });
        }

        // Also show in-page toast
        this._showToast(title, body);
    }

    /**
     * Show in-page toast notification
     */
    _showToast(title, body) {
        // Create toast container if it doesn't exist
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.style.cssText = `
            background: linear-gradient(145deg, #242432, #1b1b24);
            border: 1px solid #5546ff;
            border-radius: 10px;
            padding: 12px 16px;
            color: white;
            font-family: 'Courier New', monospace;
            box-shadow: 0 4px 20px rgba(85, 70, 255, 0.3);
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        toast.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 4px; color: #f7931a;">${title}</div>
            <div style="font-size: 12px; color: #aaa;">${body}</div>
        `;

        container.appendChild(toast);

        // Remove after 5 seconds
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
}

// Add CSS animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Export singleton instance
const realtimeClient = new RealtimeClient();

export { RealtimeClient, realtimeClient };

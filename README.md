# 🔮 Bitcoin Aura

**Discover your on-chain identity based on your Bitcoin transaction history**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://bitcoin-aura.vercel.app)
[![Stacks](https://img.shields.io/badge/Stacks-Mainnet-purple)](https://explorer.hiro.so/address/SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T.aura-nft-v3?chain=mainnet)
[![License](https://img.shields.io/badge/license-ISC-blue)](LICENSE)


## ✨ What is Bitcoin Aura?

Bitcoin Aura analyzes your Bitcoin transaction history and assigns you a unique **"Aura"** based on your on-chain activity. You can then mint your Aura as an NFT on the **Stacks** blockchain, creating a permanent on-chain identity tied to your Bitcoin address.

### Aura Types

| Aura | Criteria | Description |
|------|----------|-------------|
| 🔥 **Fire Trader** | 50+ transactions | Hyperactive! Gas fees are not a problem for you. |
| 💧 **Water Flow** | 10-49 transactions | Balanced. You know when to hold and when to spend. |
| 🪨 **Stone Hodler** | 1-9 transactions | Stillness is gold. Your hands are diamond strong. |

## 🚀 Features

- **🔍 Aura Scanner** - Scan any Bitcoin address to reveal its Aura
- **🎨 Dynamic NFTs** - NFTs that update based on your evolving Bitcoin activity
- **🔗 BTC Address Linking** - Each NFT is permanently linked to a specific Bitcoin address
- **🔒 Duplicate Prevention** - One NFT per Bitcoin address (enforced on-chain)
- **📱 All Stacks Wallets** - Works with Leather, Xverse, and all SIP-010 compatible wallets
- **⚡ Real-time Updates** - Optional WebSocket server for live transaction monitoring

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vite, Vanilla JS, Modern CSS |
| Wallet | @stacks/connect v8 |
| Smart Contract | Clarity (SIP-009 NFT) |
| Blockchain | Stacks Mainnet |
| API | Vercel Serverless Functions |
| Bitcoin Data | Mempool.space, Blockstream, BlockCypher |

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or pnpm
- A Stacks wallet (Leather or Xverse)

### Setup

```bash
# Clone the repository
git clone https://github.com/unclekaldoteth/bitcoin-aura.git
cd bitcoin-aura

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Optional: For Chainhook real-time server
CHAINHOOK_NODE_URL=http://localhost:3999
STX_NETWORK=mainnet
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run server` | Start WebSocket server (optional) |
| `npm run dev:all` | Run both frontend and server concurrently |

## 📜 Smart Contract

The Bitcoin Aura NFT contract (`aura-nft-v3`) is deployed on Stacks Mainnet:

**Contract Address:** `SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T.aura-nft-v3`

### Key Features

- **SIP-009 Compliant** - Standard NFT interface
- **BTC Address Linking** - Each token stores the Bitcoin address it represents
- **Reverse Lookup** - Query which token belongs to a given BTC address
- **Dynamic Metadata** - Aura can be updated by the NFT owner

### Read Functions

```clarity
;; Get token by Bitcoin address
(get-token-by-btc (btc-addr (string-ascii 64)))

;; Get aura type for a token
(get-aura (token-id uint))

;; Get Bitcoin address linked to a token
(get-btc-address (token-id uint))
```

### Write Functions

```clarity
;; Mint new NFT (fails if BTC address already has one)
(mint (btc-addr (string-ascii 64)) (aura-type (string-ascii 20)) (metadata-uri (string-ascii 256)))

;; Update aura (owner only)
(update-aura (btc-addr (string-ascii 64)) (new-aura (string-ascii 20)) (new-uri (string-ascii 256)))
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set Root Directory to `.` (blank)
3. Framework: Vite (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `dist`

The `/api` folder contains serverless functions that handle Bitcoin data fetching.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 📁 Project Structure

```
bitcoin-aura/
├── api/                    # Vercel serverless functions
│   └── txcount.js          # Bitcoin transaction count API
├── contracts/              # Clarity smart contracts
│   ├── aura-nft-v3.clar    # Main NFT contract
│   └── nft-trait.clar      # SIP-009 trait
├── server/                 # Optional WebSocket server
│   ├── index.js            # Express + WebSocket server
│   ├── predicates.js       # Chainhook predicates
│   └── subscriptions.js    # Subscription management
├── index.html              # Main HTML file
├── main.js                 # Application logic
├── realtime.js             # WebSocket client
├── vercel.json             # Vercel configuration
└── Clarinet.toml           # Clarinet configuration
```

## 🔐 Security

- **No private keys stored** - Uses wallet connect for all transactions
- **Post Condition Mode: Deny** - Strict transaction validation
- **On-chain ownership verification** - Only NFT owner can update aura
- **Read-only Bitcoin data** - No write access to Bitcoin blockchain

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- **Live App:** [bitcoin-aura.vercel.app](https://bitcoin-aura.vercel.app)
- **Contract Explorer:** [View on Hiro](https://explorer.hiro.so/address/SP1ZGGS886YCZHMFXJR1EK61ZP34FNWNSX32N685T.aura-nft-v3?chain=mainnet)
- **Twitter:** [@fabiokalandra](https://twitter.com/fabiokalandra)

---

<p align="center">
  Built with ⚡ on <a href="https://www.stacks.co">Stacks</a> • Powered by <a href="https://bitcoin.org">Bitcoin</a>
</p>

// Vercel serverless function: /api/txcount?address=...
// Fetch BTC address stats server-side to avoid client CORS/region blocks.

const SOURCES = [
  {
    name: "mempool",
    url: (addr) => `https://mempool.space/api/address/${addr}`,
    parse: (j) =>
      (j.chain_stats?.tx_count || 0) + (j.mempool_stats?.tx_count || 0),
  },
  {
    name: "blockstream",
    url: (addr) => `https://blockstream.info/api/address/${addr}`,
    parse: (j) =>
      (j.chain_stats?.tx_count || 0) + (j.mempool_stats?.tx_count || 0),
  },
  {
    name: "blockcypher",
    url: (addr) => `https://api.blockcypher.com/v1/btc/main/addrs/${addr}`,
    parse: (j) =>
      (typeof j.n_tx === "number" ? j.n_tx : 0) +
      (typeof j.unconfirmed_n_tx === "number" ? j.unconfirmed_n_tx : 0),
  },
  {
    name: "blockchaininfo",
    url: (addr) => `https://blockchain.info/rawaddr/${addr}`,
    parse: (j) => (typeof j.n_tx === "number" ? j.n_tx : 0),
  },
];

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  try {
    const addressRaw = req.query?.address;
    if (!addressRaw || typeof addressRaw !== "string") {
      res.status(400).json({ error: "address query param required" });
      return;
    }

    const address = addressRaw.trim();
    if (!address) {
      res.status(400).json({ error: "address query param required" });
      return;
    }

    const encoded = encodeURIComponent(address);
    let lastErr;

    for (const source of SOURCES) {
      try {
        const json = await fetchWithTimeout(source.url(encoded), 8000);
        const totalTx = source.parse(json);
        if (typeof totalTx !== "number" || Number.isNaN(totalTx)) {
          throw new Error("Invalid response");
        }
        res.setHeader(
          "Cache-Control",
          "s-maxage=30, stale-while-revalidate=120"
        );
        res.status(200).json({ totalTx, source: source.name });
        return;
      } catch (err) {
        lastErr = err;
      }
    }

    res
      .status(502)
      .json({ error: "failed to fetch address data", details: lastErr?.message });
  } catch (err) {
    res.status(500).json({ error: "internal error", details: err?.message });
  }
}


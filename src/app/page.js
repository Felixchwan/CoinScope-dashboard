async function getMarketData() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch market data: ${response.status}`);
  }

  return response.json();
}

function PriceCard({ name, symbol, price, change }) {
  const positive = change >= 0;

  return (
    <div className="rounded-xl border border-[#1f3a2c] bg-[#102118] p-5">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{name}</p>
        <span className="text-xs uppercase tracking-[0.2em] text-[#7fb38f]">
          {symbol}
        </span>
      </div>

      <p className="mt-4 text-sm text-[#8fb39a]">Current Price</p>
      <p className="mt-1 text-3xl font-bold">${price.toLocaleString()}</p>

      <p className="mt-4 text-sm text-[#8fb39a]">24h Change</p>
      <p
        className={`mt-1 text-2xl font-semibold ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {positive ? "+" : ""}{change.toFixed(2)}%
      </p>
    </div>
  );
}

export default async function Home() {
  const data = await getMarketData();

  const lastUpdated = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <main className="min-h-screen bg-[#07110c] text-[#e6f3ea] px-6 py-12">
      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7fb38f]">
            CoinScope Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">Crypto Market Overview</h1>
          <p className="mt-2 text-[#8fb39a]">
            Live crypto prices rendered with Next.js server-side fetching.
          </p>
          <p className="mt-2 text-sm text-[#6e8f7a]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            name="Bitcoin"
            symbol="BTC"
            price={data.bitcoin.usd}
            change={data.bitcoin.usd_24h_change}
          />
          <PriceCard
            name="Ethereum"
            symbol="ETH"
            price={data.ethereum.usd}
            change={data.ethereum.usd_24h_change}
          />
          <PriceCard
            name="Solana"
            symbol="SOL"
            price={data.solana.usd}
            change={data.solana.usd_24h_change}
          />
        </div>
      </section>
    </main>
  );
}

import React, { useState } from "react";
import { Star, LineChart, Flame, TrendingUp } from "lucide-react";

const marketData = {
  Favorites: [
    {
      pair: "BTC/USDT",
      price: "$114.40K",
      change: "+0.49%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
    },
    {
      pair: "ETH/USDT",
      price: "$3.55K",
      change: "+2.05%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
    },
    {
      pair: "SOL/USDT",
      price: "$92.50",
      change: "+5.50%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    },
    {
      pair: "DOGE/USDT",
      price: "$0.15",
      change: "+8.20%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
    },
    {
      pair: "ADA/USDT",
      price: "$1.12",
      change: "-1.10%",
      changeColor: "text-red-400",
      icon: "https://cdn2.iconfinder.com/data/icons/investing-crayons-vol-1/256/Cryptocurrency_Investment-1024.png"
    }
  ],
  Spot: [
    {
      pair: "ETH/USDT",
      price: "$3.55K",
      change: "+2.05%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    }
  ],
  Futures: [
    {
      pair: "ADA/USDT",
      price: "$1.12",
      change: "-1.10%",
      changeColor: "text-red-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    }
  ],
  "Top Gainers": [
    {
      pair: "SOL/USDT",
      price: "$92.50",
      change: "+5.50%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
    },
    {
      pair: "DOGE/USDT",
      price: "$0.15",
      change: "+8.20%",
      changeColor: "text-green-400",
      icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=026"
    }
  ]
};

const tabs = [
  { name: "Favorites", icon: <Star size={16} /> },
  { name: "Spot", icon: <LineChart size={16} /> },
  { name: "Futures", icon: <Flame size={16} /> },
  { name: "Top Gainers", icon: <TrendingUp size={16} /> }
];

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState("Favorites");

  return (
    <section className="bg-[#0B0E11] text-white min-h-screen px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">Markets</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md border 
                ${
                  activeTab === tab.name
                    ? "bg-yellow-400 text-black"
                    : "bg-transparent border-gray-600 text-white hover:bg-gray-800"
                }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(marketData[activeTab] || []).map((market, index) => (
            <div
              key={index}
              className="bg-[#1E2329] hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={market.icon}
                  alt={market.pair}
                  className="w-8 h-8 rounded-full border border-gray-600"
                />
                <div>
                  <div className="font-semibold">{market.pair}</div>
                  <div className="text-gray-400 text-sm">Crypto</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">{market.price}</div>
                <div className={`text-sm ${market.changeColor}`}>{market.change}</div>
                <div className="mt-2 flex gap-2 justify-end">
                  <button
                    onClick={() => alert(`Please login to start trading ${market.pair}`)}
                    className="text-xs bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
                  >
                    Start Trading
                  </button>
                  <button
                    onClick={() => alert(`Learn more about ${market.pair}`)}
                    className="text-xs border border-yellow-400 text-yellow-400 px-3 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
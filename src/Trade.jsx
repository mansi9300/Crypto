import React, { useState } from "react";
import { Star, LineChart, Flame, TrendingUp, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

const allMarketData = {
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
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    }
    
  ],
  Spot: [
    {
      pair: "ETH/USDT",
      price: "$3.55K",
      change: "+2.05%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=026"
    }
  ],
  Futures: [
    {
      pair: "ADA/USDT",
      price: "$1.12",
      change: "-1.10%",
      changeColor: "text-red-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
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
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
    }
  ]
};

const chartOptions = {
  options: {
    chart: { id: "crypto-bar" },
    xaxis: { categories: ["BTC", "ETH", "XRP", "ADA", "SOL", "DOGE"] },
    colors: ["#00E396"],
    grid: { borderColor: "#333" },
    theme: { mode: "dark" }
  },
  series: [
    {
      name: "Price ($K)",
      data: [114.4, 3.55, 2.98, 1.12, 92.5, 0.15]
    }
  ]
};

export default function TradeSection() {
  const [activeTab, setActiveTab] = useState("Favorites");
  const [showStartModal, setShowStartModal] = useState(false);
  const [showLearnModal, setShowLearnModal] = useState(false);

  return (
    <section className="bg-[#0B0E11] text-white min-h-screen px-4 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Start Trading Confidently</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Analyze trends, watch real-time charts, and make informed crypto investments with our advanced trading tools.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setShowStartModal(true)}
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 rounded-lg font-semibold"
            >
              Get Started
            </button>
            <button
              onClick={() => setShowLearnModal(true)}
              className="border border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {[
            { name: "Favorites", icon: <Star size={16} /> },
            { name: "Spot", icon: <LineChart size={16} /> },
            { name: "Futures", icon: <Flame size={16} /> },
            { name: "Top Gainers", icon: <TrendingUp size={16} /> }
          ].map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md border 
                ${activeTab === tab.name ? "bg-yellow-400 text-black" : "bg-[#1E2329] text-white border-gray-600"}
                hover:scale-105 transition-transform duration-200`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {(allMarketData[activeTab] || []).map((market, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E2329] shadow-xl hover:shadow-yellow-400/20 transition duration-300 p-6 rounded-xl flex justify-between items-center"
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
                <div className={`${market.changeColor} text-sm`}>{market.change}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graph Section */}
        <div className="bg-[#1E2329] rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart2 /> Price Overview
          </h2>
          <Chart options={chartOptions.options} series={chartOptions.series} type="bar" height={320} />
        </div>
      </div>

      {/* Get Started Modal */}
      {showStartModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-black"
              onClick={() => setShowStartModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p>Sign up, verify your account, and start trading with ease using our secure platform.</p>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-black"
              onClick={() => setShowLearnModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <p>Explore tutorials, market analysis tools, and learn how to trade smartly in our educational hub.</p>
          </div>
        </div>
      )}
    </section>
  );
}

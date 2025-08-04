import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
import Chart from "react-apexcharts";

const futuresData = [
  {
    pair: "BTC/USDT",
    price: "$115.12K",
    roi: "+9.5%",
    changeColor: "text-green-400",
    leverage: "20x",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  },
  {
    pair: "ETH/USDT",
    price: "$3.68K",
    roi: "+4.8%",
    changeColor: "text-green-400",
    leverage: "10x",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
  },
  {
    pair: "SOL/USDT",
    price: "$96.32",
    roi: "+2.1%",
    changeColor: "text-green-400",
    leverage: "15x",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
  }
];

const chartOptions = {
  options: {
    chart: { id: "futures-chart" },
    xaxis: { categories: ["BTC", "ETH", "SOL"] },
    colors: ["#FF4560"],
    grid: { borderColor: "#333" },
    theme: { mode: "dark" }
  },
  series: [
    {
      name: "ROI (%)",
      data: [9.5, 4.8, 2.1]
    }
  ]
};

export default function FuturesSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="bg-[#0B0E11] text-white min-h-screen px-4 md:px-20 py-20 relative z-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Explore Futures Market</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Maximize your gains by trading crypto with leverage. Real-time data and powerful analytics to help you succeed.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-pink-500 text-white hover:bg-pink-400 px-6 py-3 rounded-lg font-semibold"
            >
              Start Trading
            </button>
            <button className="border border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Futures Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {futuresData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E2329] shadow-xl hover:shadow-pink-400/20 transition duration-300 p-6 rounded-xl flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.pair}
                  className="w-8 h-8 rounded-full border border-gray-600"
                />
                <div>
                  <div className="font-semibold">{item.pair}</div>
                  <div className="text-gray-400 text-sm">Leverage: {item.leverage}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">{item.price}</div>
                <div className={`${item.changeColor} text-sm`}>{item.roi}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graph Section */}
        <div className="bg-[#1E2329] rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart2 /> Futures ROI Chart
          </h2>
          <Chart options={chartOptions.options} series={chartOptions.series} type="bar" height={320} />
        </div>
      </div>

      {/* Get Started Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="mb-6">
              Sign up, verify your account, and start trading with ease using our secure platform.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

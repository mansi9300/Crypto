import React, { useState } from "react";
import LiveUserCount from "./LiveUserCount";
import { Rocket, CreditCard, ShieldCheck, Globe, X } from "lucide-react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [showCoinsModal, setShowCoinsModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);

    const popularCoins = [
    { name: "BTC Bitcoin", price: "$114,535.48", change: "+0.62%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
    { name: "ETH Ethereum", price: "$3,556.14", change: "+1.95%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" },
    { name: "BNB BNB", price: "$755.92", change: "+0.89%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" },
    { name: "XRP XRP", price: "$2.99", change: "+3.96%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" },
    { name: "SOL Solana", price: "$162.51", change: "+0.63%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" }
  ];
   const newListings = [
      { name: "ETH Ethereum", price: "$3,556.14", change: "+1.95%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" },
    { name: "BNB BNB", price: "$755.92", change: "+0.89%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" },
    { name: "XRP XRP", price: "$2.99", change: "+3.96%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" },
      { name: "BTC Bitcoin", price: "$114,535.48", change: "+0.62%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
      { name: "SOL Solana", price: "$162.51", change: "+0.63%", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" }
  ];
  const coins = activeTab === "popular" ? popularCoins : newListings;

  const features = [ /* ... your existing features ... */ ];

  return (
    <>
      {/* MAIN HERO SECTION (unchanged) */}
      <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-start justify-between px-8 py-16">
        {/* Left section */}
        <div className="space-y-10 ml-10 max-w-xl">
          <LiveUserCount />
          <h1 className="text-4xl font-bold leading-tight">
            The Easiest Way to Buy and Trade Cryptocurrency
          </h1>
          <p className="text-gray-400">
            Experience seamless trading with a secure platform trusted by millions.
          </p>

          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="bg-gray-900 px-4 py-3 rounded-l-md text-white w-full focus:outline-none"
            />
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-md font-semibold hover:bg-yellow-500">
              SignUp
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                {f.icon}
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="bg-[#1e1e1e] mr-10 p-6 rounded-xl mt-10 md:mt-0 w-full md:w-[520px]">
          <div className="flex mb-6 border-b border-gray-700 pb-2">
            <button
              className={`pb-1 mr-6 font-semibold ${activeTab === "popular" ? "text-white border-b-2 border-yellow-400" : "text-gray-400"}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={`pb-1 font-semibold ${activeTab === "new" ? "text-white border-b-2 border-yellow-400" : "text-gray-400"}`}
              onClick={() => setActiveTab("new")}
            >
              New Listing
            </button>
            <span className="ml-auto text-yellow-400 text-sm cursor-pointer" onClick={() => setShowCoinsModal(true)}>
              View All 350+ Coins
            </span>
          </div>

          <div className="space-y-4">
            {coins.map((coin, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src={coin.icon} alt={coin.name} className="w-5 h-5" />
                  <span>{coin.name}</span>
                </div>
                <div className="text-right">
                  <p>{coin.price}</p>
                  <p className="text-green-400 text-sm">{coin.change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">News</span>
              <span className="text-yellow-400 text-sm cursor-pointer" onClick={() => setShowNewsModal(true)}>
                View All News
              </span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li>Crypto Funds See $223M Outflows Amid Fed Hawkishness</li>
              <li>Binance Launches Web Version of Binance Wallet</li>
              <li>Sei Network Transactions Suspended for Upgrade</li>
              <li>CrediX Hacker Transfers Stolen Assets to Ethereum</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENHANCED COINS MODAL */}
      {showCoinsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div 
            className="bg-[#1e1e1e] text-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">All Listed Coins</h2>
                <p className="text-gray-400 text-sm mt-1">350+ cryptocurrencies available for trading</p>
              </div>
              <button 
                onClick={() => setShowCoinsModal(false)} 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
            
            <div className="p-4 bg-gray-800">
              <input
                type="text"
                placeholder="Search coins..."
                className="w-full bg-gray-900 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            
            <div className="overflow-y-auto max-h-[60vh]">
              <table className="w-full">
                <thead className="sticky top-0 bg-[#1e1e1e] border-b border-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm">Coin</th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium text-sm">Price</th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium text-sm">24h Change</th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium text-sm">Market Cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {[...popularCoins, ...newListings].map((coin, i) => (
                    <tr key={i} className="hover:bg-gray-800 transition-colors cursor-pointer">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img src={coin.icon} alt={coin.name} className="w-6 h-6" />
                          <span>{coin.name}</span>
                          <span className="text-gray-400 text-xs">{coin.symbol}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">{coin.price}</td>
                      <td className={`py-4 px-4 text-right ${coin.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {coin.change}
                      </td>
                      <td className="py-4 px-4 text-right text-gray-400">{coin.marketCap || '$--'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-700 flex justify-between items-center">
              <span className="text-gray-400 text-sm">Showing 1-20 of 350+ coins</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-sm">
                  Previous
                </button>
                <button className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ENHANCED NEWS MODAL */}
      {showNewsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div 
            className="bg-[#1e1e1e] text-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Latest Crypto News</h2>
                <p className="text-gray-400 text-sm mt-1">Stay updated with the latest in cryptocurrency</p>
              </div>
              <button 
                onClick={() => setShowNewsModal(false)} 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
            
            <div className="overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 p-6">
                {[
                  {
                    title: "Crypto Funds See $223M Outflows Amid Fed Hawkishness",
                    source: "CoinDesk",
                    time: "2 hours ago",
                    summary: "Digital asset investment products saw outflows totaling $223 million last week as investors reacted to the Federal Reserve's hawkish stance on interest rates."
                  },
                  {
                    title: "Binance Launches Web Version of Binance Wallet",
                    source: "Crypto News",
                    time: "5 hours ago",
                    summary: "Binance has expanded its wallet services with a new web version, offering users more flexibility in managing their crypto assets across platforms."
                  },
                  {
                    title: "Sei Network Transactions Suspended for Upgrade",
                    source: "Blockchain Daily",
                    time: "8 hours ago",
                    summary: "The Sei Network has temporarily suspended transactions as it undergoes a major protocol upgrade expected to improve scalability and reduce fees."
                  },
                  {
                    title: "CrediX Hacker Transfers Stolen Assets to Ethereum",
                    source: "Security Watch",
                    time: "1 day ago",
                    summary: "The hacker behind the CrediX exploit has begun moving stolen funds to the Ethereum network, with analysts tracking the movement of assets."
                  },
                  {
                    title: "Polygon to Release zkEVM Bridge 2.0 Update",
                    source: "Tech Crypto",
                    time: "1 day ago",
                    summary: "Polygon announces the upcoming release of its zkEVM Bridge 2.0, promising enhanced security and faster cross-chain transactions."
                  },
                  {
                    title: "SEC Approves First Ethereum ETF for U.S. Market",
                    source: "Finance Today",
                    time: "2 days ago",
                    summary: "In a landmark decision, the SEC has approved the first Ethereum ETF for the U.S. market, opening new institutional investment opportunities."
                  }
                ].map((news, i) => (
                  <div key={i} className="pb-6 border-b border-gray-700 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold hover:text-yellow-400 cursor-pointer transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-400">
                      <span>{news.source}</span>
                      <span className="mx-2">•</span>
                      <span>{news.time}</span>
                    </div>
                    <p className="mt-2 text-gray-300">{news.summary}</p>
                    <button className="mt-3 text-yellow-400 hover:text-yellow-500 text-sm font-medium transition-colors">
                      Read Full Story →
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-700 flex justify-center">
              <button className="px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                Load More News
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
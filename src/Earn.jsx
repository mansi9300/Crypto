import React from "react";
import { motion } from "framer-motion";
import { DollarSign, PiggyBank, Coins, TrendingUp } from "lucide-react";

const earnOptions = [
  {
    icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
    title: "Staking",
    desc: "Lock your crypto and earn high rewards daily.",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-pink-400" />,
    title: "Flexible Savings",
    desc: "Earn interest with full access to your funds anytime.",
  },
  {
    icon: <Coins className="w-6 h-6 text-green-400" />,
    title: "Liquidity Farming",
    desc: "Provide liquidity and earn transaction fees.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    title: "Dual Investment",
    desc: "Maximize profits in volatile market conditions.",
  },
];

const EarnSection = () => {
  return (
    <section className="py-20 h-screen  bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#0f0f0f] text-white px-4 md:px-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Earn with Your Crypto
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover various ways to grow your assets while you sleep.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {earnOptions.map((option, i) => (
          <motion.div
            key={i}
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-all duration-300 p-6 rounded-xl shadow-lg border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {option.icon}
              <h3 className="text-xl font-semibold">{option.title}</h3>
            </div>
            <p className="text-gray-400 mb-6">{option.desc}</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-all w-full">
              Start Earning
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EarnSection;

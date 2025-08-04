import React from "react";
import { motion } from "framer-motion";
import { Wallet, TrendingUp, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: <Wallet size={30} className="text-yellow-400" />,
    title: "Secure Wallet",
    desc: "Keep your funds safe with multi-layer protection.",
  },
  {
    icon: <TrendingUp size={30} className="text-green-400" />,
    title: "Live Market",
    desc: "Track real-time prices and market trends easily.",
  },
  {
    icon: <ShieldCheck size={30} className="text-blue-400" />,
    title: "Trust & Safety",
    desc: "Advanced encryption for total transaction safety.",
  },
  {
    icon: <Users size={30} className="text-pink-400" />,
    title: "Community Driven",
    desc: "Join millions of traders shaping the future.",
  },
  
];

const SquareSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl min-h-screen mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Why Choose Us?
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Our platform combines cutting-edge technology, world-class security,
          and user-first features to give you the ultimate trading experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1e1e1e] p-6 rounded-xl shadow-xl border border-gray-800 hover:border-yellow-500 transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquareSection;

import React from "react";
import { motion } from "framer-motion";
import { Layers, MonitorSmartphone, Database, LockKeyhole } from "lucide-react";

const features = [
  {
    title: "Secure Asset Storage",
    icon: <LockKeyhole className="w-8 h-8 text-yellow-400" />,
    desc: "We provide cold wallet solutions with multi-layered security and institutional-grade custody."
  },
  {
    title: "Real-Time Monitoring",
    icon: <MonitorSmartphone className="w-8 h-8 text-green-400" />,
    desc: "Track your assets and trades in real-time with smart mobile and desktop dashboards."
  },
  {
    title: "Powerful Infrastructure",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    desc: "Global server nodes ensure high-frequency trading with low latency and 99.99% uptime."
  },
  {
    title: "Seamless Integrations",
    icon: <Layers className="w-8 h-8 text-pink-400" />,
    desc: "Access API integrations for automated trading and portfolio management."
  }
];

export default function MoreSection() {
  return (
    <section className="bg-[#0B0E11] text-white py-20 px-4 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Everything You Need
        </motion.h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          All-in-one trading solutions — security, speed, tools, and APIs made to empower your crypto journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#1E2329] rounded-xl p-6 shadow-xl hover:shadow-yellow-500/20 transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

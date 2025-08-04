import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Create a Free Account",
    desc: "Sign up with your email and secure your account in seconds.",
    icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
  },
  {
    title: "Link Your Payment Method",
    desc: "Add a bank card or UPI to easily fund your crypto purchases.",
    icon: "https://cdn-icons-png.flaticon.com/512/483/483947.png"
  },
  {
    title: "Buy Your First Crypto",
    desc: "Choose from popular coins and make your first investment.",
    icon: "https://cdn-icons-png.flaticon.com/512/951/951177.png"
  }
];

const BuyCryptoPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-4 md:px-16 py-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        >
          Buy Crypto in Minutes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto text-gray-300 mb-16"
        >
          Join millions of users and start your crypto journey with simple, secure, and fast transactions.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg shadow-md"
          >
            Get Started Now
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Get Started</h3>
            <p className="mb-4">
              Create your free account now and dive into the world of crypto trading with zero hassle.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 w-full py-2 rounded-md font-semibold">
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuyCryptoPage;

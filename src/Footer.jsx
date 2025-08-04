import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Branding & Contact */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L20 6V18L12 22L4 18V6L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Crypto</h2>
          </div>
          <h3 className="text-lg font-semibold mb-2">Let's talk! <span>👍</span></h3>
          <p className="text-sm text-gray-300 mb-1">+91 9300978368</p>
          <p className="text-sm text-gray-300 mb-1">hello.crypto@gmail.com</p>
          <p className="text-sm text-gray-300">
            Cecilia Chapman 711-2880 Nulla St. Mankato, Mississippi 96522
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Spot</li>
            <li>Inverse Perpetual</li>
            <li>USDT Perpetual</li>
            <li>Exchange</li>
            <li>Launchpad</li>
            <li>Binance Pay</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Buy Crypto</li>
            <li>Markets</li>
            <li>Tranding Fee</li>
            <li>Affiliate Program</li>
            <li>Referral Program</li>
            <li>API</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Bybit Learn</li>
            <li>Help Center</li>
            <li>User Feedback</li>
            <li>Submit a request</li>
            <li>API Documentation</li>
            <li>Trading Rules</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Bybit</li>
            <li>Authenticity Check</li>
            <li>Careers</li>
            <li>Business Contacts</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © 2025 Crypto All Rights Reserved by{" "}
          <a
            href="https://github.com/Mansi9300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
          Mansi
          </a>
        </p>
        <div className="flex justify-center space-x-5 mt-4">
          <Facebook size={18} />
          <Twitter size={18} />
          <Instagram size={18} />
          <Linkedin size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

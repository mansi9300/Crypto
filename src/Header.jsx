// Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({
  scrollToHero,
  scrollToSquare,
  scrollToFutures,
  scrollToMore,
  scrollToEarn,
  scrollToMarket,
  scrollToBuy,
  scrollToTrade
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleNavClick = (scrollFn) => {
    scrollFn();
    setShowMobileMenu(false); 
  };

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-800 sticky top-0 z-50">
      
      <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToHero}>
        <img src="https://cdn2.iconfinder.com/data/icons/investing-crayons-vol-1/256/Cryptocurrency_Investment-1024.png" alt="Crypto Logo" className="w-6 h-6" />
        <span className="text-yellow-400 font-bold text-xl">CRYPTO</span>
      </div>

    
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <button onClick={() => handleNavClick(scrollToBuy)} className="hover:text-yellow-400">Buy Crypto</button>
        <button onClick={() => handleNavClick(scrollToMarket)} className="hover:text-yellow-400">Markets</button>
        <button onClick={() => handleNavClick(scrollToTrade)} className="hover:text-yellow-400">Trade</button>
        <button onClick={() => handleNavClick(scrollToFutures)} className="hover:text-yellow-400">Futures</button>
        <button onClick={() => handleNavClick(scrollToEarn)} className="hover:text-yellow-400">Earn</button>
        <button onClick={() => handleNavClick(scrollToSquare)} className="hover:text-yellow-400">Square</button>
        <button onClick={() => handleNavClick(scrollToMore)} className="hover:text-yellow-400">More</button>
      </nav>

    
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={() => setShowAuthModal(true)}
          className="px-4 py-2 text-sm border border-gray-600 rounded hover:border-yellow-400 transition-colors"
        >
          Log In
        </button>
        <button 
          onClick={() => setShowAuthModal(true)}
          className="px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors"
        >
          Sign Up
        </button>
      </div>

   
      <button className="md:hidden text-white" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-t border-gray-700 py-6 z-40 space-y-4 text-center">
          <button onClick={() => handleNavClick(scrollToBuy)} className="block w-full hover:text-yellow-400">Buy Crypto</button>
          <button onClick={() => handleNavClick(scrollToMarket)} className="block w-full hover:text-yellow-400">Markets</button>
          <button onClick={() => handleNavClick(scrollToTrade)} className="block w-full hover:text-yellow-400">Trade</button>
          <button onClick={() => handleNavClick(scrollToFutures)} className="block w-full hover:text-yellow-400">Futures</button>
          <button onClick={() => handleNavClick(scrollToEarn)} className="block w-full hover:text-yellow-400">Earn</button>
          <button onClick={() => handleNavClick(scrollToSquare)} className="block w-full hover:text-yellow-400">Square</button>
          <button onClick={() => handleNavClick(scrollToMore)} className="block w-full hover:text-yellow-400">More</button>
          <div className="flex justify-center gap-4 mt-4">
            <button 
              onClick={() => setShowAuthModal(true)}
              className="px-4 py-2 text-sm border border-gray-600 rounded hover:border-yellow-400"
            >
              Log In
            </button>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md relative">
            <button 
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <p className="text-gray-400 mb-6">
              This is a demo interface. In a real application, this would show login/signup forms.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="flex-1 py-2 border border-gray-600 rounded hover:border-yellow-400"
              >
                Close
              </button>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="flex-1 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

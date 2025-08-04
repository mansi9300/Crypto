
import React, { useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SquareSection from './Square';
import FuturesSection from './Future';
import MoreSection from './More';
import EarnSection from './Earn';
import MarketPage from './Market';
import BuyCryptoPage from './Buy';
import TradeSection from './Trade';
import Footer from './Footer';

const App = () => {
 
  const heroRef = useRef(null);
  const squareRef = useRef(null);
  const futuresRef = useRef(null);
  const moreRef = useRef(null);
  const earnRef = useRef(null);
  const marketRef = useRef(null);
  const buyRef = useRef(null);
  const tradeRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header 
        scrollToHero={() => scrollToRef(heroRef)}
          scrollToBuy={() => scrollToRef(buyRef)}
        scrollToSquare={() => scrollToRef(squareRef)}
        scrollToFutures={() => scrollToRef(futuresRef)}
        scrollToMore={() => scrollToRef(moreRef)}
        scrollToEarn={() => scrollToRef(earnRef)}
        scrollToMarket={() => scrollToRef(marketRef)}
      
        scrollToTrade={() => scrollToRef(tradeRef)}
      />
      
      <div ref={heroRef}>
        <HeroSection scrollToBuy={() => scrollToRef(buyRef)} />
      </div>

       <div ref={buyRef}>
        <BuyCryptoPage />
      </div>
      

      <div ref={marketRef}>
        <MarketPage />
      </div>

       
      <div ref={tradeRef}>
        <TradeSection />
      </div>
      
        <div ref={futuresRef}>
        <FuturesSection />
      </div>
      
       <div ref={earnRef}>
        <EarnSection />
      </div>
      
      <div ref={squareRef}>
        <SquareSection />
      </div>
      
    
      
      <div ref={moreRef}>
        <MoreSection />
      </div>
      
     
      
     
     
      
      <Footer />
    </div>
  );
};

export default App;
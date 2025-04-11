"use client"
import { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full relative z-30">
      <div
        style={{ background: "linear-gradient(to right, #FC004E, #10CBE0)" }}
        className="text-white py-2.5 px-4 sm:px-6 lg:px-8 xl:px-[200px] h-auto flex items-center justify-center"
      >
        <p className="text-center py-2 sm:py-0">
          <span className="inline-flex items-center vertical-align-middle">
            <span className="mr-1 sm:mr-2">🚀</span>
            <span className="font-[800] text-[14px] xs:text-[16px] sm:text-[22px] leading-[100%] bg-[#00E7F9] bg-clip-text text-transparent">
              FRESH BEGINNINGS SALE:
            </span>
          </span>{" "}
          <span className="font-[600] text-[14px] xs:text-[16px] sm:text-[22px] leading-[100%]">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>
      <div className="bg-black text-white p-4 sm:px-6 lg:px-8 xl:px-[200px] flex justify-between items-center">
        <div className="md:hidden w-8">
        </div>
        <div className="flex justify-center md:justify-start md:flex-grow">
          <HeaderLogo />
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu} title="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <HeaderNav />
      </div>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
};
export default Header;
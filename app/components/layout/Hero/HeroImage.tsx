"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroImage = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start relative order-first md:order-last">
      <div className={`relative ${isMobile ? '' : 'md:absolute md:right-0 md:top-[-180px]'}`}>
        <Image
          src="/images/phone-mockup.png"
          alt="Fametonic mobile app"
          width={650}
          height={750}
          className="relative w-[280px] sm:w-[390px] h-auto md:w-[550px] lg:w-[650px]"
          style={{ left: '1px' }}
          priority
          sizes="(max-width: 640px) 280px, (max-width: 768px) 390px, (max-width: 1024px) 550px, 650px"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[130%] h-[80%] rounded-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] opacity-50 blur-2xl -z-10"></div>
      </div>
    </div>
  );
};
export default HeroImage;
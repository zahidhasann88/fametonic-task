"use client"
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="bg-black text-white p-4 sm:px-6 md:px-8 lg:px-12 xl:px-[200px] relative overflow-hidden pb-12 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};
export default Hero;
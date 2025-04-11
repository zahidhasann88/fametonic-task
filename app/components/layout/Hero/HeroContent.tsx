"use client"
import Link from 'next/link';

const HeroContent = () => {
  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left relative z-20 px-2 sm:px-0">
      <h1 className="text-[22px] sm:text-[25px] md:text-[28px] lg:text-[35px] font-[800] md:font-[700] mb-[13px] text-white leading-[110%] md:leading-[100%]">
        Want to Turn Social Media Into a Profitable Career?
      </h1>
      <h2
        className="text-[22px] sm:text-[25px] md:text-[28px] lg:text-[35px] font-[800] md:font-[700] mb-[20px] md:mb-[27px] leading-[110%] md:leading-[100%]"
        style={{ color: '#00E7F9', textShadow: '2px 2px 6px rgba(255, 20, 147, 1)', }}
      >
        Discover your way to success with Fametonic:
      </h2>
      <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-left">
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2 flex-shrink-0">✨</span>
          <span className="font-[500] md:font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px]">
            Start growing your influence right away—no waiting required!
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2 flex-shrink-0">✨</span>
          <span className="font-[500] md:font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px]">
            Create viral TikToks and Reels step by step with easy-to-follow lessons
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2 flex-shrink-0">✨</span>
          <span className="font-[500] md:font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px]">
            Use a Personal AI Worker to boost your content
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2 flex-shrink-0">✨</span>
          <span className="font-[500] md:font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px]">
            Learn from expert-led courses designed for aspiring influencers
          </span>
        </li>
      </ul>
      <div className="block w-full">
        <div className="block md:hidden mb-4">
          <p className="text-xs text-gray-400">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <div className="text-xs text-gray-400 mt-2">
            Fametonic 2025 ©All Rights Reserved.
          </div>
        </div>
        {/* Mobile View */}
        <div className="block md:hidden w-full">
          <Link href="#get-started" className="block w-full">
            <button className="w-full bg-[#FC004E] hover:bg-[#e0003d] text-white font-bold py-1 px-4 sm:px-12 rounded-xl text-sm sm:text-base uppercase flex items-center justify-center shadow-[3px_3px_10px_0px_#00f2ff] transition duration-300">
              GET STARTED <span className="ml-2 text-lg sm:text-xl flex items-center">›</span>
            </button>
          </Link>
         
          <p className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
            1-minute quiz for personalized insights
          </p>
        </div>
        <div className="hidden md:block md:text-left">
          <div style={{ display: 'inline-block' }}>
            <Link href="#get-started">
              <button className="bg-[#FC004E] hover:bg-[#e0003d] text-white font-bold py-1.5 md:py-2 px-16 md:px-24 lg:px-28 rounded-xl text-base lg:text-lg uppercase flex items-center justify-center shadow-[3px_3px_10px_0px_#00f2ff] transition duration-300">
                GET STARTED <span className="ml-2 text-lg lg:text-xl flex items-center">›</span>
              </button>
            </Link>
           
            <p className="text-xs md:text-sm text-gray-300 mt-2 text-center">
              1-minute quiz for personalized insights
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-xs text-gray-400 mt-6 md:mt-8">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <div className="text-xs text-gray-400 mt-2">
            Fametonic 2025 ©All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroContent;
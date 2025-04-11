"use client"

import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className="md:hidden bg-black text-gray-400 py-4 px-6 absolute w-full z-40">
      <nav className="flex flex-col space-y-4">
        <Link href="/about-us" className="text-gray-400 hover:text-pink-300 transition-colors">
          About us
        </Link>
        <Link href="/contact" className="text-gray-400 hover:text-pink-300 transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
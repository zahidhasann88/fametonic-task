"use client"

import Link from 'next/link';

const HeaderNav = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="/about-us" className="text-gray-400 hover:text-pink-300 transition-colors">
        About us
      </Link>
      <Link href="/contact" className="text-gray-400 hover:text-pink-300 transition-colors">
        Contact
      </Link>
    </nav>
  );
};

export default HeaderNav;
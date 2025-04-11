"use client"
import Link from 'next/link';
import Image from 'next/image';
const HeaderLogo = () => {
  return (
    <Link href="/" className="text-white no-underline">
      <div className="relative">
        <div className="relative inline-block">
          <Image
            src="/images/logo.png"
            alt="Fame Tonic Logo"
            width={150}
            height={60}
            className="relative z-20 w-[120px] md:w-[150px] h-auto"
            priority
          />
        </div>
      </div>
    </Link>
  );
};
export default HeaderLogo;
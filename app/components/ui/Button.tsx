"use client"
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const Button = ({ href, onClick, className = '', children, fullWidth = false }: ButtonProps) => {
  const baseClasses = `${fullWidth ? 'w-full' : 'w-full md:w-auto'} bg-[#FC004E] hover:bg-[#e0003d] text-white font-bold py-1 sm:py-1.5 md:py-2 px-6 sm:px-12 md:px-20 lg:px-28 rounded-xl text-sm sm:text-base md:text-lg uppercase flex items-center justify-center shadow-[3px_3px_10px_0px_#00f2ff] transition duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={fullWidth ? "w-full" : "w-full md:w-auto"}>
        <button className={baseClasses}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
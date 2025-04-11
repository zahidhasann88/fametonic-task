import "./styles/globals.css";
import { Urbanist, Figtree } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-urbanist'
});

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${figtree.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
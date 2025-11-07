import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Login', href: '#login' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        solid ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-[#1BBFBA] grid place-items-center text-white font-bold">R</div>
          <span className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-[#179f9b] transition-colors">Rekatap</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md bg-[#1BBFBA] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#17a9a4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1BBFBA]"
          >
            Get Started
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-md bg-[#1BBFBA] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#17a9a4]"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.header>
  );
}

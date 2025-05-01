'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);


  return (
    <header className=" fixed w-full z-50">
      <div className="sm:bg-white sm:mt-3 sm:shadow sm:border sm:border-gray-300 sm:rounded-full max-w-3xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {/* LuqmanS */}
        </Link>

        <nav className="hidden sm:flex gap-6 items-center px-7">
          <Link href="/#about" className="hover:transition hover:text-cyan-700 focus:text-cyan-700">About</Link>
          <Link href="/blog" className="hover:transition hover:text-cyan-700 focus:text-cyan-700">Blog</Link>
          <Link href="/#contact" className="hover:transition hover:text-cyan-700 focus:text-cyan-700">Contact</Link>
          
        </nav>
        {/* <button onClick={() => setIsDark(!isDark)} className='hidden sm:flex text-cyan-700 py-2 px-2 rounded-full border border-gray-200 cursor-pointer bg-white hover:bg-cyan-950 hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1'>
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
          </button> */}
          <div className='hidden sm:flex'>
            <ThemeToggle/>
          </div>
          
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle/>
          {/* <button onClick={() => setIsDark(!isDark)} className='text-cyan-700 py-2 px-2 rounded-full border border-gray-200 cursor-pointer bg-white hover:bg-cyan-950 hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1'>
            {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
          </button> */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white border border-gray-300 rounded-lg mx-10">
          <Link onClick={() => setIsOpen(false)} href="/#about" className="block py-2">About</Link>
          <Link onClick={() => setIsOpen(false)} href="/blog" className="block py-2">Blog</Link>
          <Link onClick={() => setIsOpen(false)} href="/#contact" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  );
}

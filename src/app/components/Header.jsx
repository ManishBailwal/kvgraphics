'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white text-[#111] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="KV Graphics Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-2xl font-semibold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            KV Graphics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-medium tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative hover:text-[#d4af37] transition-colors duration-200"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white text-[#111] text-sm font-medium px-6 pb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

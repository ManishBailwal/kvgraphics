'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a1a2f] text-[#f5f5dc] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo with Stylized Badge */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Circle with 'KV' */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff6b6b] via-[#ff9671] to-[#ffc75f] text-white font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
              KV
            </span>
          </div>

          {/* Brand Name */}
          <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            Graphics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium" style={{ fontFamily: 'system-ui' }}>
          <Link href="#home" className="hover:text-[#b76e79] transition-colors">Home</Link>
          <Link href="#services" className="hover:text-[#b76e79] transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-[#b76e79] transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-[#b76e79] transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#0a1a2f] flex flex-col gap-4 text-sm font-medium" style={{ fontFamily: 'system-ui' }}>
          <Link href="#home" className="hover:text-[#b76e79] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" className="hover:text-[#b76e79] transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#portfolio" className="hover:text-[#b76e79] transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="#contact" className="hover:text-[#b76e79] transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

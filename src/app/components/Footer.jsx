'use client';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-[#f5f5dc] py-10 px-6 border-t border-[#1e2e44]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo/Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            PixelCraft
          </h2>
          <p className="text-sm text-[#d2c8b0] leading-relaxed">
            Where aesthetics meet precision. <br />
            Tailored designs that leave lasting impressions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#e0d5c0]">
            <li><Link href="#home" className="hover:text-[#b76e79] transition">Home</Link></li>
            <li><Link href="#services" className="hover:text-[#b76e79] transition">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-[#b76e79] transition">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-[#b76e79] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#b76e79]">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#b76e79]">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#b76e79]">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@pixelcraft.com" aria-label="Email" className="hover:text-[#b76e79]">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-[#a9a9a9]">
        © {new Date().getFullYear()} PixelCraft. All rights reserved.
      </div>
    </footer>
  );
}

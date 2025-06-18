'use client';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-[#111] py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand/Logo Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            KV Graphics
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0" style={{ fontFamily: 'system-ui' }}>
            Where aesthetics meet precision. <br />
            Tailored designs that leave lasting impressions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'system-ui' }}>
            <li><Link href="#home" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
            <li><Link href="#services" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-[#d4af37] transition-colors">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            Connect
          </h3>
          <div className="flex justify-center md:justify-start gap-5 text-gray-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#d4af37] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#d4af37] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#d4af37] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@pixelcraft.com"
              aria-label="Email"
              className="hover:text-[#d4af37] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 tracking-wide" style={{ fontFamily: 'system-ui' }}>
        © {new Date().getFullYear()} PixelCraft. All rights reserved.
      </div>
    </footer>
  );
}

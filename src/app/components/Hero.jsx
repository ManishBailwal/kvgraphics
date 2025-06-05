'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a1a2f] text-[#f5f5dc] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-10 overflow-hidden">
      {/* LEFT: Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Where Aesthetics <br className="hidden md:block" /> Meet Precision.
        </h1>

        <p
          className="text-lg md:text-xl text-[#e0d5c0] leading-relaxed mb-8"
          style={{
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Premium graphic design services tailored to build lasting impressions.
        </p>

        <motion.a
  href="#portfolio"
  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#ff6b6b] via-[#ff9671] to-[#ffc75f] text-white font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.98 }}
  style={{ fontFamily: 'system-ui', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
>
          View Portfolio
        </motion.a>
      </motion.div>

      {/* RIGHT: Hero SVG Image */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/assets/heroImage.svg"
          alt="Hero Graphic"
          width={500}
          height={500}
          className="w-full max-w-xs md:max-w-md h-auto object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

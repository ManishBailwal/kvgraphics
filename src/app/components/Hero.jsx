'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-10 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/herobg.png')", // Make sure the file is in public/assets
      }}
    >
      {/* Light Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* LEFT: Logo & Slogan */}
      <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Company Name or Motto */}
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Beyond <span className="text-[#ffc75f]">Creativity</span>
        </h1>

        {/* Tagline or Description */}
        <p
          className="text-lg md:text-xl text-[#f0e5d0] leading-relaxed mb-8"
          style={{
            fontFamily: '"Segoe UI", Roboto, sans-serif',
          }}
        >
          Designers. Printers. Thinkers. <br className="hidden md:block" />
          Bringing your imagination to life — with color, clarity, and class.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#portfolio"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#ff6b6b] via-[#ff9671] to-[#ffc75f] text-white font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontFamily: 'system-ui', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
        >
          Explore Portfolio
        </motion.a>
      </motion.div>

      {/* RIGHT: Image (can optionally be removed if background handles visuals) */}
      <motion.div
        className="flex-1 flex justify-center items-center z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/assets/heroImage.svg" // You can remove this if not needed
          alt="Creative Visual"
          width={500}
          height={500}
          className="w-full max-w-xs md:max-w-md h-auto object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white text-[#111] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-10 overflow-hidden"
    >
      {/* LEFT: Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Elevate Your Brand <br />
          <span className="text-[#d4af37]">Through Design</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
          style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}
        >
          At KV Graphics, we transform imagination into visual reality — combining luxury, precision,
          and creativity in every design and print.
        </p>

        <motion.a
          href="#portfolio"
          className="inline-block px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] font-medium tracking-wide hover:bg-[#d4af37] hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}
        >
          Explore Portfolio
        </motion.a>
      </motion.div>

      {/* RIGHT: Hero Image */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/assets/heroImage.jpg"
          alt="Creative Visual"
          width={600}
          height={600}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

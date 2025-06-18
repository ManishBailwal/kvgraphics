'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutHeroSection() {
  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Crafting Design. <br /> Creating Impact.
          </h1>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'system-ui' }}
          >
            We believe great design is more than just pixels. It’s purpose-driven, emotionally resonant, and obsessively detailed — transforming brands into unforgettable experiences.
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-[#d4af37] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:shadow-md transition"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* RIGHT: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Image
            src="/assets/aboutHero.jpg" // Replace with your actual image path
            alt="Design Illustration"
            width={600}
            height={500}
            className="w-full max-w-md mx-auto md:mx-0"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

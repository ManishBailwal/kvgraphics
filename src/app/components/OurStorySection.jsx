'use client';
import { motion } from 'framer-motion';

export default function OurStorySection() {
  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-8"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Story & Vision
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'system-ui' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          PixelCraft was born from a simple idea — that design should not only look beautiful but also feel intuitive, human, and strategic. Founded by passionate creatives who believed in the power of visual storytelling, we set out to bridge the gap between aesthetics and purpose.
          <br /><br />
          Our journey began in a small workspace with big ideas. Today, we’ve grown into a team that crafts branding, digital experiences, and print designs that connect emotionally and drive results.
          <br /><br />
          We believe in design that speaks — design that’s minimal yet meaningful, artistic yet user-focused. Whether it’s a logo, a website, or a complete brand transformation, we approach every project with empathy, precision, and care.
        </motion.p>
      </div>
    </section>
  );
}

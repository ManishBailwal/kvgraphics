'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We’re not just designers. <br className="hidden sm:block" />
          We’re your creative partners.
        </motion.h2>

        <motion.p
          className="text-gray-700 text-sm md:text-base mb-8"
          style={{ fontFamily: 'system-ui' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s collaborate to turn your vision into something visually stunning and professionally crafted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="bg-[#d4af37] hover:bg-[#c49d2e] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

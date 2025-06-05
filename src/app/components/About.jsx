'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#0a1a2f] text-[#f5f5dc] px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl font-semibold mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          About KV Graphics
        </h2>

        <p
          className="text-lg md:text-xl text-[#e0d5c0] leading-relaxed"
          style={{ fontFamily: 'system-ui' }}
        >
          KV Graphics is a creative studio dedicated to turning ideas into impactful visuals. Specializing in
          <strong> graphic design</strong>, <strong>printing</strong>, and <strong>web design</strong>, we blend artistic innovation with functional design to elevate brands across every medium.
          <br /><br />
          From bold branding to high-quality print materials and modern digital experiences, our work is built on precision, creativity, and a deep understanding of visual communication. At KV Graphics, your vision meets expert craftsmanship — on screen and on paper.
        </p>
      </motion.div>
    </section>
  );
}

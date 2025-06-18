'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaPencilRuler, FaRocket, FaHeart } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: 'Discover', desc: 'We understand your vision and explore the best approach.' },
  { icon: <FaPencilRuler />, title: 'Design', desc: 'Crafting precise and aesthetic visuals tailored to your brand.' },
  { icon: <FaRocket />, title: 'Deliver', desc: 'We execute with speed and precision, always on time.' },
  { icon: <FaHeart />, title: 'Delight', desc: 'End result? Designs that impress and connect emotionally.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-[#111]">
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Our Creative Process
        </h2>
        <p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          style={{ fontFamily: 'system-ui' }}
        >
          From vision to value — a seamless journey of thoughtful design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group relative border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#d4af37]/10 text-[#d4af37] text-xl rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {step.title}
            </h3>
            <p
              className="text-gray-700 text-sm"
              style={{ fontFamily: 'system-ui' }}
            >
              {step.desc}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] via-[#ff9671] to-[#ffc75f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

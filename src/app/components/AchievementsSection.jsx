'use client';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Repeat, Award } from 'lucide-react';

const stats = [
  {
    icon: <Briefcase size={36} className="text-[#d4af37]" />,
    title: '150+',
    description: 'Design Projects Delivered',
  },
  {
    icon: <Globe size={36} className="text-[#d4af37]" />,
    title: '30+',
    description: 'Businesses Served Globally',
  },
  {
    icon: <Repeat size={36} className="text-[#d4af37]" />,
    title: '95%',
    description: 'Client Retention Rate',
  },
  {
    icon: <Award size={36} className="text-[#d4af37]" />,
    title: 'Top 1%',
    description: 'Design Recognition & Awards',
  },
];

export default function AchievementsSection() {
  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#f9f9f9] p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3
                className="text-2xl font-semibold mb-2 text-[#d4af37]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {stat.title}
              </h3>
              <p
                className="text-sm text-gray-700"
                style={{ fontFamily: 'system-ui' }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

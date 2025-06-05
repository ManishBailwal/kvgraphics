'use client';
import { motion } from 'framer-motion';
import { PenTool, Printer, Monitor } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Graphic Designing',
    description:
      'Creative, brand-aligned visuals — from logos and brochures to social media designs that captivate and convert.',
    icon: <PenTool size={36} className="text-[#ffc75f]" />,
    link: '/services#graphic-design',
  },
  {
    title: 'Printing Services',
    description:
      'Premium-quality prints with professional finishes — business cards, flyers, banners, and beyond.',
    icon: <Printer size={36} className="text-[#ffc75f]" />,
    link: '/services#printing',
  },
  {
    title: 'Web Designing',
    description:
      'Modern, responsive websites crafted for performance, elegance, and user experience.',
    icon: <Monitor size={36} className="text-[#ffc75f]" />,
    link: '/services#web-design',
  },
];

export default function Services() {
  return (
    <section className="bg-[#0a1a2f] text-[#f5f5dc] px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-10"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[#e0d5c0] mb-4" style={{ fontFamily: 'system-ui' }}>
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-[#ffc75f] font-semibold hover:underline text-sm"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

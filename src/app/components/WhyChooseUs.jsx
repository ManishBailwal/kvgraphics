'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Tailored Design Solutions',
      description:
        'Every project is customized to reflect your brand identity with precision and style.',
    },
    {
      title: 'Proven Track Record',
      description:
        'Trusted by startups and enterprises alike, delivering exceptional visual experiences.',
    },
    {
      title: 'Timely Delivery',
      description:
        'Efficiency meets quality—your deadlines are our commitment.',
    },
    {
      title: 'Creative Collaboration',
      description:
        'We partner closely with you to bring ideas to life with artistic finesse.',
    },
    {
      title: 'Consistent Brand Identity',
      description:
        'We ensure that every visual element aligns with your brand’s voice, values, and goals—across all platforms.',
    },
    {
      title: 'Designs That Convert',
      description:
        'Our graphics are not just beautiful—they’re crafted with strategy to boost engagement, sales, and trust.',
    },
    {
      title: 'Cutting-Edge Tools & Techniques',
      description:
        'We use the latest design software and creative technologies to deliver trend-forward, future-ready visuals.',
    },
    {
      title: 'Dedicated Support & Communication',
      description:
        'Stay informed at every step with responsive updates, feedback loops, and collaborative workflows.',
    },
  ];

  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl font-semibold mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Why Choose Us
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 mb-12"
          style={{ fontFamily: 'system-ui' }}
        >
          Discover the key values that set our graphic design services apart.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle
                size={28}
                className="text-[#d4af37] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: 'system-ui' }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

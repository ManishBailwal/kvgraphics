'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const portfolioItems = [
  {
    title: 'Website Portfolio',
    description: 'Custom websites built with speed, design, and functionality in mind. From landing pages to full-stack applications.',
    icon: '🌐',
    link: '/portfolio/websites',
  },
  {
    title: 'Graphic Designing Portfolio',
    description: 'Premium designs including logos, posters, brochures, and brand kits tailored to your business needs.',
    icon: '🎨',
    link: '/portfolio/graphicDesigning',
  },
  {
    title: 'Printing Portfolio',
    description: 'High-quality printing solutions from business cards to brochures using top-grade material and finishes.',
    icon: '🖨️',
    link: '/portfolio/printing',
  },
  {
    title: 'Merchandise & Boards Portfolio',
    description: 'Custom-printed T-shirts, mugs, caps, signage, banners, and marketing boards crafted with precision.',
    icon: '🛍️',
    link: '/portfolio/merchandise',
  },
];

export default function Portfolio() {
  const router = useRouter();

  return (
    <section className="bg-white text-black py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Take a look at our premium services that empower businesses and build lasting impressions.
        </motion.p>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-600">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
              </div>
              <button
                onClick={() => router.push(item.link)}
                className="mt-auto cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Check Portfolio →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const designs = [
  { title: 'Minimal Logo Design', description: 'A clean and modern logo crafted for a tech startup.', image: '/assets/1.png' },
  { title: 'Event Poster', description: 'Vibrant poster design for marketing events and concerts.', image: '/assets/2.png' },
  { title: 'Product Brochure', description: 'Well-structured, sleek brochure for product showcase.', image: '/assets/3.png' },
  { title: 'Minimal Logo Design', description: 'A clean and modern logo crafted for a tech startup.', image: '/assets/4.png' },
  { title: 'Event Poster', description: 'Vibrant poster design for marketing events and concerts.', image: '/assets/5.png' },
  { title: 'Product Brochure', description: 'Well-structured, sleek brochure for product showcase.', image: '/assets/6.png' },
  { title: 'Minimal Logo Design', description: 'A clean and modern logo crafted for a tech startup.', image: '/assets/7.png' },
  { title: 'Event Poster', description: 'Vibrant poster design for marketing events and concerts.', image: '/assets/8.png' },
  { title: 'Product Brochure', description: 'Well-structured, sleek brochure for product showcase.', image: '/assets/9.png' },
  { title: 'Minimal Logo Design', description: 'A clean and modern logo crafted for a tech startup.', image: '/assets/10.png' },
  { title: 'Event Poster', description: 'Vibrant poster design for marketing events and concerts.', image: '/assets/11.png' },
  { title: 'Product Brochure', description: 'Well-structured, sleek brochure for product showcase.', image: '/assets/12.png' },
];

export default function GraphicDesigning() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white text-black py-20 px-4 md:px-20 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Graphic Designing Portfolio
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A curated selection of premium design works — from brand kits to marketing assets that stand out.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-600">{design.title}</h3>
                  <p className="text-sm text-gray-600">{design.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(design.image)}
                  className="mt-4 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  View Full Design
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Design"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-1"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

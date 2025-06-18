// ServicesPage.jsx

'use client';
import { motion } from 'framer-motion';

const services = {
  main: ['Social Media Services', 'Website Development', 'SEO Services'],
  print: [
    'Business Cards', 'ID Cards', 'Menu Cards', 'Brochure', 'Flyers',
    'Tent Cards', 'Letterheads', 'Billbook', 'Envelope Printing', 'Lamination',
    'Certificate', 'Logo Designing', 'Paper Bag Printing', 'Sashe Printing',
    '3D Mockup', 'Graphic Designing',
  ],
  merchandise: [
    'Tshirts Printing', 'Cap Printing', 'Coffee Mug Printing', 'Beer Mug Printing',
    'Product Designing', 'Photo Frames',
  ],
  boards: [
    'Flex Banners', '3D Cutout', 'CNC Board', '3D Letter Board', 'Light Board',
    'Vinyl Printing', 'One Way Vision', 'Reflector Signages', 'Sunboard Printing',
    'Steel Key Rings',
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-black min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From printing to web development – we bring all creative & technical services under one roof.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Digital Services */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">Digital Services</h3>
            <ul className="space-y-2 text-gray-800">
              {services.main.map((service, idx) => (
                <li key={idx}>• {service}</li>
              ))}
            </ul>
          </div>

          {/* Printing & Design */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">Printing & Design</h3>
            <ul className="space-y-2 text-gray-800">
              {services.print.map((service, idx) => (
                <li key={idx}>• {service}</li>
              ))}
            </ul>
          </div>

          {/* Merchandise & Boards */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">Merchandise & Boards</h3>
            <ul className="space-y-2 text-gray-800">
              {[...services.merchandise, ...services.boards].map((service, idx) => (
                <li key={idx}>• {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

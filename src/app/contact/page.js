'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hello? We’d love to hear from you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="grid grid-cols-1 gap-6 bg-gray-50 p-10 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-[#0a1a2f] text-[#f5f5dc] px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-10 text-center"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-center text-[#e0d5c0] mb-12"
          style={{ fontFamily: 'system-ui' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Whether you have a question, project idea, or just want to say hello — we’d love to hear from you!
        </motion.p>

        <motion.form
          className="grid grid-cols-1 gap-6 bg-[#112240] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded bg-[#0a1a2f] border border-[#ffc75f] text-[#f5f5dc] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-[#0a1a2f] border border-[#ffc75f] text-[#f5f5dc] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded bg-[#0a1a2f] border border-[#ffc75f] text-[#f5f5dc] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ffc75f] text-[#0a1a2f] font-semibold py-3 rounded hover:bg-[#ffda89] transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

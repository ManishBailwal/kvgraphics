'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a project take?',
    answer: 'It depends on the complexity. Most design projects take 1–2 weeks, while larger web projects can range from 3–6 weeks.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Absolutely! We offer multiple rounds of revisions to ensure you’re fully satisfied with the final output.',
  },
  {
    question: 'What is the pricing model?',
    answer: 'Our pricing is tailored to the scope of your project. We offer both fixed and milestone-based pricing models.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we collaborate with clients worldwide. Our workflow is designed to accommodate different time zones and ensure smooth communication.',
  },
  {
    question: 'What if I’m not satisfied with the initial designs?',
    answer: 'We offer multiple rounds of revisions to align the final design perfectly with your expectations.',
  },
  {
    question: 'Can you handle urgent or last-minute projects?',
    answer: 'Absolutely. We offer expedited services based on availability and the project’s scope. Additional charges may apply for rush orders.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-[#111] px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center font-semibold text-lg text-[#d4af37]"
                onClick={() => toggle(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

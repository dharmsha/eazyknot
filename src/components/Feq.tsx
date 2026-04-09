'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is EzyKnot Careers?",
    answer:
      "EzyKnot Careers is a job-oriented online learning platform designed to help students and professionals build practical, industry-ready skills."
  },
  {
    id: 2,
    category: "Courses",
    question: "Do you provide placement assistance?",
    answer:
      "Yes! We provide resume building, interview preparation, mock interviews, and hiring support."
  },
  {
    id: 3,
    category: "Payment",
    question: "Is there any refund policy?",
    answer:
      "Yes, we offer a 7-day money-back guarantee if you're not satisfied."
  },
  {
    id: 4,
    category: "Support",
    question: "How can I contact support?",
    answer:
      "You can contact us via WhatsApp, email, or our contact page."
  },
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full bottom-20 right-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">FAQ</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400 text-sm md:text-base">
            Everything you need to know about our courses & support.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-yellow-500 outline-none transition"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-base md:text-lg">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-yellow-500/10 to-pink-500/10 p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold mb-3">
            Still Have Questions?
          </h3>

          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Our team is always ready to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-semibold hover:scale-105 transition"
            >
              <MessageCircle className="inline w-4 h-4 mr-2" />
              Contact Support
            </Link>

            <a
              href="https://wa.me/916200453132"
              target="_blank"
              className="px-6 py-3 bg-green-500 rounded-full font-semibold hover:scale-105 transition"
            >
              <Phone className="inline w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
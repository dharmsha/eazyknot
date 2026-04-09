'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Gamepad2,
  Users,
  Headphones,
  MessageCircle,
  Briefcase,
  FileText,
  Building2,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';

const benefits = [
  {
    title: "World Class Pedagogy",
    icon: <Award size={26} />,
    color: "yellow",
    features: [
      { text: "4.8/5 Rating", icon: <Star size={14} /> },
      { text: "Gamified Learning", icon: <Gamepad2 size={14} /> },
      { text: "Learn from Industry Experts", icon: <Users size={14} /> },
      { text: "Hands-on Assignments", icon: <Zap size={14} /> }
    ]
  },
  {
    title: "24 x 7 Support",
    icon: <Headphones size={26} />,
    color: "blue",
    features: [
      { text: "Dedicated Learning Managers", icon: <Users size={14} /> },
      { text: "24/7 Learning Support", icon: <MessageCircle size={14} /> },
      { text: "Peer Networking Access", icon: <Users size={14} /> }
    ]
  },
  {
    title: "Career Assistance",
    icon: <Briefcase size={26} />,
    color: "emerald",
    features: [
      { text: "85,000+ Career Transitions", icon: <TrendingUp size={14} /> },
      { text: "Resume & Interview Prep", icon: <FileText size={14} /> },
      { text: "Exclusive Job Portal Access", icon: <Building2 size={14} /> }
    ]
  }
];

const colorMap = {
  yellow: "from-yellow-400 to-orange-500",
  blue: "from-blue-400 to-cyan-500",
  emerald: "from-emerald-400 to-teal-500"
};

export default function LearnerBenefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-6">
            <Star size={14} className="text-yellow-500" />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Learner Benefits
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Everything you need to grow, succeed and build your future with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* Gradient Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r ${colorMap[benefit.color]}`} />

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorMap[benefit.color]} text-white mb-6 shadow-md group-hover:scale-110 transition`}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {benefit.title}
              </h3>

              {/* Features */}
              <div className="space-y-4">
                {benefit.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition"
                  >
                    <div className="mt-0.5 text-gray-400 group-hover:text-gray-700 transition">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50K+", label: "Students" },
            { value: "92%", label: "Success Rate" },
            { value: "200+", label: "Experts" },
            { value: "500+", label: "Projects" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Enroll Now
          </motion.button>
        </div>

      </div>
    </section>
  );
}
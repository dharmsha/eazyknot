'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Zap } from 'lucide-react';

const programs = [
  {
    title: "Full Stack Development",
    desc: "Master the complete ecosystem from frontend to cloud architecture. Build production-ready apps.",
    tag: "Most Popular",
    stats: "12 Weeks • 4 Projects",
    hasIcon: true,
    icon: <Code size={22} className="text-white" />,
    bg: "bg-[#0A0A0A]"
  },
  {
    title: "AI & Machine Learning",
    desc: "Deep dive into neural networks and LLM integration. Modern approach to data science.",
    tag: "New",
    stats: "8 Weeks • 3 Projects",
    hasIcon: false, // Second card - No Icon
    bg: "bg-[#0F1115]"
  },
  {
    title: "System Design Pro",
    desc: "Learn to build systems that scale to millions. High-level architecture for senior roles.",
    tag: "Advanced",
    stats: "6 Weeks • Case Studies",
    hasIcon: true,
    icon: <Zap size={22} className="text-white" />,
    bg: "bg-[#0A0A0A]"
  }
];

export default function CleanPrograms() {
  return (
    <section className="py-24 bg-[#050505] min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simple & Bold */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Our Programs
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`${item.bg} border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,1)]`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* Icon Condition */}
                  {item.hasIcon ? (
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  ) : (
                    <div className="h-12" /> // Spacer if no icon to maintain alignment
                  )}
                  
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 border border-white/5 px-3 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {item.stats}
                </span>
                
                <button className="flex items-center gap-2 text-sm font-semibold group">
                  <span className="group-hover:mr-1 transition-all underline decoration-blue-600/50 underline-offset-4">Details</span>
                  <ArrowUpRight size={16} className="text-blue-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Star, Target, Crown } from 'lucide-react';

const programs = [
  {
    title: "Full Stack Development",
    desc: "Become a 1% Engineer. Master Next.js, Go, and AWS.",
    size: "md:col-span-2 md:row-span-2",
    icon: <Zap className="text-yellow-400" />,
    img: "bg-gradient-to-br from-blue-600/20 to-violet-600/20",
    tag: "Flagship"
  },
  {
    title: "AI & Prompting",
    desc: "Build LLMs and AI Agents.",
    size: "md:col-span-1 md:row-span-1",
    icon: <Target className="text-red-400" />,
    img: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    tag: "New"
  },
  {
    title: "UI/UX Design",
    desc: "High-end product design.",
    size: "md:col-span-1 md:row-span-1",
    icon: <Crown className="text-purple-400" />,
    img: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    tag: "Creative"
  },
  {
    title: "System Design",
    desc: "Scale apps to millions of users.",
    size: "md:col-span-2 md:row-span-1",
    icon: <Star className="text-emerald-400" />,
    img: "bg-gradient-to-br from-emerald-500/10 to-cyan-500/10",
    tag: "Advanced"
  }
];

export default function ExplorePrograms() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Minimal Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Pick your path.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md font-medium">
            Curated programs designed for the next generation of tech leaders.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 dark:border-white/10 p-8 flex flex-col justify-between ${p.size} ${p.img} backdrop-blur-3xl`}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-gray-500">
                    {p.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mt-6 text-black dark:text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium max-w-[200px]">
                  {p.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 flex items-center justify-between mt-4">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:underline">
                  Explore <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Decorative Background Shape */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-current opacity-[0.03] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm font-medium">
            Not sure? <span className="text-black dark:text-white underline cursor-pointer hover:text-blue-500 transition-colors">Talk to our career counselor</span>
          </p>
        </div>
      </div>
    </section>
  );
}
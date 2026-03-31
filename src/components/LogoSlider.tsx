'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Cpu, Smartphone, Play, Globe, Building2, GraduationCap, 
  Cloud, Zap, Code, Laptop, Brain, Shield, icons, Anchor, 
  Database, Fingerprint, Layers, Layout, Mail, Map, Microscope, 
  Music, Phone, Radio, Settings 
} from 'lucide-react';

const logos = [
  { name: "Creators Mind", icon: <Rocket size={32} />, special: true },
  { name: "Google", icon: <Building2 size={32} /> },
  { name: "Microsoft", icon: <Cloud size={32} /> },
  { name: "Amazon", icon: <Cpu size={32} /> },
  { name: "Tesla", icon: <Zap size={32} /> },
  { name: "Apple", icon: <Laptop size={32} /> },
  { name: "Meta", icon: <Code size={32} /> },
  { name: "Netflix", icon: <Play size={32} /> },
  { name: "Samsung", icon: <Smartphone size={32} /> },
  { name: "Uber", icon: <Globe size={32} /> },
  { name: "OpenAI", icon: <Brain size={32} /> },
  { name: "MIT", icon: <GraduationCap size={32} /> },
  { name: "Adobe", icon: <Layout size={32} /> },
  { name: "Spotify", icon: <Music size={32} /> },
  { name: "Stripe", icon: <Shield size={32} /> },
  { name: "Airbnb", icon: <Map size={32} /> },
  { name: "SpaceX", icon: <Anchor size={32} /> },
  { name: "Intel", icon: <Database size={32} /> },
  { name: "IBM", icon: <Fingerprint size={32} /> },
  { name: "Oracle", icon: <Layers size={32} /> },
  { name: "Slack", icon: <Mail size={32} /> },
  { name: "Nvidia", size: 32, icon: <Microscope size={32} /> },
  { name: "Sony", icon: <Phone size={32} /> },
  { name: "Twitter", icon: <Radio size={32} /> },
  { name: "Cisco", icon: <Settings size={32} /> },
];

export default function PremiumLogoSlider() {
  // Animation ke liye array ko double kar rahe hain for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white dark:bg-black py-20 overflow-hidden border-y border-gray-100 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-4">
        <p className="text-center text-sm font-bold text-gray-400 dark:text-gray-500 mb-16 uppercase tracking-[0.4em]">
          Empowering Students at Global Giants
        </p>
        
        <div className="relative flex items-center">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" />

          {/* Framer Motion Slider */}
          <motion.div 
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40, // Speed: jitna zyada number, utna slow
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className={`
                  flex items-center gap-4 px-8 py-5 rounded-2xl border transition-all duration-300
                  ${logo.special 
                    ? "bg-amber-500/10 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                    : "bg-gray-50 dark:bg-white/[0.03] border-transparent hover:border-gray-200 dark:hover:border-white/10"
                  }
                `}
              >
                <div className={`${logo.special ? "text-amber-500" : "text-gray-500 dark:text-gray-400"}`}>
                  {logo.icon}
                </div>
                <span className={`
                  text-lg font-bold whitespace-nowrap tracking-tight
                  ${logo.special ? "text-amber-600 dark:text-amber-400" : "text-gray-700 dark:text-gray-300"}
                `}>
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
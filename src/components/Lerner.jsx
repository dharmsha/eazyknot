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
  Clock,
  TrendingUp,
  Zap
} from 'lucide-react';

const benefits = [
  {
    title: "World Class Pedagogy",
    icon: <Award className="text-yellow-400" size={28} />,
    gradient: "from-yellow-500/10 to-orange-500/10",
    hoverGradient: "from-yellow-500/20 to-orange-500/20",
    color: "yellow",
    features: [
      { text: "4.8/5 Rating", icon: <Star size={14} /> },
      { text: "Gamified Learning", icon: <Gamepad2 size={14} /> },
      { text: "Learn from the World's Best Faculty & Industry Experts", icon: <Users size={14} /> },
      { text: "Learn with fun Hands-on Exercises & Assignments", icon: <Zap size={14} /> }
    ]
  },
  {
    title: "24 x 7 Support",
    icon: <Headphones className="text-blue-400" size={28} />,
    gradient: "from-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/20 to-cyan-500/20",
    color: "blue",
    features: [
      { text: "Dedicated Learning Managers", icon: <Users size={14} /> },
      { text: "24*7 Learning Support", icon: <MessageCircle size={14} /> },
      { text: "Network with Peers & Interact with Industry Experts", icon: <Users size={14} /> }
    ]
  },
  {
    title: "Career Assistance",
    icon: <Briefcase className="text-emerald-400" size={28} />,
    gradient: "from-emerald-500/10 to-teal-500/10",
    hoverGradient: "from-emerald-500/20 to-teal-500/20",
    color: "emerald",
    features: [
      { text: "85,000+ Career Transitions", icon: <TrendingUp size={14} /> },
      { text: "Resume Building & Mock Interview Prep", icon: <FileText size={14} /> },
      { text: "Exclusive access to Job Portal", icon: <Building2 size={14} /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export default function LearnerBenefits() {
  const getColorStyles = (color) => {
    const colors = {
      yellow: {
        border: "border-yellow-500/20",
        iconBg: "bg-yellow-500/10",
        tag: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
        button: "hover:text-yellow-500",
        glow: "from-yellow-500/5 to-orange-500/5"
      },
      blue: {
        border: "border-blue-500/20",
        iconBg: "bg-blue-500/10",
        tag: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        button: "hover:text-blue-500",
        glow: "from-blue-500/5 to-cyan-500/5"
      },
      emerald: {
        border: "border-emerald-500/20",
        iconBg: "bg-emerald-500/10",
        tag: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        button: "hover:text-emerald-500",
        glow: "from-emerald-500/5 to-teal-500/5"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-gray-200 dark:border-white/10 mb-6">
            <Star size={14} className="text-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Learner Benefits
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to succeed in your learning journey
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => {
            const colorStyles = getColorStyles(benefit.color);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-3xl border ${colorStyles.border} bg-gradient-to-br ${benefit.gradient} hover:bg-gradient-to-br hover:${benefit.hoverGradient} backdrop-blur-sm transition-all duration-300`}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorStyles.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500`} />

                <div className="relative z-10 p-8">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`p-4 rounded-2xl ${colorStyles.iconBg} backdrop-blur-sm border border-gray-200 dark:border-white/10`}
                    >
                      {benefit.icon}
                    </motion.div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/50 to-transparent dark:from-white/5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  {/* Features List */}
                  <div className="space-y-4">
                    {benefit.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        variants={itemVariants}
                        custom={fIdx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`mt-0.5 p-1 rounded-full ${colorStyles.iconBg} group-hover/item:scale-110 transition-transform`}>
                          <div className={feature.text.includes("4.8") ? "text-yellow-500" : "text-current"}>
                            {feature.icon}
                          </div>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-current opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Students Enrolled", value: "50,000+", icon: <Users size={20} /> },
            { label: "Success Rate", value: "92%", icon: <TrendingUp size={20} /> },
            { label: "Expert Faculty", value: "200+", icon: <Award size={20} /> },
            { label: "Live Projects", value: "500+", icon: <Zap size={20} /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10"
            >
              <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-gray-200 dark:border-white/10 hover:border-yellow-500/30 transition-all cursor-pointer group">
            <Zap size={20} className="text-yellow-500" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ready to start your journey?{' '}
              <span className="text-yellow-600 dark:text-yellow-400 underline decoration-2 underline-offset-2 group-hover:decoration-yellow-500 transition-all">
                Enroll Now
              </span>
            </p>
            <Star size={16} className="text-yellow-500 group-hover:rotate-12 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Rocket, Shield, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: "25,000+", label: "Students Trained", icon: Users },
    { value: "50+", label: "Expert Trainers", icon: Award },
    { value: "30+", label: "Job Oriented Courses", icon: Rocket },
    { value: "92%", label: "Placement Rate", icon: TrendingUp },
  ];

  const values = [
    { icon: Heart, title: "Student First", desc: "Every decision prioritizes student success and career growth." },
    { icon: Shield, title: "Quality Education", desc: "Industry-relevant curriculum taught by expert professionals." },
    { icon: Target, title: "Job Ready Focus", desc: "Practical skills that prepare you for real-world challenges." },
    { icon: Eye, title: "Continuous Support", desc: "Lifetime guidance and mentorship for every student." },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About EzyKnot Careers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Empowering careers through skill-based education and job-ready training programs
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, EzyKnot Careers started with a simple mission: to bridge the gap between academic education and industry requirements. We believe that every student deserves access to quality skill development that leads to meaningful employment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide accessible, affordable, and industry-relevant skill training that transforms students into job-ready professionals.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">To become India's most trusted platform for career-focused education, creating 1 million successful careers by 2030.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at EzyKnot Careers</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">What makes EzyKnot Careers different from others</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Industry-Aligned Curriculum</h3>
              <p className="text-sm text-gray-500">Courses designed with input from industry experts</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-sm text-gray-500">Learn from experienced professionals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Placement Assistance</h3>
              <p className="text-sm text-gray-500">Resume building and interview preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of students who have transformed their careers with EzyKnot Careers
          </p>
          <Link 
            href="/register" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Join Free Today
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
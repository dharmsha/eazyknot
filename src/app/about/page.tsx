'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, Users, Clock, Briefcase, CheckCircle, 
  TrendingUp, Heart, Globe, Zap, Target, Rocket 
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "Students Trained" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Industry Courses" },
    { icon: <Briefcase className="w-8 h-8" />, value: "85%", label: "Placement Rate" },
    { icon: <Globe className="w-8 h-8" />, value: "10+", label: "Countries" }
  ];

  const values = [
    { icon: <Target />, title: "Excellence", desc: "Striving for the highest quality in everything we do" },
    { icon: <Heart />, title: "Student First", desc: "Our students' success is our top priority" },
    { icon: <Zap />, title: "Innovation", desc: "Constantly updating curriculum with latest tech" },
    { icon: <Rocket />, title: "Growth", desc: "Helping students achieve their career goals" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8 }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Empowering Careers Through Quality Education
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              EzyKnot is committed to bridging the gap between industry requirements and student skills,
              providing job-ready training for the digital economy.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto md:mx-0 mb-4">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality, industry-relevant education that empowers individuals 
                to build successful careers and adapt to the rapidly changing technological landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto md:mx-0 mb-4">
                <Rocket size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted ed-tech platform, creating industry-ready professionals 
                and transforming 1 million+ careers by 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at EzyKnot
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={idx}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose EzyKnot?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes us different from other training providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Industry Expert Trainers</h3>
                <p className="text-gray-600">Learn from professionals with 10+ years of industry experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build real-world projects that strengthen your portfolio</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Placement Assistance</h3>
                <p className="text-gray-600">Dedicated placement cell with 500+ hiring partners</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Lifetime Access</h3>
                <p className="text-gray-600">Access course materials and recordings anytime</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">Weekend and weekday batches to suit your routine</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Certification</h3>
                <p className="text-gray-600">Industry-recognized certificate upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 opacity-95">Join 50,000+ successful students who have transformed their careers</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Enroll Now
            </Link>
            <Link href="/courses" className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
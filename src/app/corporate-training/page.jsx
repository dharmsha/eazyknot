'use client';

import React, { useState } from 'react';
import { 
  Building2, Users, Trophy, Clock, Calendar, CheckCircle, 
  ArrowRight, Briefcase, Star, Target, Zap, Shield,
  Phone, Mail, MapPin, Send, Award, BookOpen, Code,
  Database, Brain, BarChart3, Globe, Laptop, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CorporateTraining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! Our team will contact you within 24 hours.');
    setFormData({
      name: '', email: '', phone: '', company: '', employees: '', course: '', message: ''
    });
  };

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: "Customized Training", desc: "Tailored curriculum based on your team's needs" },
    { icon: <Trophy className="w-6 h-6" />, title: "Industry Experts", desc: "Trainers with 10+ years industry experience" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Schedule", desc: "Training at your convenience, any time slot" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Hands-on Projects", desc: "Real-world projects and case studies" },
    { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Industry recognized certificates" },
    { icon: <Briefcase className="w-6 h-6" />, title: "24/7 Support", desc: "Dedicated support throughout the program" }
  ];

  const courses = [
    { icon: <Code />, name: "Web Development", duration: "4-6 weeks", level: "Beginner to Advanced" },
    { icon: <Database />, name: "Data Science & AI", duration: "6-8 weeks", level: "Intermediate" },
    { icon: <Brain />, name: "Machine Learning", duration: "5-7 weeks", level: "Advanced" },
    { icon: <BarChart3 />, name: "Digital Marketing", duration: "3-4 weeks", level: "Beginner" },
    { icon: <Laptop />, name: "Cloud Computing", duration: "4-5 weeks", level: "Intermediate" },
    { icon: <TrendingUp />, name: "Business Analytics", duration: "3-4 weeks", level: "Beginner" },
    { icon: <Shield />, name: "Cybersecurity", duration: "5-6 weeks", level: "Advanced" },
    { icon: <Globe />, name: "Full Stack Development", duration: "6-8 weeks", level: "Intermediate" }
  ];

  const clients = [
    "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", 
    "Accenture", "IBM", "Deloitte", "KPMG", "PwC", "Cognizant"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-semibold">Corporate Training</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Upskill Your Team for the Digital Future
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Empower your workforce with industry-relevant skills. Customized training programs 
                delivered by expert trainers with hands-on projects and real-world case studies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>500+ Companies Trained</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>98% Satisfaction Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Flexible Batches</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                  required
                />
                <select
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="" className="text-gray-800">Number of Employees</option>
                  <option value="1-10" className="text-gray-800">1-10</option>
                  <option value="11-50" className="text-gray-800">11-50</option>
                  <option value="51-200" className="text-gray-800">51-200</option>
                  <option value="201-500" className="text-gray-800">201-500</option>
                  <option value="500+" className="text-gray-800">500+</option>
                </select>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="" className="text-gray-800">Select Course</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course.name} className="text-gray-800">{course.name}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Your Requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Request Callback <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Companies Choose EzyKnot
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive corporate training solutions tailored to your business needs
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Courses We Offer */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Corporate Training Programs
          </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-relevant courses designed for working professionals
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {course.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{course.name}</h3>
                <p className="text-sm text-gray-500 mb-1">Duration: {course.duration}</p>
                <p className="text-xs text-gray-400">{course.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 500+ Companies
          </h2>
          <p className="text-gray-600">
            Join the leading organizations that have upskilled with EzyKnot
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, idx) => (
            <div key={idx} className="text-gray-500 font-semibold text-lg hover:text-blue-600 transition-colors">
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Why Corporate Training */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Invest in Corporate Training?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Increase productivity and efficiency by up to 40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Stay competitive with latest technologies and trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Improve employee retention and satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Reduce recruitment costs by upskilling existing talent</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="mb-4">Client Satisfaction Rate</p>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="mb-4">Companies Trained</p>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <p>Professionals Upskilled</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Let's Discuss Your Training Needs</h2>
              <p className="text-gray-600 mb-6">
                Our corporate training experts will get back to you within 24 hours with a customized proposal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>corporate@ezyknot.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Mumbai, India (Global Delivery)</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 lg:p-12 text-white">
              <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">✓ Customized learning paths</li>
                <li className="flex items-center gap-2">✓ Flexible delivery modes (Online/Offline/Hybrid)</li>
                <li className="flex items-center gap-2">✓ Industry expert trainers</li>
                <li className="flex items-center gap-2">✓ Hands-on projects & case studies</li>
                <li className="flex items-center gap-2">✓ Post-training support</li>
                <li className="flex items-center gap-2">✓ Detailed progress reports</li>
              </ul>
              <Link href="/contact" className="inline-block mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;
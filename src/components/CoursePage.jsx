'use client';

import React, { useState } from 'react';
import {
  Clock, Calendar, Users, Star, Globe, CheckCircle, Briefcase, 
  Award, BookOpen, Code, Shield, Zap, ChevronRight, Heart, 
  Download, Share2, MessageCircle, GraduationCap, Target, Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CoursePage = ({ course }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-0 lg:pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <span className="bg-white/20 px-3 py-1 rounded-full">🔥 Most Popular</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} ({course.studentsEnrolled}+ ratings)</span>
                </span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">📋 {course.level}</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-blue-100">
                {course.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                  <Globe className="w-4 h-4" />
                  <span>{course.mode}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  <span>{course.studentsEnrolled}+ Learners</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Start: {course.nextBatch}</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-800">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-blue-600">{course.fee}</span>
                <span className="text-gray-500"> + GST</span>
                <p className="text-sm text-green-600 mt-2">✨ EMI Available</p>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>7 Days Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span>Lifetime Access to Recordings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Enroll Now
              </button>
              
              <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} 
                       onClick={() => setIsWishlisted(!isWishlisted)} />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-2 space-y-1">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'curriculum', label: 'Curriculum', icon: Code },
                { id: 'features', label: 'Features', icon: Award },
                { id: 'careers', label: 'Careers', icon: Briefcase }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-6">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">About the Course</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{course.description}</p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills You'll Master</h2>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Projects You'll Build</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.projects.map((project, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Top Hiring Companies</h2>
                  <div className="flex flex-wrap gap-4">
                    {course.companies.map((company, idx) => (
                      <span key={idx} className="text-gray-700 font-medium px-4 py-2 bg-gray-100 rounded-lg text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {course.testimonials.length > 0 && (
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Student Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.testimonials.map((test, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                          <p className="text-gray-600 italic mb-3">"{test.text}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {test.name[0]}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{test.name}</p>
                              <p className="text-xs text-gray-500">{test.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'curriculum' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Course Curriculum</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((module, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4">
                          <h3 className="font-semibold text-blue-600">{module.title}</h3>
                        </div>
                        <ul className="p-4 space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                              <ChevronRight size={14} className="text-blue-400" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Course Features</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'careers' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Career Opportunities</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3 font-semibold">Job Role</th>
                          <th className="text-left p-3 font-semibold">Average Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.careers.map((career, idx) => (
                          <tr key={idx} className="border-b border-gray-100">
                            <td className="p-3 font-medium">{career.role}</td>
                            <td className="p-3 text-blue-600 font-semibold">{career.avgSalary}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2">Get 100% Placement Assistance</h3>
                  <p className="text-gray-600 mb-4">Dedicated placement cell, resume building, mock interviews, and job referrals</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Talk to Career Advisor
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Enroll Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 opacity-95">Join {course.studentsEnrolled}+ learners and transform your career</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Enroll Now @ {course.fee}
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
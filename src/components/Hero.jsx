'use client';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CleanHero() {
  return (
    <div className="bg-white dark:bg-gray-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm text-gray-600">Learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-gray-600">Hiring Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold">85%</div>
            <div className="text-sm text-gray-600">Placement Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.8</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Advance Your Career with{' '}
            <span className="text-blue-600">Industry Programs</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Get job-ready with practical training from industry experts.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link 
              href="/courses"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </div>
          
          {/* Simple Features */}
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">1-on-1 Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
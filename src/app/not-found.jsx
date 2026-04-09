"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        
        {/* Brand Name - Properly Formatted */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-orange-100 rounded-full mb-4">
            <span className="text-xl md:text-2xl font-bold text-orange-600">
              Creators Mind Brand
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            www.creatorsmind.co.in
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-20 h-1 bg-orange-300 mx-auto mb-8 rounded-full"></div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-3">
          Oops! We couldn't find that page.
        </p>
        
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for might have been moved, deleted, 
          or never existed in the first place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </button>
          </Link>
          
          <Link href="/courses">
            <button className="px-8 py-3 bg-white border-2 border-orange-200 text-orange-600 font-semibold rounded-xl hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View All Courses
            </button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
             You might want to check:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
              Contact Support
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
              Latest Blogs
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/sitemap" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-sm text-gray-400 mt-8">
          Need immediate help?{" "}
          <Link href="/contact" className="text-orange-600 hover:underline font-medium">
            Contact Our Support Team
          </Link>{" "}
          
        </p>

        {/* Fun Element */}
        <div className="mt-6">
          <p className="text-xs text-gray-400">
             Pro tip: Double-check the URL or use the search bar above
          </p>
        </div>
      </div>
    </div>
  );
}
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft, Home, Clock } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Animated Construction Icon */}
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="inline-flex p-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-8"
        >
          <Construction size={64} className="text-yellow-600 dark:text-yellow-400" />
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          This page is currently under development. We're working hard to bring you something amazing!
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Development Progress</span>
            <span>75%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              <Home size={18} />
              Back to Home
            </motion.button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Notify Me Section */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock size={18} className="text-blue-500" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Get notified when it's ready</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all">
              Notify Me
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
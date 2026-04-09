'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GameHero() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Learn from the <br />
              <span className="text-yellow-500">best mentors</span> <br />
              & build your career
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Join thousands of students who are mastering industry skills and
              getting placed in top companies.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                Explore Courses
              </Link>

              <Link
                href="/register"
                className="px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Login / Register
              </Link>
            </div>

            {/* TRUST BADGE */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <Image
                src="/dk.png"
                alt="Founder"
                width={55}
                height={55}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  Shubham Kumar
                </p>
                <p className="text-sm text-gray-500">
                  Founder • 100K+ Students Mentored
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="/dk.png"
              alt="Mentor"
              width={550}
              height={550}
              priority
              className="object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {

  const stats = [
    { value: "25,000+", label: "Students Trained" },
    { value: "50+", label: "Expert Trainers" },
    { value: "30+", label: "Job Oriented Courses" },
    { value: "92%", label: "Placement Rate" },
  ];

  const values = [
    { title: "Student First", desc: "Every decision prioritizes student success and career growth." },
    { title: "Quality Education", desc: "Industry-relevant curriculum taught by expert professionals." },
    { title: "Job Ready Focus", desc: "Practical skills that prepare you for real-world challenges." },
    { title: "Continuous Support", desc: "Lifetime guidance and mentorship for every student." },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8 }
    })
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden relative">

      {/* Floating Animated Background */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] -top-32 -left-32"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] -bottom-32 -right-32"
      />

      {/* HERO */}
      <section className="relative py-32 text-center container mx-auto px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
            EzyKnot Careers
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Empowering careers through skill-based education and job-ready training programs.
        </motion.p>
      </section>


      {/* STATS */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.08 }}
              className="text-center p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-500 mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* MISSION + VISION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">

          {["Mission", "Vision"].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our {item}
              </h2>
              <p className="text-gray-600">
                {item === "Mission"
                  ? "To provide accessible, affordable, and industry-relevant skill training that transforms students into job-ready professionals."
                  : "To become India's most trusted platform for career-focused education, creating 1 million successful careers by 2030."}
              </p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* VALUES */}
      <section className="py-28 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16"
        >
          What Drives Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="py-28 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-[120px] top-0 left-0"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>

          <p className="mb-10 text-blue-100 max-w-xl mx-auto">
            Join thousands of students who have transformed their careers.
          </p>

          <Link
            href="/register"
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:scale-110 transition-all duration-300 shadow-lg inline-block"
          >
            Join Free Today
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
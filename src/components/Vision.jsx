'use client';
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full bottom-20 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Vision
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-white font-semibold">EzyKnot</span>, 
            we believe education is not just about learning skills — 
            it’s about unlocking potential, building confidence, 
            and transforming dreams into reality.
          </p>
        </motion.div>

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌍 Empowering Every Learner
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We envision a world where quality education is accessible to everyone —
              regardless of background, location, or financial status. 
              Our mission is to simplify learning, remove barriers, 
              and create opportunities for students to grow beyond limits.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl">
            <p className="text-lg text-gray-300 italic">
              “When knowledge becomes simple, growth becomes unstoppable.”
            </p>
          </div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl order-2 md:order-1">
            <p className="text-lg text-gray-300 italic">
              “Skills build careers. Confidence builds futures.”
            </p>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Building Future Leaders
            </h2>
            <p className="text-gray-400 leading-relaxed">
              EzyKnot is not just a platform — it’s a movement. 
              We focus on practical skills, real-world experience, 
              and industry-ready training so learners can step confidently 
              into their careers and lead the future.
            </p>
          </div>
        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our Promise
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            We promise to continuously innovate, inspire, and uplift learners. 
            Our vision is to make <span className="text-white font-semibold">EzyKnot</span> 
            a symbol of trust, growth, and transformation in the education world.
          </p>

          <div className="mt-10">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/40">
              Join The Movement
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
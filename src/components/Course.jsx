'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [buyingId, setBuyingId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'));

      const coursesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setCourses(coursesData);
    } catch (err) {
      console.error(err);
      setError('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = async (course) => {
    try {
      setBuyingId(course.id);

      await addDoc(collection(db, 'orders'), {
        courseId: course.id,
        courseTitle: course.title,
        price: course.price,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      alert('Course Ordered Successfully ✅');
    } catch (err) {
      console.error(err);
      alert('Failed to place order ❌');
    } finally {
      setBuyingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Our Courses
        </h1>

        {loading && (
          <p className="text-center text-gray-400">Loading courses...</p>
        )}

        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && courses.length === 0 && (
          <p className="text-center text-gray-400">No courses available</p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            >
              <img
                src={course.image || "/placeholder.png"}
                alt={course.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.png";
                }}
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  {course.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">
                    ₹{course.price}
                  </span>

                  <button
                    onClick={() => handleBuyNow(course)}
                    disabled={buyingId === course.id}
                    className="flex items-center gap-2 text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                  >
                    {buyingId === course.id ? "Processing..." : "Buy Now"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
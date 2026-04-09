'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

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
      alert('✅ Course Ordered Successfully!');
    } catch (err) {
      alert('❌ Failed to place order.');
    } finally {
      setBuyingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-semibold text-gray-900">
            Our Courses
          </h1>
          <p className="text-gray-500 mt-2">
            Simple learning. Clear pricing. No confusion.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400">
            Loading courses...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        {/* Courses */}
        {!loading && courses.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-3xl">
                      📘
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-lg font-medium text-gray-800 mb-1 line-clamp-1">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {course.description || "High quality structured course content."}
                </p>

                {/* Meta */}
                <div className="flex justify-between text-xs text-gray-400 mb-4">
                  <span>{course.duration || "10 hrs"}</span>
                  <span>{course.students || "100+"} students</span>
                </div>

                {/* Price */}
                <div className="text-lg font-semibold text-gray-900 mb-4">
                  ₹{course.price}
                </div>

                {/* Button */}
                <button
                  onClick={() => handleBuyNow(course)}
                  disabled={buyingId === course.id}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {buyingId === course.id ? "Processing..." : "Buy Now"}
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && courses.length === 0 && (
          <div className="text-center text-gray-400">
            No courses available.
          </div>
        )}

        {/* Footer */}
        {!loading && courses.length > 0 && (
          <div className="text-center mt-16 text-xs text-gray-400">
            Secure purchase • Lifetime access • Instant confirmation
          </div>
        )}
      </div>
    </div>
  );
}
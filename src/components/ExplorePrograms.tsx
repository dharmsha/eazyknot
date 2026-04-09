"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Briefcase,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Users,
  Star,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "916200453132";

// Type definitions
interface Course {
  id: number;
  title: string;
  duration: string;
  lessons: string;
  students: string;
  rating: string;
  tag: string;
  icon: React.ElementType;
  jobs: string;
  salary: string;
}

const courses: Course[] = [
  // Frontend Development
  { id: 1, title: "Full Stack Web Development", duration: "6 Months", lessons: "200+ Video Lessons", students: "25,000+", rating: "4.9", tag: "Bestseller", icon: Code, jobs: "Frontend Developer, React Dev", salary: "₹4-12 LPA" },
  { id: 2, title: "React.js Mastery Course", duration: "3 Months", lessons: "80+ Video Lessons", students: "18,000+", rating: "4.8", tag: "Popular", icon: Code, jobs: "React Developer, UI Dev", salary: "₹3-8 LPA" },
  { id: 3, title: "Next.js Complete Bootcamp", duration: "3 Months", lessons: "90+ Video Lessons", students: "12,000+", rating: "4.9", tag: "Top Rated", icon: Code, jobs: "Next.js Dev, Full Stack", salary: "₹5-15 LPA" },
  { id: 4, title: "Vue.js & Nuxt.js Program", duration: "3 Months", lessons: "70+ Video Lessons", students: "8,000+", rating: "4.7", tag: "New", icon: Code, jobs: "Vue Developer, Frontend", salary: "₹3-9 LPA" },
  { id: 5, title: "Angular Complete Guide", duration: "4 Months", lessons: "100+ Video Lessons", students: "10,000+", rating: "4.7", tag: "Popular", icon: Code, jobs: "Angular Dev, Frontend", salary: "₹4-10 LPA" },
  // Backend Development
  { id: 6, title: "Node.js Backend Mastery", duration: "4 Months", lessons: "120+ Video Lessons", students: "15,000+", rating: "4.8", tag: "Popular", icon: Database, jobs: "Backend Dev, API Dev", salary: "₹4-12 LPA" },
  { id: 7, title: "Python Backend Development", duration: "4 Months", lessons: "110+ Video Lessons", students: "20,000+", rating: "4.9", tag: "Bestseller", icon: Database, jobs: "Python Dev, Backend", salary: "₹5-15 LPA" },
  { id: 8, title: "Java Spring Boot Course", duration: "5 Months", lessons: "140+ Video Lessons", students: "12,000+", rating: "4.8", tag: "Top Rated", icon: Database, jobs: "Java Dev, Spring Boot", salary: "₹5-14 LPA" },
  { id: 9, title: "PHP & Laravel Program", duration: "3 Months", lessons: "80+ Video Lessons", students: "9,000+", rating: "4.6", tag: "New", icon: Database, jobs: "PHP Dev, Laravel", salary: "₹3-8 LPA" },
  { id: 10, title: "Go Language Development", duration: "3 Months", lessons: "70+ Video Lessons", students: "5,000+", rating: "4.7", tag: "Popular", icon: Database, jobs: "Go Dev, Microservices", salary: "₹6-18 LPA" },
  // Data Science & AI
  { id: 11, title: "Data Science & Analytics", duration: "6 Months", lessons: "180+ Video Lessons", students: "22,000+", rating: "4.9", tag: "Bestseller", icon: TrendingUp, jobs: "Data Scientist, Analyst", salary: "₹6-20 LPA" },
  { id: 12, title: "Machine Learning Course", duration: "5 Months", lessons: "150+ Video Lessons", students: "18,000+", rating: "4.8", tag: "Top Rated", icon: TrendingUp, jobs: "ML Engineer, AI Dev", salary: "₹7-25 LPA" },
  { id: 13, title: "Artificial Intelligence Program", duration: "6 Months", lessons: "160+ Video Lessons", students: "15,000+", rating: "4.9", tag: "Popular", icon: TrendingUp, jobs: "AI Engineer, NLP", salary: "₹8-30 LPA" },
  { id: 14, title: "Deep Learning Specialization", duration: "4 Months", lessons: "100+ Video Lessons", students: "10,000+", rating: "4.8", tag: "New", icon: TrendingUp, jobs: "Deep Learning Eng", salary: "₹10-35 LPA" },
  { id: 15, title: "SQL & Database Management", duration: "2 Months", lessons: "60+ Video Lessons", students: "30,000+", rating: "4.7", tag: "Popular", icon: Database, jobs: "DBA, Data Analyst", salary: "₹3-10 LPA" },
  // Mobile Development
  { id: 16, title: "React Native Mobile Dev", duration: "4 Months", lessons: "110+ Video Lessons", students: "14,000+", rating: "4.8", tag: "Popular", icon: Smartphone, jobs: "React Native Dev", salary: "₹4-12 LPA" },
  { id: 17, title: "Flutter Complete Course", duration: "4 Months", lessons: "100+ Video Lessons", students: "12,000+", rating: "4.8", tag: "Top Rated", icon: Smartphone, jobs: "Flutter Dev, Mobile", salary: "₹4-12 LPA" },
  { id: 18, title: "iOS Swift Development", duration: "4 Months", lessons: "90+ Video Lessons", students: "8,000+", rating: "4.7", tag: "New", icon: Smartphone, jobs: "iOS Developer", salary: "₹5-18 LPA" },
  { id: 19, title: "Android Kotlin Program", duration: "4 Months", lessons: "95+ Video Lessons", students: "10,000+", rating: "4.7", tag: "Popular", icon: Smartphone, jobs: "Android Developer", salary: "₹4-14 LPA" },
  // DevOps & Cloud
  { id: 20, title: "DevOps Engineering Course", duration: "5 Months", lessons: "130+ Video Lessons", students: "11,000+", rating: "4.9", tag: "Bestseller", icon: Cloud, jobs: "DevOps Engineer", salary: "₹6-22 LPA" },
  { id: 21, title: "AWS Cloud Computing", duration: "4 Months", lessons: "100+ Video Lessons", students: "15,000+", rating: "4.8", tag: "Top Rated", icon: Cloud, jobs: "Cloud Engineer, AWS", salary: "₹5-20 LPA" },
  { id: 22, title: "Docker & Kubernetes", duration: "3 Months", lessons: "70+ Video Lessons", students: "9,000+", rating: "4.8", tag: "Popular", icon: Cloud, jobs: "Container Specialist", salary: "₹6-18 LPA" },
  { id: 23, title: "Azure Cloud Program", duration: "4 Months", lessons: "90+ Video Lessons", students: "7,000+", rating: "4.7", tag: "New", icon: Cloud, jobs: "Azure Engineer", salary: "₹5-18 LPA" },
  // Cybersecurity
  { id: 24, title: "Cybersecurity Professional", duration: "6 Months", lessons: "150+ Video Lessons", students: "10,000+", rating: "4.8", tag: "Popular", icon: Shield, jobs: "Security Analyst", salary: "₹5-20 LPA" },
  { id: 25, title: "Ethical Hacking Course", duration: "4 Months", lessons: "100+ Video Lessons", students: "12,000+", rating: "4.8", tag: "Top Rated", icon: Shield, jobs: "Ethical Hacker", salary: "₹4-15 LPA" },
  // Software Testing
  { id: 26, title: "Software Testing & QA", duration: "3 Months", lessons: "80+ Video Lessons", students: "13,000+", rating: "4.7", tag: "Popular", icon: Award, jobs: "QA Engineer, Tester", salary: "₹3-9 LPA" },
  { id: 27, title: "Automation Testing Selenium", duration: "3 Months", lessons: "70+ Video Lessons", students: "8,000+", rating: "4.7", tag: "New", icon: Award, jobs: "Automation Engineer", salary: "₹4-12 LPA" },
  // UI/UX Design
  { id: 28, title: "UI/UX Design Mastery", duration: "4 Months", lessons: "100+ Video Lessons", students: "14,000+", rating: "4.8", tag: "Popular", icon: Zap, jobs: "UI/UX Designer", salary: "₹3-12 LPA" },
  { id: 29, title: "Figma Design Course", duration: "2 Months", lessons: "50+ Video Lessons", students: "11,000+", rating: "4.7", tag: "New", icon: Zap, jobs: "Product Designer", salary: "₹3-10 LPA" },
  // Blockchain
  { id: 30, title: "Blockchain Development", duration: "4 Months", lessons: "90+ Video Lessons", students: "6,000+", rating: "4.8", tag: "New", icon: Shield, jobs: "Blockchain Dev", salary: "₹8-30 LPA" },
];

export default function JobOrientedSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = isMobile ? 280 : 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const currentScroll = scrollRef.current.scrollLeft;
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    
    let newScroll: number;
    if (direction === "left") {
      newScroll = Math.max(0, currentScroll - scrollAmount);
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      setCurrentIndex(Math.min(courses.length - 1, currentIndex + 1));
    }

    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
    
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = isMobile ? 280 : 340;
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  const openWhatsApp = (courseTitle: string) => {
    const message = `Hello, I want to know more about the "${courseTitle}" course. Please provide details about job placement.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const getTagColor = (tag: string): string => {
    switch (tag) {
      case 'Bestseller': return 'bg-green-600';
      case 'Top Rated': return 'bg-blue-600';
      case 'Popular': return 'bg-gray-600';
      default: return 'bg-gray-700';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Job Oriented Programs
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Career-Focused Courses
          </h2>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Industry-ready courses designed to help you land your dream job. {courses.length}+ programs available
          </p>
        </div>

        {/* Arrows - Hide on mobile */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: isMobile ? 0 : -8 }}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Icon Header */}
                <div className="relative bg-gray-800 p-3 sm:p-4 flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-700 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                  </div>
                  
                  <span className={`text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${getTagColor(course.tag)}`}>
                    {course.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-gray-700 transition">
                    {course.title}
                  </h3>

                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Users size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Star size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-500 fill-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                    <Check size={10} className="sm:w-3 sm:h-3 text-green-500" />
                    <span>{course.lessons}</span>
                  </div>

                  {/* Job Info */}
                  <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 mb-2 sm:mb-3">
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      <span className="font-semibold">🎯 Roles:</span> {course.jobs}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">
                      <span className="font-semibold">💰 Salary:</span> {course.salary}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openWhatsApp(course.title)}
                      className="flex-1 bg-gray-800 text-white py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-[11px] sm:text-sm hover:bg-gray-900 transition"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => openWhatsApp(course.title)}
                      className="flex-1 border border-gray-800 text-gray-800 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-[11px] sm:text-sm hover:bg-gray-800 hover:text-white transition"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex md:hidden justify-center gap-1 mt-4">
          <div className="flex gap-1 overflow-x-auto px-4 py-2 max-w-[90%]">
            {courses.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                  Math.abs(currentIndex - index) < 2
                    ? 'bg-gray-800 w-6'
                    : 'bg-gray-300 w-1.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">+{courses.length - 8} more</span>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex justify-center gap-2 mt-6 flex-wrap">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.abs(currentIndex - index) < 2
                  ? 'bg-gray-800 w-6'
                  : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello, I want to know more about all job oriented courses`, "_blank")}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-gray-800 hover:text-white transition-all"
          >
            View All {courses.length} Courses
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
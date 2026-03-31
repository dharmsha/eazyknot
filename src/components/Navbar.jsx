'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, User, BookOpen, ChevronRight, LayoutGrid, Award, Rocket, Home } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseCategories = [
    {
      title: "3 Months Job Ready",
      icon: <Rocket size={18} className="text-orange-500" />,
      courses: [
        { name: "Web Development", slug: "web-development" },
        { name: "Python", slug: "python" },
        { name: "MATLAB", slug: "matlab" },
        { name: "IoT", slug: "iot" },
        { name: "Robotics", slug: "robotics" },
        { name: "AI/ML", slug: "ai-ml" },
        { name: "Digital Marketing", slug: "digital-marketing" },
        { name: "Video Editing", slug: "video-editing" },
        { name: "Japanese N5", slug: "japanese-n5" }
      ]
    },
    {
      title: "6 Months Job Ready",
      icon: <Award size={18} className="text-blue-500" />,
      courses: [
        { name: "App Development", slug: "app-development" },
        { name: "Advanced Graphics", slug: "advanced-graphics" },
        { name: "UI/UX Design", slug: "ui-ux-design" },
        { name: "Basic Website Dev", slug: "basic-website-dev" },
        { name: "LinkedIn & Resume", slug: "linkedin-resume" }
      ]
    },
    {
      title: "9 Months Job Ready",
      icon: <LayoutGrid size={18} className="text-green-500" />,
      courses: [
        { name: "Complete App Dev", slug: "complete-app-dev" },
        { name: "Complete Web Dev", slug: "complete-web-dev" },
        { name: "Advance Sales", slug: "advance-sales" },
        { name: "Sales Management", slug: "sales-management" },
        { name: "Stock Marketing", slug: "stock-marketing" }
      ]
    },
    {
      title: "Others & Masterclass",
      icon: <BookOpen size={18} className="text-purple-500" />,
      courses: [
        { name: "Music Learning", slug: "music-learning" },
        { name: "Startup Master Class", slug: "startup-master-class" },
        { name: "Hybrid Electric Vehicle", slug: "hybrid-electric-vehicle" },
        { name: "AutoCAD", slug: "autocad" },
        { name: "Staad Pro", slug: "staad-pro" }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f1012]/95 backdrop-blur-md shadow-2xl' : 'bg-[#1a1c1e]'
    } text-white border-b border-gray-800`}>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Home Link */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center font-black text-xl group-hover:bg-blue-500 transition-all">E</div>
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                EzyKnot <span className="text-blue-500">Careers</span>
              </span>
            </Link>

            {/* Desktop Home Link */}
            <Link href="/" className="hidden xl:flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              <Home size={18} className="text-blue-500" />
              <span>Home</span>
            </Link>

            {/* Courses Dropdown */}
            <div className="hidden lg:block relative group">
              <button 
                onMouseEnter={() => setIsCoursesOpen(true)}
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 px-4 py-2.5 rounded text-sm font-semibold transition border border-gray-700"
              >
                <BookOpen size={18} className="text-blue-400" />
                <span>Explore Courses</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu */}
              {isCoursesOpen && (
                <div 
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  className="absolute top-full left-0 w-[800px] bg-[#1a1c1e] border border-gray-800 mt-2 rounded-xl shadow-2xl p-8 grid grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  {courseCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-2 font-bold text-[12px] text-blue-400 border-b border-gray-800 pb-2 uppercase tracking-wider">
                        {cat.icon} {cat.title}
                      </div>
                      <ul className="space-y-2">
                        {cat.courses.map((course, i) => (
                          <li key={i}>
                            <Link 
                              href={`/courses/${course.slug}`}
                              className="text-[13px] text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 group"
                            >
                              <ChevronRight size={12} className="text-gray-600 group-hover:text-blue-500" />
                              {course.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder="Search Skills, Courses..." 
                className="w-full bg-[#2a2d31] text-sm pl-4 pr-12 py-2.5 rounded-lg border border-transparent focus:border-blue-500 focus:bg-white focus:text-black outline-none transition-all duration-300"
              />
              <div className="absolute right-0 top-0 bottom-0 bg-blue-600 px-4 flex items-center rounded-r-lg group-hover:bg-blue-500 transition-colors">
                <Search size={18} />
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/corporate-training" className="text-[12px] font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">Corporate</Link>
            <div className="h-6 w-[1px] bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-bold px-4 py-2 hover:text-blue-400 transition-colors">Log In</Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
                Join Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-blue-400" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`fixed top-0 left-0 h-full w-[85%] bg-[#0f1012] p-8 transform transition-transform duration-500 border-r border-gray-800 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-black text-blue-500 tracking-tighter">EzyKnot</span>
            <X size={28} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
          </div>

          <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-2">
            {/* Mobile Home Link */}
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Home size={22} className="text-blue-500" />
              Home
            </Link>

            {courseCategories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  {cat.icon} {cat.title}
                </h4>
                <div className="grid grid-cols-1 gap-3 pl-6 border-l border-gray-800">
                  {cat.courses.map((course, i) => (
                    <Link 
                      key={i} 
                      href={`/courses/${course.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 border border-gray-700 rounded-xl font-bold text-center hover:bg-gray-800 transition-all">Log In</Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-blue-600 rounded-xl font-bold text-center shadow-xl shadow-blue-600/20">Join For Free</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
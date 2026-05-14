'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, BookOpen, ChevronRight, LayoutGrid, Award, Rocket, Home, LogOut, Settings, Info, Phone, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Temporary auth hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const logout = async () => {
    setUser(null);
  };
  
  return { user, logout, loading };
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

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

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About Us", href: "/about", icon: <Info size={18} /> },
    { name: "Contact Us", href: "/contact", icon: <Phone size={18} /> },
  ];

  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      } border-b border-gray-100`}>
        
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section - Only Image, No Text */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 flex-shrink-0">
              <Link href="/" className="flex-shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/ezy.jpeg"
                    alt="EzyKnot"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav Links - Hidden on Mobile */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all whitespace-nowrap"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Courses Dropdown - Desktop */}
              <div className="hidden lg:block relative">
                <button 
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition border border-gray-200 text-gray-700 whitespace-nowrap"
                >
                  <BookOpen size={16} className="text-blue-600" />
                  <span>Explore Courses</span>
                  <ChevronDown size={12} className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isCoursesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                      className="absolute top-full left-0 w-[800px] bg-white border border-gray-200 mt-2 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6 z-50"
                    >
                      {courseCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex items-center gap-2 font-bold text-xs text-blue-600 border-b border-gray-200 pb-2 uppercase tracking-wider">
                            {cat.icon} {cat.title}
                          </div>
                          <ul className="space-y-2">
                            {cat.courses.slice(0, 5).map((course, i) => (
                              <li key={i}>
                                <Link 
                                  href={`/courses/${course.slug}`}
                                  className="text-xs text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all flex items-center gap-1 group"
                                >
                                  <ChevronRight size={10} className="text-gray-400 group-hover:text-blue-600" />
                                  {course.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search Skills, Courses..." 
                  className="w-full bg-gray-100 text-gray-800 text-sm pl-5 pr-12 py-2 rounded-full border border-gray-200 focus:border-blue-400 focus:bg-white focus:outline-none transition-all"
                />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500 transition-colors">
                  <Search size={16} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Mobile Search Button */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all"
              >
                <Search size={20} />
              </button>

              {/* Desktop Right Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/corporate-training" className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase tracking-wider transition-colors whitespace-nowrap">
                  Corporate
                </Link>
                <div className="h-6 w-px bg-gray-300"></div>
                
                {!loading && (
                  <>
                    {user ? (
                      <div className="relative">
                        <button 
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-all"
                        >
                          {user.photo ? (
                            <img src={user.photo} alt={user.name} className="w-7 h-7 rounded-full border-2 border-blue-600" />
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                              {user.name?.[0] || 'U'}
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-700 max-w-[80px] truncate">{user.name?.split(' ')[0]}</span>
                          <ChevronDown size={12} className={`transition-transform text-gray-500 ${isProfileOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isProfileOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50"
                            >
                              <div className="p-3 border-b border-gray-100">
                                <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                              </div>
                              <div className="p-1">
                                <Link href="/dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                                  <LayoutGrid size={14} /> Dashboard
                                </Link>
                                <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                                  <Settings size={14} /> Settings
                                </Link>
                                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                                  <LogOut size={14} /> Logout
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Link href="/login" className="text-sm font-semibold px-3 py-1.5 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                          Log In
                        </Link>
                        <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md transition-all whitespace-nowrap">
                          Join Free
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden pb-3"
              >
                <div className="relative w-full">
                  <input 
                    type="text" 
                    placeholder="Search Skills, Courses..." 
                    className="w-full bg-gray-100 text-gray-800 text-sm pl-5 pr-12 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:bg-white outline-none transition-all"
                    autoFocus
                  />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full">
                    <Search size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] max-w-[85%] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-6">
                  <div className="relative w-14 h-14">
                    <Image
                      src="/ezy.jpeg"
                      alt="EzyKnot"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile User Info */}
                {user && (
                  <div className="flex items-center gap-3 mb-6 p-3 bg-gray-100 rounded-xl">
                    {user.photo ? (
                      <img src={user.photo} alt={user.name} className="w-12 h-12 rounded-full" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                        {user.name?.[0] || 'U'}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Courses Section */}
                <div className="mb-6">
                  <h4 className="text-blue-600 font-bold text-xs uppercase tracking-wider px-3 mb-3">Explore Courses</h4>
                  {courseCategories.map((cat, idx) => (
                    <div key={idx} className="mb-4">
                      <h5 className="text-gray-700 font-semibold text-sm flex items-center gap-2 px-3 mb-2">
                        {cat.icon} {cat.title}
                      </h5>
                      <div className="space-y-1 pl-8">
                        {cat.courses.slice(0, 5).map((course, i) => (
                          <Link 
                            key={i} 
                            href={`/courses/${course.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-500 text-sm hover:text-gray-900 transition-colors py-1.5 flex items-center gap-2"
                          >
                            <ChevronRight size={12} className="text-gray-400" />
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corporate Link */}
                <Link 
                  href="/corporate-training" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all mb-6"
                >
                  <Briefcase size={18} />
                  <span className="font-medium">Corporate Training</span>
                </Link>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  {user ? (
                    <>
                      <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-3 bg-blue-600 text-white text-center font-semibold rounded-xl shadow-md">
                        Dashboard
                      </Link>
                      <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="block w-full py-3 border border-red-300 text-red-600 text-center font-semibold rounded-xl hover:bg-red-50 transition-all">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-3 border border-gray-300 text-gray-700 text-center font-semibold rounded-xl hover:bg-gray-50 transition-all">
                        Log In
                      </Link>
                      <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-3 bg-blue-600 text-white text-center font-semibold rounded-xl shadow-md">
                        Join For Free
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
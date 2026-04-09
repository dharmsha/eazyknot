'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, User, BookOpen, ChevronRight, LayoutGrid, Award, Rocket, Home, LogOut, Settings, UserCircle, Info, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Temporary auth hook - replace with your actual auth
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

  // Close mobile menu on resize to desktop
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f1012]/95 backdrop-blur-md shadow-2xl' : 'bg-[#1a1c1e]'
    } text-white border-b border-gray-800`}>
      
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2 sm:gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 flex-shrink-0">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-blue-600 rounded flex items-center justify-center font-black text-base sm:text-xl group-hover:bg-blue-500 transition-all">E</div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                EzyKnot <span className="text-blue-500 hidden xs:inline">Careers</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
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
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm font-semibold transition border border-gray-700"
              >
                <BookOpen size={16} className="text-blue-400" />
                <span>Explore Courses</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu */}
              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                    className="absolute top-full left-0 w-[700px] lg:w-[800px] bg-[#1a1c1e] border border-gray-800 mt-2 rounded-xl shadow-2xl p-4 md:p-6 lg:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                  >
                    {courseCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center gap-2 font-bold text-[11px] md:text-[12px] text-blue-400 border-b border-gray-800 pb-2 uppercase tracking-wider">
                          {cat.icon} {cat.title}
                        </div>
                        <ul className="space-y-1.5">
                          {cat.courses.slice(0, 5).map((course, i) => (
                            <li key={i}>
                              <Link 
                                href={`/courses/${course.slug}`}
                                className="text-[11px] md:text-[13px] text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 group"
                              >
                                <ChevronRight size={10} className="text-gray-600 group-hover:text-blue-500" />
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
          <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md mx-2 lg:mx-4">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder="Search Skills, Courses..." 
                className="w-full bg-[#2a2d31] text-sm pl-4 pr-12 py-2 rounded-lg border border-transparent focus:border-blue-500 focus:bg-white focus:text-black outline-none transition-all duration-300"
              />
              <div className="absolute right-0 top-0 bottom-0 bg-blue-600 px-3 lg:px-4 flex items-center rounded-r-lg group-hover:bg-blue-500 transition-colors cursor-pointer">
                <Search size={16} />
              </div>
            </div>
          </div>

          {/* Mobile Search Button */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            <Search size={20} />
          </button>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link href="/corporate-training" className="text-[11px] xl:text-[12px] font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">Corporate</Link>
            <div className="h-6 w-[1px] bg-gray-700"></div>
            
            {!loading && (
              <>
                {user ? (
                  // User Logged In
                  <div className="relative">
                    <button 
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 hover:bg-gray-800/50 px-2 py-1.5 rounded-lg transition-all"
                    >
                      {user.photo ? (
                        <img src={user.photo} alt={user.name} className="w-7 h-7 rounded-full border-2 border-blue-500" />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-sm font-bold">{user.name?.[0] || 'U'}</span>
                        </div>
                      )}
                      <span className="text-sm font-medium max-w-[100px] truncate">{user.name?.split(' ')[0]}</span>
                      <ChevronDown size={12} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Profile Dropdown */}
                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-56 bg-[#1a1c1e] border border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          <div className="p-3 border-b border-gray-800">
                            <p className="font-semibold text-white text-sm">{user.name}</p>
                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                          </div>
                          <div className="p-1">
                            <Link href="/dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                              <LayoutGrid size={14} /> Dashboard
                            </Link>
                            <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                              <Settings size={14} /> Settings
                            </Link>
                            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                              <LogOut size={14} /> Logout
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // User Not Logged In
                  <div className="flex items-center gap-2">
                    <Link href="/login" className="text-sm font-semibold px-3 py-1.5 hover:text-blue-400 transition-colors">Log In</Link>
                    <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
                      Join Free
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-blue-400" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Search Bar - Expanded */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-3"
            >
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search Skills, Courses..." 
                  className="w-full bg-[#2a2d31] text-sm pl-4 pr-12 py-2.5 rounded-lg border border-gray-700 focus:border-blue-500 focus:bg-white focus:text-black outline-none transition-all"
                  autoFocus
                />
                <div className="absolute right-0 top-0 bottom-0 bg-blue-600 px-4 flex items-center rounded-r-lg">
                  <Search size={16} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[60] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#0f1012] p-5 overflow-y-auto border-r border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-black text-blue-500 tracking-tighter">EzyKnot Careers</span>
                <X size={24} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Mobile User Info */}
              {user && (
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-800/50 rounded-xl">
                  {user.photo ? (
                    <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-lg font-bold">{user.name?.[0] || 'U'}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                </div>
              )}

              {/* Mobile Navigation Links */}
              <div className="space-y-1 mb-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Courses Section */}
              <div className="space-y-5 mb-6">
                <h4 className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] px-3">Explore Courses</h4>
                {courseCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <h5 className="text-gray-400 font-semibold text-sm flex items-center gap-2 px-3">
                      {cat.icon} {cat.title}
                    </h5>
                    <div className="grid grid-cols-1 gap-2 pl-8">
                      {cat.courses.map((course, i) => (
                        <Link 
                          key={i} 
                          href={`/courses/${course.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-gray-500 text-sm hover:text-white transition-colors py-1"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Corporate Training Link */}
              <Link 
                href="/corporate-training" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-800/50 rounded-lg transition-colors mb-6"
              >
                <Briefcase size={18} />
                <span>Corporate Training</span>
              </Link>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                {user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-blue-600 rounded-xl font-semibold text-center shadow-lg shadow-blue-600/20">Dashboard</Link>
                    <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="w-full py-3 border border-red-600 text-red-400 rounded-xl font-semibold text-center hover:bg-red-600/10 transition-all">Logout</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 border border-gray-700 rounded-xl font-semibold text-center hover:bg-gray-800 transition-all">Log In</Link>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-blue-600 rounded-xl font-semibold text-center shadow-lg shadow-blue-600/20">Join For Free</Link>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Add missing Briefcase import
import { Briefcase } from 'lucide-react';

export default Navbar;
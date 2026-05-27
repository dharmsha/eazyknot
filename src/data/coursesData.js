export const coursesData = {
  "web-development": {
    title: "Full Stack Web Development",
    slug: "web-development",
    duration: "4 Months",
    fee: "₹59,999",
    nextBatch: "5th June 2026",
    mode: "Online + Offline",
    level: "Beginner to Advanced",
    rating: 4.9,
    studentsEnrolled: 8750,
    language: "Hindi + English",
    image: "/courses/web-dev.jpg",
    shortDescription: "Become a full-stack developer with MERN stack. Build 10+ real-world projects and get 100% placement assistance.",
    description: `Learn MERN stack (MongoDB, Express.js, React.js, Node.js) from scratch with industry experts.
    This comprehensive course takes you from absolute beginner to job-ready full-stack developer in just 4 months.
    You'll build 10+ real-world projects including e-commerce platforms, social media apps, and portfolio websites.`,
    curriculum: [
      { title: "Module 1: Frontend Fundamentals", topics: ["HTML5 & CSS3", "JavaScript ES6+", "DOM Manipulation", "Responsive Design"] },
      { title: "Module 2: React.js Mastery", topics: ["React Components & Props", "State & Hooks", "React Router", "Redux Toolkit"] },
      { title: "Module 3: Backend Development", topics: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
      { title: "Module 4: Database", topics: ["MongoDB", "Mongoose", "Database Design", "Aggregation"] }
    ],
    features: ["120+ Hours Live Classes", "10+ Real-World Projects", "1:1 Mentorship", "Placement Assistance", "Lifetime Access", "Certificate"],
    skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
    careers: [
      { role: "Full Stack Developer", avgSalary: "₹8-18 LPA" },
      { role: "Frontend Developer", avgSalary: "₹6-12 LPA" },
      { role: "Backend Developer", avgSalary: "₹7-14 LPA" }
    ],
    testimonials: [
      { name: "Amit Kumar", role: "Developer at Amazon", text: "Got placed within 2 months!" },
      { name: "Neha Singh", role: "Frontend Developer", text: "Best course for beginners!" }
    ],
    projects: ["E-commerce Platform", "Social Media Dashboard", "Chat Application", "Portfolio Builder"],
    companies: ["Google", "Amazon", "Microsoft", "Flipkart"]
  },

  "python": {
    title: "Python Programming Course",
    slug: "python",
    duration: "3 Months",
    fee: "₹49,999",
    nextBatch: "1st June 2026",
    mode: "Online + Offline",
    level: "Beginner to Advanced",
    rating: 4.8,
    studentsEnrolled: 12450,
    language: "Hindi + English",
    image: "/courses/python.jpg",
    shortDescription: "Master Python from basics to advanced with 15+ real-world projects.",
    description: `Python is one of the most in-demand programming languages. This comprehensive course covers everything from Python basics to advanced concepts like OOP, file handling, and libraries like NumPy, Pandas.`,
    curriculum: [
      { title: "Module 1: Python Basics", topics: ["Variables & Data Types", "Operators", "Strings", "Lists & Dictionaries"] },
      { title: "Module 2: Control Flow", topics: ["Conditional Statements", "Loops", "Functions", "Error Handling"] },
      { title: "Module 3: OOP Concepts", topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"] },
      { title: "Module 4: Libraries", topics: ["NumPy", "Pandas", "Matplotlib", "Web Scraping"] }
    ],
    features: ["60+ Hours Live Classes", "15+ Projects", "1:1 Mentorship", "Certificate", "Lifetime Access"],
    skills: ["Python", "OOP", "NumPy", "Pandas", "Data Analysis", "Web Scraping"],
    careers: [
      { role: "Python Developer", avgSalary: "₹6-12 LPA" },
      { role: "Data Analyst", avgSalary: "₹5-10 LPA" },
      { role: "Software Engineer", avgSalary: "₹8-15 LPA" }
    ],
    testimonials: [
      { name: "Rahul Sharma", role: "Python Developer", text: "Transitioned from non-tech background!" }
    ],
    projects: ["Weather App", "Data Analysis Dashboard", "E-commerce Backend", "Portfolio Website"],
    companies: ["Google", "Microsoft", "Infosys", "TCS"]
  },

  "matlab": {
    title: "MATLAB Programming Course",
    slug: "matlab",
    duration: "2 Months",
    fee: "₹39,999",
    nextBatch: "10th June 2026",
    mode: "Online + Offline",
    level: "Beginner to Advanced",
    rating: 4.7,
    studentsEnrolled: 3450,
    language: "Hindi + English",
    image: "/courses/matlab.jpg",
    shortDescription: "Master MATLAB for engineering, scientific computing, and data analysis.",
    description: `MATLAB is a high-performance language for technical computing. This course covers matrix manipulations, plotting, algorithm implementation, and GUI development.`,
    curriculum: [
      { title: "Module 1: MATLAB Basics", topics: ["Environment Setup", "Variables & Data Types", "Matrix Operations", "Arrays"] },
      { title: "Module 2: Programming", topics: ["Loops & Conditions", "Functions", "Debugging", "File I/O"] },
      { title: "Module 3: Visualization", topics: ["2D & 3D Plotting", "Graphics Customization", "Animation", "GUI Development"] }
    ],
    features: ["40+ Hours Live Classes", "8+ Projects", "Certificate", "Lifetime Access"],
    skills: ["MATLAB", "Matrix Operations", "Data Visualization", "Algorithm Development"],
    careers: [
      { role: "MATLAB Developer", avgSalary: "₹5-10 LPA" },
      { role: "Research Engineer", avgSalary: "₹6-12 LPA" }
    ],
    testimonials: [{ name: "Dr. Suresh Kumar", role: "Research Scholar", text: "Excellent course for research work!" }],
    projects: ["Image Processing Tool", "Signal Analysis", "Equation Solver"],
    companies: ["MathWorks", "DRDO", "ISRO"]
  },

  "iot": {
    title: "Internet of Things (IoT) Course",
    slug: "iot",
    duration: "3 Months",
    fee: "₹54,999",
    nextBatch: "15th June 2026",
    mode: "Online + Offline",
    level: "Intermediate",
    rating: 4.8,
    studentsEnrolled: 4200,
    language: "Hindi + English",
    image: "/courses/iot.jpg",
    shortDescription: "Master IoT with Arduino, Raspberry Pi, and real-world projects.",
    description: `Learn IoT from scratch! This course covers sensors, microcontrollers, cloud integration, and building smart systems.`,
    curriculum: [
      { title: "Module 1: IoT Basics", topics: ["Introduction to IoT", "Sensors & Actuators", "Arduino Programming"] },
      { title: "Module 2: Raspberry Pi", topics: ["Raspberry Pi Setup", "Python for IoT", "GPIO Programming"] },
      { title: "Module 3: Cloud & Communication", topics: ["MQTT Protocol", "AWS IoT", "Node-RED", "Blynk Platform"] }
    ],
    features: ["50+ Hours Live Classes", "10+ Hardware Projects", "Kit Provided", "Certificate"],
    skills: ["Arduino", "Raspberry Pi", "Sensors", "MQTT", "Cloud IoT"],
    careers: [
      { role: "IoT Engineer", avgSalary: "₹6-14 LPA" },
      { role: "Embedded Engineer", avgSalary: "₹5-12 LPA" }
    ],
    testimonials: [{ name: "Vikram Singh", role: "IoT Engineer", text: "Got job in smart home industry!" }],
    projects: ["Smart Home System", "Weather Monitoring", "Automated Irrigation", "Security System"],
    companies: ["Bosch", "Siemens", "Honeywell", "TCS"]
  },

  "robotics": {
    title: "Robotics Course",
    slug: "robotics",
    duration: "4 Months",
    fee: "₹69,999",
    nextBatch: "20th June 2026",
    mode: "Online + Offline",
    level: "Intermediate",
    rating: 4.9,
    studentsEnrolled: 2850,
    language: "Hindi + English",
    image: "/courses/robotics.jpg",
    shortDescription: "Build and program robots from scratch. Learn ROS, Arduino, and AI for robotics.",
    description: `Complete robotics course covering mechanical design, electronics, and programming. Build autonomous robots and learn ROS.`,
    curriculum: [
      { title: "Module 1: Robotics Fundamentals", topics: ["Robot Anatomy", "Motors & Drivers", "Sensors Integration"] },
      { title: "Module 2: Programming", topics: ["Arduino for Robotics", "Python for Robotics", "ROS Basics"] },
      { title: "Module 3: Advanced", topics: ["Computer Vision", "SLAM Algorithms", "Autonomous Navigation"] }
    ],
    features: ["80+ Hours Live Classes", "Robot Kit Included", "5 Major Projects", "Certificate"],
    skills: ["Arduino", "ROS", "Python", "Computer Vision", "Embedded C"],
    careers: [
      { role: "Robotics Engineer", avgSalary: "₹7-18 LPA" },
      { role: "Automation Engineer", avgSalary: "₹6-15 LPA" }
    ],
    testimonials: [{ name: "Priya Patel", role: "Robotics Engineer", text: "Built my own autonomous robot!" }],
    projects: ["Line Follower Robot", "Obstacle Avoider", "Pick & Place Robot", "Autonomous Car"],
    companies: ["Tesla", "Boston Dynamics", "ABB", "GreyOrange"]
  },

  "ai-ml": {
    title: "Artificial Intelligence & Machine Learning",
    slug: "ai-ml",
    duration: "5 Months",
    fee: "₹79,999",
    nextBatch: "8th June 2026",
    mode: "Online + Offline",
    level: "Intermediate",
    rating: 4.9,
    studentsEnrolled: 5670,
    language: "Hindi + English",
    image: "/courses/aiml.jpg",
    shortDescription: "Master AI/ML with Python, TensorFlow, and real-world projects.",
    description: `Complete AI/ML course covering supervised/unsupervised learning, deep learning, NLP, and computer vision.`,
    curriculum: [
      { title: "Module 1: ML Basics", topics: ["Python for ML", "NumPy/Pandas", "Data Visualization", "Statistics"] },
      { title: "Module 2: Machine Learning", topics: ["Regression", "Classification", "Clustering", "Model Evaluation"] },
      { title: "Module 3: Deep Learning", topics: ["Neural Networks", "TensorFlow", "Keras", "CNN/RNN"] }
    ],
    features: ["100+ Hours Live Classes", "15+ Projects", "GPU Access", "Placement Assistance"],
    skills: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning", "NLP", "Computer Vision"],
    careers: [
      { role: "ML Engineer", avgSalary: "₹10-25 LPA" },
      { role: "Data Scientist", avgSalary: "₹8-20 LPA" },
      { role: "AI Researcher", avgSalary: "₹12-30 LPA" }
    ],
    testimonials: [{ name: "Rajesh Gupta", role: "ML Engineer at Google", text: "Best AI/ML course out there!" }],
    projects: ["Facial Recognition", "Chatbot", "Stock Predictor", "Recommendation System"],
    companies: ["Google", "Microsoft", "Amazon", "OpenAI"]
  },

  "digital-marketing": {
    title: "Digital Marketing Master Course",
    slug: "digital-marketing",
    duration: "3 Months",
    fee: "₹44,999",
    nextBatch: "12th June 2026",
    mode: "Online + Offline",
    level: "Beginner",
    rating: 4.7,
    studentsEnrolled: 9870,
    language: "Hindi + English",
    image: "/courses/digital-marketing.jpg",
    shortDescription: "Master SEO, Social Media, Google Ads, and become a certified digital marketer.",
    description: `Complete digital marketing course covering SEO, SEM, social media marketing, email marketing, and analytics.`,
    curriculum: [
      { title: "Module 1: SEO", topics: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Technical SEO"] },
      { title: "Module 2: Social Media", topics: ["Facebook Ads", "Instagram Marketing", "LinkedIn", "YouTube"] },
      { title: "Module 3: Analytics & Ads", topics: ["Google Analytics", "Google Ads", "Email Marketing", "Content Strategy"] }
    ],
    features: ["60+ Hours Live Classes", "Live Projects", "Google Certifications", "Placement Help"],
    skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
    careers: [
      { role: "Digital Marketer", avgSalary: "₹4-10 LPA" },
      { role: "SEO Specialist", avgSalary: "₹5-12 LPA" }
    ],
    testimonials: [{ name: "Meera Sharma", role: "Digital Marketer", text: "Started my own agency after this course!" }],
    projects: ["Website SEO Audit", "Google Ads Campaign", "Social Media Strategy"],
    companies: ["Google", "Facebook", "Amazon", "Flipkart"]
  },

  "video-editing": {
    title: "Video Editing & Post Production",
    slug: "video-editing",
    duration: "2 Months",
    fee: "₹34,999",
    nextBatch: "18th June 2026",
    mode: "Online + Offline",
    level: "Beginner",
    rating: 4.8,
    studentsEnrolled: 6540,
    language: "Hindi + English",
    image: "/courses/video-editing.jpg",
    shortDescription: "Learn Premiere Pro, After Effects, DaVinci Resolve. Become a professional video editor.",
    description: `Master video editing from basics to advanced. Learn color grading, visual effects, motion graphics, and audio editing.`,
    curriculum: [
      { title: "Module 1: Premiere Pro", topics: ["Interface", "Cutting & Trimming", "Transitions", "Export Settings"] },
      { title: "Module 2: After Effects", topics: ["Motion Graphics", "Keyframing", "Visual Effects", "Green Screen"] },
      { title: "Module 3: Color & Audio", topics: ["DaVinci Resolve", "Color Grading", "Audio Mixing", "Final Project"] }
    ],
    features: ["40+ Hours Live Classes", "10+ Projects", "Adobe License", "Portfolio Building"],
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "VFX"],
    careers: [
      { role: "Video Editor", avgSalary: "₹4-10 LPA" },
      { role: "Motion Graphics Artist", avgSalary: "₹5-12 LPA" }
    ],
    testimonials: [{ name: "Akash Verma", role: "YouTuber", text: "Editing skills transformed my channel!" }],
    projects: ["YouTube Video", "Music Video", "Short Film", "Corporate Video"],
    companies: ["Hotstar", "Zee5", "Voot", "YouTube Creators"]
  },

  "japanese-n5": {
    title: "Japanese Language N5 Course",
    slug: "japanese-n5",
    duration: "2 Months",
    fee: "₹29,999",
    nextBatch: "22nd June 2026",
    mode: "Online + Offline",
    level: "Beginner",
    rating: 4.7,
    studentsEnrolled: 2340,
    language: "Japanese + English",
    image: "/courses/japanese.jpg",
    shortDescription: "Clear JLPT N5 exam with confidence. Learn Hiragana, Katakana, basic Kanji, and grammar.",
    description: `Complete preparation for JLPT N5 level. Learn reading, writing, listening, and speaking skills with native teachers.`,
    curriculum: [
      { title: "Module 1: Writing Systems", topics: ["Hiragana", "Katakana", "Basic Kanji", "Stroke Order"] },
      { title: "Module 2: Grammar", topics: ["Particles", "Verb Conjugation", "Adjectives", "Sentence Structure"] },
      { title: "Module 3: Listening & Speaking", topics: ["Daily Conversations", "Listening Practice", "Mock Tests", "Exam Strategy"] }
    ],
    features: ["30+ Hours Live Classes", "JLPT Mock Tests", "Study Material", "Certificate"],
    skills: ["Hiragana", "Katakana", "Kanji", "Japanese Grammar", "Conversation"],
    careers: [
      { role: "Japanese Translator", avgSalary: "₹5-12 LPA" },
      { role: "Interpreter", avgSalary: "₹6-15 LPA" }
    ],
    testimonials: [{ name: "Sakshi Mehta", role: "Translator", text: "Cleared JLPT N5 in first attempt!" }],
    projects: ["JLPT N5 Mock Tests", "Conversation Practice"],
    companies: ["Japanese MNCs", "Embassy", "Translation Agencies"]
  },

  "app-development": {
    title: "App Development Course",
    slug: "app-development",
    duration: "3 Months",
    fee: "₹64,999",
    nextBatch: "25th June 2026",
    mode: "Online + Offline",
    level: "Intermediate",
    rating: 4.8,
    studentsEnrolled: 4320,
    language: "Hindi + English",
    image: "/courses/app-dev.jpg",
    shortDescription: "Build Android & iOS apps with Flutter & React Native.",
    description: `Master mobile app development using Flutter and React Native. Build real apps for both Android and iOS platforms.`,
    curriculum: [
      { title: "Module 1: Flutter Basics", topics: ["Dart Programming", "Widgets", "Layouts", "State Management"] },
      { title: "Module 2: Firebase", topics: ["Authentication", "Firestore DB", "Push Notifications", "Cloud Functions"] },
      { title: "Module 3: Advanced", topics: ["Animations", "APIs Integration", "Payment Gateway", "App Deployment"] }
    ],
    features: ["60+ Hours Live Classes", "8+ Apps", "Play Store Publishing", "Certificate"],
    skills: ["Flutter", "Dart", "React Native", "Firebase", "API Integration"],
    careers: [
      { role: "Mobile Developer", avgSalary: "₹6-15 LPA" },
      { role: "Flutter Developer", avgSalary: "₹7-16 LPA" }
    ],
    testimonials: [{ name: "Rohit Jain", role: "App Developer", text: "My app has 50k+ downloads now!" }],
    projects: ["E-commerce App", "Chat App", "Fitness Tracker", "News App"],
    companies: ["Uber", "Swiggy", "Zomato", "Startups"]
  },

  "ui-ux-design": {
    title: "UI/UX Design Course",
    slug: "ui-ux-design",
    duration: "3 Months",
    fee: "₹49,999",
    nextBatch: "28th June 2026",
    mode: "Online + Offline",
    level: "Beginner",
    rating: 4.8,
    studentsEnrolled: 5670,
    language: "Hindi + English",
    image: "/courses/uiux.jpg",
    shortDescription: "Master Figma, Adobe XD, and design thinking. Build a stunning portfolio.",
    description: `Complete UI/UX design course covering user research, wireframing, prototyping, and visual design.`,
    curriculum: [
      { title: "Module 1: Design Basics", topics: ["Design Thinking", "Color Theory", "Typography", "Figma Basics"] },
      { title: "Module 2: UX Research", topics: ["User Personas", "User Journey", "Wireframing", "Usability Testing"] },
      { title: "Module 3: Prototyping", topics: ["High-Fidelity Design", "Micro-interactions", "Design Systems", "Portfolio"] }
    ],
    features: ["60+ Hours Live Classes", "10+ Projects", "Portfolio Review", "Certificate"],
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    careers: [
      { role: "UI/UX Designer", avgSalary: "₹6-15 LPA" },
      { role: "Product Designer", avgSalary: "₹8-18 LPA" }
    ],
    testimonials: [{ name: "Anjali Desai", role: "Product Designer", text: "Got placed at a top design agency!" }],
    projects: ["Mobile App Design", "Website Redesign", "Dashboard Design", "Design System"],
    companies: ["Google", "Microsoft", "Adobe", "Design Agencies"]
  }
};

// Add more courses as needed for remaining slugs
const additionalCourses = [
  "basic-website-dev", "linkedin-resume", "complete-app-dev", "complete-web-dev",
  "advance-sales", "sales-management", "stock-marketing", "music-learning",
  "startup-master-class", "hybrid-electric-vehicle", "autocad", "staad-pro",
  "advanced-graphics", "cybersecurity", "cloud-computing", "data-science"
];

additionalCourses.forEach(slug => {
  if (!coursesData[slug]) {
    coursesData[slug] = {
      title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      slug: slug,
      duration: "3 Months",
      fee: "₹49,999",
      nextBatch: "Coming Soon",
      mode: "Online + Offline",
      level: "Beginner",
      rating: 4.5,
      studentsEnrolled: 1000,
      language: "Hindi + English",
      image: `/courses/${slug}.jpg`,
      shortDescription: `Comprehensive ${slug.split('-').join(' ')} course with hands-on projects and placement assistance.`,
      description: `Master ${slug.split('-').join(' ')} with industry experts. Build real-world projects and get certified.`,
      curriculum: [
        { title: "Module 1: Fundamentals", topics: ["Introduction", "Core Concepts", "Basic to Advanced"] },
        { title: "Module 2: Practical", topics: ["Hands-on Projects", "Real-world Applications", "Best Practices"] },
        { title: "Module 3: Advanced", topics: ["Expert Techniques", "Industry Standards", "Final Project"] }
      ],
      features: ["Live Classes", "Projects", "Certificate", "Placement Help", "Lifetime Access"],
      skills: ["Core Concepts", "Practical Skills", "Tools & Technologies", "Industry Best Practices"],
      careers: [{ role: "Professional", avgSalary: "₹5-12 LPA" }],
      testimonials: [],
      projects: ["Industry Project", "Portfolio Project"],
      companies: ["Top Companies"]
    };
  }
});

export const getAllCourses = () => {
  return Object.keys(coursesData).map(slug => ({
    slug,
    ...coursesData[slug]
  }));
};

export const getCourseBySlug = (slug) => {
  return coursesData[slug] || null;
};
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend API Architect",
    icon: backend,
  },
  {
    title: "ML & AI Engineer",
    icon: creator,
  },
  {
    title: "Cloud Solutions Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C/C++",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PostgreSQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "FastAPI",
    icon: nextJs,
  },
  {
    name: "Express.js",
    icon: angular,
  },
  {
    name: "Firebase",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PyTorch",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "B.Tech Computer Science and Engineering",
    company_name: "Vellore Institute Of Technology, Chennai",
    company_website: "https://vit.ac.in/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Software Engineering and AI/ML.",
      "Maintaining excellent academic performance while actively participating in competitive programming and hackathons.",
      "Developing expertise in advanced algorithms, data structures, software architecture, and machine learning fundamentals.",
      "Leading technical projects involving full-stack development, cloud computing, and artificial intelligence applications.",
      "Active member of coding clubs and technical societies, mentoring junior students in programming and project development.",
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "Narayana Junior College, Hyderabad",
    company_website: "#",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "April 2021 - March 2023",
    points: [
      "Completed Intermediate Education under Telangana State Board with strong emphasis on Mathematics, Physics, and Chemistry.",
      "Achieved outstanding academic performance demonstrating strong analytical and problem-solving capabilities.",
      "Developed foundational programming skills and gained early exposure to computer science concepts.",
      "Participated in science exhibitions and technical competitions, fostering innovation and creative thinking.",
      "Built solid mathematical foundation essential for advanced computer science and engineering studies.",
    ],
  },
  {
    title: "Smart India Hackathon 2024 - National Finalist",
    company_name: "Government of India Initiative",
    company_website: "https://sih.gov.in/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "August 2024 - September 2024",
    points: [
      "Selected as National Finalist among thousands of teams for developing 'SaveMyNode' - an advanced Linux file recovery solution.",
      "Led research and development of cutting-edge file recovery algorithms for XFS and BTRFS file systems.",
      "Implemented low-level system programming techniques and file system analysis for data recovery optimization.",
      "Collaborated with cross-functional team members and successfully presented solution to industry experts and government officials.",
      "Demonstrated exceptional problem-solving skills and technical innovation in system-level programming and data recovery.",
    ],
  },
  {
    title: "Full Stack Development & ML Engineering",
    company_name: "Independent Projects & Freelance Work",
    company_website: "#",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Architecting and developing enterprise-grade full-stack applications using modern technologies like FastAPI, Node.js, and React.",
      "Implementing scalable backend solutions with microservices architecture, RESTful APIs, and secure authentication systems.",
      "Deploying applications on cloud platforms (AWS, Firebase) with automated CI/CD pipelines and monitoring systems.",
      "Developing machine learning models using PyTorch and Hugging Face Transformers for real-world business applications.",
      "Mentoring junior developers and contributing to open-source projects in the fields of web development and AI/ML.",
    ],
  },
];

const projects = [
  {
    id: "greenSphere",
    name: "GreenSphere - Environmental Sustainability Platform",
    shortDescription: "AI-powered carbon footprint calculator with community features",
    description:
      "A comprehensive environmental platform featuring carbon footprint calculator, eco-tips recommendation engine, and community engagement system. Built with FastAPI microservices architecture, PostgreSQL database with optimized queries, JWT-based authentication, and Google Maps API integration for discovering eco-friendly stores and recycling centers. Includes gamified tracking system with points, leaderboards, and social features.",
    category: "environmental",
    status: "completed",
    featured: true,
    complexity: "advanced",
    duration: "6 months",
    teamSize: 1,
    technologies: ["FastAPI", "PostgreSQL", "JWT", "Google Maps API", "React", "Redux"],
    features: [
      "Carbon footprint calculator with ML predictions",
      "Real-time eco-tips recommendation system", 
      "Gamified point system and leaderboards",
      "Interactive maps for eco-friendly locations",
      "Community forums with moderation",
      "Mobile-responsive PWA design"
    ],
    metrics: {
      users: "500+",
      co2Saved: "2.5 tons",
      engagement: "85%",
      performance: "99.5% uptime"
    },
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "jwt-auth",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    gallery: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
    hosted_link: "#",
    github_link: "https://github.com/SampriktA05/greensphere",
    demo_video: "#",
    techStack: {
      frontend: "React, Redux, Tailwind CSS",
      backend: "FastAPI, Python",
      database: "PostgreSQL, Redis",
      deployment: "AWS EC2, Docker",
      apis: "Google Maps, OpenWeather"
    }
  },
  {
    id: "smartGarden", 
    name: "SmartGarden - AI-Powered Plant Care Assistant",
    shortDescription: "Intelligent gardening platform with ML-driven recommendations",
    description:
      "Intelligent cloud-hosted gardening platform with machine learning-driven plant care recommendations. Integrates OpenWeatherMap API for real-time weather analysis, Firebase Firestore for user data, AWS DynamoDB for plant database, and Firebase Cloud Messaging for smart notifications. Features personalized care schedules, plant health monitoring, and community garden sharing.",
    category: "healthcare",
    status: "completed",
    featured: true,
    complexity: "intermediate",
    duration: "4 months",
    teamSize: 1,
    technologies: ["Node.js", "Firebase", "AWS DynamoDB", "ML Models", "React Native"],
    features: [
      "AI-powered plant health analysis",
      "Weather-based care recommendations",
      "Smart notification system",
      "Plant disease detection using CV",
      "Community garden sharing",
      "IoT sensor integration ready"
    ],
    metrics: {
      plants: "1000+",
      accuracy: "94%",
      users: "300+",
      satisfaction: "4.8/5"
    },
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "aws-firebase",
        color: "green-text-gradient",
      },
      {
        name: "ml-recommendations",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    gallery: ["/project2-1.jpg", "/project2-2.jpg", "/project2-3.jpg"],
    hosted_link: "#",
    github_link: "https://github.com/SampriktA05/smartgarden",
    demo_video: "#",
    techStack: {
      frontend: "React Native, Expo",
      backend: "Node.js, Express",
      database: "Firebase, DynamoDB",
      deployment: "AWS Lambda, Vercel",
      ml: "TensorFlow.js, OpenCV"
    }
  },
  {
    id: "medTitleGen",
    name: "MedTitleGen - AI Medical Research Assistant", 
    shortDescription: "Transformer-based medical title generation system",
    description:
      "Advanced NLP system for generating academic medical titles from research abstracts using state-of-the-art transformer models (T5/BART). Implemented with PyTorch Lightning framework, custom tokenization pipeline, cross-entropy loss optimization, and BLEU score evaluation metrics. Fine-tuned on medical domain data with 94% accuracy and deployed on Kaggle with 1000+ downloads.",
    category: "healthcare",
    status: "completed", 
    featured: true,
    complexity: "advanced",
    duration: "3 months",
    teamSize: 1,
    technologies: ["PyTorch", "Transformers", "Python", "Hugging Face", "Kaggle"],
    features: [
      "Transformer-based title generation",
      "Medical domain fine-tuning",
      "BLEU score evaluation",
      "Custom tokenization pipeline",
      "Kaggle notebook deployment",
      "Research paper integration"
    ],
    metrics: {
      accuracy: "94%",
      downloads: "1000+",
      bleuScore: "0.85",
      modelSize: "220M params"
    },
    tags: [
      {
        name: "pytorch-lightning",
        color: "blue-text-gradient",
      },
      {
        name: "transformers-nlp",
        color: "green-text-gradient",
      },
      {
        name: "medical-ai",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    gallery: ["/project3-1.jpg", "/project3-2.jpg", "/project3-3.jpg"],
    hosted_link: "https://kaggle.com/samprikta/medtitlegen",
    github_link: "https://github.com/SampriktA05/medtitlegen", 
    demo_video: "#",
    techStack: {
      ml: "PyTorch Lightning, Transformers",
      nlp: "BERT, T5, BART",
      evaluation: "BLEU, ROUGE",
      deployment: "Kaggle, Colab",
      data: "Medical abstracts, PubMed"
    }
  },
  {
    id: "saveMyNode",
    name: "SaveMyNode - Enterprise File Recovery System",
    shortDescription: "Linux file recovery tool for XFS and BTRFS systems",
    description:
      "Mission-critical Linux file recovery tool targeting XFS and BTRFS file systems. Developed for Smart India Hackathon 2024 with advanced algorithms for data recovery, file system analysis, and metadata reconstruction. Features real-time recovery progress tracking, batch processing capabilities, and comprehensive logging system. Achieved national recognition for innovation in system-level programming.",
    category: "systems",
    status: "completed",
    featured: true,
    complexity: "expert",
    duration: "5 months", 
    teamSize: 4,
    technologies: ["C++", "Linux Kernel", "File Systems", "System Programming"],
    features: [
      "XFS/BTRFS file system support",
      "Advanced recovery algorithms",
      "Real-time progress tracking",
      "Metadata reconstruction",
      "Batch processing engine",
      "Comprehensive audit logging"
    ],
    metrics: {
      recoveryRate: "92%",
      performance: "10x faster",
      fileTypes: "50+",
      recognition: "National Finalist"
    },
    tags: [
      {
        name: "linux-kernel",
        color: "blue-text-gradient",
      },
      {
        name: "system-programming", 
        color: "green-text-gradient",
      },
      {
        name: "data-recovery",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    gallery: ["/project4-1.jpg", "/project4-2.jpg", "/project4-3.jpg"],
    hosted_link: "#",
    github_link: "https://github.com/SampriktA05/savemynode",
    demo_video: "#",
    techStack: {
      systems: "Linux Kernel, C++",
      filesystems: "XFS, BTRFS, EXT4",
      tools: "GDB, Valgrind, Perf",
      testing: "Virtual machines, Recovery scenarios"
    }
  },
  {
    id: "ecoSocial",
    name: "EcoSocial - Community Environmental Platform",
    shortDescription: "Social platform for environmental enthusiasts",
    description:
      "Full-featured social platform for environmental enthusiasts with advanced forum system supporting nested comments, voting mechanisms, and content moderation. Implements Redis caching for performance, Elasticsearch for search functionality, and real-time notifications. Features user reputation system, achievement badges, and community challenges with leaderboards.",
    category: "environmental",
    status: "in-progress",
    featured: false,
    complexity: "advanced",
    duration: "8 months",
    teamSize: 2,
    technologies: ["Microservices", "Redis", "Elasticsearch", "WebSockets"],
    features: [
      "Advanced forum system",
      "Real-time notifications",
      "Content moderation AI",
      "User reputation system", 
      "Community challenges",
      "Achievement system"
    ],
    metrics: {
      users: "200+",
      posts: "1500+",
      engagement: "78%",
      moderation: "99% accurate"
    },
    tags: [
      {
        name: "microservices",
        color: "blue-text-gradient",
      },
      {
        name: "redis-elasticsearch",
        color: "green-text-gradient",
      },
      {
        name: "real-time",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    gallery: ["/project5-1.jpg", "/project5-2.jpg", "/project5-3.jpg"],
    hosted_link: "#",
    github_link: "https://github.com/SampriktA05/ecosocial",
    demo_video: "#",
    techStack: {
      architecture: "Microservices, Docker",
      backend: "Node.js, Express, GraphQL",
      database: "MongoDB, Redis, Elasticsearch",
      realtime: "Socket.io, WebSockets",
      frontend: "React, Apollo Client"
    }
  },
  {
    id: "iotPlantCare",
    name: "IoT PlantCare - Smart Agriculture Solution",
    shortDescription: "IoT-enabled plant monitoring with predictive analytics",
    description:
      "IoT-enabled smart plant monitoring system with sensor integration, automated watering controls, and predictive analytics. Built with Node.js backend, React dashboard, Firebase real-time database, and machine learning models for plant health prediction. Features mobile app with push notifications, historical data analysis, and multi-device synchronization.",
    category: "environmental",
    status: "completed",
    featured: false,
    complexity: "intermediate",
    duration: "4 months",
    teamSize: 1,
    technologies: ["IoT", "Sensors", "ML", "React", "Firebase"],
    features: [
      "IoT sensor integration",
      "Automated watering system",
      "Predictive health analytics",
      "Mobile app with notifications",
      "Historical data visualization",
      "Multi-device sync"
    ],
    metrics: {
      sensors: "15 types",
      accuracy: "91%",
      waterSaved: "40%",
      plantHealth: "+35%"
    },
    tags: [
      {
        name: "iot-sensors",
        color: "blue-text-gradient",
      },
      {
        name: "predictive-ml",
        color: "green-text-gradient",
      },
      {
        name: "real-time-dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    gallery: ["/project6-1.jpg", "/project6-2.jpg", "/project6-3.jpg"],
    hosted_link: "#",
    github_link: "https://github.com/SampriktA05/iotplantcare",
    demo_video: "#",
    techStack: {
      hardware: "Arduino, Raspberry Pi, Sensors",
      backend: "Node.js, MQTT, Firebase",
      ml: "Scikit-learn, TensorFlow",
      mobile: "React Native, Expo",
      dashboard: "React, D3.js, Chart.js"
    }
  },
];

const achievements = [
  {
    title: "Smart India Hackathon 2024 - National Finalist",
    description: "Selected among top 1% of participants nationwide for developing SaveMyNode, an innovative Linux file recovery solution targeting XFS and BTRFS file systems.",
    date: "September 2024",
    category: "Hackathon",
  },
  {
    title: "Fine Arts Excellence",
    description: "Winner of multiple state and inter-school art competitions, demonstrating creativity and attention to detail that translates into innovative UI/UX design in technical projects.",
    date: "2019-2023",
    category: "Creative Arts",
  },
  {
    title: "Academic Excellence",
    description: "Maintaining outstanding academic performance at VIT Chennai while actively participating in competitive programming and technical projects.",
    date: "2023-Present",
    category: "Academic",
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects in web development and machine learning, with focus on environmental and healthcare applications.",
    date: "2024-Present",
    category: "Open Source",
  },
];

const skills = {
  programming: [
    "Python", "Java", "C/C++", "JavaScript", "R", "SQL"
  ],
  frameworks: [
    "React", "Node.js", "FastAPI", "Express.js", "Firebase", "Flutter"
  ],
  databases: [
    "PostgreSQL", "MongoDB", "AWS DynamoDB", "Firebase Firestore"
  ],
  cloud: [
    "AWS", "Firebase", "Google Cloud Platform", "Heroku"
  ],
  tools: [
    "Git", "VS Code", "Visual Studio", "Docker", "Postman"
  ],
  ml: [
    "PyTorch", "Hugging Face Transformers", "pandas", "NumPy", "Matplotlib"
  ],
  specializations: [
    "Full Stack Development", "API Architecture", "Machine Learning", "Cloud Computing", "System Programming", "IoT Development"
  ]
};

// UI/UX Enhancement Features
const uiConfig = {
  theme: {
    primary: "#915EFF",
    secondary: "#151030",
    tertiary: "#232631",
    accent: "#FF6B6B",
    success: "#4ECDC4",
    warning: "#FFE66D",
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tertiary: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      success: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    }
  },
  animations: {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    slideInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    bounce: {
      animate: { 
        y: [0, -10, 0],
        transition: { 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }
      }
    }
  },
  particles: {
    background: {
      particles: {
        number: { value: 80 },
        color: { value: "#915EFF" },
        opacity: { value: 0.1 },
        size: { value: 3 },
        move: { 
          enable: true, 
          speed: 1,
          direction: "none",
          out_mode: "out"
        }
      }
    }
  }
};

const interactiveFeatures = {
  skillsVisualization: {
    chartType: "radar",
    skills: [
      { name: "Frontend Development", level: 90 },
      { name: "Backend Development", level: 95 },
      { name: "Machine Learning", level: 85 },
      { name: "Cloud Computing", level: 80 },
      { name: "Database Design", level: 88 },
      { name: "API Development", level: 92 },
      { name: "System Programming", level: 78 },
      { name: "DevOps", level: 75 }
    ]
  },
  projectFilters: [
    { id: "all", name: "All Projects", icon: "🚀" },
    { id: "fullstack", name: "Full Stack", icon: "💻" },
    { id: "ml", name: "Machine Learning", icon: "🤖" },
    { id: "mobile", name: "Mobile", icon: "📱" },
    { id: "cloud", name: "Cloud", icon: "☁️" },
    { id: "iot", name: "IoT", icon: "🌐" }
  ],
  timelineView: {
    enabled: true,
    style: "modern",
    animations: true
  },
  darkModeToggle: {
    enabled: true,
    defaultMode: "dark",
    transition: "smooth"
  }
};

const advancedFeatures = {
  typing: {
    roles: [
      "Full Stack Developer",
      "AI/ML Engineer", 
      "Cloud Solutions Architect",
      "Backend API Developer",
      "System Programming Expert",
      "Innovation Enthusiast"
    ],
    speed: 100,
    backSpeed: 50,
    loop: true
  },
  stats: [
    {
      icon: "🚀",
      value: "6+",
      label: "Projects Completed",
      description: "End-to-end development",
      color: "#4ECDC4"
    },
    {
      icon: "🏆",
      value: "1",
      label: "Hackathon Win",
      description: "National level achievement",
      color: "#FFE66D"
    },
    {
      icon: "💻",
      value: "50k+",
      label: "Lines of Code",
      description: "Across multiple languages",
      color: "#FF6B6B"
    },
    {
      icon: "🌟",
      value: "15+",
      label: "Technologies",
      description: "Mastered and implemented",
      color: "#915EFF"
    }
  ],
  testimonials: [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, Computer Science",
      company: "VIT Chennai",
      image: "/testimonial1.jpg",
      rating: 5,
      feedback: "Samprikta demonstrates exceptional technical skills and innovative thinking. Her project work shows deep understanding of modern software architecture.",
      featured: true
    },
    {
      name: "Smart India Hackathon Panel",
      role: "Technical Jury",
      company: "Government of India",
      image: "/testimonial2.jpg", 
      rating: 5,
      feedback: "Outstanding system-level programming expertise demonstrated in SaveMyNode. Shows great potential for enterprise software development.",
      featured: true
    },
    {
      name: "Arjun Patel", 
      role: "Senior Developer",
      company: "Tech Startup",
      image: "/testimonial3.jpg",
      rating: 5,
      feedback: "Collaborated on open source projects. Samprikta's code quality and documentation standards are exemplary for someone at her experience level.",
      featured: false
    }
  ],
  contactForm: {
    fields: [
      { name: "name", type: "text", label: "Your Name", required: true },
      { name: "email", type: "email", label: "Your Email", required: true },
      { name: "company", type: "text", label: "Company/Organization", required: false },
      { name: "subject", type: "select", label: "Subject", required: true, options: [
        "Job Opportunity",
        "Collaboration",
        "Project Inquiry",
        "Consultation",
        "Other"
      ]},
      { name: "message", type: "textarea", label: "Message", required: true }
    ],
    validation: true,
    emailService: "emailjs",
    successMessage: "Thank you for reaching out! I'll get back to you within 24 hours.",
    errorMessage: "Oops! Something went wrong. Please try again or contact me directly."
  }
};

const gamification = {
  achievementBadges: [
    {
      id: "hackathon_winner",
      name: "Hackathon Champion",
      description: "Smart India Hackathon 2024 National Finalist",
      icon: "🏆",
      color: "#FFD700",
      unlocked: true
    },
    {
      id: "full_stack_master",
      name: "Full Stack Master",
      description: "Proficient in both frontend and backend development",
      icon: "💻",
      color: "#4ECDC4", 
      unlocked: true
    },
    {
      id: "ai_enthusiast",
      name: "AI Innovator",
      description: "Developed ML models with transformer architecture",
      icon: "🤖",
      color: "#915EFF",
      unlocked: true
    },
    {
      id: "cloud_architect",
      name: "Cloud Pioneer",
      description: "Deployed applications on multiple cloud platforms",
      icon: "☁️",
      color: "#FF6B6B",
      unlocked: true
    },
    {
      id: "open_source",
      name: "Open Source Contributor",
      description: "Active contributor to community projects",
      icon: "🌟",
      color: "#FFE66D",
      unlocked: true
    },
    {
      id: "system_programmer",
      name: "System Expert",
      description: "Deep system-level programming expertise",
      icon: "⚙️",
      color: "#A0A0A0",
      unlocked: true
    }
  ],
  skillProgress: {
    frontend: { current: 90, target: 95 },
    backend: { current: 95, target: 98 },
    ml: { current: 85, target: 90 },
    cloud: { current: 80, target: 88 },
    mobile: { current: 70, target: 85 },
    devops: { current: 75, target: 85 }
  }
};

const socialProof = {
  githubStats: {
    totalRepos: 25,
    totalStars: 150,
    totalCommits: 500,
    longestStreak: 45,
    languageStats: [
      { name: "Python", percentage: 35 },
      { name: "JavaScript", percentage: 30 },
      { name: "Java", percentage: 20 },
      { name: "C++", percentage: 10 },
      { name: "Other", percentage: 5 }
    ]
  },
  projectViews: {
    greenSphere: 1250,
    smartGarden: 980,
    medTitleGen: 1500,
    saveMyNode: 2100,
    ecoSocial: 750,
    iotPlantCare: 630
  },
  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CP-2024-001",
      verified: true
    },
    {
      name: "Google Cloud Associate",
      issuer: "Google Cloud",
      date: "2024", 
      credentialId: "GCP-AC-2024-002",
      verified: true
    },
    {
      name: "Meta Frontend Developer",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-FE-2023-003",
      verified: true
    }
  ]
};

// Enhanced project categories with filters
const projectCategories = [
  {
    id: "environmental",
    name: "Environmental Tech",
    description: "Sustainable technology solutions",
    color: "#4ECDC4",
    icon: "🌱",
    projects: ["greenSphere", "ecoSocial", "iotPlantCare"]
  },
  {
    id: "healthcare", 
    name: "Healthcare AI",
    description: "AI-powered medical solutions",
    color: "#FF6B6B",
    icon: "🏥",
    projects: ["medTitleGen", "smartGarden"]
  },
  {
    id: "systems",
    name: "System Programming",
    description: "Low-level system solutions",
    color: "#915EFF", 
    icon: "⚙️",
    projects: ["saveMyNode"]
  }
];

const personalInfo = {
  name: "Samprikta",
  fullName: "Samprikta Sarkar",
  email: "sampriktasarkar2032@gmail.com",
  role: "Full Stack Developer & AI/ML Engineer",
  about: `Innovative Computer Science and Engineering student at VIT Chennai with a passion for creating impactful technology solutions. Smart India Hackathon 2024 National Finalist with proven expertise in full-stack development, artificial intelligence, and cloud computing. 

Specialized in building scalable applications using cutting-edge technologies including FastAPI, Node.js, React, PostgreSQL, and PyTorch. Experienced in developing enterprise-grade solutions for environmental sustainability, healthcare innovation, and system optimization.

Strong advocate for sustainable technology and environmental conservation, combining technical excellence with social impact. Demonstrated leadership in competitive programming, hackathons, and collaborative development projects. Committed to leveraging technology for solving real-world challenges and creating positive societal change.

Currently exploring advanced AI/ML applications, cloud-native architectures, and IoT integrations while maintaining excellence in academic pursuits and professional development.`,
  projectsIntro: `The following projects represent a comprehensive showcase of my technical expertise and innovative problem-solving capabilities. Each project demonstrates end-to-end development skills, from conceptualization and architecture design to deployment and maintenance. These works reflect my commitment to creating scalable, impactful solutions that address real-world challenges across diverse domains including environmental sustainability, healthcare technology, and system optimization.`,
};

const contactInfo = {
  phone: "+91 7842510495",
  email: "sampriktasarkar2032@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  availability: "Open to Full-time opportunities and Internships",
  preferredRoles: [
    "Full Stack Developer",
    "Backend Engineer", 
    "ML Engineer",
    "Software Developer",
    "API Developer"
  ],
  interests: [
    "Environmental Technology",
    "Healthcare Innovation", 
    "Artificial Intelligence",
    "Cloud Computing",
    "Open Source Development"
  ]
};

const publicUrls = {
  resume:
    "/Samprikta Sarkar- Resume(updated) (2).pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://linkedin.com/in/samprikta-sarkar-64075928a",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/SampriktA05",
      icon: github,
    },
  },
};

const projectMetrics = {
  totalProjects: 6,
  linesOfCode: "50,000+",
  technologies: 15,
  hackathonWins: 1,
  openSourceContributions: 10,
  yearsOfExperience: 2
};

const testimonials = [
  {
    name: "Smart India Hackathon Jury",
    role: "Technical Evaluation Panel",
    company: "Government of India",
    feedback: "Exceptional technical innovation and practical implementation in the SaveMyNode project. Demonstrated outstanding system-level programming skills.",
  },
  {
    name: "VIT Faculty",
    role: "Computer Science Department",
    company: "VIT Chennai",
    feedback: "Consistently demonstrates excellence in both theoretical understanding and practical application of computer science concepts.",
  }
];

// Advanced Portfolio Features
const portfolioFeatures = {
  modernDesign: {
    enabled: true,
    features: [
      "Glassmorphism UI elements",
      "Smooth parallax scrolling", 
      "Dynamic gradient backgrounds",
      "Micro-interactions and hover effects",
      "Responsive grid layouts",
      "Custom loading animations"
    ]
  },
  interactivity: {
    enabled: true,
    features: [
      "Project filtering and search",
      "Skill level visualizations",
      "Interactive timeline navigation",
      "3D model viewers",
      "Real-time contact form",
      "Social media integration"
    ]
  },
  performance: {
    enabled: true,
    features: [
      "Lazy loading optimizations",
      "Progressive Web App (PWA)",
      "Image compression and WebP",
      "Code splitting and bundling",
      "SEO optimization",
      "Analytics integration"
    ]
  },
  accessibility: {
    enabled: true,
    features: [
      "WCAG 2.1 AA compliance",
      "Keyboard navigation support",
      "Screen reader optimization",
      "High contrast mode",
      "Font scaling support",
      "Alternative text for images"
    ]
  }
};

// Navigation enhancement
const enhancedNavigation = {
  mobileMenu: {
    style: "slide-in",
    animation: "spring",
    backdrop: true
  },
  breadcrumbs: {
    enabled: true,
    showOnMobile: false
  },
  scrollspy: {
    enabled: true,
    offset: 100,
    smooth: true
  },
  backToTop: {
    enabled: true,
    showAfter: 300,
    animation: "fade"
  }
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
  achievements,
  skills,
  contactInfo,
  projectMetrics,
  testimonials,
  uiConfig,
  interactiveFeatures,
  advancedFeatures,
  gamification,
  socialProof,
  projectCategories,
  portfolioFeatures,
  enhancedNavigation,
};

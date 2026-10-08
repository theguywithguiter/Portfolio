// ============================================================
// portfolioData.js — Centralized configuration for Subham's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Subham",
  firstName: "Subham",
  brandName: "Subham",
  title: "Full Stack & Java Developer",
  location: "Kolkata, India",
  phone: "+91 9907374537",
  emails: {
    primary: "subhomdatta.priority@gmail.com",
    secondary: "subhomdatta.backup@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/SUBHOM_DATTA_RESUME_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/theguywithguiter",
  linkedin: "https://www.linkedin.com/in/theguywithguiter",
  instagram: "https://instagram.com/theguywithguiter",
};

export const heroContent = {
  greeting: "Hi, I'm Subham",
  titleHighlight: "Full Stack & Java Developer",
  subtitle:
    "I build fast, scalable applications using Java, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:subhomdatta.priority@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Subham,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/SUBHOM_DATTA_RESUME_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Subham</span>, an aspiring software engineer based in Kolkata, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Python", "Sql"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "GeekGlory Technologies Pvt. Ltd",
    role: "Frontend Web Development Intern",
    duration: "Jan 2026 - Mar 2026",
    skills: ["Responsive Web Design", "JavaScript", "Dashboard Design", "UI/UX Development"],
    tech: ["HTML5", "CSS3", "JavaScript", "Git & GitHub"]
  },
  {
    organization: "Skyrovix",
    role: "Full Stack Development Intern",
    duration: "July 2026 - Sep 2026",
    skills: ["Database Management", "Authentication", "API Integration", "Responsiveness"],
    tech: ["React.js", "CSS3", "React.js", "SQL","REST APIs"]
  },
  {
    organization: "Codeorbit",
    role: "Web Development Intern",
    duration: "1 Month (Remote)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {

    id: "zelora",

    number: "01",

    badge: "🚀 Flagship Project",

    title: "ZELORA",

    description:

      "ZELORA is a modern full-stack e-commerce platform built for a premium shopping experience. It includes a dedicated admin panel for product and order management, personalized product options, integrated payment channels, responsive interfaces, interactive magnetic UI elements, and cloud-powered infrastructure for scalable media and data management.",

    techTags: [

      "React",

      "Next.js",

      "TypeScript",

      "JavaScript",

      "JSX",

      "CSS",

      "SQL",

      "Cloudflare D1",

      "Cloudflare R2",

      "Cloudflare Workers",

      "Resend",

      "REST API",

    ],

    links: {

      github: "https://github.com/theguywithguiter/zelora",

      demo: "https://zelora.subhomdatta-priority.workers.dev/",

    },

    isFlagship: true,

  },

  {

    id: "careerportal",

    number: "02",

    badge: null,

    title: "CareerPortal",

    description:

      "CareerPortal is a responsive frontend job-finding platform designed to make discovering opportunities simple and intuitive. Users can browse, search, and filter jobs based on their preferences, explore job details, and apply directly through the platform. It also includes browser-session-based sign-up and sign-in functionality with a clean interface optimized across different screen sizes.",

    techTags: [

      "HTML5",

      "CSS3",

      "JavaScript",

      "Responsive Design",

      "Browser Session",

      "DOM Manipulation",

      "UI/UX",

    ],

    links: {

      github: "https://github.com/theguywithguiter/careerportal",

      frontendDemo: "https://careerportal-one.vercel.app/",

    },

    isFlagship: false,

  },

  {

    id: "voidwear",

    number: "03",

    badge: null,

    title: "VoidWear",

    description:

      "VoidWear is a bold, modern D2C fashion e-commerce landing experience created for a contemporary T-shirt brand. The frontend features product-focused layouts, custom filtering, size selection, responsive interactions, and a dark visual identity designed to deliver a strong shopping experience across desktop, tablet, and mobile screens.",

    techTags: [

      "HTML5",

      "CSS3",

      "JavaScript",

      "Responsive Design",

      "Product Filtering",

      "UI/UX",

      "DOM Manipulation",

    ],

    links: {

      github: "https://github.com/theguywithguiter/voidwear",

      frontendDemo: "https://voidwear-nine.vercel.app/",

    },

    isFlagship: false,

  },
  

];
export const certificates = {
  featured: [
    {
      name: "ICAT – Certificate of Participation",
      issuer: "Internship Studio",
      icon: "🏆",
    },
    {
      name: "Google Gemini Workshop 2026",
      issuer: "Gemini",
      icon: "✨",
    },
    {
      name: "Full-Stack Development 101",
      issuer: "Simplilearn",
      icon: "💻",
    },
    {
      name: "Getting Started with Generative AI",
      issuer: "IBM",
      icon: "🤖",
    },
    {
      name: "Artificial Intelligence",
      issuer: "IIBM Institute of Business Management",
      icon: "🧠",
    },
    {
      name: "AI Foundations",
      issuer: "OpenAI",
      icon: "🚀",
    },

  ],
  viewAllUrl:
    "https://www.linkedin.com/in/subham-datta-5796772a5/details/certifications/",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "BRAINWARE UNIVERSITY",
  cgpa: "ONGOING",
  graduation: "2029",
  twelfth: "12th Science – 75%",
  tenth: "10th CBSE – 79%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE 2029 - specialized in AI & ML",
  copyright: `© ${new Date().getFullYear()} Work With Subham | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

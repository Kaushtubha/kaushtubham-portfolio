export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  certificateUrl?: string;
  highlights: string[];
  icon: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
  tag: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl: string;
  badgeText: string;
}

export const portfolioData = {
  personal: {
    name: "Kaushtubham Shukla",
    role: "Software Development Engineer Intern",
    tagline: "Architecting Scalable Backend Systems & Intelligent Applications",
    bio: "Backend-focused software engineering student (graduating 2027) with hands-on experience building Java and Spring Boot systems, including a production-style job scheduling service with PostgreSQL and Redis. Comfortable working with REST APIs, relational databases, and Git-based workflows, with a strong grounding in OOP and data structures.",
    phone: "+91 70245 36363",
    email: "kaushtubhams@gmail.com",
    location: "Bhopal, MP, India",
    github: "https://github.com/Kaushtubha",
    linkedin: "https://www.linkedin.com/in/kaushtubhamshukla/",
    portfolio: "https://kaushtubham-portfolio.vercel.app/",
  },

  stats: [
    { label: "Production Projects", value: "3+" },
    { label: "REST Endpoints Built", value: "8+" },
    { label: "Engineering Internships", value: "2" },
    { label: "Hackathon Finalist", value: "Top 5" },
  ],

  experiences: [
    {
      id: "vendiman",
      role: "Software Development Intern",
      company: "Vendiman Pvt. Ltd.",
      period: "Jul 2026 — Present",
      location: "Bhopal, MP",
      certificateUrl: "https://drive.google.com/file/d/1W0WUGu-BPEv5iaw90_Fp8LvAtNJeCElh/view?usp=sharing",
      icon: "/exp1.svg",
      highlights: [
        "Developed automation scripts for Goods Receipt Note (GRN) and Purchase Order workflows inside the company's ERP system, replacing manual entry steps in the warehouse process.",
        "Built backend modules and data models for a Warehouse Management System, supporting sales automation and business process workflows across distribution centers.",
      ],
    },
    {
      id: "antilabs",
      role: "Full Stack Developer Intern",
      company: "Antilabs",
      period: "May 2026 — Present",
      location: "Remote",
      certificateUrl: "https://drive.google.com/drive/folders/1OnZbrev6nGSEquKn9gUkGrxvmxtvYhUQ?usp=drive_link",
      icon: "/exp4.svg",
      highlights: [
        "Built an SEO and business-profile optimization tool using Next.js, FastAPI, and the Gemini API to scan websites and generate automated SEO recommendations.",
        "Developed the backend for HackLabs, a hackathon platform built by Antilabs, implementing registration, authentication, team management, and Cashfree payment gateway integration.",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "optiqueue",
      title: "OptiQueue",
      subtitle: "Backend Job Processing & Scheduling System",
      period: "May 2026 — Present",
      description: "A fault-tolerant distributed job scheduler designed with a custom priority scheduler, transactional PostgreSQL state persistence, and Redis coordination.",
      highlights: [
        "Engineered custom priority-based scheduler supporting 7 discrete job lifecycle states with automatic exponential backoff retry algorithms.",
        "Implemented 8+ secure REST API endpoints featuring API key authentication, Redis-backed rate limiting, and idempotency key enforcement.",
        "Debugged and mitigated stalled-worker failures using distributed Redis heartbeat health checks; containerized via Docker and automated CI/CD to Oracle Cloud.",
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Oracle Cloud"],
      githubUrl: "https://github.com/Kaushtubha/optiqueue",
      image: "/p1.svg",
      accentColor: "#a855f7",
    },
    {
      id: "bengaluru-traffic-ai",
      title: "BengaluruTrafficAI",
      subtitle: "Real-Time Traffic Management System",
      period: "Jan 2026 — Apr 2026",
      description: "An intelligent traffic computer vision & predictive congestion pipeline feeding live radar dashboards to dynamically adapt signal timing.",
      highlights: [
        "Developed high-throughput vehicle detection and tracking pipeline utilizing YOLOv8n combined with a custom centroid tracking algorithm.",
        "Trained a Random Forest ensemble model to forecast traffic density patterns and compute optimized signal green-light phases.",
        "Engineered Flask REST API with MongoDB logging integrated with a live React/Vite radar telemetry dashboard deployed via GitHub Actions.",
      ],
      tags: ["Python", "YOLOv8", "Flask", "React", "scikit-learn", "MongoDB", "Vercel", "Render"],
      githubUrl: "https://github.com/Kaushtubha/BengaluruTrafficAI",
      liveUrl: "https://bengaluru-traffic-ai.vercel.app/",
      image: "/p2.svg",
      accentColor: "#ec4899",
    },
    {
      id: "retail-iq",
      title: "RetailIQ",
      subtitle: "Retail Analytics & Forecasting Platform",
      period: "Oct 2025 — Dec 2025",
      description: "An enterprise-grade forecasting and retail pricing analysis engine delivering machine learning predictions through responsive interactive analytics.",
      highlights: [
        "Constructed a full-stack analytical platform leveraging FastAPI, CatBoost regression models, and React dashboards for demand forecasting.",
        "Architected production REST inference endpoints and integrated statistical data drift checks to flag and mitigate model prediction decay.",
        "Containerized application with Docker and orchestrated PostgreSQL schemas for historical sales data aggregation.",
      ],
      tags: ["FastAPI", "CatBoost", "React", "Docker", "PostgreSQL", "Python"],
      githubUrl: "https://github.com/Kaushtubha/retail-forecast",
      liveUrl: "https://retail-forecast-q2qs.vercel.app/",
      image: "/p3.svg",
      accentColor: "#f97316",
    },
  ] as Project[],

  skillCategories: [
    {
      category: "Languages",
      iconName: "Code2",
      skills: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend & APIs",
      iconName: "Server",
      skills: ["Spring Boot", "Spring MVC", "REST API Design", "Node.js", "Express.js", "FastAPI", "Flask", "JWT"],
    },
    {
      category: "Databases",
      iconName: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "CS Fundamentals",
      iconName: "Cpu",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      category: "DevOps & Cloud",
      iconName: "Cloud",
      skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "AWS", "Postman", "Oracle Cloud"],
    },
    {
      category: "Frontend",
      iconName: "Layout",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
  ] as SkillCategory[],

  education: {
    institution: "VIT Bhopal University",
    degree: "B.Tech in Computer Science Engineering",
    period: "Sep 2023 — May 2027",
    location: "Bhopal, MP",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Object Oriented Programming (OOPs)",
      "Software Engineering",
    ],
  },

  achievements: [
    {
      title: "Top 5 Finalist & PPI Offer",
      event: "NASSCOM × Gnani.ai Hackathon",
      description: "Advanced to top 5 finalist teams nationwide and secured a Pre-Placement Interview (PPI) offer based on system performance and architecture.",
      tag: "National Finalist",
    },
    {
      title: "Core Member — Event Management Team",
      event: "Electric Vehicle (EV) Club, VIT Bhopal",
      description: "Orchestrated high-impact technical symposiums, student workshops, and collaborative automotive engineering showcases.",
      tag: "Leadership",
    },
  ] as Achievement[],

  certifications: [
    {
      title: "Applied Machine Learning in Python",
      issuer: "University of Michigan (Coursera)",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4HR6BY3RTADG",
      badgeText: "Coursera Verified",
    },
    {
      title: "Cloud Computing",
      issuer: "IIT Kharagpur (NPTEL)",
      credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104730025404238649.pdf",
      badgeText: "NPTEL Certified",
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "IIT Kharagpur (NPTEL)",
      credentialUrl: "https://drive.google.com/file/d/1kf53nY_zxBB3s6qH-rnLcAhFdai6H3qK/view?usp=sharing",
      badgeText: "NPTEL Certified",
    },
    {
      title: "GenAI Powered Data Analytics Simulation",
      issuer: "Tata Group (Forage)",
      credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_69f635757fe1933b4a6e25ca_1777795370162_completion_certificate.pdf",
      badgeText: "Tata Simulation",
    },
  ] as Certification[],
};

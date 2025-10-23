// This file exports the data for your "Developer Journey" section.

// We can define types for better autocompletion and error checking
export interface TimelineItemData {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  icon: "briefcase" | "code" | "star" | "graduationCap";
  tags?: ("AI" | "Web")[]; // <-- ADDED THIS FIELD
  description: string;
  technologies: string[];
  caseStudyTitle: string;
  caseStudyContent: string;
  githubUrl: string;
  liveUrl: string;
  type?: "item";
}

export interface TestimonialData {
  id: string;
  type: "testimonial";
  quote: string;
  author: string;
}

// Combine them into a single type
export type TimelineEntry = TimelineItemData | TestimonialData;

// Export the data array
export const timelineData: TimelineEntry[] = [
  // --- 2025 ---
  {
    id: "rag-chatbot-2025",
    year: "2025 (In Progress)",
    title: "Multi-Platform RAG Chatbot",
    subtitle: "Project",
    icon: "code",
    tags: ["AI"], // <-- ADDED
    description:
      "Developing a multi-platform RAG chatbot (WhatsApp, Instagram, Web) using FastAPI, LangChain, and vector databases.",
    technologies: ["FastAPI", "LangChain", "Graph RAG", "VectorDB", "Python"],
    caseStudyTitle: "Building a Multi-Platform RAG Chatbot",
    caseStudyContent:
      "This in-progress project involves architecting a sophisticated RAG system to handle queries from multiple sources. The goal is to create a unified AI assistant that can be accessed via WhatsApp, Instagram, and a web interface, all powered by a single FastAPI backend and a Graph RAG implementation for complex, contextual answers.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "mixtape-saas-2025",
    year: "2025 (In Progress)",
    title: "AI Backend (Mixtape SaaS)",
    subtitle: "Project",
    icon: "code",
    tags: ["AI"], // <-- ADDED
    description:
      "Developing the AI backend and making production ready for an upcoming SaaS product involving AI video generation and S3 storage.",
    technologies: ["AI", "Video Generation", "S3", "Python", "FastAPI"],
    caseStudyTitle: "AI Backend for SaaS",
    caseStudyContent:
      "Architecting and building the core AI backend for a new SaaS platform. This role involves integrating video generation models, managing asynchronous tasks, and ensuring scalable, cost-efficient file storage with AWS S3.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "research-transfer-learning-2025",
    year: "2025 (In Progress)",
    title: "Optimizing Transfer Learning",
    subtitle: "University Research",
    icon: "graduationCap",
    tags: ["AI"], // <-- ADDED
    description:
      "Researching PEFT methods and fine-tuning for optimizing transfer learning in low-resource medical imaging using Vision Transformers (ViTs).",
    technologies: ["PyTorch", "Transformers", "ViT", "PEFT", "Fine-Tuning"],
    caseStudyTitle: "Optimizing Transfer Learning in Medical Imaging",
    caseStudyContent:
      "This university research project explores the application of Parameter-Efficient Fine-Tuning (PEFT) methods on Vision Transformers (ViTs) for medical image classification. The focus is on achieving high accuracy in low-resource environments, comparing various PEFT techniques against traditional fine-tuning.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "upwork-rising-talent-2025",
    year: "2025",
    title: "Upwork Rising Talent",
    subtitle: "Achievement",
    icon: "star",
    description:
      "Recognized by Upwork for strong early success, positive client feedback, and high-quality project delivery.",
    technologies: ["Freelancing", "Client Communication", "Project Management"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "intern-taino-2025",
    year: "2025",
    title: "AI & Automation Intern",
    subtitle: "Internship @ Taino Spain S.L",
    icon: "briefcase",
    tags: ["AI", "Web"], // <-- ADDED
    description:
      "Built a social media content generation pipeline using n8n, web scrapers, and AI model integration.",
    technologies: ["n8n", "Web Scraping", "AI Integration", "Automation"],
    caseStudyTitle: "Social Media Content Automation",
    caseStudyContent:
      "As part of a collaborative team, I helped design and build an automation workflow using n8n. This pipeline scrapes content from multiple sources, processes it, uses an AI model to generate new social media prompts and content, and schedules it for posting. This project honed my skills in workflow automation and practical AI integration.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "testimonial-sachin",
    type: "testimonial",
    quote:
      "It was really good experience and Lakshitha was exceptional in his skills and very hardworking as well to explore new way around.",
    author: "Sachin (Client on Upwork)",
  },
  {
    id: "upwork-multi-agent-2-2025",
    year: "2025",
    title: "Multi-Agent UI Tester",
    subtitle: "Upwork Project",
    icon: "code",
    tags: ["AI"], // <-- ADDED
    description:
      "Fixed and integrated a multi-agent system, connecting a Playwright test execution agent with a QA agent using LangChain.",
    technologies: ["LangChain", "Multi-Agent", "Playwright", "Pydantic"],
    caseStudyTitle: "Multi-Agent QA System Integration",
    caseStudyContent:
      "This project involved fixing a complex multi-agent system. I integrated a Playwright agent (for test execution) with a QA agent (for analysis and reporting). My work focused on resolving Pydantic model conflicts and ensuring seamless communication between agents using LangChain.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "upwork-multi-agent-1-2025",
    year: "2025",
    title: "Multi-Agent QA System Config",
    subtitle: "Upwork Project",
    icon: "code",
    tags: ["AI"], // <-- ADDED
    description:
      "Configured and fixed a multi-agent QA system powered by Jira and MCP, resolving Pydantic model issues to orchestrate UI/UX testing.",
    technologies: ["Jira", "Multi-Agent", "Pydantic", "Python"],
    caseStudyTitle: "Jira-Powered QA Agent Configuration",
    caseStudyContent:
      "For the same client, I configured a separate multi-agent system designed to orchestrate UI/UX testing by interacting with Jira. The primary challenge was debugging and resolving Pydantic model incompatibilities that prevented the agents from communicating correctly.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "testimonial-faithfulnes",
    type: "testimonial",
    quote: "He is the best Django guy i have worked with",
    author: "Faithfulnes A. (Client on Upwork)",
  },
  {
    id: "upwork-s3-django-2025",
    year: "2025",
    title: "AWS S3 & Django Fix",
    subtitle: "Upwork Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Diagnosed and fixed a critical production issue preventing a Django application from correctly connecting to an AWS S3 bucket.",
    technologies: ["Django", "AWS S3", "DevOps", "Python"],
    caseStudyTitle: "Critical Django AWS S3 Production Fix",
    caseStudyContent:
      "A client's Django application was failing in production due to an inability to connect to its S3 bucket. I diagnosed the issue, which involved incorrect IAM policies and misconfigured Django-storages settings, and implemented a fix to restore full functionality.",
    githubUrl: "#",
    liveUrl: "https://www.upwork.com/freelancers/~013fa9079ef42bd1b1",
  },
  // --- 2024 ---
  {
    id: "xanvia-studentmoves-2024",
    year: "2024",
    title: "studentmoves.co.uk",
    subtitle: "Xanvia Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Co-led design, architecture, and development of a property rental service for UK students, including Stripe payment integration.",
    technologies: ["Django", "Next.js", "Stripe", "SaaS", "Architecture"],
    caseStudyTitle: "Co-founding StudentMoves.co.uk",
    caseStudyContent:
      "As a co-founder and lead developer at Xanvia, I architected and built this platform from the ground up. My responsibilities included designing the database schema (PostgreSQL), developing the Django backend, and integrating the Stripe payment gateway. This project involved full-cycle SaaS development, from idea to deployment.",
    githubUrl: "#",
    liveUrl: "https://studentmoves.co.uk",
  },
  {
    id: "xanvia-trading-bot-2024",
    year: "2024",
    title: "AI Trading Bot",
    subtitle: "Xanvia Project",
    icon: "code",
    tags: ["AI"], // <-- ADDED
    description:
      "Automated a UK client's binary options trading strategy, integrating a ChatGPT-based LLM for auto-trading decisions.",
    technologies: ["Python", "ChatGPT", "LLM", "Automation", "Trading"],
    caseStudyTitle: "AI-Powered Binary Options Trading Bot",
    caseStudyContent:
      "This Xanvia project involved automating a client's complex trading strategy. I developed a Python application that interfaced with a binary options site, analyzed market data, and fed that data to a ChatGPT LLM for trade decisions. The system then executed trades automatically based on the LLM's response.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "xanvia-founded-2024",
    year: "2024",
    title: "Founder - Xanvia (xanvia.tech)",
    subtitle: "Achievement",
    icon: "star",
    description:
      "Co-founded a startup focused on building AI-powered web tools, automation, and SaaS products for founders and businesses.",
    technologies: ["Entrepreneurship", "SaaS", "AI", "Architecture", "CI/CD"],
    caseStudyTitle: "Founding Xanvia",
    caseStudyContent:
      "Co-founded Xanvia to build high-quality, AI-powered software solutions. As a technical founder, I am responsible for solution architecture, backend development, CI/CD pipelines, and leading collaborative development efforts for all our client and in-house projects.",
    githubUrl: "#",
    liveUrl: "https://xanvia.tech",
  },
  {
    id: "trading-insights-chrome-2024",
    year: "2024",
    title: "Trading Insights Chrome Extension",
    subtitle: "Personal Project",
    icon: "code",
    tags: ["AI", "Web"], // <-- ADDED
    description:
      "Built a Chrome extension that analyzes trading charts and integrates with ChatGPT to provide buy/sell signals.",
    technologies: ["Chrome Extension", "ChatGPT", "JavaScript", "AI"],
    caseStudyTitle: "AI Trading Insights Chrome Extension",
    caseStudyContent:
      "This personal project was a Chrome extension that could be activated on trading websites. It captured chart data, sent it to the ChatGPT API for analysis, and then displayed the AI-generated insights (including buy/sell signals) directly on the user's page.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "opened-lms-2024",
    year: "2024",
    title: "OpenEd LMS (opened.pdn.ac.lk)",
    subtitle: "Lead Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Led the end-to-end development of a comprehensive LMS for the University of Peradeniya, from planning to deployment. Features HLS video streaming and payments.",
    technologies: [
      "Django",
      "Next.js",
      "PostgreSQL",
      "CI/CD",
      "Unit Testing",
      "HLS",
    ],
    caseStudyTitle: "Lead Developer - OpenEd LMS",
    caseStudyContent:
      "As the lead developer for our 3rd-year university project, I managed the entire development lifecycle. This comprehensive LMS, built for the university's IT center, features course management, secure HLS video streaming, content handling, multi-role authentication, and payment gateway integration. I was responsible for architecture, backend, CI/CD, and testing.",
    githubUrl: "https://github.com/Xanvia/MOOC-IT-Center-UOP",
    liveUrl: "https://opened.pdn.ac.lk",
  },
  {
    id: "intern-sprintcodelabs-2024",
    year: "2023 - 2024",
    title: "Full-Stack Developer Intern",
    subtitle: "Internship @ Sprint Code Labs",
    icon: "briefcase",
    tags: ["Web"], // <-- ADDED
    description:
      "Developed and tested features for client projects using Django (DRF) and React. Mastered Git best practices, Selenium UI testing, and Agile/Sprint methodologies.",
    technologies: ["Django", "DRF", "React", "Agile", "Selenium", "Git"],
    caseStudyTitle: "Full-Stack Internship at Sprint Code Labs",
    caseStudyContent:
      "During my internship, I worked as a full-stack developer in a professional Agile/Sprint environment. My responsibilities included developing backend features with Django REST Framework, building frontend components in React, writing Selenium tests for UI automation, and collaborating on codebases using Git best practices.",
    githubUrl: "#",
    liveUrl: "https://sprintcodelabs.com",
  },
  // --- 2023 ---
  {
    id: "semicolon-autocredit-2023",
    year: "2023",
    title: "Autocredit (Semicolon Devs)",
    subtitle: "Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Contributed to a MERN-stack loan collection tool by fixing backend logic and optimizing database queries.",
    technologies: ["MERN", "Node.js", "MongoDB", "Backend", "Optimization"],
    caseStudyTitle: "Backend Optimization for Autocredit",
    caseStudyContent:
      "As part of a team at Semicolon Devs, I worked on Autocredit, a loan collection tool. My role was to dive into the Node.js backend to identify and fix bugs in business logic and optimize slow-running MongoDB queries to improve application performance.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "semicolon-smit-2023",
    year: "2023",
    title: "SMIT LMS (Semicolon Devs)",
    subtitle: "Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Enhanced UI, fixed bugs, and added new features to an educational institute's MERN-stack Learning Management System.",
    technologies: ["MERN", "React", "Node.js", "UI/UX", "Bug Fixing"],
    caseStudyTitle: "LMS Enhancement for SMIT",
    caseStudyContent:
      "I contributed to the SMIT (Study Medicine Italy) LMS, a platform for medical students. My work involved enhancing the React-based UI, fixing existing bugs, and implementing new features as requested by the client, which gave me practical MERN stack experience.",
    githubUrl: "#",
    liveUrl: "https://www.studymedicineitaly.com/",
  },
  {
    id: "csup-reignite-2025",
    year: "2023",
    title: "President CSUP - 'REIGNITE '25 - CSUP Game Night",
    subtitle: "CSUP Achievement",
    icon: "star",
    description:
      "As President of the Computer Society, I successfully organized and led 'REIGNITE '25', a game night for 80+ participants featuring 2 main game events.",
    technologies: [
      "Leadership",
      "Event Management",
      "Team Coordination",
      "Sponsorship",
    ],
    caseStudyTitle: "Organizing 'REIGNITE '25 Game Night'",
    caseStudyContent:
      "As CSUP President, I was responsible for the entire event lifecycle of 'REIGNITE '25'. This involved leading a team of coordinators, securing sponsorships, managing logistics, and promoting the event to attract over 80 participants. We successfully ran two concurrent gaming tournaments, resulting in one of the most well-attended events of the year.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "csup-devops-2023",
    year: "2023",
    title: "Coordinator - 'Code 2 Cloud' DevOps Workshop",
    subtitle: "CSUP Achievement",
    icon: "star",
    description:
      "Coordinated a comprehensive DevOps workshop. Learned AWS (S3, EC2, EKS), Kubernetes, CI/CD with Jenkins, monitoring, and security.",
    technologies: ["AWS", "Kubernetes", "Jenkins", "CI/CD", "DevOps"],
    caseStudyTitle: "'Code 2 Cloud' DevOps Workshop",
    caseStudyContent:
      "As a coordinator for the Computer Society (CSUP), I helped organize a complete DevOps workshop. This was also an intensive learning experience, covering the entire cloud-native pipeline: AWS services (S3, EC2, EKS), container orchestration with Kubernetes, CI/CD with Jenkins, monitoring, and security best practices.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "cert-google-cybersec-2023",
    year: "2023",
    title: "Google Cybersecurity",
    subtitle: "Certificate",
    icon: "star",
    description:
      "Completed the Google Cybersecurity Professional Certificate, gaining skills in security principles, network security, and threat management.",
    technologies: ["Cybersecurity", "Network Security", "SIEM", "SQL"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
  // --- 2022 ---
  {
    id: "csup-portal-2022",
    year: "2022",
    title: "CSUP Member Portal",
    subtitle: "Project",
    icon: "code",
    tags: ["Web"], // <-- ADDED
    description:
      "Developed the Computer Society (CSUP) member portal using the MERN stack. Implemented user authentication, CRUD operations, and REST APIs with JWT.",
    technologies: ["MERN", "React", "Node.js", "JWT", "REST APIs", "MongoDB"],
    caseStudyTitle: "CSUP Member Portal (MERN Stack)",
    caseStudyContent:
      "This was one of my first full-stack projects. I built the member portal for the university Computer Society, which allowed me to learn and implement the MERN stack from scratch. Key features included user login with JWT for authentication, CRUD operations for member profiles, and a RESTful API backend.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "cert-big-data-2022",
    year: "2022",
    title: "Introduction to Big Data (Coursera)",
    subtitle: "Certificate",
    icon: "star",
    description:
      "Learned the fundamentals of Big Data from UC San Diego, covering data management, processing, and the Hadoop ecosystem.",
    technologies: ["Big Data", "Hadoop", "Data Management"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
  // --- 2021 ---
  {
    id: "cert-deep-learning-2021",
    year: "2021",
    title: "Deep Learning Specialization (Coursera)",
    subtitle: "Certificate",
    icon: "star",
    description:
      "Completed the DeepLearning.AI specialization, covering Neural Networks, Hyperparameter Tuning, and Structuring ML Projects.",
    technologies: ["Deep Learning", "Neural Networks", "TensorFlow", "ML"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
  // --- 2020 ---
  {
    id: "learning-python-2020",
    year: "2020",
    title: "Started Learning Python, Web Dev, & Linux",
    subtitle: "Milestone",
    icon: "star",
    description:
      "Began my self-taught journey into programming, starting with Python, foundational HTML/CSS/JS, and setting up a Linux environment.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Linux"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
  // --- 2015 ---
  {
    id: "hello-world-2015",
    year: "2015",
    title: "'Hello World' in Pascal",
    subtitle: "How it all started",
    icon: "star",
    description:
      "Wrote my first line of code, 'Hello World', in Pascal at Nugawela Central College. This sparked my interest in computer science.",
    technologies: ["Pascal"],
    caseStudyTitle: "",
    caseStudyContent: "",
    githubUrl: "",
    liveUrl: "",
  },
];

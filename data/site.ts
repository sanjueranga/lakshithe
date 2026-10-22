// Single source of truth for the site. Built from CONTENT.md plus everything
// that already lived on the old site (data/timeline.ts, hero, footer, blog).
// Optional fields that are left out are never rendered.

export type Status = "active" | "in-progress" | "archive";
export type Tag = "Systems" | "AI" | "Web";

export interface Profile {
  name: string;
  title: string;
  intro: string;
  statusLine?: string;
  photo: string;
  cv: string;
  email?: string;
  location: string;
  coreStack: string[];
  links: { label: string; url: string; icon: string; show: boolean }[];
}

export interface Publication {
  title: string;
  authors?: string[];
  venue: string;
  year: number;
  status: "published" | "accepted" | "under-review" | "preprint";
  summary: string;
  details?: string;
  stack?: string[];
  links?: { pdf?: string; doi?: string; slides?: string; code?: string };
}

export interface ResearchWork {
  title: string;
  org: string;
  year: string;
  what: string;
  details?: string;
  stack?: string[];
}

export interface Role {
  title: string;
  org: string;
  orgUrl?: string;
  start?: string;
  end?: string;
  type?: "full-time" | "part-time" | "contract" | "intern";
  bullets: string[];
  stack?: string[];
}

export interface Project {
  name: string;
  tags: Tag[];
  year: string;
  org?: string;
  role?: string;
  problem?: string;
  built: string;
  details?: string;
  stack: string[];
  links?: { repo?: string; live?: string; article?: string };
  featured: boolean;
}

export interface Course {
  code?: string;
  name: string;
  level?: string;
  what: string;
  years?: string;
}

export interface Article {
  title: string;
  summary: string;
  publication: string;
  date?: string;
  url: string;
  image?: string;
}

export interface Award {
  name: string;
  issuer: string;
  year: string;
  note?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  note?: string;
}

export interface Milestone {
  year: string;
  text: string;
}

export interface Leadership {
  role: string;
  org: string;
  dates?: string;
  what?: string;
  numbers?: string;
  url?: string;
  category?: "society" | "research" | "teaching" | "startup";
}

export interface Testimonial {
  quote: string;
  name: string;
  platform: string;
  rating?: number;
}

export interface Unit {
  id: string;
  label: string;
  status: Status;
  count: string;
  badge?: string;
  preview: string;
}

/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: "Lakshitha Eranga",
  title: "Systems Researcher & Architect",
  intro:
    "A boy from the Knuckles Mountain Range who grew up curious, reached for the sky and dreamt big. Today I'm a Computer Science graduate (First Class Honours, University of Peradeniya) and a Temporary Demonstrator there, researching why parallelism stops paying off and how scheduling and memory behaviour set the cost of running AI workloads.",
  statusLine: "Looking toward PhD research in systems / AI infrastructure",
  photo: "/lakshitha-portrait.png",
  cv: "/Lakshitha_Eranga_CV.pdf",
  email: "lakshitha.eh@gmail.com",
  location: "Kandy, Sri Lanka",
  coreStack: [
    "C",
    "C++",
    "OpenMP / MPI",
    "CUDA",
    "Linux",
    "Python",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/sanjueranga", icon: "github", show: true },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/lakshithe/", icon: "linkedin", show: true },
    { label: "Medium", url: "https://lakshithe.medium.com", icon: "medium", show: true },
    {
      label: "Upwork",
      url: "https://www.upwork.com/freelancers/~013fa9079ef42bd1b1",
      icon: "upwork",
      show: true,
    },
    // Undecided in CONTENT.md ("TODO yes/no"): hidden until confirmed.
    { label: "Facebook", url: "https://www.facebook.com/share/1H5UwjxAkj/", icon: "facebook", show: false },
    { label: "Instagram", url: "https://www.instagram.com/__sanju.12__/", icon: "instagram", show: false },
  ],
};

/* ------------------------------- Research --------------------------------- */

export const research = {
  interests:
    "My interests sit at the intersection of systems engineering and machine learning. Watching distributed backends and asynchronous AI pipelines behave badly under load raised the questions I now find worth researching: why parallelism stops paying off, and how scheduling and memory behaviour quietly set the cost of running AI workloads.",
  questions: [] as string[],
  collaborations: [] as { topic: string; with?: string; since?: string }[],
};

export const publications: Publication[] = [
  {
    title:
      "Parallelism Isn't Free: Two Hidden Walls in a Heterogeneous Media-Understanding Pipeline",
    venue: "ISBM 2026, Bangkok — Springer, Lecture Notes in Networks and Systems",
    year: 2026,
    status: "accepted",
    summary:
      "Two scaling walls found while profiling a production pipeline that mixes local CPU-bound models with external AI APIs. Virtually presented at ISBM 2026; proceedings to appear in Springer LNNS.",
    details:
      "This paper came directly out of production work on a heterogeneous media-understanding pipeline — one that runs local CPU-bound transcription models alongside external AI APIs for heavy video analysis. Scaling it revealed that adding workers stops buying throughput well before the hardware is saturated. The paper characterises two distinct walls behind that: one rooted in how contended CPU-bound stages interact with the scheduler, and one in how the pipeline's slowest heterogeneous stage bounds the whole graph. Both are measured against a real workload, and the paper closes with what this means for the cost of running AI infrastructure at scale.",
    stack: [
      "Parallel Processing",
      "Concurrency",
      "Scheduling",
      "AI Pipelines",
      "Performance Analysis",
    ],
  },
  {
    title:
      "A two-stage output-space parameter-efficient transfer learning framework for low-resource medical imaging adaptation",
    venue: "Ceylon Journal of Science",
    year: 2026,
    status: "under-review",
    summary:
      "A PEFT framework that adapts pretrained vision models in the output space, for medical imaging domains where labelled data is scarce.",
    details:
      "This paper is the written-up result of my undergraduate research on transfer learning for medical imaging. Standard fine-tuning struggles when the target domain has only a few hundred labelled scans, and conventional parameter-efficient methods still reach into the backbone to adapt it. The framework proposed here works in two stages and confines adaptation to the output space instead, which keeps the pretrained representation intact while still fitting the new domain. It is evaluated against both full fine-tuning and standard PEFT baselines across several low-resource medical datasets.",
    stack: [
      "PEFT",
      "Vision Transformers",
      "Transfer Learning",
      "Medical Imaging",
      "PyTorch",
    ],
  },
];

export const researchWork: ResearchWork[] = [
  {
    title: "Optimizing Transfer Learning",
    org: "University research",
    year: "2025",
    what: "Researching PEFT methods and fine-tuning for optimizing transfer learning in low-resource medical imaging using Vision Transformers (ViTs).",
    details:
      "This university research project explores the application of Parameter-Efficient Fine-Tuning (PEFT) methods on Vision Transformers (ViTs) for medical image classification. The focus is on achieving high accuracy in low-resource environments, comparing various PEFT techniques against traditional fine-tuning.",
    stack: ["PyTorch", "Transformers", "ViT", "PEFT", "Fine-Tuning"],
  },
];

/* ------------------------------ Experience -------------------------------- */

export const roles: Role[] = [
  {
    title: "Temporary Demonstrator",
    org: "Dept. of Statistics and Computer Science, University of Peradeniya",
    start: "Jun 2026",
    end: "Present",
    type: "full-time",
    bullets: [],
  },
  {
    title: "AI & Automation Engineer",
    org: "Taino Spain S.L",
    start: "2025",
    end: "Present",
    type: "intern",
    bullets: [
      "Built a multi-platform RAG chatbot (WhatsApp, Instagram, Web) on a single FastAPI backend, using LangChain and vector databases.",
      "Built an agentic social media content automation pipeline in n8n that generates, approves, schedules and posts content across platforms.",
    ],
    stack: ["FastAPI", "LangChain", "RAG", "VectorDB", "n8n", "Docker"],
  },
  {
    title: "Backend / Infrastructure Architect",
    org: "Freelance",
    orgUrl: "https://www.upwork.com/freelancers/~013fa9079ef42bd1b1",
    type: "contract",
    bullets: [
      "Architected and shipped a production SaaS backend for AI video generation: event-driven services, pipeline orchestration, secure file storage, CI/CD and observability.",
      "Took an AI video job from ~10 minutes to a ~60-second pipeline — a 10x improvement in task execution time.",
    ],
    stack: ["Python", "Celery", "Redis", "AWS", "Terraform", "FastAPI", "Django"],
  },
  {
    title: "Full-Stack Developer",
    org: "Sprint Code Labs",
    orgUrl: "https://sprintcodelabs.com",
    start: "2023",
    end: "2024",
    type: "intern",
    bullets: [
      "Developed and tested features for client projects using Django (DRF) and React.",
      "Worked in Agile/Sprint cycles with Git best practices and Selenium UI testing.",
    ],
    stack: ["Django", "DRF", "React", "Selenium", "Git"],
  },
];

/* ------------------------------- Projects --------------------------------- */

export const projects: Project[] = [
  {
    name: "SamajaAI — EdTech Voice Agent",
    tags: ["AI", "Web"],
    year: "2026",
    role: "Lead Developer & Architect",
    built:
      "Transformed an existing prototype into a scalable, production-ready MVP. Led the architectural decisions behind a secure EdTech platform built around AI voice agents, with ElevenLabs integration.",
    details:
      "Worked closely with the founder of SamajaAI to transition their working prototype into a robust, production-ready MVP. I made the critical architectural design choices that gave the platform long-term scalability and security. At its core sits a specialized AI voice agent tailored for the EdTech sector, leaning heavily on ElevenLabs integration for realistic, engaging learning interactions.",
    stack: ["AI Voice Agents", "ElevenLabs", "Architecture", "Security", "Scalability"],
    featured: true,
  },
  {
    name: "Mixtape AI — Marketing Video Storytelling",
    tags: ["AI", "Web", "Systems"],
    year: "2025–2026",
    role: "Contract",
    built:
      "Architected and shipped a production-grade SaaS backend: event-driven services, AI pipeline orchestration, secure file storage, and DevOps. Owned API design, job queues, background workers and the autoscaling infrastructure behind AI video generation — a 10x improvement in task execution time.",
    details:
      "Architected and built the core AI backend for a marketing-video SaaS platform, taking it from contract start through to production. The work covered integrating video generation models, orchestrating a hybrid pipeline that paired local CPU-bound transcription with external AI APIs for heavy analysis, running the asynchronous workload on Celery and message brokers so the main API stayed responsive, and managing scalable, cost-efficient storage on AWS S3. Infrastructure was provisioned with Terraform and deployed through CI/CD pipelines built for zero-downtime releases. The autoscaling redesign delivered a 10x improvement in task execution time.",
    stack: ["Python", "FastAPI", "Django", "Celery", "AWS S3", "Terraform"],
    links: {
      article:
        "https://levelup.gitconnected.com/from-a-10-minute-ai-job-to-a-60-second-pipeline-612f93e61d9d",
    },
    featured: true,
  },
  {
    name: "Self-hosted HLS Video Streaming Server (OpenEd LMS)",
    tags: ["Systems", "Web"],
    year: "2024",
    problem: "Mux/Vimeo costs add up fast for an LMS.",
    built:
      "Adaptive HLS streaming with protection against easy downloads and full control over how videos are served.",
    stack: ["FFmpeg", "HLS"],
    links: {
      article:
        "https://medium.com/cloud-core-x/no-budget-no-problem-how-i-built-a-diy-video-streaming-server-94c7a3f778b2",
    },
    featured: true,
  },
  {
    name: "OpenEd LMS (IT Center, UoP)",
    tags: ["Web"],
    year: "2024",
    role: "Lead Developer — 3rd year project",
    built:
      "Led the end-to-end development of a comprehensive LMS for the University of Peradeniya, from planning to deployment. Features HLS video streaming and payments.",
    details:
      "As the lead developer for our 3rd-year university project, I managed the entire development lifecycle. This comprehensive LMS, built for the university's IT center, features course management, secure HLS video streaming, content handling, multi-role authentication, and payment gateway integration. I was responsible for architecture, backend, CI/CD, and testing.",
    stack: ["Django", "TypeScript", "Next.js", "PostgreSQL", "CI/CD", "HLS", "Microservices"],
    links: {
      repo: "https://github.com/Xanvia/MOOC-IT-Center-UOP",
      live: "https://opened.pdn.ac.lk",
    },
    featured: true,
  },
  {
    name: "Multi-Platform RAG Chatbot",
    tags: ["AI"],
    year: "2025",
    org: "Taino Spain S.L",
    built:
      "A multi-platform RAG chatbot (WhatsApp, Instagram, Web) using FastAPI, LangChain, and vector databases.",
    details:
      "This in-progress project involves architecting a sophisticated RAG system to handle queries from multiple sources. The goal is to create a unified AI assistant that can be accessed via WhatsApp, Instagram, and a web interface, all powered by a single FastAPI backend and a Graph RAG implementation for complex, contextual answers.",
    stack: ["FastAPI", "LangChain", "RAG", "VectorDB", "Python", "Docker"],
    featured: true,
  },
  {
    name: "MyDresser — Virtual Try-On",
    tags: ["AI", "Web"],
    year: "2025",
    org: "Upwork project",
    built:
      "Building a virtual try-on app with AI-powered features. Responsible for backend development and AI implementation, making the system production-ready, fixing bugs, and ensuring scalable development practices.",
    details:
      "Developing a virtual try-on application that leverages AI to provide a realistic fitting experience. As the backend engineer and AI developer, I'm building the AI features to power the virtual try-on functionality, ensuring the system is production-ready, fixing bugs, and implementing scalable development practices to support future growth.",
    stack: ["Django", "Google Generative AI", "Python"],
    featured: true,
  },
  {
    name: "AI Trading Bot",
    tags: ["AI"],
    year: "2024",
    org: "Xanvia",
    built:
      "Automated a UK client's binary options trading strategy, integrating a ChatGPT-based LLM for auto-trading decisions.",
    details:
      "This Xanvia project involved automating a client's complex trading strategy. I developed a NextJs application that interfaced with a binary options site, analyzed market data, and fed that data to a ChatGPT LLM for trade decisions. The system then executed trades automatically based on the LLM's response.",
    stack: ["Next.js", "ChatGPT", "OpenAI API", "Automation"],
    featured: true,
  },
  {
    name: "studentmoves.co.uk",
    tags: ["Web"],
    year: "2024",
    org: "Xanvia",
    built:
      "Co-led design, architecture, and development of a property rental service for UK students, including Stripe payment integration.",
    details:
      "As a co-founder and lead developer at Xanvia, I architected and built this platform from the ground up. My responsibilities included designing the database schema (PostgreSQL), developing the Django backend, and integrating the Stripe payment gateway. This project involved full-cycle SaaS development, from idea to deployment.",
    stack: ["Django", "Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    links: { live: "https://studentmoves.co.uk" },
    featured: false,
  },
  {
    name: "Social Media Content Automation Pipeline",
    tags: ["AI"],
    year: "2025",
    org: "Taino Spain S.L",
    built:
      "An agentic, multi-platform content automation pipeline using n8n to generate, manage, and distribute social media content.",
    details:
      "This project involves building an intelligent workflow using n8n to automate the social media content lifecycle. It uses agentic AI to handle content generation and adaptation, while the n8n pipeline manages approvals, scheduling, and posting across multiple platforms (like Instagram, X, and LinkedIn) via their respective APIs.",
    stack: ["n8n", "AI Agents", "Webhooks", "REST APIs", "Python"],
    featured: false,
  },
  {
    name: "Multi-Agent UI Tester",
    tags: ["AI"],
    year: "2025",
    org: "Upwork project",
    built:
      "Fixed and integrated a multi-agent system, connecting a Playwright test execution agent with a QA agent using LangChain.",
    details:
      "This project involved fixing a complex multi-agent system. I integrated a Playwright agent (for test execution) with a QA agent (for analysis and reporting). My work focused on resolving Pydantic model conflicts and ensuring seamless communication between agents using LangChain.",
    stack: ["LangChain", "Playwright", "Pydantic", "Python"],
    featured: false,
  },
  {
    name: "Multi-Agent QA System Config",
    tags: ["AI"],
    year: "2025",
    org: "Upwork project",
    built:
      "Configured and fixed a multi-agent QA system powered by Jira and MCP, resolving Pydantic model issues to orchestrate UI/UX testing.",
    details:
      "For the same client, I configured a separate multi-agent system designed to orchestrate UI/UX testing by interacting with Jira. The primary challenge was debugging and resolving Pydantic model incompatibilities that prevented the agents from communicating correctly.",
    stack: ["Jira", "MCP", "Pydantic", "Python"],
    featured: false,
  },
  {
    name: "AWS S3 & Django Fix",
    tags: ["Web"],
    year: "2025",
    org: "Upwork project",
    built:
      "Diagnosed and fixed a critical production issue preventing a Django application from correctly connecting to an AWS S3 bucket.",
    details:
      "A client's Django application was failing in production due to an inability to connect to its S3 bucket. I diagnosed the issue, which involved incorrect IAM policies and misconfigured Django-storages settings, and implemented a fix to restore full functionality.",
    stack: ["Django", "AWS S3", "IAM", "Python"],
    featured: false,
  },
  {
    name: "Trading Insights Chrome Extension",
    tags: ["AI", "Web"],
    year: "2024",
    org: "UK client",
    built:
      "A Chrome extension that analyzes trading charts and integrates with ChatGPT to provide buy/sell signals.",
    details:
      "This was a Chrome extension that could be activated on trading websites. It captured chart data, sent it to the ChatGPT API for analysis, and then displayed the AI-generated insights (including buy/sell signals) directly on the user's page.",
    stack: ["Chrome Extension", "ChatGPT", "JavaScript"],
    featured: false,
  },
  {
    name: "Autocredit",
    tags: ["Web"],
    year: "2023",
    org: "semicolon Devs",
    built:
      "Contributed to a MERN-stack loan collection tool by fixing backend logic and optimizing database queries.",
    details:
      "As part of a team at Semicolon Devs, I worked on Autocredit, a loan collection tool. My role was to dive into the Node.js backend to identify and fix bugs in business logic and optimize slow-running MongoDB queries to improve application performance.",
    stack: ["MERN", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    name: "SMIT LMS",
    tags: ["Web"],
    year: "2023",
    org: "semicolon Devs",
    built:
      "Enhanced UI, fixed bugs, and added new features to an educational institute's MERN-stack Learning Management System.",
    details:
      "I contributed to the SMIT (Study Medicine Italy) LMS, a platform for medical students. My work involved enhancing the React-based UI, fixing existing bugs, and implementing new features as requested by the client, which gave me practical MERN stack experience.",
    stack: ["MERN", "React", "Node.js"],
    links: { live: "https://www.studymedicineitaly.com/" },
    featured: false,
  },
  {
    name: "CSUP Member Portal",
    tags: ["Web"],
    year: "2022",
    org: "Computer Science Society, UoP",
    built:
      "The Computer Society (CSUP) member portal using the MERN stack, with user authentication, CRUD operations, and REST APIs with JWT.",
    details:
      "This was one of my first full-stack projects. I built the member portal for the university Computer Society, which allowed me to learn and implement the MERN stack from scratch. Key features included user login with JWT for authentication, CRUD operations for member profiles, and a RESTful API backend.",
    stack: ["MERN", "React", "Node.js", "JWT", "MongoDB"],
    featured: false,
  },
];

/* -------------------------------- Teaching -------------------------------- */

// Course details are not filled in yet; the panel falls back to the
// demonstrator role from `roles`.
export const courses: Course[] = [
  {
    code: "CSC 3081",
    name: "Computer Graphics Programming",
    level: "Undergraduate",
    what: "Practical lab sessions in C++ and OpenGL.",
  },
];

/* -------------------------------- Writing --------------------------------- */

export const articles: Article[] = [
  {
    title: "Cut Your Cloud Bills: How to Build Your Own Cloud Video Server",
    summary:
      "Mux and Vimeo bills add up fast. How we built our own HLS video streaming server for an LMS: adaptive streaming, protection against easy downloads, and full control over how videos are served.",
    publication: "Cloud Core X (Medium)",
    url: "https://medium.com/cloud-core-x/no-budget-no-problem-how-i-built-a-diy-video-streaming-server-94c7a3f778b2",
    image: "/cloud-bill.webp",
  },
  {
    title: "From a 10-Minute AI Job to a 60-Second Pipeline",
    summary:
      "What happens when 50 users upload 5 videos at once? How I evolved a compute-heavy AI system from a demo-ready MVP into a production-grade pipeline without rewriting the core business logic.",
    publication: "Level Up Coding",
    url: "https://levelup.gitconnected.com/from-a-10-minute-ai-job-to-a-60-second-pipeline-612f93e61d9d?sk=4607ed7083a28da7f186cfc9174ec623",
    image: "/article_ai_pipeline.webp",
  },
  {
    title: "Threads in C — Explained Simply with Code",
    summary:
      "Threads and multiprocessing come from the world of distributed computing. Using C, a language close to the hardware, we see how threads, processes, and memory come together.",
    publication: "Medium",
    url: "https://lakshithe.medium.com/threads-in-c-explained-simply-with-code-bae3f45e391b?sk=4222c13af00cb62e023d5cd452142faf",
    image: "/article-c.webp",
  },
];

export const mediumUrl = "https://medium.com/@lakshithe";

/* --------------------------- Education & Awards --------------------------- */

export const degree = {
  name: "BSc (Hons) Computer Science — First Class Honours",
  minors: "Mathematics, Statistics",
  university: "University of Peradeniya",
  years: "2022 – 2026",
  summary:
    "Consistent academic excellence across all four years, alongside undergraduate research in transfer learning for medical imaging and leadership of the Computer Science Society.",
};

export const awards: Award[] = [
  { name: "University Award for Academic Excellence", issuer: "University of Peradeniya", year: "2026" },
  {
    name: "Upwork Top Rated",
    issuer: "Upwork",
    year: "2026",
    note: "Recognized for exceptional client satisfaction, timely delivery, and high-quality work across multiple projects.",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera · DeepLearning.AI",
    year: "2021",
    note: "Neural networks, hyperparameter tuning, structuring ML projects.",
  },
  {
    name: "Introduction to Big Data",
    issuer: "Coursera · UC San Diego",
    year: "2022",
    note: "Data management, processing and the Hadoop ecosystem.",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2023",
    note: "Security principles, network security, threat management.",
  },
  {
    name: "ICE 2025 Entrepreneurial Boot Camp",
    issuer: "led by NUS Prof. Suranga Nanayakkara",
    year: "2025",
    note: "Intensive 3-day boot camp on creativity, design thinking and entrepreneurship. Selected from the best students of Sri Lankan universities, 6% acceptance rate.",
  },
];

export const journey: Milestone[] = [
  { year: "2015", text: "Wrote my first “Hello World”, in Pascal at Nugawela Central College." },
  { year: "2020", text: "Started self-teaching Python, web development and Linux." },
  { year: "2022", text: "Began the BSc in Computer Science; built the CSUP member portal, my first full-stack project." },
  { year: "2024", text: "Co-founded Xanvia and led the OpenEd LMS as a third-year project." },
  { year: "2025", text: "Organised REIGNITE ’25 and earned a place at the ICE 2025 Entrepreneurial Boot Camp." },
  { year: "2026", text: "Graduated with First Class Honours and became Upwork Top Rated." },
  { year: "2026", text: "Virtually presented at ISBM 2026 (Bangkok)." },
];

/* ------------------------------- Leadership ------------------------------- */

export const leadership: Leadership[] = [
  {
    role: "President",
    org: "Computer Science Society (CSUP), UoP",
    dates: "2024–2025",
    what: "Led the society: events, member collaboration, technical initiatives.",
    category: "society",
  },
  {
    role: "Organiser",
    org: "REIGNITE ’25 Game Night",
    dates: "2025",
    what: "Revived the annual gaming night after seven years, with an esports tournament, sponsorships and logistics.",
    numbers: "~150 participants · 18 teams",
    category: "society",
  },
  {
    role: "Coordinator",
    org: "“Code 2 Cloud” DevOps Workshop",
    dates: "2023",
    what: "AWS, Kubernetes, CI/CD with Jenkins, monitoring and security.",
    category: "society",
  },
  {
    role: "Organising Committee",
    org: "RESCON, Postgraduate Institute of Science, UoP",
    dates: "2026",
    what: "Event logistics and academic presentations.",
    category: "research",
  },
  {
    role: "Organising Committee",
    org: "SURS, Undergraduate Research Symposium, UoP",
    dates: "2024",
    what: "Event logistics and academic presentations.",
    category: "research",
  },
  {
    role: "Volunteer",
    org: "SIRED, Society of Industrial Relations and Entrepreneurship Development",
    what: "Helped run a seminar teaching mathematics to O/L students in rural schools.",
    category: "teaching",
  },
  {
    role: "Co-Founder",
    org: "Xanvia",
    dates: "2024",
    what: "AI-powered web tools and SaaS for founders. I own architecture, backend and CI/CD.",
    url: "https://xanvia.tech",
    category: "startup",
  },
];

export const leadershipGroups: { title: string; category: NonNullable<Leadership["category"]> }[] = [
  { title: "CSUP", category: "society" },
  { title: "Research", category: "research" },
  { title: "Volunteer", category: "teaching" },
  { title: "Startup", category: "startup" },
];

/* --------------------------------- Clients -------------------------------- */

export const clients = {
  summary:
    "Backend architecture, AI pipelines and cloud infrastructure for startups.",
  badges: ["Top Rated (2026)"],
  upwork: "https://www.upwork.com/freelancers/~013fa9079ef42bd1b1",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lakshitha is a very dedicated supportive intelligent developer to work with, highly recommended for projects with tight schedule. His skills in AI is excellent and delivered a very good job!",
    name: "Marianne",
    platform: "Upwork",
    rating: 5,
  },
  {
    quote:
      "He is so hardworking and good, he keeps to deadlines, Hire him if you have the opportunity you won't regret.",
    name: "Faithfulnes",
    platform: "Upwork",
    rating: 5,
  },
  {
    quote:
      "It was really good experience and Lakshitha was exceptional in his skills and very hardworking as well to explore new way around.",
    name: "Sachin",
    platform: "Upwork",
    rating: 5,
  },
  {
    quote: "He is the best Django guy i have worked with",
    name: "Faithfulnes A.",
    platform: "Upwork",
    rating: 5,
  },
];

/* -------------------------- Outside the terminal -------------------------- */

export interface Interest {
  name: string;
  art: "f1" | "space" | "motorcycle" | "mountains" | "beach";
  note?: string;
}

export const outsideStory =
  "I'm a boy from the Knuckles Mountain Range, who grew up curious, always trying to reach the skies and dreaming big. The mountains taught me to keep climbing; the rest of my time goes to engines, space, and the sea.";

export const interests: Interest[] = [
  { name: "Formula 1", art: "f1" },
  { name: "Space", art: "space" },
  { name: "Motorcycles", art: "motorcycle" },
  { name: "Mountains", art: "mountains" },
  { name: "Beaches", art: "beach" },
];

/* --------------------------------- Units ---------------------------------- */

const plural = (n: number, one: string, many = `${one}s`) =>
  `${n} ${n === 1 ? one : many}`;

export function buildUnits(): Unit[] {
  const inReview = publications.filter((p) => p.status === "under-review").length;
  const featured = projects.filter((p) => p.featured);
  const rated = testimonials.filter((t) => t.rating);
  const avg = rated.length
    ? rated.reduce((s, t) => s + (t.rating ?? 0), 0) / rated.length
    : 0;

  return [
    {
      id: "research",
      label: "RESEARCH",
      status: inReview ? "in-progress" : "active",
      count: plural(publications.length, "paper"),
      badge: inReview ? `${inReview} in review` : undefined,
      preview: "Parallelism, scheduling and the cost of AI infrastructure",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      status: "active",
      count: plural(roles.length, "role"),
      preview: `${roles[0].title} · University of Peradeniya`,
    },
    {
      id: "projects",
      label: "PROJECTS",
      status: "active",
      count: `${featured.length} featured`,
      preview: featured
        .slice(0, 3)
        .map((p) => p.name.split(" — ")[0])
        .join(" · "),
    },
    {
      id: "teaching",
      label: "TEACHING",
      status: "active",
      count: courses.length ? plural(courses.length, "course") : "Demonstrator",
      preview: "Dept. of Statistics and Computer Science, UoP",
    },
    {
      id: "writing",
      label: "WRITING",
      status: "active",
      count: plural(articles.length, "article"),
      preview: articles[0].title.split(":")[0],
    },
    {
      id: "education",
      label: "EDUCATION & AWARDS",
      status: "archive",
      count: `degree + ${plural(awards.length, "award")}`,
      preview: "BSc (Hons) Computer Science · First Class",
    },
    {
      id: "leadership",
      label: "LEADERSHIP & VOLUNTEERING",
      status: "active",
      count: plural(leadership.length, "role"),
      preview: "President, Computer Science Society (CSUP)",
    },
    {
      id: "clients",
      label: "FREELANCE & CLIENTS",
      status: "active",
      count: `${plural(testimonials.length, "review")} · Top Rated`,
      preview: avg ? `Upwork · ${avg.toFixed(1)} average rating` : "Upwork",
    },
    {
      id: "outside",
      label: "OUTSIDE THE TERMINAL",
      status: "active",
      count: plural(interests.length, "interest"),
      preview: interests.map((i) => i.name).join(" · "),
    },
  ];
}

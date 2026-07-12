export interface SaaSTestimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
  rating: 5 | 4 | 3 | 2 | 1
  projectName?: string
  date?: string
}

export const saasTestimonialsData: SaaSTestimonial[] = [
  {
    id: "faithfulness-ameh",
    quote: "I needed help setting up AWS S3 for my SaaS, and he got it working. Later, when I ran into issues adding features through Cursor, he jumped in and fixed the flow of the app. Really good at getting things back on track.",
    author: "Faithfulness Ameh",
    company: "Mixtape",
    rating: 5,
    projectName: "Django AWS S3 Integration",
    date: "Jun 2025"
  },
  {
    id: "hasanka-sanjana",
    quote: "We had broken logic in our financial app, and he sorted it out. Optimized MongoDB and rebuilt parts of the UI. It honestly runs so much smoother now.",
    author: "Hasanka Sanjana",
    company: "Project SMIT",
    rating: 5,
    projectName: "Financial App Optimization",
    date: "2025"
  },
  {
    id: "keiron-denton",
    quote: "Has worked on everything from rental platforms to trading bots. Always delivers and finds smart ways to solve problems. Reliable and easy to work with.",
    author: "Keiron Denton",
    company: "Visual Science",
    rating: 5,
    projectName: "Multiple Projects",
    date: "2025"
  },
  {
    id: "django-expert",
    quote: "Lakshitha is a very dedicated supportive intelligent developer to work with, highly recommended for projects with tight schedule. His skills in AI is excellent and delivered a very good job!",
    author: "Sonet",
    company: "Fashion App Project (Upwork)",
    rating: 5,
    projectName: "Django Expert for Fashion App MVP",
    date: "Jan-Feb 2026"
  },
  {
    id: "cicd-devops",
    quote: "Lakshita is a smart, intelligent and proactive freelancer. Great skills set, easy to communicate with.",
    author: "Adam",
    company: "Australia (Upwork)",
    rating: 5,
    projectName: "CI/CD + DevOps for MVP",
    date: "Nov 2025-Jan 2026"
  },
  {
    id: "ai-backend-deployment",
    quote: "He is so hardworking and good, he keeps to deadlines, Hire him if you have the opportunity you won't regret.",
    author: "Ameh Faithfulness",
    company: "AI Backend Project",
    rating: 5,
    projectName: "AI Backend Deployment",
    date: "Jun-Nov 2025"
  },
  {
    id: "github-project-config",
    quote: "It was really good experience and Lakshitha was exceptional in his skills and very hardworking as well to explore new way around.",
    author: "Sachin",
    rating: 5,
    projectName: "GitHub Project Configuration",
    date: "Oct 2025"
  },
  {
    id: "django-aws-best",
    quote: "He is the best Django guy i have worked with",
    author: "Client",
    rating: 5,
    projectName: "Django AWS Deployment",
    date: "Jun 2025"
  }
]

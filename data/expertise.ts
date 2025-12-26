export interface Skill {
  name: string;
  // timelineId has been removed
}

export interface ExpertiseCategory {
  title: string;
  skills: Skill[];
}

export const expertiseData: ExpertiseCategory[] = [
  {
    title: "AI",
    skills: [
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Agentic AI" },
      { name: "LLM" },
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "PyTorch" },
      { name: "RAG" },
      { name: "Transformers" },
      { name: "Fine-Tuning" },
      { name: "Prompt Engineering" },
      { name: "Automation" },
      { name: "n8n" },
      { name: "Orchestration" },
    ],
  },
  {
    title: "Backend & Architecture",
    skills: [
      { name: "Python" },
      { name: "Typescript" },
      { name: "Django" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Microservices" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Payment Gateways" },
      { name: "WebSockets" },
      { name: "Multi-Tenancy" },
      { name: "Authorization" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker" },
      { name: "n8n" },
      { name: "VectorDBs" },
      { name: "Vercel" },
      { name: "Git" },
      { name: "CI/CD" },
      { name: "AWS" },
      { name: "supabase" },
    ],
  },
];

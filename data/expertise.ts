export interface Skill {
  name: string;
}

export interface ExpertiseCategory {
  title: string;
  skills: Skill[];
}

export const expertiseData: ExpertiseCategory[] = [
  {
    title: "Systems & Parallel Computing",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "OpenMPI" },
      { name: "OpenMP" },
      { name: "CUDA" },
      { name: "Linux" },
      { name: "Parallel Processing" },
      { name: "Concurrency" },
      { name: "Scheduling" },
      { name: "FFmpeg" },
      { name: "HLS Video Streaming" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Terraform" },
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Dokploy" },
      { name: "Celery" },
      { name: "Redis" },
      { name: "Git" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "Fine-Tuning" },
      { name: "LangChain" },
      { name: "RAG" },
      { name: "VectorDBs" },
      { name: "n8n" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "FastAPI" },
      { name: "Django" },
      { name: "NestJS" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
];

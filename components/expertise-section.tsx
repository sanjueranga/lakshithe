"use client";

import { Card } from "@/components/ui/card";
// Import new icons
import { Briefcase, GraduationCap } from "lucide-react";

// Updated expertise data as requested
const expertiseData = [
  {
    title: "AI & ML",
    skills: [
      "FastAPI",
      "LangChain",
      "PyTorch",
      "RAG",
      "VectorDBs",
      "Transformers",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Django",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "n8n", "Vercel", "Git", "CI/CD", "AWS"],
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-24 px-4 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-24 text-foreground text-center">
          Skills & Experience
        </h2>

        {/* --- New 2-Column Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* --- LEFT COLUMN: Core Technologies --- */}
          <div className="space-y-10">
            {expertiseData.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold mb-5 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/80 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* --- RIGHT COLUMN: Experience & Education --- */}
          <div className="space-y-24 lg:pl-48">
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Experience
              </h3>
              <ol className="relative border-l border-border  space-y-16">
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    AI & Automation Engineer
                  </h4>
                  <p className="text-base font-normal text-muted-foreground mb-1">
                    Taino Spain S.L
                  </p>
                  <time className="text-sm font-normal leading-none text-muted-foreground/80">
                    2025 - Present (Intern)
                  </time>
                </li>
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    Full-Stack Developer
                  </h4>
                  <p className="text-base font-normal text-muted-foreground mb-1">
                    Sprint Code Labs
                  </p>
                  <time className="text-sm font-normal leading-none text-muted-foreground/80">
                    2023 - 2024
                  </time>
                </li>
              </ol>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3 ">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <ol className="relative border-l border-border ">
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <GraduationCap className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    BSc (Hons) in Computer Science
                  </h4>
                  <p className="text-base font-normal text-muted-foreground">
                    University of Peradeniya
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

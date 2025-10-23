"use client"

import { useState } from "react"
import { TimelineItem } from "./timeline-item"
import { TestimonialCard } from "./testimonial-card"

const timelineData = [
  {
    id: "rag-chatbot",
    year: "2025",
    title: "Intern - RAG Chatbot",
    icon: "briefcase",
    description:
      "Built a retrieval-augmented generation chatbot that processes and queries large document sets. Implemented semantic search and context-aware responses using LangChain and FastAPI.",
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React"],
    caseStudyTitle: "Building a Production RAG Chatbot",
    caseStudyContent:
      "This project involved creating a sophisticated RAG system that could handle complex document retrieval and generation tasks. We implemented vector embeddings using OpenAI's API, built a FastAPI backend for efficient querying, and created a React frontend for user interaction. The system achieved 95% accuracy in document retrieval and reduced query response time by 60% compared to traditional search methods.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "testimonial-1",
    type: "testimonial",
    quote:
      "Working with this developer was transformative. They delivered a complex AI system on time and exceeded our expectations.",
    author: "Sarah Chen, CTO at TechCorp",
  },
  {
    id: "ml-pipeline",
    year: "2024",
    title: "Project - ML Pipeline Optimization",
    icon: "code",
    description:
      "Designed and implemented an automated machine learning pipeline that reduced training time by 70%. Integrated with CI/CD for continuous model deployment.",
    technologies: ["Python", "PyTorch", "Docker", "Kubernetes", "GitHub Actions"],
    caseStudyTitle: "Optimizing ML Pipelines at Scale",
    caseStudyContent:
      "This project focused on creating an efficient ML pipeline that could handle large-scale data processing. We implemented distributed training across multiple GPUs, created automated testing and validation steps, and set up continuous deployment. The optimization reduced training time from 8 hours to 2.5 hours, significantly improving our iteration speed.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "fullstack-app",
    year: "2024",
    title: "Achievement - Full-Stack SaaS Launch",
    icon: "star",
    description:
      "Launched a complete SaaS application from concept to production with 500+ active users. Managed database scaling and implemented real-time features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel"],
    caseStudyTitle: "Launching a SaaS Product",
    caseStudyContent:
      "Building a SaaS product from scratch required careful planning and execution. We designed a scalable architecture using Next.js and PostgreSQL, implemented Stripe for payments, and deployed on Vercel for optimal performance. Within 3 months of launch, we reached 500 active users and achieved a 40% monthly growth rate.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "testimonial-2",
    type: "testimonial",
    quote:
      "Exceptional technical skills combined with great communication. Highly recommended for any serious project.",
    author: "Michael Rodriguez, Founder at StartupXYZ",
  },
  {
    id: "api-design",
    year: "2023",
    title: "Project - RESTful API Design",
    icon: "code",
    description:
      "Architected a scalable REST API serving 1M+ requests daily. Implemented caching, rate limiting, and comprehensive documentation.",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "OpenAPI"],
    caseStudyTitle: "Building a High-Performance API",
    caseStudyContent:
      "This API project required handling massive scale and ensuring reliability. We implemented Redis caching to reduce database load by 80%, set up rate limiting to prevent abuse, and created comprehensive OpenAPI documentation. The API achieved 99.9% uptime and handled peak loads of 50,000 requests per second.",
    githubUrl: "#",
    liveUrl: "#",
  },
]

export function TimelineSection({ onSelectCaseStudy }: { onSelectCaseStudy: (id: string) => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">My Developer Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              if (item.type === "testimonial") {
                return (
                  <div key={item.id} className="md:flex md:justify-end md:pr-1/2">
                    <div className="md:w-1/2 md:pr-12">
                      <TestimonialCard quote={item.quote} author={item.author} />
                    </div>
                  </div>
                )
              }

              const isExpanded = expandedId === item.id
              const isEven = index % 2 === 0

              return (
                <div key={item.id} className={`md:flex ${isEven ? "md:flex-row-reverse" : ""}`}>
                  <div className={`md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <TimelineItem
                      item={item}
                      isExpanded={isExpanded}
                      onToggle={() => setExpandedId(isExpanded ? null : item.id)}
                      onSelectCaseStudy={onSelectCaseStudy}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

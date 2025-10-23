"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies: Record<string, any> = {
  "rag-chatbot": {
    title: "Building a Production RAG Chatbot",
    content:
      "This project involved creating a sophisticated RAG system that could handle complex document retrieval and generation tasks. We implemented vector embeddings using OpenAI's API, built a FastAPI backend for efficient querying, and created a React frontend for user interaction.\n\nThe system achieved 95% accuracy in document retrieval and reduced query response time by 60% compared to traditional search methods. We also implemented advanced features like multi-document context awareness, semantic similarity scoring, and real-time streaming responses.\n\nKey challenges included managing large vector databases, optimizing embedding generation, and ensuring consistent performance under high load. We solved these by implementing caching strategies, batch processing, and load balancing across multiple API instances.",
    github: "#",
    live: "#",
  },
  "ml-pipeline": {
    title: "Optimizing ML Pipelines at Scale",
    content:
      "This project focused on creating an efficient ML pipeline that could handle large-scale data processing. We implemented distributed training across multiple GPUs, created automated testing and validation steps, and set up continuous deployment.\n\nThe optimization reduced training time from 8 hours to 2.5 hours, significantly improving our iteration speed. We achieved this through careful profiling, algorithmic improvements, and infrastructure optimization.\n\nThe pipeline now handles 100GB+ datasets daily, with automatic data validation, model versioning, and performance tracking. We integrated with MLflow for experiment tracking and created comprehensive monitoring dashboards.",
    github: "#",
    live: "#",
  },
  "fullstack-app": {
    title: "Launching a SaaS Product",
    content:
      "Building a SaaS product from scratch required careful planning and execution. We designed a scalable architecture using Next.js and PostgreSQL, implemented Stripe for payments, and deployed on Vercel for optimal performance.\n\nWithin 3 months of launch, we reached 500 active users and achieved a 40% monthly growth rate. The application includes user authentication, subscription management, real-time notifications, and comprehensive analytics.\n\nWe focused on user experience, implementing smooth onboarding flows, intuitive dashboards, and responsive design. The product is now generating $50K+ in monthly recurring revenue with a 95% customer satisfaction rating.",
    github: "#",
    live: "#",
  },
  "api-design": {
    title: "Building a High-Performance API",
    content:
      "This API project required handling massive scale and ensuring reliability. We implemented Redis caching to reduce database load by 80%, set up rate limiting to prevent abuse, and created comprehensive OpenAPI documentation.\n\nThe API achieved 99.9% uptime and handled peak loads of 50,000 requests per second. We used advanced techniques like connection pooling, query optimization, and strategic caching to achieve these performance metrics.\n\nThe system now serves over 1 billion requests monthly across multiple regions. We implemented geographic distribution, automatic failover, and real-time monitoring to ensure consistent performance globally.",
    github: "#",
    live: "#",
  },
}

interface CaseStudyModalProps {
  caseStudyId: string | null
  onClose: () => void
}

export function CaseStudyModal({ caseStudyId, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!caseStudyId || !caseStudies[caseStudyId]) return null

  const study = caseStudies[caseStudyId]

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{study.title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-background rounded transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="prose prose-invert max-w-none">
            {study.content.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex gap-4 pt-6 border-t border-border">
            <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={study.github}>GitHub Repo</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <a href={study.live}>Live Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

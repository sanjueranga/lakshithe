"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Systems with FastAPI",
    snippet:
      "Learn how to architect production-ready AI systems that can handle millions of requests. We explore best practices for API design, caching strategies, and deployment optimization.",
    image: "/fastapi-architecture.jpg",
  },
  {
    id: 2,
    title: "The Future of RAG: Beyond Simple Retrieval",
    snippet:
      "Dive deep into advanced retrieval-augmented generation techniques. Discover how to implement multi-hop reasoning, semantic reranking, and context-aware generation.",
    image: "/rag-advanced-techniques.jpg",
  },
  {
    id: 3,
    title: "Full-Stack Development in 2025: Tools & Trends",
    snippet:
      "Explore the latest tools and frameworks shaping full-stack development. From Next.js 15 to new database solutions, stay ahead of the curve.",
    image: "/fullstack-development-2025.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">From My Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">{post.title}</h3>

                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{post.snippet}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 w-full bg-transparent"
                >
                  <a href="#" className="flex items-center justify-center gap-2">
                    Read on Medium
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

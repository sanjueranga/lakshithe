"use client"

import { Card } from "@/components/ui/card"

const expertiseData = [
  {
    title: "AI & ML",
    skills: ["FastAPI", "LangChain", "PyTorch", "RAG"],
  },
  {
    title: "Backend",
    skills: ["Django", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "n8n", "Vercel", "Git"],
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">At-a-Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((category) => (
            <Card key={category.title} className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

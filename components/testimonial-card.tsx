"use client"

import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  projectName?: string
  company?: string
  date?: string
}

export function TestimonialCard({ quote, author, rating, projectName, company, date }: TestimonialCardProps) {
  return (
    <Card className="bg-background border-primary/30 p-6 relative h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Quote size={24} className="text-primary/50" />
        {date && (
          <span className="text-xs text-muted-foreground">{date}</span>
        )}
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
          />
        ))}
        <span className="text-sm text-primary font-semibold ml-1">{rating}.0</span>
      </div>

      <p className="text-foreground italic mb-4 leading-relaxed flex-grow">"{quote}"</p>

      <div>
        <p className="text-primary font-semibold">{author}</p>
        {(company || projectName) && (
          <p className="text-sm text-muted-foreground">
            {company && projectName ? `${company} • ${projectName}` : company || projectName}
          </p>
        )}
      </div>
    </Card>
  )
}

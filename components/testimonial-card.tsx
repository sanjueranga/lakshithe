"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="bg-background border-primary/30 p-6 relative">
      <Quote size={24} className="text-primary/50 mb-4" />
      <p className="text-foreground italic mb-4 leading-relaxed">"{quote}"</p>
      <p className="text-primary font-semibold">{author}</p>
    </Card>
  )
}

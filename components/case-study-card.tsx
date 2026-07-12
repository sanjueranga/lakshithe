"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CaseStudyCardProps {
  clientName: string
  clientTitle?: string
  challenge: string
  solution: string
  tags: ("AI" | "Web")[]
  outcome?: string
}

export function CaseStudyCard({
  clientName,
  clientTitle,
  challenge,
  solution,
  tags,
  outcome
}: CaseStudyCardProps) {
  const tagColorMap: Record<string, string> = {
    AI: "bg-purple-600/10 text-purple-400 border-purple-600/30",
    Web: "bg-blue-600/10 text-blue-400 border-blue-600/30",
  }

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-xl mb-1">{clientName}</CardTitle>
            {clientTitle && (
              <CardDescription className="text-sm">{clientTitle}</CardDescription>
            )}
          </div>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={tagColorMap[tag]}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {challenge}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {solution}
          </p>
        </div>

        {outcome && (
          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">Outcome</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {outcome}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

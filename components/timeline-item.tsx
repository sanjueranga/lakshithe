"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Briefcase, Code, Star } from "lucide-react"

interface TimelineItemProps {
  item: any
  isExpanded: boolean
  onToggle: () => void
  onSelectCaseStudy: (id: string) => void
}

export function TimelineItem({ item, isExpanded, onToggle, onSelectCaseStudy }: TimelineItemProps) {
  const iconMap = {
    briefcase: Briefcase,
    code: Code,
    star: Star,
  }

  const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Briefcase

  return (
    <Card className="bg-background border-border overflow-hidden hover:border-primary/50 transition-colors">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-card/50 transition-colors"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="p-2 bg-primary/10 rounded-lg">
            <IconComponent size={20} className="text-primary" />
          </div>
          <div>
            {item.year && <p className="text-sm text-muted-foreground">{item.year}</p>}
            <p className="font-semibold text-foreground">{item.title}</p>
          </div>
        </div>
        <ChevronDown size={20} className={`text-primary transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border pt-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            onClick={() => onSelectCaseStudy(item.id)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
          >
            Read Full Case Study
          </Button>
        </div>
      )}
    </Card>
  )
}

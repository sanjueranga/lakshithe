"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Briefcase,
  Code,
  Star,
  GraduationCap,
} from "lucide-react";

interface TimelineItemProps {
  item: any;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export function TimelineItem({
  item,
  isExpanded,
  onToggle,
  onSelectCaseStudy,
}: TimelineItemProps) {
  const iconMap = {
    briefcase: Briefcase,
    code: Code,
    star: Star,
    graduationCap: GraduationCap,
  };

  const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Briefcase;

  // --- NEW: TagColor mapping ---
  const tagColorMap: Record<string, string> = {
    AI: "bg-purple-600/10 text-purple-400 border border-purple-600/30",
    Web: "bg-blue-600/10 text-blue-400 border border-blue-600/30",
  };

  return (
    // --- Added relative positioning to the card ---
    <Card className="relative bg-background border-border overflow-hidden hover:border-primary/50 transition-colors">
      {/* --- NEW: Tags Container --- */}
      {item.tags && item.tags.length > 0 && (
        <div className="absolute top-4 right-4 flex gap-2">
          {item.tags.map((tag: string) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                tagColorMap[tag] || "bg-gray-600/10 text-gray-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-card/50 transition-colors"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="p-2 bg-primary/10 rounded-lg">
            <IconComponent size={20} className="text-primary" />
          </div>
          {/* --- Added padding-right to avoid overlap with tags --- */}
          <div className="pr-16">
            {item.year && (
              <p className="text-sm text-muted-foreground">{item.year}</p>
            )}
            <p className="font-semibold text-foreground">{item.title}</p>
            {item.subtitle && (
              <p className="text-sm text-muted-foreground mt-1">
                {item.subtitle}
              </p>
            )}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-primary transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border pt-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>

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

          {/* --- NEW: Conditional Button --- */}
          {/* Only show button if case study content exists */}
          {item.caseStudyContent && (
            <Button
              onClick={() => onSelectCaseStudy(item.id)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Read Full Case Study
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}

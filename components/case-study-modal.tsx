"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import our new data and types
import { timelineData, TimelineItemData } from "@/data/timeline";

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudyId, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Find the correct item from our timelineData
  const item = timelineData.find((entry) => entry.id === caseStudyId);

  // Check if it's a valid item to display
  if (!item || item.type === "testimonial") {
    return null;
  }

  // Cast it to the correct type to access its properties
  const study = item as TimelineItemData;

  // Don't show modal if there's no case study content
  if (!study.caseStudyContent) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-in fade-in-0"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {study.caseStudyTitle}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-background rounded transition-colors"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            {/* Split content by newlines and render as paragraphs */}
            {study.caseStudyContent
              .split("\n\n")
              .map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
                >
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Conditionally render buttons only if URLs exist */}
          {(study.githubUrl && study.githubUrl !== "#") ||
          (study.liveUrl && study.liveUrl !== "#") ? (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              {study.githubUrl && study.githubUrl !== "#" && (
                <Button
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </Button>
              )}
              {study.liveUrl && study.liveUrl !== "#" && (
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

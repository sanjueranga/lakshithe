"use client";

import { useState } from "react";
import { TimelineItem } from "./timeline-item";
import { TestimonialCard } from "./testimonial-card";
// Import the data AND the types
import {
  timelineData,
  TestimonialData,
  TimelineItemData,
} from "@/data/timeline";

export function TimelineSection({
  onSelectCaseStudy,
}: {
  onSelectCaseStudy: (id: string) => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-card" id="journey">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground text-center">
          Building My Story, One Line at a Time
        </h2>

        <div className="relative">
          {/* FIX 1: Timeline bar moved from left-0 to left-4 on mobile.
            It's still centered on desktop (md:left-1/2).
          */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-primary/30 transform md:-translate-x-1/2 " />

          <div className="space-y-8">
            {timelineData.map((item) => {
              // --- RIGHT SIDE ITEMS ---
              if (
                item.type === "testimonial" ||
                (item as TimelineItemData).icon === "star" ||
                (item as TimelineItemData).icon === "briefcase"
              ) {
                // Render Testimonial Card
                if (item.type === "testimonial") {
                  return (
                    <div
                      key={item.id}
                      className="md:flex md:justify-end fade-in-section"
                    >
                      {/* FIX 2: Added `w-full pl-12` for mobile.
                        The `md:` classes override this on desktop.
                      */}
                      <div className="w-full pl-12 md:w-1/2 md:pl-12">
                        <TestimonialCard
                          quote={(item as TestimonialData).quote}
                          author={(item as TestimonialData).author}
                        />
                      </div>
                    </div>
                  );
                }

                // Render Achievement/Internship Card
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="md:flex md:justify-end fade-in-section"
                  >
                    {/* FIX 2 (Again): Added `w-full pl-12` for mobile.
                     */}
                    <div className="w-full pl-12 md:w-1/2 md:pl-12">
                      <TimelineItem
                        item={item}
                        isExpanded={isExpanded}
                        onToggle={() =>
                          setExpandedId(isExpanded ? null : item.id)
                        }
                        onSelectCaseStudy={onSelectCaseStudy}
                      />
                    </div>
                  </div>
                );
              }

              // --- LEFT SIDE ITEMS ---
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="md:flex md:justify-start fade-in-section"
                >
                  {/* FIX 3: Added `w-full pl-12` for mobile.
                    Kept `md:pr-12` for desktop.
                  */}
                  <div className="w-full pl-12 md:w-1/2 md:pr-12">
                    <TimelineItem
                      item={item}
                      isExpanded={isExpanded}
                      onToggle={() =>
                        setExpandedId(isExpanded ? null : item.id)
                      }
                      onSelectCaseStudy={onSelectCaseStudy}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

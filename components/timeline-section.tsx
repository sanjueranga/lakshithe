"use client";

import { useState, useEffect, useRef } from "react";
import { TimelineItem } from "./timeline-item";
import { TestimonialCard } from "./testimonial-card";
// Import the data AND the types
import {
  timelineData,
  TestimonialData,
  TimelineItemData,
} from "@/data/timeline";

const STICKY_TOP = 80; // px below the top of the viewport (header + gap)

export function TimelineSection({
  onSelectCaseStudy,
}: {
  onSelectCaseStudy: (id: string) => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [extra, setExtra] = useState(0); // inner scroll distance
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Pin the box while the page scrolls, and map page scroll onto the box's
  // own scroll position. The page resumes once the box reaches its end.
  useEffect(() => {
    const outer = outerRef.current;
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    if (!outer || !scroller || !content) return;

    const sync = () => {
      const scrolled = STICKY_TOP - outer.getBoundingClientRect().top;
      scroller.scrollTop = Math.max(0, scrolled);
      // Fill the centre line in proportion to scroll progress (0 -> 100%)
      if (fillRef.current) {
        const max = scroller.scrollHeight - scroller.clientHeight;
        const progress = max > 0 ? scroller.scrollTop / max : 0;
        fillRef.current.style.height = `${Math.min(Math.max(progress, 0), 1) * 100}%`;
      }
    };
    const measure = () => {
      setExtra(Math.max(0, content.offsetHeight + 48 - scroller.clientHeight));
      sync();
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(content);
    ro.observe(scroller);
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", sync);
    };
  }, []);

  const scrollToItem = (id: string) => {
    const outer = outerRef.current;
    const scroller = scrollerRef.current;
    const el = document.getElementById(id);
    if (!outer || !scroller || !el) return;
    const itemTop =
      el.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      16;
    const outerTop = outer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: outerTop - STICKY_TOP + Math.max(0, itemTop),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleSkillClick = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { id } = customEvent.detail;
      if (id) {
        setExpandedId(id); // 1. Set the state to expand the item
      }
    };

    window.addEventListener("skillClick", handleSkillClick);
    return () => {
      window.removeEventListener("skillClick", handleSkillClick);
    };
  }, []);

  useEffect(() => {
    if (expandedId) {
      // Use a short timeout to make sure the DOM has updated
      // and the item is expanded *before* we scroll to it.
      const timer = setTimeout(() => {
        scrollToItem(expandedId); // 2. Scroll to the now-expanded item
      }, 100); // 100ms is usually enough
      return () => clearTimeout(timer);
    }
  }, [expandedId]);

  return (
    <section className="pt-8 pb-20 px-4 bg-card" id="journey">
      <div className="max-w-6xl mx-auto">
        <div
          ref={outerRef}
          style={{ height: `calc(100vh - ${STICKY_TOP + 24}px + ${extra}px)` }}
        >
          <div
            className="sticky flex flex-col"
            style={{
              top: STICKY_TOP,
              height: `calc(100vh - ${STICKY_TOP + 24}px)`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
              Building My Story, One Line at a Time
            </h2>
            <div
              ref={scrollerRef}
              className="flex-1 min-h-0 overflow-hidden rounded-3xl border border-border/40 bg-background/40 shadow-sm px-3 py-6 md:px-10"
            >
              <div ref={contentRef} className="relative">
                {/* Centre line: faint track + fill that follows scroll */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 rounded-full bg-primary/15 md:-translate-x-1/2">
                  <div
                    ref={fillRef}
                    className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-[0_0_12px_var(--primary)]"
                    style={{ height: 0 }}
                  >
                    <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_3px_var(--primary)] animate-pulse" />
                  </div>
                </div>

                <div className="space-y-8">
                  {timelineData.map((item) => {
                    // --- RIGHT SIDE ITEMS ---
                    if (
                      item.type === "testimonial" ||
                      (item as TimelineItemData).icon === "star" ||
                      (item as TimelineItemData).icon === "briefcase" ||
                      (item as TimelineItemData).icon === "award"
                    ) {
                      // Render Testimonial Card
                      if (item.type === "testimonial") {
                        return (
                          <div
                            key={item.id}
                            id={item.id}
                            className="md:flex md:justify-end"
                          >
                            {/* FIX 2: Added `w-full pl-12` for mobile.
                        The `md:` classes override this on desktop.
                      */}
                            <div className="w-full pl-12 md:w-1/2 md:pl-12">
                              <TestimonialCard
                                quote={(item as TestimonialData).quote}
                                author={(item as TestimonialData).author}
                                rating={(item as TestimonialData).rating}
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
                          id={item.id}
                          className="md:flex md:justify-end"
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
                        id={item.id}
                        className="md:flex md:justify-start"
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
          </div>
        </div>
      </div>
    </section>
  );
}

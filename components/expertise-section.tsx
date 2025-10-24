"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

// --- 1. Import BOTH data files ---
import { expertiseData } from "@/data/expertise";
import { timelineData, TimelineItemData } from "@/data/timeline";

export function ExpertiseSection() {
  // --- 2. This helper function just handles the smooth scrolling ---
  // (We will call this from the timeline section now)
  const scrollToTimelineId = (timelineId: string) => {
    const element = document.getElementById(timelineId);
    if (element) {
      const headerOffset = 80; // 64px for header + 16px buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // --- 3. This function now finds the ID and dispatches an event ---
  const handleSkillClick = (skillName: string) => {
    // Find the first (newest) timeline item that includes this skill
    const foundItem = timelineData.find(
      (item) =>
        item.type !== "testimonial" &&
        (item as TimelineItemData).technologies &&
        (item as TimelineItemData).technologies.includes(skillName)
    );

    if (foundItem) {
      // --- NEW: Dispatch a custom event with the ID ---
      window.dispatchEvent(
        new CustomEvent("skillClick", { detail: { id: foundItem.id } })
      );
      // We also scroll immediately
      scrollToTimelineId(foundItem.id);
    } else {
      // Fallback: if no item is found, just scroll to the top of the journey
      scrollToTimelineId("journey");
    }
  };

  return (
    <section className="py-24 px-4 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">
          Skills & Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 ">
          {/* --- LEFT COLUMN: Core Technologies --- */}
          <div className="space-y-10 fade-in-section">
            <p className="mb-6 font-semibold">
              Click a <span className=" text-primary">skill</span> to see it in
              action.
            </p>
            {expertiseData.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold mb-5 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)} // <-- Fires the event
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground 
                                 hover:border-primary hover:text-primary transition-colors cursor-pointer
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      title={`Click to see my work with ${skill.name}`}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* --- RIGHT COLUMN: Experience & Education --- */}
          <div className="space-y-24 lg:pl-48 fade-in-section mt-12">
            {/* Experience Section (no changes here) */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Experience
              </h3>
              <ol className="relative border-l border-border  space-y-16">
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    AI & Automation Engineer
                  </h4>
                  <p className="text-base font-normal text-muted-foreground mb-1">
                    Taino Spain S.L
                  </p>
                  <time className="text-sm font-normal leading-none text-muted-foreground/80">
                    2025 - Present (Intern)
                  </time>
                </li>
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    Full-Stack Developer
                  </h4>
                  <p className="text-base font-normal text-muted-foreground mb-1">
                    Sprint Code Labs
                  </p>
                  <time className="text-sm font-normal leading-none text-muted-foreground/80">
                    2023 - 2024
                  </time>
                </li>
              </ol>
            </div>

            {/* Education Section (no changes here) */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3 ">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <ol className="relative border-l border-border ">
                <li className="ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                    <GraduationCap className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">
                    BSc (Hons) in Computer Science
                  </h4>
                  <p className="text-base font-normal text-muted-foreground">
                    University of Peradeniya
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

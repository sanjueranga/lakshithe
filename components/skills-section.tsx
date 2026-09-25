"use client";

import { expertiseData } from "@/data/expertise";
import { timelineData, TimelineItemData } from "@/data/timeline";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

// Temporarily hidden — see the commented-out block at the end of the section.
// const specialtyAreas = [
//   "Distributed Systems Architecture",
//   "Cloud Infrastructure & DevOps",
//   "Deep Learning & Parameter-Efficient Fine-Tuning (PEFT)",
//   "Applied Artificial Intelligence",
// ];
//
// const minors = ["Mathematics", "Statistics"];

// Smooth-scroll to a timeline entry, accounting for the fixed header.
const scrollToTimelineId = (timelineId: string) => {
  const element = document.getElementById(timelineId);
  if (element) {
    const headerOffset = 80; // 64px for header + 16px buffer
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export function SkillsSection() {
  // Find the newest timeline item using this skill, then tell the timeline
  // to expand it (see the "skillClick" listener in timeline-section.tsx).
  const handleSkillClick = (skillName: string) => {
    const foundItem = timelineData.find(
      (item) =>
        item.type !== "testimonial" &&
        (item as TimelineItemData).technologies &&
        (item as TimelineItemData).technologies.includes(skillName),
    );

    if (foundItem) {
      window.dispatchEvent(
        new CustomEvent("skillClick", { detail: { id: foundItem.id } }),
      );
      scrollToTimelineId(foundItem.id);
    } else {
      scrollToTimelineId("journey");
    }
  };

  return (
    <section className="py-24 px-4 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground text-center mb-16">
            Click a <span className="text-primary font-medium">skill</span> to see
            it in action.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((category) => (
            <StaggerItem key={category.title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => handleSkillClick(skill.name)}
                    title={`Click to see my work with ${skill.name}`}
                    className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground
                               hover:border-primary hover:text-primary transition-colors cursor-pointer
                               focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/*
          Academic specialties (Specialty Areas + Minors) — temporarily hidden.
          Uncomment this block and the specialtyAreas/minors arrays above to
          bring it back.

        <FadeIn direction="up" delay={0.1}>
          <div className="mt-16 p-8 rounded-xl border border-border bg-card/40">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Specialty Areas
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                  {specialtyAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Minors
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                  {minors.map((minor) => (
                    <li key={minor} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {minor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
        */}
      </div>
    </section>
  );
}

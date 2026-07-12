"use client";

import { expertiseData } from "@/data/expertise";

export function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground
                               hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

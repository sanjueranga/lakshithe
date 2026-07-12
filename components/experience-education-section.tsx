"use client";

import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceEducationSection() {
  return (
    <section className="py-16 px-4 bg-card" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-primary flex items-center gap-3">
              <Briefcase className="w-7 h-7" />
              Experience
            </h3>
            <ol className="relative border-l border-border space-y-12">
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-card">
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  Teaching Assistant
                </h4>
                <p className="text-base font-normal text-muted-foreground mb-1">
                  University of Peradeniya
                </p>
                <time className="text-sm font-normal leading-none text-muted-foreground/80">
                  2026 - Present
                </time>
              </li>
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-card">
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
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-card">
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

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-primary flex items-center gap-3">
              <GraduationCap className="w-7 h-7" />
              Education
            </h3>
            <ol className="relative border-l border-border">
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-card">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  BSc (Hons) Computer Science - First Class Honours
                </h4>
                <p className="text-base font-normal text-muted-foreground mb-1">
                  University of Peradeniya
                </p>
                <time className="text-sm font-normal leading-none text-muted-foreground/80">
                  2022 - 2026
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

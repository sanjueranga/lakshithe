"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceEducationSection } from "@/components/experience-education-section"
import { TimelineSection } from "@/components/timeline-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyModal } from "@/components/case-study-modal"

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <TimelineSection onSelectCaseStudy={setSelectedCaseStudy} />
      <BlogSection />
      <ContactSection />
      <CaseStudyModal
        caseStudyId={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  )
}

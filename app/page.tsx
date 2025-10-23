"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { TimelineSection } from "@/components/timeline-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyModal } from "@/components/case-study-modal"

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExpertiseSection />
      <TimelineSection onSelectCaseStudy={setSelectedCaseStudy} />
      <BlogSection />
      <ContactSection />
      <CaseStudyModal caseStudyId={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </main>
  )
}

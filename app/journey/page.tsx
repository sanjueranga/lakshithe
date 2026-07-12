"use client"

import { useState } from "react"
import { TimelineSection } from "@/components/timeline-section"
import { BlogSection } from "@/components/blog-section"
import { CaseStudyModal } from "@/components/case-study-modal"

export default function JourneyPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      {/* Journey Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">My Journey</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From &quot;Hello World&quot; to architecting production SaaS systems. Every project taught me something new.
        </p>
      </section>

      <TimelineSection onSelectCaseStudy={setSelectedCaseStudy} />
      <BlogSection />
      <CaseStudyModal
        caseStudyId={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </main>
  )
}

"use client"

import { CaseStudyCard } from "@/components/case-study-card"
import { caseStudiesData } from "@/data/case-studies"

export function CaseStudiesSection() {
  return (
    <section className="py-20 px-4 bg-background" id="case-studies">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
          Featured Case Studies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real-world projects where I helped founders ship production systems,
          from idea to deployment.
        </p>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudiesData.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              clientName={caseStudy.clientName}
              clientTitle={caseStudy.clientTitle}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              tags={caseStudy.tags}
              outcome={caseStudy.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

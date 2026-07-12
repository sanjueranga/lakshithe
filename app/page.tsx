"use client"

import { SaaSHeroSection } from "@/components/saas-hero-section"
import { AgitationSection } from "@/components/agitation-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { EngagementModelSection } from "@/components/engagement-model-section"
import { TestimonialsSection } from "@/components/saas-testimonials-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SaaSHeroSection />
      <AgitationSection />
      <ServicesSection />
      <CaseStudiesSection />
      <EngagementModelSection />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <FinalCTASection />
    </main>
  )
}

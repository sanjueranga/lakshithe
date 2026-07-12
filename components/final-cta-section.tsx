"use client"

import { ContactSection } from "@/components/contact-section"
import { FadeIn } from "@/components/fade-in"

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-background">
      <FadeIn direction="up" className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Don&apos;t let AI coding roadblocks <br />
          <span className="text-primary">kill your launch.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Let&apos;s look at your codebase and map out exactly how to fix it. Schedule a free 15-minute technical audit—no obligations, just honest architecture advice.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.15}>
        <ContactSection />
      </FadeIn>
    </section>
  )
}

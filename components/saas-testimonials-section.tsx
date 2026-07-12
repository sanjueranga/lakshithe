"use client"

import { TestimonialCard } from "@/components/testimonial-card"
import { saasTestimonialsData } from "@/data/saas-testimonials"

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
          Founders Who&apos;ve Been There
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real feedback from SaaS founders who were stuck at 90% and needed the last 10%.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {saasTestimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={`${testimonial.author}${testimonial.company ? ` - ${testimonial.company}` : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

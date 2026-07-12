"use client"

import { TestimonialCard } from "@/components/testimonial-card"
import { saasTestimonialsData } from "@/data/saas-testimonials"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { FadeIn } from "@/components/fade-in"

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
            Founders Who&apos;ve Been There
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Real feedback from SaaS founders who were stuck at 90% and needed the last 10%.
          </p>
        </FadeIn>

        {/* Testimonials Carousel */}
        <FadeIn direction="up" delay={0.15} className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {saasTestimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    rating={testimonial.rating}
                    projectName={testimonial.projectName}
                    company={testimonial.company}
                    date={testimonial.date}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:hidden -left-12 border-primary/30 hover:border-primary hover:bg-primary/10" />
            <CarouselNext className="max-md:hidden -right-12 border-primary/30 hover:border-primary hover:bg-primary/10" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}

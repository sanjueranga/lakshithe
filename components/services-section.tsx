"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { servicesData } from "@/data/services"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 64
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
            Productized Engagements
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Clear scope. Fixed outcomes. No hourly uncertainty.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <Card
                className={`p-6 bg-card border-border rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 flex flex-col h-full ${service.highlighted ? "border-primary shadow-lg shadow-primary/20" : ""
                  }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.billingCycle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => scrollTo(service.ctaUrl.replace("#", ""))}
                  className={`w-full ${service.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-transparent border border-primary text-primary hover:bg-primary/10"
                    }`}
                >
                  {service.ctaText}
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

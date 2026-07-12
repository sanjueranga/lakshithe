"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Users, Award } from "lucide-react"
import Image from "next/image"

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

export function SaaSHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--muted)_0%,var(--background)_70%)]" />

      {/* Sketch image background - positioned on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-5 dark:opacity-[0.03]">
        <div className="relative w-full h-full">
          <Image
            src="/lakshitha.png"
            alt="Background sketch"
            fill
            className="object-cover object-left grayscale"
            style={{
              filter: 'contrast(1.2) brightness(0.9)',
              maskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)'
            }}
            priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
            <span className="block">You bring the idea.</span>
            <span className="block text-primary">I architect the system.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I help founders untangle messy AI prototypes, fix broken logic, and build scalable, production-ready backend infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/30"
              onClick={() => scrollTo("contact")}
            >
              Book a Rescue Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 bg-transparent"
              onClick={() => scrollTo("services")}
            >
              View Services
            </Button>
          </div>

          {/* Trust Banner Stats - Mobile version */}
          <div className="flex flex-wrap gap-8 lg:hidden justify-center sm:justify-start">
            <div className="flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">10+</span>
                <p className="text-sm text-muted-foreground">SaaS Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">10+</span>
                <p className="text-sm text-muted-foreground">Founders Rescued</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">5+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Floating Stats Card - Desktop) */}
        <div className="hidden lg:flex relative w-full justify-center items-center">
          <div className="w-full max-w-md p-8 bg-card/50 dark:bg-card/30 rounded-xl border border-border/50 backdrop-blur-lg shadow-2xl">
            <h3 className="text-xl font-bold text-foreground mb-8">Track Record</h3>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-foreground">10+</span>
                  <p className="text-sm text-muted-foreground">SaaS Projects Crafted</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-foreground">10+</span>
                  <p className="text-sm text-muted-foreground">Founders Rescued</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-foreground">5+</span>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

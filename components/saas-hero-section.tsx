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
  const imageShapeStyle = {
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 bg-[radial-gradient(ellipse_at_top_right,var(--muted)_0%,var(--background)_70%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-left row-start-2 lg:row-start-auto">
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
        </div>

        {/* Right Column (Large Image + Floating Stats) */}
        <div className="relative w-full row-start-1 lg:row-start-auto flex justify-center lg:justify-end">
          {/* Large Image Wrapper */}
          <div className="relative w-full max-w-2xl lg:w-[140%] lg:max-w-none">
            {/* Background glow effect */}
            <div
              className="absolute -inset-8 bg-gradient-to-r from-primary to-emerald-600 blur-3xl opacity-20 dark:opacity-10"
              style={imageShapeStyle}
            />

            {/* Large artistic image */}
            <Image
              src="/lakshitha.png"
              alt="Portrait"
              width={700}
              height={700}
              priority
              className="relative w-full object-cover shadow-2xl aspect-square grayscale opacity-20 dark:opacity-15"
              style={{
                ...imageShapeStyle,
                filter: 'contrast(1.3) brightness(0.9)',
              }}
            />

            {/* Overlay for depth */}
            <div
              className="absolute inset-0 bg-black/5 dark:bg-black/10 transition-colors duration-300"
              style={imageShapeStyle}
            />
          </div>

          {/* Floating Stats Card - overlapping the image */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 lg:left-[-10%] w-56 p-6 bg-card/80 dark:bg-card/60 rounded-xl border border-border/50 backdrop-blur-lg shadow-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground">10+</span>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground">10+</span>
                  <p className="text-xs text-muted-foreground">Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground">5+</span>
                  <p className="text-xs text-muted-foreground">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

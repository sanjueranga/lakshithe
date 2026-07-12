"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Users, Zap } from "lucide-react"

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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 bg-[radial-gradient(ellipse_at_top_right,var(--muted)_0%,var(--background)_70%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
            <span className="block">AI writes the code.</span>
            <span className="block text-primary">I architect the system.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I help SaaS founders untangle messy AI prototypes, fix broken logic, and build scalable, production-ready backend infrastructure.
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
              <Zap className="w-7 h-7 text-primary" />
              <div>
                <span className="text-2xl font-bold text-foreground">AI + Backend</span>
                <p className="text-sm text-muted-foreground">Specialization</p>
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
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">AI Integration</span>
                  <p className="text-sm text-muted-foreground">& Backend Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

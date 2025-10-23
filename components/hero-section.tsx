"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Briefcase } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">AI Architect & Full-Stack Developer</h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I build intelligent, end-to-end applications, from complex backends to AI-driven features. See my journey of
          how I build systems that learn and scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 bg-transparent"
          >
            See My Work
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <FileText size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Briefcase size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

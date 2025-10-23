"use client";

import { Button } from "@/components/ui/button";
// Import new icons for stats
import {
  Github,
  Linkedin,
  FileText,
  Briefcase,
  Zap,
  Layers,
  Users,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  // --- FIXED: Use ONLY borderRadius for the smooth, "cloud-like" shape ---
  const imageShapeStyle = {
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
    // clipPath has been REMOVED.
  };

  return (
    // Use a subtle radial gradient for a modern background feel
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 bg-[radial-gradient(ellipse_at_top_right,var(--muted)_0%,var(--background)_70%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* --- Left Column (Text Content) --- */}
        <div className="text-left row-start-2 lg:row-start-auto">
          {/* Headline - Split for emphasis */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
            <span className="block">AI Architect &</span>
            <span className="block text-primary">Full-Stack Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I build intelligent, end-to-end applications, from complex backends
            to AI-driven features. See my journey of how I build systems that
            learn and scale.
          </p>

          {/* --- Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/30"
            >
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

          {/* --- Social Links --- */}
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="#"
              target="_blank"
              aria-label="Upwork"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Briefcase size={24} />
            </a>
          </div>
        </div>

        {/* --- Right Column (Image + Floating Stats) --- */}
        {/* On mobile, this will stack first (row-start-1) */}
        <div className="relative w-full row-start-1 lg:row-start-auto flex justify-center lg:justify-start ">
          {/* Image Wrapper */}
          <div className="relative w-full max-w-sm">
            {/* Subtle background glow effect - NOW CLIPPED */}
            <div
              className="absolute -inset-2.5 bg-linear-to-r from-primary to-emerald-600 blur-lg opacity-30 dark:opacity-20 animate-pulse-slow"
              style={imageShapeStyle} // Apply the curved shape
            ></div>

            {/* Image Placeholder - NOW CLIPPED and SQUARE */}
            <Image
              src="/lakshitha.png"
              alt="Portrait of the developer"
              width={400} // Changed to 400
              height={400} // Changed to 400
              priority // Add priority for LCP
              className="relative w-full object-cover shadow-2xl aspect-square" // Changed to aspect-square
              style={imageShapeStyle} // Apply the curved shape
            />

            {/* --- NEW: Dark Overlay --- */}
            {/* This div sits on top of the image to reduce brightness */}
            <div
              className="absolute inset-0 bg-black/4 dark:bg-black/20 sition-colors duration-300"
              style={imageShapeStyle} // Apply the same curved shape
            ></div>
          </div>

          {/* --- Floating Stats Section --- */}
          {/* (This part remains the same) */}
          <div
            className="w-full max-w-sm lg:max-w-none flex flex-wrap gap-8 sm:gap-12 justify-center mt-12
                         lg:absolute  lg:-translate-y-1-2 lg:left-[80%] lg:w-48 
                         lg:mt-9 lg:flex-col lg:gap-10 lg:p-6 
                         lg:bg-card/50 lg:dark:bg-card/30 lg:rounded-xl lg:border lg:border-border/50 lg:backdrop-blur-lg"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">4+</span>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Layers className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">20+</span>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              <div>
                <span className="text-3xl font-bold text-foreground">5+</span>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

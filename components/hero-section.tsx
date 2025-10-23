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

const UpworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    fill="currentColor"
    {...props}
  >
    <path d="M493.9 295.6c-50.3 0-83.5-38.9-92.8-53.9 11.9-95.3 46.8-125.4 92.8-125.4 45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7l0-.1zm0-237.8c-81.9 0-127.8 53.4-141 108.4-14.9-28-25.9-65.5-34.5-100.3l-113.2 0 0 141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141-65.3 0 0 141c0 41.1 13.3 78.4 37.6 105.1 25 27.5 59.2 41.8 98.8 41.8 78.8 0 133.8-60.4 133.8-146.9l0-94.8c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4 66.4 0 23.1-141.3c7.6 6.3 15.7 12 24.2 17 22.2 14 47.7 21.9 73.9 22.8 0 0 4 .2 6.1 .2 81.2 0 145.9-62.9 145.9-147.8S575.3 57.9 494.1 57.9l-.2-.1z" />
  </svg>
);

const scrollTo = (id: string) => {
  // Add a small offset to account for the header height
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 64; // 16 * 4 (h-16 in header)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};


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

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build intelligent, end-to-end applications — from complex backends
            to AI-driven features.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Explore how I design systems that learn, scale, and evolve.
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
              onClick={() => scrollTo("journey")}
            >
              See My Work
            </Button>
          </div>

          {/* --- Social Links --- */}
          <div className="flex gap-6">
            <a
              href="https://github.com/sanjueranga"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshithe/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~013fa9079ef42bd1b1?mp_source=share"
              target="_blank"
              aria-label="Upwork"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <UpworkIcon className="size-7" />
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
                <span className="text-3xl font-bold text-foreground">10+</span>
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

"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
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
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export function HeroSection() {
  const imageShapeStyle = {
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 bg-[radial-gradient(ellipse_at_top_right,var(--muted)_0%,var(--background)_70%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-left row-start-2 lg:row-start-auto">
          <p className="text-base md:text-lg font-medium text-muted-foreground mb-4">
            Lakshitha Eranga
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground tracking-tighter">
            <span className="block">Systems Researcher</span>
            <span className="block text-primary">&amp; Architect</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Computer Science graduate working at the intersection of systems
            engineering and artificial intelligence. I study how concurrency,
            scheduling, and memory behaviour shape the performance and cost of AI
            infrastructure — and I build the systems that run it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/30"
              onClick={() => scrollTo("journey")}
            >
              My Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 bg-transparent"
              onClick={() => scrollTo("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/sanjueranga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshithe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~013fa9079ef42bd1b1?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <UpworkIcon className="size-7" />
            </a>
          </div>
        </div>

        {/* Right Column (Portrait) */}
        <div className="relative w-full row-start-1 lg:row-start-auto flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Background glow effect */}
            <div
              className="absolute -inset-8 bg-gradient-to-r from-primary to-emerald-600 blur-3xl opacity-20 dark:opacity-10"
              style={imageShapeStyle}
            />

            <Image
              src="/lakshitha-hero.png"
              alt="Portrait"
              width={700}
              height={700}
              priority
              className="relative w-full object-cover shadow-2xl grayscale opacity-20 dark:opacity-15"
              style={{
                ...imageShapeStyle,
                filter: "contrast(1.3) brightness(0.9)",
              }}
            />

            {/* Overlay for depth */}
            <div
              className="absolute inset-0 bg-black/5 dark:bg-black/10 transition-colors duration-300"
              style={imageShapeStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

const UpworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    fill="currentColor"
    {...props}
  >
    <path d="M493.9 295.6c-50.3 0-83.5-38.9-92.8-53.9 11.9-95.3 46.8-125.4 92.8-125.4 45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7l0-.1zm0-237.8c-81.9 0-127.8 53.4-141 108.4-14.9-28-25.9-65.5-34.5-100.3l-113.2 0 0 141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141-65.3 0 0 141c0 41.1 13.3 78.4 37.6 105.1 25 27.5 59.2 41.8 98.8 41.8 78.8 0 133.8-60.4 133.8-146.9l0-94.8c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4 66.4 0 23.1-141.3c7.6 6.3 15.7 12 24.2 17 22.2 14 47.7 21.9 73.9 22.8 0 0 4 .2 6.1 .2 81.2 0 145.9-62.9 145.9-147.8S575.3 57.9 494.1 57.9l-.2-.1z" />
  </svg>
)

export function AboutSection() {
  const imageShapeStyle = {
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
  }

  return (
    <section className="py-24 px-4 bg-card/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              {/* Background glow effect */}
              <div
                className="absolute -inset-2.5 bg-gradient-to-r from-primary to-emerald-600 blur-lg opacity-30 dark:opacity-20 animate-pulse-slow"
                style={imageShapeStyle}
              ></div>

              {/* Image */}
              <Image
                src="/lakshitha.png"
                alt="Lakshitha Eranga"
                width={400}
                height={400}
                className="relative w-full object-cover shadow-2xl aspect-square"
                style={imageShapeStyle}
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0 bg-black/4 dark:bg-black/20 transition-colors duration-300"
                style={imageShapeStyle}
              ></div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Eranga
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                I am a <span className="text-foreground font-semibold">System Architect and Full-Stack Engineer</span> specializing in backend infrastructure, RAG pipelines, and AI integration.
              </p>
              <p>
                I spend my days turning fragile concepts into robust applications. Whether you need to fix a broken voice agent or scale a compute-heavy video pipeline, I ensure your ideas don&apos;t just stay code—they become real products.
              </p>
              <p>
                My approach is simple: understand the problem deeply, design for scale from day one, and ship production-ready systems that founders can build businesses on.
              </p>
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
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshithe/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~013fa9079ef42bd1b1?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <UpworkIcon className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { setTheme, theme } = useTheme();

  // Helper for smooth scrolling
  const scrollTo = (id: string) => {
    // Add a small offset to account for the header height
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // 16 * 4 (h-16 in header)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* --- Left Side: Name/Logo --- */}
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top
            className="text-lg font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
          >
            Lakshitha Eranga
          </span>

          {/* --- Right Side: Nav Links & Theme Toggle --- */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollTo("skills")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollTo("journey")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                My work
              </button>
              <button
                onClick={() => scrollTo("blog")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* --- Theme Toggle Button (already included) --- */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

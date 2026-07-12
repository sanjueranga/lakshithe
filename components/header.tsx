"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* --- Left Side: Name/Logo --- */}
          <Link
            href="/"
            className="text-lg font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
          >
            Lakshitha Eranga
          </Link>

          {/* --- Right Side: Nav Links & Theme Toggle --- */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {pathname === "/" && (
                <>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollTo("testimonials")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => scrollTo("about")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </>
              )}
              {pathname === "/journey" && (
                <>
                  <button
                    onClick={() => scrollTo("journey")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Timeline
                  </button>
                  <button
                    onClick={() => scrollTo("blog")}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </button>
                </>
              )}
              <Link
                href="/journey"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                My Journey
              </Link>
            </nav>

            {/* --- Theme Toggle Button --- */}
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

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-muted-foreground hover:text-foreground"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-8">
                  {pathname === "/" && (
                    <>
                      <button
                        onClick={() => scrollTo("services")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Services
                      </button>
                      <button
                        onClick={() => scrollTo("testimonials")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Testimonials
                      </button>
                      <button
                        onClick={() => scrollTo("about")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        About
                      </button>
                      <button
                        onClick={() => scrollTo("contact")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Contact
                      </button>
                    </>
                  )}
                  {pathname === "/journey" && (
                    <>
                      <button
                        onClick={() => scrollTo("journey")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Timeline
                      </button>
                      <button
                        onClick={() => scrollTo("blog")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Blog
                      </button>
                    </>
                  )}
                  <Link
                    href="/journey"
                    onClick={() => setIsOpen(false)}
                    className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    My Journey
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

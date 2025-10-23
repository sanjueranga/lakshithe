"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Intersection observer for fade-in animations
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}

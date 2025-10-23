"use client";

import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
// Removed unused FontAwesomeIcon import

// --- Custom SVG Icons (Updated) ---

// Medium Icon (New SVG)
const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1 .7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7zM448 340.3c-25.1-7.4-43-35.1-41.2-67.8l0 0 41.1 0 0 67.8zm-6.4-135.6c2.3 0 4.4 .3 6.4 .9l0 57.4-40.2 0c1.5-33.6 13.6-57.9 33.8-58.3z" />
  </svg>
);

// Upwork Icon (New SVG)
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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* --- Social Icons --- */}
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
              <UpworkIcon className="size-6" />
            </a>
            <a
              href="https://lakshithe.medium.com" // Corrected link
              target="_blank"
              aria-label="Medium"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MediumIcon className="size-6" />
            </a>
            <a
              href="mailto:lakshithe@yahoo.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1H5UwjxAkj/"
              target="_blank"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/__sanju.12__/"
              target="_blank"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* --- Powered By --- */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lakshitha. All rights reserved.
            <span className="mx-2">|</span>
            Powered by{" "}
            <a
              href="https://xanvia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Xanvia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

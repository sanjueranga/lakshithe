"use client";

import { useState } from "react";
import type React from "react";

// Hand-drawn bits. Everything is stroke-based, coloured with currentColor or
// theme variables, so it follows light/dark automatically.

/** Sketchy circle, circuit traces and sparkles around the portrait. */
export function PortraitDoodles() {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className="pointer-events-none absolute -inset-[22%] size-[144%] text-accent-ink">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* wobbly ring */}
        <path
          className="draw"
          d="M204 28c92-2 166 70 166 170 0 98-76 174-172 174C102 372 28 298 30 200 32 104 106 30 198 30c24 0 44 5 62 13"
          opacity="0.7"
        />
        {/* circuit traces leaving the ring */}
        <path className="draw draw-2" d="M332 150h30l14-14h14" opacity="0.8" />
        <path className="draw draw-2" d="M338 210h40" opacity="0.6" />
        <path className="draw draw-3" d="M318 278l22 22h30" opacity="0.6" />
        <path className="draw draw-3" d="M64 120 40 96H20" opacity="0.55" />
        <circle cx="392" cy="136" r="4" />
        <circle cx="382" cy="210" r="3.5" />
        <circle cx="374" cy="300" r="4" />
        <circle cx="16" cy="96" r="3.5" />
      </g>
      {/* sparkles */}
      <g fill="currentColor" opacity="0.75">
        <path className="twinkle" d="M90 330l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        <path className="twinkle twinkle-2" d="M300 52l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        <path className="twinkle twinkle-3" d="M42 230l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      </g>
    </svg>
  );
}

/** A curved hand-drawn arrow. */
export function Squiggle({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 80 50" fill="none" aria-hidden className={className} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M4 8c18-6 44 0 54 18 4 8 4 14 2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M52 38l8 7 6-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const QUIPS = [
  "Quack. Pull a unit, I'll wait.",
  "Have you tried adding more workers?",
  "…and then measuring again?",
  "It's usually the scheduler.",
  "I only debug in rubber.",
];

/** The rubber debugging duck that lives on top of the rack. */
export function Duck({ className = "" }: { className?: string }) {
  const [i, setI] = useState(-1);
  return (
    <div className={`duck ${className}`}>
      {i >= 0 && (
        <p role="status" className="duck-bubble font-hand">
          {QUIPS[i]}
        </p>
      )}
      <button
        type="button"
        onClick={() => setI((i + 1) % QUIPS.length)}
        aria-label="Ask the rubber duck"
        className="duck-btn"
      >
        <svg viewBox="0 0 64 56" aria-hidden className="size-full">
          <path d="M14 36c0-9 7-15 17-15h9c10 0 18 6 18 15 0 9-9 15-22 15H28c-8 0-14-6-14-15z" fill="var(--led-amber)" />
          <path d="M22 34c4 5 13 6 20 2" stroke="rgba(0,0,0,.25)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="18" r="11" fill="var(--led-amber)" />
          <path d="M9 18c-5 0-8 2-8 4s4 3 9 2z" fill="#e2701a" />
          <circle cx="21" cy="15" r="2.1" fill="#16130c" />
          <circle cx="21.7" cy="14.3" r=".7" fill="#fff" />
        </svg>
      </button>
    </div>
  );
}

/** Patch cables spilling out of the side of the rack. */
export function Cables({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 260" fill="none" aria-hidden className={className}>
      <path d="M4 20c40 0 52 40 46 90-6 52 20 92 66 130" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      <path d="M4 70c28 4 34 34 30 76-4 44 10 76 40 104" stroke="var(--muted-foreground)" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
      <path d="M4 130c20 2 22 22 20 52-2 30 4 52 20 68" stroke="var(--led-amber)" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** A decorative bug. Purely for looks: not focusable, not clickable. */
export function Bug({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className={`pointer-events-none ${className}`}>
      <ellipse cx="12" cy="14" rx="5" ry="6" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 8v12M9 6.5 7.5 4.5M15 6.5l1.5-2M7 12H3.5M7 16l-3 1.5M17 12h3.5M17 16l3 1.5M8 9.5 5 8M16 9.5 19 8" />
      <circle cx="12" cy="7" r="2.2" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

/** A corner cobweb. Anchored top-left; flip with -scale-x-100 for the other side. */
export function Cobweb({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" aria-hidden className={`pointer-events-none ${className}`}>
      <path d="M0 0 80 10M0 0l70 40M0 0l40 70M0 0l10 80" />
      <path d="M20 2.5Q15 7 17.5 10Q12 12 10 17.5Q7 16 2.5 20" />
      <path d="M40 5Q31 13 35 20Q24 24 20 35Q13 33 5 40" />
      <path d="M60 7.5Q47 19 52.5 30Q36 36 30 52.5Q19 50 7.5 60" />
    </svg>
  );
}

/** A small spider hanging on a thread, bobbing gently. */
export function HangingSpider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 110" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden className={`spider pointer-events-none ${className}`}>
      <path d="M15 0v86" strokeWidth="0.8" />
      <g strokeWidth="1.3">
        <path d="M11 88 4 84l-2 4M11 92H3l-2 4M19 88l7-4 2 4M19 92h8l2 4M12 96l-6 5M18 96l6 5" />
        <ellipse cx="15" cy="93" rx="5" ry="6" fill="currentColor" />
        <circle cx="15" cy="86" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

/** A coffee mug with a wisp of steam. */
export function Mug({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" fill="none" aria-hidden className={`pointer-events-none ${className}`}>
      <g stroke="var(--muted-foreground)" strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        <path className="steam" d="M16 14c-3-4 3-6 0-11" />
        <path className="steam steam-2" d="M24 14c-3-4 3-6 0-11" />
      </g>
      <path d="M32 26h4a6 6 0 0 1 0 12h-4" stroke="var(--rack-screw)" strokeWidth="3" />
      <rect x="8" y="18" width="26" height="32" rx="4" fill="var(--rack-face-hi)" stroke="var(--rack-screw)" strokeWidth="1.2" />
      <path d="M14 30h6l-3 6h7" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const interestArt: Record<string, React.ReactNode> = {
  f1: (
    <>
      <circle cx="28" cy="50" r="9" />
      <circle cx="94" cy="50" r="9" />
      <path d="M6 30h14v14M10 30v-4" />
      <path d="M14 44c6-6 16-8 26-8h14l8-8h10l6 8h22c6 0 10 4 12 8M40 50h44M104 50h12v-5" />
      <path d="M58 36c2-6 10-6 12 0" className="accent" />
    </>
  ),
  space: (
    <>
      <circle cx="60" cy="38" r="16" />
      <path d="M30 46c-8 7 6 10 31 1s37-19 29-23" className="accent" />
      <circle cx="98" cy="20" r="4" />
      <path d="M20 12v8M16 16h8M104 50v6M101 53h6M14 54v4M12 56h4" />
    </>
  ),
  motorcycle: (
    <>
      <circle cx="26" cy="52" r="12" />
      <circle cx="94" cy="52" r="12" />
      <path d="M26 52 46 32h22l26 20M46 32l10 20h14l8-14M68 32l6-10h8" />
      <path d="M44 30c6-6 16-6 24-2" className="accent" />
      <circle cx="86" cy="24" r="2" />
    </>
  ),
  mountains: (
    <>
      <path d="M4 62 34 24l18 22 16-30 48 46Z" />
      <path d="m28 32 6-8 6 8-4-2-2 3-2-3ZM62 26l6-10 6 10-4-2-2 3-2-3Z" className="accent" />
      <circle cx="94" cy="18" r="7" />
    </>
  ),
  beach: (
    <>
      <path d="M30 52a18 18 0 0 1 36 0" className="accent" />
      <path d="M4 60c8-6 16 6 24 0s16 6 24 0 16 6 24 0 16 6 24 0 16 6 16 0" />
      <path d="M96 62c-2-14 0-28 6-38M102 24c-8-6-18-4-22 2M102 24c2-8 10-12 18-10M102 24c-2-10-10-14-18-12M102 24c8-2 14 4 14 10" />
    </>
  ),
};

/** Line illustration for an interest card. */
export function InterestArt({ art }: { art: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="interest-art h-20 w-full">
      {interestArt[art]}
    </svg>
  );
}

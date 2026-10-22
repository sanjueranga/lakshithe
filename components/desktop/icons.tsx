import type { LucideIcon } from "lucide-react";

// Hand-drawn desktop icons. Colours come from CSS tokens so both themes match.

export function FolderIcon({ glyph: Glyph }: { glyph: LucideIcon }) {
  return (
    <span className="relative block size-full">
      <svg viewBox="0 0 64 52" aria-hidden className="size-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]">
        <path d="M4 9a4 4 0 0 1 4-4h15.5a3 3 0 0 1 2.1.9L31 11h25a4 4 0 0 1 4 4v6H4z" fill="var(--folder-back)" />
        <rect x="2" y="15" width="60" height="35" rx="4.5" fill="var(--folder)" />
        <rect x="4" y="16" width="56" height="1.2" rx=".6" fill="#fff" opacity=".35" />
      </svg>
      <Glyph
        aria-hidden
        strokeWidth={1.8}
        className="absolute left-1/2 top-[64%] size-[32%] -translate-x-1/2 -translate-y-1/2 text-[var(--folder-ink)]"
      />
    </span>
  );
}

export function DocIcon({ tag, tone = "plain" }: { tag: string; tone?: "plain" | "pdf" }) {
  return (
    <span className="relative block size-full">
      <svg viewBox="0 0 64 64" aria-hidden className="size-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]">
        <path
          d="M15 3h24l14 14v40a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
          fill="var(--paper)"
          stroke="var(--paper-edge)"
        />
        <path d="M39 3v10a4 4 0 0 0 4 4h10" fill="var(--paper-fold)" stroke="var(--paper-edge)" />
        {[24, 29, 34, 39].map((y, i) => (
          <rect key={y} x="18" y={y} width={i === 3 ? 16 : 28} height="2" rx="1" fill="var(--paper-edge)" />
        ))}
      </svg>
      <span
        className={`absolute bottom-[14%] left-1/2 -translate-x-1/2 rounded-[3px] px-1 font-mono text-[8px] font-bold leading-[13px] tracking-wider text-white ${
          tone === "pdf" ? "bg-[#d9473a]" : "bg-[var(--folder-ink)]"
        }`}
      >
        {tag}
      </span>
    </span>
  );
}

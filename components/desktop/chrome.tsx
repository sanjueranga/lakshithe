"use client";

import { useEffect, useState } from "react";
import { Check, FileText, Mail } from "lucide-react";
import { profile, publications } from "@/data/site";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { linkIcons } from "./parts";
import { useCopyEmail } from "./readme";

function Clock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Colombo",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setNow(fmt.format(new Date()).replace(",", ""));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[12px] tabular-nums" title="Local time in Kandy">
      {now ?? " "}
    </span>
  );
}

export function MenuBar() {
  return (
    <header className="menubar sticky top-0 z-40 flex h-10 shrink-0 items-center gap-4 px-4 text-[13px] sm:px-5">
      <span aria-hidden className="grid size-5 place-items-center rounded-md bg-foreground font-serif text-[13px] italic leading-none text-background">
        L
      </span>
      <h1 className="text-[13px] font-semibold">{profile.name}</h1>
      <span className="hidden text-muted-foreground md:inline">{profile.title}</span>
      <span className="ml-auto hidden text-muted-foreground sm:inline">{profile.location}</span>
      <Clock />
      <span className="-mr-2">
        <ThemeToggleButton />
      </span>
    </header>
  );
}

export function StickyNote() {
  const accepted = publications.find((p) => p.status === "accepted");
  return (
    <aside aria-label="Note" className="sticky-note font-hand">
      <p className="text-[22px] leading-tight">Now —</p>
      {profile.statusLine && <p className="mt-1 text-[19px] leading-snug">{profile.statusLine.toLowerCase()}.</p>}
      {accepted && (
        <p className="mt-3 text-[19px] leading-snug">
          ✓ paper accepted at {accepted.venue.split(",")[0]}
        </p>
      )}
      <p className="mt-3 text-[17px] leading-snug opacity-75">open a folder to look around ↖</p>
    </aside>
  );
}

export function Dock() {
  const { copied, copy } = useCopyEmail();
  const links = profile.links.filter((l) => l.show);

  return (
    <nav aria-label="Links" className="dock">
      {profile.email && (
        <button type="button" onClick={copy} className="dock-item" data-tip={copied ? "Email copied" : "Copy email"}>
          {copied ? <Check className="size-5 text-accent-ink" aria-hidden /> : <Mail className="size-5" aria-hidden />}
          <span className="sr-only" aria-live="polite">
            {copied ? `Copied ${profile.email}` : "Copy email address"}
          </span>
        </button>
      )}
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          data-tip={l.label}
          className="dock-item"
        >
          {linkIcons[l.icon]?.({ className: "size-5" })}
        </a>
      ))}
      <span aria-hidden className="mx-1 h-8 w-px bg-border" />
      <a href={profile.cv} target="_blank" rel="noopener noreferrer" aria-label="CV (PDF)" data-tip="CV.pdf" className="dock-item">
        <FileText className="size-5" aria-hidden />
      </a>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, FileText } from "lucide-react";
import { profile } from "@/data/site";
import { Chip, Led, linkIcons } from "./parts";

export function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!profile.email) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return { copied, copy };
}

export function CvButton() {
  return (
    <a
      href={profile.cv}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
    >
      <FileText className="size-4" aria-hidden /> View CV
    </a>
  );
}

/** The README window: who I am, in one page. */
export function Readme() {
  const { copied, copy } = useCopyEmail();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <div className="panel-item">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={288}
          height={288}
          priority
          className="size-28 shrink-0 rounded-2xl object-cover shadow-md ring-1 ring-border sm:size-36"
        />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">README · hello</p>
          <h2 id="h-readme" tabIndex={-1} className="mt-1 font-serif text-5xl leading-none tracking-tight outline-none sm:text-6xl">
            {first} <em className="text-accent-ink">{rest.join(" ")}</em>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
        </div>
      </div>

      <p className="mt-7 max-w-2xl text-[15.5px] leading-relaxed text-foreground/90">{profile.intro}</p>
      {profile.statusLine && (
        <p className="mt-4 flex items-center gap-2.5 text-sm">
          <Led status="active" />
          {profile.statusLine}
        </p>
      )}

      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Core stack">
        {profile.coreStack.map((s) => (
          <li key={s}>
            <Chip>{s}</Chip>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <CvButton />
        {profile.email && (
          <div className="flex min-h-11 items-center gap-1 rounded-lg border border-border pl-3 text-sm">
            <span className="select-all font-mono text-xs sm:text-[13px]">{profile.email}</span>
            <button
              type="button"
              onClick={copy}
              aria-label="Copy email address"
              className="flex min-h-11 items-center gap-1.5 rounded-r-lg px-3 font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {copied ? <Check className="size-3.5 text-accent-ink" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
              <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        )}
        <nav aria-label="Profiles" className="flex items-center">
          {profile.links
            .filter((l) => l.show)
            .map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
                className="grid size-11 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-accent-ink"
              >
                {linkIcons[l.icon]?.({ className: "size-5" })}
              </a>
            ))}
        </nav>
      </div>
    </div>
  );
}

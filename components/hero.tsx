"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, FileText, MapPin } from "lucide-react";
import { profile } from "@/data/site";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Chip, linkIcons } from "@/components/rack/parts";
import { Bug, PortraitDoodles, Squiggle } from "@/components/art";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [first, ...rest] = profile.name.split(" ");

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

  return (
    <header className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
      <div className="absolute -top-2 right-0 z-10">
        <ThemeToggleButton />
      </div>

      <div className="boot min-w-0">
        <p className="font-hand text-2xl text-accent-ink">hello, world —</p>
        <h1 className="mt-1 text-5xl font-extrabold tracking-tighter sm:text-7xl">
          <span className="text-accent-ink">{first}</span> {rest.join(" ")}
        </h1>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-foreground/85">{profile.intro}</p>

        {profile.statusLine && (
          <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-border px-3 py-1.5 text-sm">
            <span aria-hidden className="led led-active" />
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

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <FileText className="size-4" aria-hidden /> View CV
          </a>
          <a
            href="#about"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-ink"
          >
            About me ↓
          </a>
          {profile.email && (
            <div className="flex min-h-11 items-center gap-1 rounded-md border border-border pl-3 text-sm">
              <span className="select-all font-mono text-xs sm:text-[13px]">{profile.email}</span>
              <button
                type="button"
                onClick={copy}
                aria-label="Copy email address"
                className="flex min-h-11 items-center gap-1.5 rounded-r-md px-3 font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {copied ? <Check className="size-3.5 text-accent-ink" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
                <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <nav aria-label="Profiles" className="-ml-3 flex items-center">
            {profile.links
              .filter((l) => l.show)
              .map((l) => {
                const Icon = linkIcons[l.icon];
                return (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.label}
                    title={l.label}
                    className="grid size-11 place-items-center rounded-md text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-accent-ink"
                  >
                    {Icon?.({ className: "size-5" })}
                  </a>
                );
              })}
          </nav>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden /> {profile.location}
          </span>
        </div>
      </div>

      {/* Portrait with doodles */}
      <div className="relative mx-auto size-56 sm:size-72 lg:mr-10">
        <PortraitDoodles />
        <Image
          src={profile.photo}
          alt={profile.name}
          width={576}
          height={576}
          priority
          className="portrait relative size-full rounded-[2rem] object-cover"
        />
        <p className="absolute -bottom-12 -left-16 hidden items-end gap-1 font-hand text-xl text-muted-foreground sm:flex">
          <span className="mb-1">that&apos;s me</span>
          <Squiggle className="h-8 w-12 -rotate-[100deg] text-muted-foreground" flip />
        </p>
        <Bug className="absolute -right-5 -top-3 size-5 rotate-12 text-muted-foreground/60" />
      </div>
    </header>
  );
}

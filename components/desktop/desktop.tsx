"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Boxes,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Handshake,
  PenLine,
  Presentation,
  Users,
  type LucideIcon,
} from "lucide-react";
import { buildUnits, profile } from "@/data/site";
import { Dock, MenuBar, StickyNote } from "./chrome";
import { DocIcon, FolderIcon } from "./icons";
import { panelBodies, panelTitles } from "./panels";
import { CvButton, Readme } from "./readme";

const glyphs: Record<string, LucideIcon> = {
  research: FlaskConical,
  experience: Briefcase,
  projects: Boxes,
  teaching: Presentation,
  writing: PenLine,
  education: GraduationCap,
  leadership: Users,
  clients: Handshake,
};

const iconLabel: Record<string, string> = {
  research: "Research",
  experience: "Experience",
  projects: "Projects",
  teaching: "Teaching",
  writing: "Writing",
  education: "Education",
  leadership: "Leadership",
  clients: "Freelance",
};

interface Entry {
  id: string;
  label: string;
  title: string;
  count?: string;
  badge?: string;
  preview?: string;
}

const isWide = () => window.matchMedia("(min-width: 1024px)").matches;

export function Desktop() {
  const entries = useMemo<Entry[]>(
    () => [
      { id: "readme", label: "README", title: "About me", count: profile.location },
      ...buildUnits().map((u) => ({
        id: u.id,
        label: iconLabel[u.id],
        title: panelTitles[u.id],
        count: u.count,
        badge: u.badge,
        preview: u.preview,
      })),
    ],
    [],
  );
  const ids = useMemo(() => entries.map((e) => e.id), [entries]);

  // README is open on first load. `auto` marks that nobody chose it, so on a
  // phone the home screen shows instead of a full-screen window.
  const [active, setActive] = useState<string | null>("readme");
  const [auto, setAuto] = useState(true);
  const [max, setMax] = useState(false);
  const pushed = useRef(false);
  const focusNext = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Deep links (/#projects) and the back button.
  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (ids.includes(h)) {
      setActive(h);
      setAuto(false);
    }
    const onPop = () => {
      const h = window.location.hash.slice(1);
      pushed.current = false;
      if (ids.includes(h)) {
        setActive(h);
        setAuto(false);
      } else {
        setActive(null);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [ids]);

  // Each window opens at the top; the frame itself never changes size.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    if (active && focusNext.current) {
      focusNext.current = false;
      document.getElementById(`h-${active}`)?.focus({ preventScroll: true });
    }
  }, [active]);

  const open = (id: string) => {
    // A newly opened window gets its own history entry so Back closes it;
    // switching between folders just replaces it.
    if (active !== null && (!auto || isWide())) {
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.history.pushState(null, "", `#${id}`);
      pushed.current = true;
    }
    focusNext.current = true;
    setActive(id);
    setAuto(false);
  };

  const close = () => {
    if (pushed.current) {
      window.history.back();
      return;
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setActive(null);
    setMax(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active && (!auto || isWide())) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const idx = active ? ids.indexOf(active) : -1;
  const current = idx >= 0 ? entries[idx] : null;
  const step = (d: number) => open(ids[(idx + d + ids.length) % ids.length]);

  return (
    <div className="desk relative flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <MenuBar />

      {/* Phone home screen header; on wide screens README covers this. */}
      <section className="px-5 pb-2 pt-8 lg:hidden">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{profile.title}</p>
        <p aria-hidden className="mt-1 font-serif text-5xl leading-none tracking-tight">
          {profile.name.split(" ")[0]} <em className="text-accent-ink">{profile.name.split(" ").slice(1).join(" ")}</em>
        </p>
        <p className="mt-4 line-clamp-4 text-[15px] leading-relaxed text-foreground/85">{profile.intro}</p>
        <div className="mt-5">
          <CvButton />
        </div>
      </section>

      <div className="relative flex flex-1 flex-col gap-6 px-5 pb-32 pt-6 lg:min-h-0 lg:flex-row lg:px-7 lg:pb-24">
        <nav aria-label="Folders" data-auto={auto} className="icons">
          {entries.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => open(e.id)}
              aria-controls="window"
              aria-current={active === e.id ? "page" : undefined}
              className="desk-icon"
            >
              <span className="desk-icon-img">
                {e.id === "readme" ? <DocIcon tag="TXT" /> : <FolderIcon glyph={glyphs[e.id]} />}
                {e.badge && <span className="desk-badge" title={e.badge} />}
              </span>
              <span className="desk-icon-label">{e.label}</span>
            </button>
          ))}
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="desk-icon">
            <span className="desk-icon-img">
              <DocIcon tag="PDF" tone="pdf" />
            </span>
            <span className="desk-icon-label">CV.pdf</span>
          </a>
        </nav>

        {!active && (
          <p className="hidden flex-1 place-items-center font-hand text-2xl text-muted-foreground lg:grid">
            ← pick a folder to open it
          </p>
        )}

        <section
          id="window"
          aria-label={current ? `${current.title} window` : "Window"}
          hidden={!active}
          data-auto={auto}
          data-max={max}
          data-open={active !== null && !auto}
          className="window"
        >
          <header className="win-bar">
            <div className="hidden items-center gap-2 lg:flex">
              <button type="button" onClick={close} aria-label="Close window" className="dot bg-[#ff5f57]" />
              <span aria-hidden className="dot bg-[#febc2e]" />
              <button
                type="button"
                onClick={() => setMax(!max)}
                aria-label={max ? "Restore window size" : "Enlarge window"}
                aria-pressed={max}
                className="dot bg-[#28c840]"
              />
            </div>
            <button type="button" onClick={close} className="-ml-2 flex min-h-11 items-center gap-0.5 px-2 text-sm font-medium text-accent-ink lg:hidden">
              <ChevronLeft className="size-5" aria-hidden /> Home
            </button>
            <div className="flex">
              <button type="button" onClick={() => step(-1)} aria-label="Previous folder" className="nav-btn">
                <ChevronLeft className="size-4" aria-hidden />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next folder" className="nav-btn">
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
            <p className="min-w-0 flex-1 truncate text-center font-mono text-[12px] text-muted-foreground lg:pr-24">
              ~/{current?.label.toLowerCase()}
            </p>
          </header>

          <div ref={scrollRef} className="win-scroll">
            {/* Every section stays in the HTML; only the open one shows. */}
            {entries.map((e) => {
              const Body = e.id === "readme" ? Readme : panelBodies[e.id];
              return (
                <article key={e.id} hidden={e.id !== active} className="win-body">
                  {e.id !== "readme" && (
                    <header className="mb-8">
                      <h2 id={`h-${e.id}`} tabIndex={-1} className="font-serif text-4xl leading-tight tracking-tight outline-none sm:text-5xl">
                        {e.title}
                      </h2>
                      {e.preview && <p className="mt-2 text-sm text-muted-foreground">{e.preview}</p>}
                    </header>
                  )}
                  <Body />
                </article>
              );
            })}
          </div>

          <footer className="win-status">
            <span>{current?.count}</span>
            {current?.badge && <span className="text-amber-700 dark:text-amber-400">· {current.badge}</span>}
            <span className="ml-auto hidden sm:inline">
              {idx + 1} of {ids.length}
            </span>
          </footer>
        </section>

        <div className="hidden w-56 shrink-0 xl:block">
          <StickyNote />
        </div>
        <div className="lg:hidden">
          <StickyNote />
        </div>
      </div>

      <Dock />
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildUnits, profile } from "@/data/site";
import { Bug, Cables, Cobweb, Duck, HangingSpider, Mug, Squiggle } from "@/components/art";
import { Led } from "./parts";
import { panelBodies, panelTitles } from "./panels";

// Each unit gets a different faceplate so the cabinet reads like real hardware.
const faceplate: Record<string, "bays" | "ports" | "vents"> = {
  research: "bays",
  journey: "ports",
  experience: "ports",
  projects: "bays",
  teaching: "vents",
  writing: "ports",
  education: "vents",
  leadership: "ports",
  clients: "bays",
  outside: "vents",
};

const shortLabel: Record<string, string> = {
  research: "Research",
  journey: "Journey",
  experience: "Experience",
  projects: "Projects",
  teaching: "Teaching",
  writing: "Writing",
  education: "Education",
  leadership: "Leadership",
  clients: "Freelance",
  outside: "Outside",
};

const blink = (i: number, j: number) => `${(0.6 + ((i * 7 + j * 3) % 11) / 8).toFixed(2)}s`;
const isWide = () => window.matchMedia("(min-width: 1024px)").matches;

function Grille({ kind, unit, live }: { kind: "bays" | "ports" | "vents"; unit: number; live: boolean }) {
  if (kind === "vents") return <span aria-hidden className="grille"><i className="vent" /></span>;
  const n = kind === "bays" ? 6 : 8;
  return (
    <span aria-hidden className="grille">
      {Array.from({ length: n }, (_, j) => (
        <i key={j} className={kind === "bays" ? "bay" : "port"}>
          {live && <b style={{ animationDuration: blink(unit, j), animationDelay: `${(j * 0.13).toFixed(2)}s` }} />}
        </i>
      ))}
    </span>
  );
}

export function ServerRoom() {
  const units = useMemo(buildUnits, []);
  const ids = useMemo(() => units.map((u) => u.id), [units]);
  const [active, setActive] = useState(ids[0]);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // /#projects opens that unit; links pasted later follow too.
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (ids.includes(h)) {
        setActive(h);
        sectionRef.current?.scrollIntoView({ block: "start" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [ids]);

  const select = (id: string, focus = false) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
    scrollRef.current?.scrollTo({ top: 0 });
    if (isWide()) {
      // Desktop: lock the whole section to the viewport.
      const top = sectionRef.current?.getBoundingClientRect().top ?? 0;
      if (Math.abs(top) > 2) sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Phone: the console sits below the rack, so bring it up.
      consoleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const i = ids.indexOf(active);
    const next =
      e.key === "ArrowDown" ? ids[(i + 1) % ids.length]
      : e.key === "ArrowUp" ? ids[(i - 1 + ids.length) % ids.length]
      : e.key === "Home" ? ids[0]
      : e.key === "End" ? ids[ids.length - 1]
      : null;
    if (next) {
      e.preventDefault();
      select(next, true);
    }
  };

  const idx = ids.indexOf(active);
  const current = units[idx];
  const host = profile.location.split(",")[0].toLowerCase();
  const prompt = `lakshitha@${host}:~/${active}$ cat README.md`;
  const prev = ids[(idx - 1 + ids.length) % ids.length];
  const next = ids[(idx + 1) % ids.length];

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="flex flex-col py-6 lg:h-dvh lg:min-h-[46rem]"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">About me</p>
          <h2 id="about-title" className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Research, work <span className="text-accent-ink">&amp; everything between.</span>
          </h2>
        </div>
        <p className="flex items-center gap-2 font-hand text-xl text-muted-foreground">
          pull any unit to read it
          <Squiggle className="h-7 w-10 rotate-[60deg]" />
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-10 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-14">
        {/* ------------------------------ Cabinet ------------------------------ */}
        <div className="relative self-start pt-11">
          <Cables className="pointer-events-none absolute -right-14 top-40 hidden h-72 w-24 lg:block" />
          <HangingSpider className="absolute -left-7 top-16 h-24 w-6 text-muted-foreground/60" />
          <div className="cabinet fade-in">
            <Cobweb className="absolute -left-px -top-px size-14 text-[var(--rack-dim)]/50" />
            <Mug className="absolute -top-[46px] left-8 h-12 w-11" />
            <Duck className="absolute -top-[50px] right-8" />

            <div className="cab-top" aria-hidden>
              <span className="cab-plate">LE · 01</span>
              <span className="cab-perf" />
              <span className="font-mono text-[9px] tracking-widest text-[var(--rack-dim)]">{host.toUpperCase()}</span>
            </div>

            <div className="cab-body">
              <span aria-hidden className="rail" />
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Sections"
                onKeyDown={onKeyDown}
                className="flex flex-col gap-[3px]"
              >
                {units.map((u, i) => {
                  const on = u.id === active;
                  return (
                    <button
                      key={u.id}
                      ref={(el) => {
                        tabRefs.current[u.id] = el;
                      }}
                      role="tab"
                      id={`tab-${u.id}`}
                      aria-selected={on}
                      aria-controls={`panel-${u.id}`}
                      tabIndex={on ? 0 : -1}
                      onClick={() => select(u.id)}
                      className="unit fade-in"
                      data-on={on}
                      style={{ animationDelay: `${150 + i * 60}ms` }}
                    >
                      <span className="ear" aria-hidden>
                        <i className="screw-dot" />
                        <span className="font-mono text-[8px] text-[var(--rack-dim)]">{String(i + 1).padStart(2, "0")}</span>
                        <i className="screw-dot" />
                      </span>
                      <span className="face">
                        <span className="flex flex-col items-center gap-1.5" aria-hidden>
                          <Led status={u.status} />
                          {u.status !== "archive" && <i className="act" style={{ animationDuration: blink(i, 9) }} />}
                        </span>
                        <span className="plate">
                          <span className="plate-label">{shortLabel[u.id]}</span>
                          <span className="plate-sub">
                            {u.count}
                            {u.badge && <span className="plate-badge"> · {u.badge}</span>}
                          </span>
                        </span>
                        <Grille kind={faceplate[u.id]} unit={i} live={u.status !== "archive"} />
                        <span className="pull" aria-hidden />
                      </span>
                      <span className="ear" aria-hidden>
                        <i className="screw-dot" />
                        <i className="screw-dot" />
                      </span>
                    </button>
                  );
                })}
              </div>
              <span aria-hidden className="rail" />
            </div>

            <div className="cab-blank" aria-hidden>
              <i className="vent" />
              <Bug className="size-4 rotate-[200deg] text-[var(--rack-dim)]" />
            </div>
            <div className="pdu" aria-hidden>
              <span className="font-mono text-[8px] tracking-widest text-[var(--rack-dim)]">PDU</span>
              {Array.from({ length: 6 }, (_, j) => (
                <i key={j} className="socket" />
              ))}
              <span className="led led-active ml-1 !size-1.5" />
            </div>
          </div>
          <div className="cab-feet" aria-hidden>
            <i />
            <i />
          </div>
        </div>

        {/* ------------------------------ Console ------------------------------ */}
        <div ref={consoleRef} className="console relative flex min-h-0 scroll-mt-4 flex-col">
          <Cobweb className="absolute -right-px -top-px z-10 size-12 -scale-x-100 text-[var(--rack-dim)]/40" />
          <div className="console-bar">
            <span className="flex gap-1.5" aria-hidden>
              <i className="size-2 rounded-full bg-[var(--rack-dim)]/60" />
              <i className="size-2 rounded-full bg-[var(--rack-dim)]/60" />
              <i className="size-2 rounded-full bg-primary" />
            </span>
            <span key={active} className="type" style={{ ["--n" as string]: prompt.length }}>
              {prompt}
            </span>
            <span className="ml-auto shrink-0 pr-6 text-[var(--rack-dim)]">
              {String(idx + 1).padStart(2, "0")}/{String(units.length).padStart(2, "0")}
            </span>
          </div>

          <div ref={scrollRef} className="console-scroll min-h-0 flex-1 px-5 pb-8 pt-7 sm:px-9">
            <div key={active} className="boot mb-7 flex flex-wrap items-center gap-3">
              <Led status={current.status} />
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{panelTitles[current.id]}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{current.count}</span>
              {current.badge && (
                <span className="rounded bg-amber-500/15 px-1.5 font-mono text-[11px] text-amber-700 dark:text-amber-400">
                  {current.badge}
                </span>
              )}
            </div>

            {/* Every section stays in the HTML; only the selected one shows. */}
            {units.map((u) => {
              const Body = panelBodies[u.id];
              return (
                <div
                  key={u.id}
                  role="tabpanel"
                  id={`panel-${u.id}`}
                  aria-labelledby={`tab-${u.id}`}
                  hidden={u.id !== active}
                  className="panel-body"
                >
                  <Body />
                </div>
              );
            })}
          </div>

          <footer className="relative flex items-center justify-between gap-2 border-t border-border px-3 py-2 font-mono text-xs sm:px-6">
            <button type="button" onClick={() => select(prev)} className="nav-btn">
              <ChevronLeft className="size-4 shrink-0" />
              <span className="truncate">{panelTitles[prev]}</span>
            </button>
            <Bug className="size-4 rotate-[30deg] text-muted-foreground/40" />
            <button type="button" onClick={() => select(next)} className="nav-btn">
              <span className="truncate">{panelTitles[next]}</span>
              <ChevronRight className="size-4 shrink-0" />
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}

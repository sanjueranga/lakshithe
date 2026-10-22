"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  articles,
  awards,
  certificates,
  clients,
  courses,
  degree,
  journey,
  leadership,
  mediumUrl,
  profile,
  projects,
  publications,
  research,
  researchWork,
  roles,
  testimonials,
  type Project,
  type Publication,
  type Tag,
} from "@/data/site";
import { Chip, Chips, ExtLink, SectionTitle, Stars } from "./parts";

const statusLabel: Record<Publication["status"], string> = {
  published: "Published",
  accepted: "Accepted",
  "under-review": "Under review",
  preprint: "Preprint",
};

function Details({ text, label = "Read more" }: { text?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  if (!text) return null;
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
      >
        {open ? "Show less" : label}
        <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {/* Always in the DOM so the text stays readable by crawlers. */}
      <p
        hidden={!open}
        className="mt-2 border-l-2 border-accent/50 pl-3 text-sm leading-relaxed text-muted-foreground"
      >
        {text}
      </p>
    </div>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <li className="panel-item rounded-md border border-border bg-card/60 p-4">{children}</li>;
}

/* -------------------------------- Research -------------------------------- */

function Research() {
  return (
    <>
      <p className="text-[15px] leading-relaxed text-foreground/90">{research.interests}</p>

      {research.questions.length > 0 && (
        <section className="mt-8">
          <SectionTitle>Questions I&apos;m working on</SectionTitle>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {research.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-8">
        <SectionTitle>Publications</SectionTitle>
        <ul className="space-y-3">
          {publications.map((p) => (
            <Item key={p.title}>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <span
                  className={`rounded px-1.5 py-0.5 uppercase tracking-wider ${
                    p.status === "under-review"
                      ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                      : "bg-accent/15 text-accent-ink"
                  }`}
                >
                  {statusLabel[p.status]}
                </span>
                <span>{p.year}</span>
              </div>
              <h4 className="mt-2 font-semibold leading-snug">{p.title}</h4>
              {p.authors && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.authors.map((a, i) => (
                    <span key={a}>
                      {i > 0 && ", "}
                      {a === profile.name ? <strong className="text-foreground">{a}</strong> : a}
                    </span>
                  ))}
                </p>
              )}
              <p className="mt-1 text-sm italic text-muted-foreground">{p.venue}</p>
              <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
              <Chips items={p.stack} />
              <Details text={p.details} label="About this paper" />
              {p.links && (
                <p className="mt-3 flex flex-wrap gap-4">
                  {p.links.pdf && <ExtLink href={p.links.pdf}>PDF</ExtLink>}
                  {p.links.doi && <ExtLink href={p.links.doi}>DOI</ExtLink>}
                  {p.links.slides && <ExtLink href={p.links.slides}>Slides</ExtLink>}
                  {p.links.code && <ExtLink href={p.links.code}>Code</ExtLink>}
                </p>
              )}
            </Item>
          ))}
        </ul>
      </section>

      {researchWork.length > 0 && (
        <section className="mt-8">
          <SectionTitle>Earlier research work</SectionTitle>
          <ul className="space-y-3">
            {researchWork.map((w) => (
              <Item key={w.title}>
                <h4 className="font-semibold">{w.title}</h4>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {w.org} · {w.year}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{w.what}</p>
                <Chips items={w.stack} />
                <Details text={w.details} />
              </Item>
            ))}
          </ul>
        </section>
      )}

      {research.collaborations.length > 0 && (
        <section className="mt-8">
          <SectionTitle>Ongoing collaborations</SectionTitle>
          <ul className="space-y-2 text-sm">
            {research.collaborations.map((c) => (
              <li key={c.topic}>
                <strong>{c.topic}</strong>
                {c.with && <> — {c.with}</>}
                {c.since && <span className="text-muted-foreground"> (since {c.since})</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

/* ------------------------------- Experience ------------------------------- */

function Experience() {
  return (
    <ol className="relative ml-2 space-y-6 border-l border-border pl-6">
      {roles.map((r) => {
        const dates = [r.start, r.end].filter(Boolean).join(" – ");
        return (
          <li key={r.title + r.org} className="panel-item relative">
            <span
              aria-hidden
              className={`absolute -left-[31px] top-1.5 size-2.5 rounded-full border-2 border-background ${
                r.end === "Present" ? "bg-accent" : "bg-muted-foreground/50"
              }`}
            />
            <h4 className="font-semibold">{r.title}</h4>
            <p className="text-sm text-muted-foreground">
              {r.orgUrl ? <ExtLink href={r.orgUrl}>{r.org}</ExtLink> : r.org}
            </p>
            {(dates || r.type) && (
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                {[dates, r.type].filter(Boolean).join(" · ")}
              </p>
            )}
            {r.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            <Chips items={r.stack} />
          </li>
        );
      })}
    </ol>
  );
}

/* -------------------------------- Projects -------------------------------- */

function ProjectCard({ p }: { p: Project }) {
  const meta = [p.year, p.role, p.org].filter(Boolean).join(" · ");
  return (
    <Item>
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
        {p.tags.map((t) => (
          <span key={t} className="rounded bg-accent/15 px-1.5 py-0.5 uppercase tracking-wider text-accent-ink">
            {t}
          </span>
        ))}
        <span>{meta}</span>
      </div>
      <h4 className="mt-2 font-semibold leading-snug">{p.name}</h4>
      {p.problem && (
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="font-mono text-[11px] uppercase tracking-wider">Problem · </span>
          {p.problem}
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed">{p.built}</p>
      <Chips items={p.stack} />
      <Details text={p.details} />
      {p.links && (
        <p className="mt-3 flex flex-wrap gap-4">
          {p.links.repo && <ExtLink href={p.links.repo}>Repo</ExtLink>}
          {p.links.live && <ExtLink href={p.links.live}>Live</ExtLink>}
          {p.links.article && <ExtLink href={p.links.article}>Article</ExtLink>}
        </p>
      )}
    </Item>
  );
}

const filters: ("All" | Tag)[] = ["All", "Systems", "AI", "Web"];

function Projects() {
  const [tag, setTag] = useState<"All" | Tag>("All");
  const [more, setMore] = useState(false);
  const match = (p: Project) => tag === "All" || p.tags.includes(tag);
  const featured = projects.filter((p) => p.featured && match(p));
  const rest = projects.filter((p) => !p.featured && match(p));

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={tag === f}
            onClick={() => setTag(f)}
            className={`min-h-9 rounded-full border px-3.5 font-mono text-xs transition-colors ${
              tag === f
                ? "border-accent bg-accent/15 text-accent-ink"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul key={tag} className="grid gap-3 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </ul>
      {featured.length === 0 && (
        <p className="text-sm text-muted-foreground">No featured projects with this tag.</p>
      )}

      {rest.length > 0 && (
        <section className="mt-8">
          <button
            type="button"
            onClick={() => setMore(!more)}
            aria-expanded={more}
            className="flex w-full items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            More work · {rest.length}
            <span aria-hidden className="h-px flex-1 bg-border" />
            <ChevronDown className={`size-3.5 transition-transform ${more ? "rotate-180" : ""}`} aria-hidden />
          </button>
          <ul hidden={!more} className="mt-4 grid gap-3 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

/* --------------------------------- Teaching -------------------------------- */

function Teaching() {
  const demonstrator = roles.find((r) => r.title === "Temporary Demonstrator");
  return (
    <>
      {demonstrator && (
        <Item>
          <h4 className="font-semibold">{demonstrator.title}</h4>
          <p className="text-sm text-muted-foreground">{demonstrator.org}</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
            {[demonstrator.start, demonstrator.end].filter(Boolean).join(" – ")}
          </p>
        </Item>
      )}
      {courses.length > 0 && (
        <ul className="ml-4 mt-3 space-y-3 border-l border-border pl-4">
          {courses.map((c) => (
            <li key={c.name}>
              <p className="font-mono text-[11px] text-muted-foreground">
                {[c.code, c.level, c.years].filter(Boolean).join(" · ")}
              </p>
              <h5 className="text-sm font-semibold">{c.name}</h5>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{c.what}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/* --------------------------------- Writing -------------------------------- */

function Writing() {
  return (
    <>
      <ul className="space-y-3">
        {articles.map((a) => (
          <li key={a.url}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-item group flex gap-4 rounded-md border border-border bg-card/60 p-3 transition-colors hover:border-accent/60"
            >
              {a.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.image}
                  alt=""
                  loading="lazy"
                  className="hidden aspect-[4/3] w-32 shrink-0 rounded object-cover sm:block"
                />
              )}
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {[a.publication, a.date].filter(Boolean).join(" · ")}
                </p>
                <h4 className="mt-1 font-semibold leading-snug group-hover:text-accent-ink">{a.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <ExtLink href={mediumUrl}>All posts on Medium</ExtLink>
      </p>
    </>
  );
}

/* -------------------------------- Education -------------------------------- */

function Education() {
  return (
    <>
      <Item>
        <h4 className="font-semibold">{degree.name}</h4>
        <p className="text-sm text-muted-foreground">{degree.university}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          {degree.years} · Minors: {degree.minors}
        </p>
        <p className="mt-3 text-sm leading-relaxed">{degree.summary}</p>
      </Item>

      <section className="mt-8">
        <SectionTitle>Awards</SectionTitle>
        <ul className="space-y-2">
          {awards.map((a) => (
            <li key={a.name} className="panel-item flex gap-4 text-sm">
              <span className="w-10 shrink-0 pt-px font-mono text-[11px] text-muted-foreground">{a.year}</span>
              <div>
                <p className="font-medium">
                  {a.name} <span className="font-normal text-muted-foreground">· {a.issuer}</span>
                </p>
                {a.note && <p className="mt-0.5 text-muted-foreground">{a.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <SectionTitle>Certificates</SectionTitle>
        <ul className="space-y-2">
          {certificates.map((c) => (
            <li key={c.name} className="panel-item flex gap-4 text-sm">
              <span className="w-10 shrink-0 pt-px font-mono text-[11px] text-muted-foreground">{c.year}</span>
              <div>
                <p className="font-medium">
                  {c.name} <span className="font-normal text-muted-foreground">· {c.issuer}</span>
                </p>
                {c.note && <p className="mt-0.5 text-muted-foreground">{c.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <SectionTitle>Journey</SectionTitle>
        <ol className="space-y-2 border-l border-border pl-5">
          {journey.map((m) => (
            <li key={m.year + m.text} className="panel-item relative flex gap-4 text-sm">
              <span aria-hidden className="absolute -left-[25px] top-2 size-1.5 rounded-full bg-muted-foreground/60" />
              <span className="w-10 shrink-0 font-mono text-[11px] text-muted-foreground">{m.year}</span>
              <span>{m.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

/* ------------------------------- Leadership -------------------------------- */

function Leadership() {
  return (
    <ul className="space-y-3">
      {leadership.map((l) => (
        <Item key={l.role + l.org}>
          <h4 className="font-semibold">
            {l.role} <span className="font-normal text-muted-foreground">· {l.org}</span>
          </h4>
          {l.dates && <p className="font-mono text-[11px] text-muted-foreground">{l.dates}</p>}
          {l.what && <p className="mt-2 text-sm leading-relaxed">{l.what}</p>}
          {l.numbers && (
            <p className="mt-2">
              <Chip>{l.numbers}</Chip>
            </p>
          )}
          {l.url && (
            <p className="mt-3">
              <ExtLink href={l.url}>Visit</ExtLink>
            </p>
          )}
        </Item>
      ))}
    </ul>
  );
}

/* --------------------------------- Clients --------------------------------- */

function Clients() {
  return (
    <>
      <p className="text-[15px] leading-relaxed">{clients.summary}</p>
      <p className="mt-3 flex flex-wrap gap-2">
        {clients.badges.map((b) => (
          <Chip key={b}>{b}</Chip>
        ))}
      </p>

      <section className="mt-8">
        <SectionTitle>Reviews</SectionTitle>
        <ul className="grid gap-3 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.quote}>
              <figure className="panel-item h-full rounded-md border border-border bg-card/60 p-4">
                {t.rating && <Stars n={t.rating} />}
                <blockquote className="mt-2 text-sm leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">
                  {t.name} · {t.platform}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6">
        <ExtLink href={clients.upwork}>View my Upwork profile</ExtLink>
      </p>
    </>
  );
}

export const panelBodies: Record<string, () => ReactNode> = {
  research: Research,
  experience: Experience,
  projects: Projects,
  teaching: Teaching,
  writing: Writing,
  education: Education,
  leadership: Leadership,
  clients: Clients,
};

export const panelTitles: Record<string, string> = {
  research: "Research",
  experience: "Experience",
  projects: "Projects",
  teaching: "Teaching",
  writing: "Writing",
  education: "Education & Awards",
  leadership: "Leadership & Volunteering",
  clients: "Freelance & Clients",
};

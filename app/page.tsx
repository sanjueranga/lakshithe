import { Hero } from "@/components/hero";
import { ServerRoom } from "@/components/rack/server-room";
import { profile, publications } from "@/data/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.intro,
    url: "https://lakshithae.com",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "University of Peradeniya",
    },
    address: { "@type": "PostalAddress", addressLocality: "Kandy", addressCountry: "LK" },
    sameAs: profile.links.filter((l) => l.show).map((l) => l.url),
  },
  ...publications.map((p) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: p.title,
    datePublished: String(p.year),
    author: { "@type": "Person", name: profile.name },
    isPartOf: p.venue,
  })),
];

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-8 lg:pt-16">
        <Hero />
        <div className="mt-16 sm:mt-20">
          <ServerRoom />
        </div>
        <footer className="mt-20 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-mono text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span aria-hidden>·</span>
          <span>Made in {profile.location}</span>
        </footer>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

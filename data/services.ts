export interface ServicePackage {
  id: string
  name: string
  price: string
  billingCycle: string
  description: string
  features: string[]
  ctaText: string
  ctaUrl: string
  highlighted?: boolean
}

export const servicesData: ServicePackage[] = [
  {
    id: "architecture-guide",
    name: "The Architecture Guide Plan",
    price: "Starting at $149",
    billingCycle: "per session",
    description: "For planning before you build, or restructuring a messy codebase.",
    features: [
      "Tech stack and infrastructure consulting",
      "System architecture design (ER diagrams, API design)",
      "Code planning session to align AI generation with real-world engineering"
    ],
    ctaText: "Get Started",
    ctaUrl: "#contact"
  },
  {
    id: "code-rescue",
    name: "The Code Rescue Sprint",
    price: "Starting at $299",
    billingCycle: "per sprint",
    description: "For when the app is broken and development has stalled.",
    features: [
      "Targeted bug-fix bundles for AI-generated logic errors",
      "Refactoring messy, unmaintainable code into clean structures",
      "Database query optimization (MongoDB, PostgreSQL)"
    ],
    ctaText: "Book Rescue",
    ctaUrl: "#contact",
    highlighted: true
  },
  {
    id: "deployment-engine",
    name: "The Deployment Engine",
    price: "Starting at $499",
    billingCycle: "per project",
    description: "For getting the project off a local machine and onto the web.",
    features: [
      "Full CI/CD pipeline setup",
      "Docker containerization and AWS infrastructure configuration",
      "Domain setup, SSL, and live launch"
    ],
    ctaText: "Launch Now",
    ctaUrl: "#contact"
  },
  {
    id: "fractional-lead",
    name: "Fractional Lead Architect",
    price: "Custom Retainer",
    billingCycle: "monthly",
    description: "For ambitious builds requiring end-to-end development and team management.",
    features: [
      "High-level system design and weekly architecture reviews",
      "Management of specialized, distributed developers",
      "Complete technical ownership of your SaaS platform"
    ],
    ctaText: "Let's Talk",
    ctaUrl: "#contact"
  }
]

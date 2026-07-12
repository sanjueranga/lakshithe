export interface CaseStudy {
  id: string
  clientName: string
  clientTitle?: string
  challenge: string
  solution: string
  tags: ("AI" | "Web")[]
  outcome?: string
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "derrick-surrat",
    clientName: "Derrick Surrat",
    clientTitle: "Founder - federalforecaster",
    challenge: "Scattered microservices with vibecoded implementations that needed to go live for an investor demo. The system lacked proper containerization, had numerous bugs, and required a reliable deployment pipeline for continuous development.",
    solution: "Dockerized all services, systematically fixed critical bugs, deployed the application to a VPS with proper configuration, and established a CI/CD pipeline to support ongoing development and rapid iterations.",
    tags: ["AI","Web"],
    outcome: "Successfully delivered production-ready system in time for investor demo with automated deployment pipeline."
  },
  {
    id: "faithfulness-ameh",
    clientName: "Faithfulness Ameh",
    clientTitle: "Founding Engineer at Mixtape",
    challenge: "Building a heavy AI media processing platform from scratch that required scalable architecture to handle compute-intensive workloads and complex AI pipeline orchestration.",
    solution: "Architected the entire backend infrastructure with auto-scaling workers for AI processing, set up isolated cloud environments for development and production, implemented full CI/CD pipelines, and integrated multiple AI microservices for video generation and processing.",
    tags: ["AI", "Web"],
    outcome: "Production SaaS platform serving customers with reliable AI video generation capabilities."
  },
  {
    id: "karan-thapar",
    clientName: "Karan Thapar",
    clientTitle: "Founder of Samajha AI",
    challenge: "AI-powered EdTech prototype running only locally with bugs and architectural limitations. Needed to transform it into a production-ready MVP for beta testing.",
    solution: "Fixed critical bugs, improved system architecture and code quality, deployed MVP v1 to production, coordinated beta release for initial testers, identified and hired a suitable development team, and executed a smooth handover with comprehensive documentation.",
    tags: ["AI", "Web"],
    outcome: "Live MVP with beta testers and sustainable development team in place."
  }
]

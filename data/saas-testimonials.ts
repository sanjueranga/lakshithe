export interface SaaSTestimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
}

export const saasTestimonialsData: SaaSTestimonial[] = [
  {
    id: "faithfulness-ameh",
    quote: "I needed help setting up AWS S3 for my SaaS, and he got it working. Later, when I ran into issues adding features through Cursor, he jumped in and fixed the flow of the app. Really good at getting things back on track.",
    author: "Faithfulness Ameh",
    company: "Mixtape"
  },
  {
    id: "hasanka-sanjana",
    quote: "We had broken logic in our financial app, and he sorted it out. Optimized MongoDB and rebuilt parts of the UI. It honestly runs so much smoother now.",
    author: "Hasanka Sanjana",
    company: "Project SMIT"
  },
  {
    id: "keiron-denton",
    quote: "Has worked on everything from rental platforms to trading bots. Always delivers and finds smart ways to solve problems. Reliable and easy to work with.",
    author: "Keiron Denton",
    company: "Visual Science"
  }
]

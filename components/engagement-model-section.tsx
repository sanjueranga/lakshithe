"use client"

import { MessageSquare, Zap, Users, DollarSign } from "lucide-react"

export function EngagementModelSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How We Work: <br />
              <span className="text-primary">Architect with Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When you hire me, you work directly with me—<span className="text-foreground font-semibold">Lakshitha Eranga</span>, your system architect and sole point of contact.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              My computer science background brings system engineering skills from OOAD, distributed computing, and parallel processing. As a visionary, I understand how to architect the foundation that founders need to build their business on. We either establish and train a team for you, or I bring in my distributed team to execute the build.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Direct Communication
                  </h3>
                  <p className="text-muted-foreground">
                    No account managers or project coordinators. You work directly with the architect who understands your system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Fast Turnaround
                  </h3>
                  <p className="text-muted-foreground">
                    Critical fixes and architecture decisions happen in days, not weeks. No bureaucracy, just action.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Flexible Engagements
                  </h3>
                  <p className="text-muted-foreground">
                    One-off rescue sprints, ongoing architecture support, or full-scale builds. Scale up or down as needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Fixed-scope packages with clear deliverables. No surprise invoices or scope creep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Architect with Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  System engineering expertise meets founder-focused vision. I architect the foundation your business needs to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, Bug, Cloud } from "lucide-react"

export function AgitationSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI got you 90% of the way there. <br />
            <span className="text-primary">I handle the last 10%.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building with AI is fast, but it doesn&apos;t architect scalable systems. If you&apos;re dealing with mysterious bugs, slow database queries, or have no idea how to deploy your local project to the cloud—you don&apos;t need a tutorial. You need an architect.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
            <AlertCircle className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Code that works ≠ Production-ready
            </h3>
            <p className="text-muted-foreground">
              Your local prototype runs fine, but scaling it means addressing security, performance, and maintainability from the ground up.
            </p>
          </Card>

          <Card className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
            <Bug className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Fast prototypes, slow reality
            </h3>
            <p className="text-muted-foreground">
              AI generates code quickly, but debugging logic errors, race conditions, and database bottlenecks requires deep architectural knowledge.
            </p>
          </Card>

          <Card className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
            <Cloud className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">
              90% done, stuck on critical 10%
            </h3>
            <p className="text-muted-foreground">
              Deployment, CI/CD, database migrations, monitoring—the final push to production is where most founders hit a wall.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

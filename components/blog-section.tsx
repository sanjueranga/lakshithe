"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image"; // Import next/image for better performance
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const blogPosts = [
  {
    id: "blog-1",
    title: "No Budget, No Problem: How I Built a DIY Video Streaming Server",
    description:
      "When you’re building a SaaS product, you need to think like an engineer and spend like a student. YouTube, Vimeo and Mux didn’t fit our LMS or our budget, so we rolled our own.",
    imageUrl: "/cloud-bill.webp",
    postUrl:
      "https://medium.com/cloud-core-x/no-budget-no-problem-how-i-built-a-diy-video-streaming-server-94c7a3f778b2",
  },
  {
    id: "blog-2",
    title: "From a 10-Minute AI Job to a 60-Second Pipeline",
    description:
      "What happens when 50 users upload 5 videos at once? How I evolved a compute-heavy AI system from a demo-ready MVP into a production-grade pipeline without rewriting the core business logic.",
    imageUrl: "/article_ai_pipeline.webp",
    postUrl:
      "https://levelup.gitconnected.com/from-a-10-minute-ai-job-to-a-60-second-pipeline-612f93e61d9d?sk=4607ed7083a28da7f186cfc9174ec623",
  },
  {
    id: "blog-3",
    title: "Threads in C — Explained Simply with Code",
    description:
      "Threads and multiprocessing come from the world of distributed computing. Using C, a language close to the hardware, we see how threads, processes, and memory come together.",
    imageUrl: "/article-c.webp",
    postUrl:
      "https://lakshithe.medium.com/threads-in-c-explained-simply-with-code-bae3f45e391b?sk=4222c13af00cb62e023d5cd452142faf",
  },
];

// --- ADD YOUR PROFILE LINK HERE ---
const mediumProfileUrl = "https://medium.com/@lakshithe";

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-background" id="blog">
      <div className="max-w-6xl mx-auto">
        {/* --- Centered Title & Subtitle --- */}
        <FadeIn direction="up">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
            From My Blog
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I believe in building in public and sharing what I learn. Here are
            some of my thoughts.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <Card
                className="bg-card border-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 flex flex-col group h-full"
              >
                {/* --- Image Link --- */}
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>

                <div className="p-6 flex flex-col flex-1">
                  {/* --- Title Link --- */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* --- Card Button Link (FIXED) --- */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      href={post.postUrl} // <-- FIXED
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Read Article
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* --- NEW: "Read More" Button --- */}
        <FadeIn direction="up" delay={0.1} className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/30"
          >
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Posts on Medium
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

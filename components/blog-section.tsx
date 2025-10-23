"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image"; // Import next/image for better performance

const blogPosts = [
  {
    id: "blog-1",
    title:
      "Writing My Own Django Serializer for camelCase — Until I Found the One-Line Fix",
    description:
      "When you’re building a Django REST API and the frontend is speaking fluent camelCase while Django insists on snake_case… you end up playing translator.",
    imageUrl: "/blog-1.png", // Save your image here
    postUrl:
      "https://medium.com/level-up-python/writing-my-own-django-serializer-for-camelcase-until-i-found-the-one-line-fix-92cc9e7336b3",
  },
  {
    id: "blog-2",
    title: "AI Agents Are Only as Smart as Their Data",
    description:
      "A practical guide to turning noisy web data into structured signals your AI agents can actually use. We just built an agent. Its mission? To scout the internet for trending topics...",
    imageUrl: "/blog-2.png", // Save your image here
    postUrl:
      "https://medium.com/pythoneers/ai-agents-are-only-as-smart-as-their-data-68a43bdeccd3",
  },
  {
    id: "blog-3",
    title: "Don’t Waste Money on AI Subscriptions Until You Read This",
    description:
      "Real-world testing reveals which AI tools are worth your money. As a research student, writer, and programmer, I’m living in the most AI-powered era yet.",
    imageUrl: "/blog-3.png",
    postUrl:
      "https://medium.com/everyday-ai/dont-waste-money-on-ai-subscriptions-until-you-read-this-b01a9b974375",
  },
];

// --- ADD YOUR PROFILE LINK HERE ---
const mediumProfileUrl = "https://medium.com/@lakshithe";

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* --- Centered Title & Subtitle --- */}
        <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
          From My Blog
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I believe in building in public and sharing what I learn. Here are
          some of my thoughts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 flex flex-col group"
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
          ))}
        </div>

        {/* --- NEW: "Read More" Button --- */}
        <div className="text-center mt-16">
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
        </div>
      </div>
    </section>
  );
}

// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshithae.com"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.intro,
    url: "/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${hand.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

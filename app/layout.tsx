// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // We'll just use Inter as requested
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Import the new components
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"; 

// Setup the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // This matches your globals.css
});

export const metadata: Metadata = {
  title: "Lakshitha",
  description:
    "Portfolio of an AI and Full-Stack Developer building intelligent, end-to-end applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Remove the hardcoded `className="dark"`
    // Add `suppressHydrationWarning` as recommended by next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Wrap everything in the ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // You can set this to "dark" or "system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {/* Add the new Header */}
          <main>{children}</main> {/* Wrap children in main for semantics */}
          <Analytics />
          <Footer /> {/* Add the new Footer */}
        </ThemeProvider>
      </body>
    </html>
  );
}

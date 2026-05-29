import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bajjuri Vinay Kumar | Software Engineer",
  description:
    "Software Engineer with 4+ years building scalable web applications and GenAI-powered tools. Targeting remote US roles.",
  keywords: ["Software Engineer", "GenAI", "Full Stack", "React", "Next.js", "AI Engineer"],
  openGraph: {
    title: "Bajjuri Vinay Kumar | Software Engineer",
    description: "Software Engineer with 4+ years building scalable web applications and GenAI tools.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

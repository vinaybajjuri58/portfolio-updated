import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mat Fuel — BJJ Athlete Diet Tool",
  description:
    "Free sports nutrition tool for BJJ and combat athletes. Calculate your macros, nail pre/post training meals, and fix the diet mistakes killing your performance on the mat.",
  keywords: ["BJJ diet", "jiu jitsu nutrition", "athlete macros", "combat sports diet", "pre workout meal"],
  openGraph: {
    title: "Mat Fuel — BJJ Athlete Diet Tool",
    description: "Free macro calculator and timing guide built for grapplers.",
    type: "website",
  },
};

export default function BJJLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinay Bajjuri | @vin.ai_",
  description: "Gen AI Experiments | Business Enthusiast — links and resources by Vinay Bajjuri.",
  openGraph: {
    title: "Vinay Bajjuri | @vin.ai_",
    description: "Gen AI Experiments | Business Enthusiast",
    type: "website",
  },
};

export default function VinAiLayout({ children }: { children: React.ReactNode }) {
  return children;
}

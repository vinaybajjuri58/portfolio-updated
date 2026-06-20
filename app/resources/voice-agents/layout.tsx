import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "Voice Agent Blueprint | @vin.ai_",
  description:
    "Complete voice agent architecture reference — pipelines, outbound calling, tools, memory, observability, costs, and voice cloning.",
};

export default function VoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${syne.variable} ${ibmMono.variable}`}>{children}</div>
  );
}

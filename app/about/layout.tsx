import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about Sree Narayana Public School's rich heritage, mission, vision, and core values. Discover our 14-acre campus, CBSE affiliation, and commitment to NEP 2020 aligned education in Chathannoor – Vilappuram, Kerala.",
  keywords: ["About SNPS", "School History", "Mission Vision", "Core Values", "School Heritage", "CBSE School About"],
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


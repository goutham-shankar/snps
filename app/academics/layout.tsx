import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Academics",
  description: "Explore our comprehensive academic programs from Pre-KG to Grade XII. CBSE-affiliated curriculum aligned with NEP 2020, featuring innovative teaching methodologies, academic calendar, and outstanding board results.",
  keywords: ["Academic Programs", "CBSE Curriculum", "NEP 2020", "Academic Calendar", "Board Results", "Education Programs"],
  path: "/academics",
});

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


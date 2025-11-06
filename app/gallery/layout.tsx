import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery",
  description: "Explore our photo gallery showcasing academics, arts, sports, and school life at Sree Narayana Public School. See our 14-acre campus, facilities, events, and student activities.",
  keywords: ["School Gallery", "School Photos", "Campus Photos", "School Events", "Student Activities", "School Life"],
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


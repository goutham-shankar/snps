import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Facilities",
  description: "Discover the world-class facilities at Sree Narayana Public School including modern classrooms, laboratories, library, sports facilities, and more on our 14-acre campus.",
  keywords: ["School Facilities", "Infrastructure", "Campus Facilities", "School Labs", "School Library", "Sports Facilities"],
  path: "/facilities",
});

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


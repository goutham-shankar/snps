import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Feedback & Complaints",
  description: "Submit your feedback, suggestions, or complaints to Sree Narayana Public School. We value your input and are committed to addressing all concerns promptly and effectively.",
  keywords: ["Feedback", "Complaints", "Grievance", "School Feedback", "Contact School", "School Support"],
  path: "/grievance",
});

export default function GrievanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


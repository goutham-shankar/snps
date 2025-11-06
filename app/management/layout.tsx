import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Management",
  description: "Meet the leadership team, faculty, and management committee of Sree Narayana Public School. Learn about our dedicated educators, non-teaching staff, and administrative structure.",
  keywords: ["School Management", "Faculty", "Teachers", "School Staff", "Management Committee", "School Leadership"],
  path: "/management",
});

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


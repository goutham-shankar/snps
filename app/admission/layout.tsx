import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Admission",
  description: "Join Sree Narayana Public School! Learn about our admission process, fee structure, and enrollment procedures for Pre-KG to Grade XII. CBSE-affiliated school in Chathannoor – Vilappuram, Kerala.",
  keywords: ["Admission Process", "School Admission", "Fee Structure", "Enrollment", "CBSE School Admission", "School Registration"],
  path: "/admission",
});

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


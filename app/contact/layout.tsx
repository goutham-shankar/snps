import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with Sree Narayana Public School, Chathannoor – Vilappuram. Find our address, phone numbers, email, office hours, and location map. We're here to answer your questions.",
  keywords: ["Contact SNPS", "School Contact", "School Address", "School Phone", "School Email", "School Location"],
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Mandatory Disclosure",
  description: "Access mandatory disclosure information for Sree Narayana Public School as per CBSE guidelines. View school policies, governance, compliance, and regulatory information.",
  keywords: ["Mandatory Disclosure", "CBSE Disclosure", "School Policies", "Governance", "Compliance", "School Information"],
  path: "/mandatory-disclosure",
});

export default function MandatoryDisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


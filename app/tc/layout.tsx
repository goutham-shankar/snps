import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transfer Certificate (TC)",
  description: "Search and download your Transfer Certificate from Sree Narayana Public School. Enter your name and date of birth to find your TC.",
  keywords: [
    "Transfer Certificate",
    "TC Download",
    "SNPS TC",
    "School Leaving Certificate",
    "Sree Narayana Public School TC"
  ],
};

export default function TCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

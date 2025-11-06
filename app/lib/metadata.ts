import type { Metadata } from "next";
import { schoolInfo } from "../data/school-info";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://snpschool.edu.in';

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image = "/image-preview.png",
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | Sree Narayana Public School`;
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "Sree Narayana Public School",
      "SNPS Chathannoor",
      "CBSE School Kerala",
      "NEP 2020 School",
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Sree Narayana Public School",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}


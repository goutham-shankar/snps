import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://snpschool.edu.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sree Narayana Public School, Chathannoor – Vilappuram | CBSE Affiliated | NEP 2020 Aligned | Proposed New Sainik School",
    template: "%s | Sree Narayana Public School"
  },
  description: "Sree Narayana Public School (SNPS), Chathannoor – Vilappuram is a CBSE-affiliated institution (est. 2015) offering education from Pre-KG to Grade XII on a 14-acre campus. Enlightenment through Education. Proposed New Sainik School with NEP 2020 alignment.",
  keywords: [
    "Sree Narayana Public School Chathannoor",
    "CBSE School Kerala",
    "CBSE Affiliation Bye-Laws",
    "NEP 2020 School Kerala",
    "Mandatory Disclosure CBSE",
    "School Management Committee SMC",
    "Academic Calendar CBSE",
    "Board Results CBSE Kerala",
    "Best CBSE School Kollam",
    "Sainik School Kerala",
    "SNPS Chathannoor",
    "CBSE School Vilappuram",
    "Education Chathannoor",
    "Private School Kollam"
  ],
  authors: [{ name: "Sree Narayana Public School" }],
  creator: "Sree Narayana Educational Society, Kollam",
  publisher: "Sree Narayana Public School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome-512x512', url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512' }
    ]
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sree Narayana Public School",
    title: "Sree Narayana Public School, Chathannoor – Vilappuram | CBSE Affiliated | NEP 2020 Aligned",
    description: "CBSE Affiliated | NEP 2020 Aligned | Proposed New Sainik School | Enlightenment through Education. Offering quality education from Pre-KG to Grade XII on a 14-acre campus.",
    images: [
      {
        url: '/image-preview.png',
        width: 1200,
        height: 630,
        alt: 'Sree Narayana Public School, Chathannoor – Vilappuram',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Narayana Public School, Chathannoor – Vilappuram | CBSE Affiliated",
    description: "CBSE Affiliated | NEP 2020 Aligned | Proposed New Sainik School | Enlightenment through Education",
    images: ['/image-preview.png'],
    creator: "@snpschool", // Update with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Education',
  classification: 'School',
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Kollam, Kerala',
    'geo.position': '0;0', // Update with actual coordinates
    'ICBM': '0, 0', // Update with actual coordinates
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}




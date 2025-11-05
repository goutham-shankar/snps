import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sree Narayana Public School, Chathannoor – Vilappuram | CBSE Affiliated | NEP 2020 Aligned | Proposed New Sainik School",
  description: "Sree Narayana Public School (SNPS), Chathannoor – Vilappuram is a CBSE-affiliated institution (est. 2015) offering education from Pre-KG to Grade XII on a 14-acre campus. Enlightenment through Education. Proposed New Sainik School with NEP 2020 alignment.",
  keywords: [
    "Sree Narayana Public School Chathannoor",
    "CBSE Affiliation Bye-Laws",
    "NEP 2020 School Kerala",
    "Mandatory Disclosure CBSE",
    "School Management Committee SMC",
    "Academic Calendar CBSE",
    "Board Results CBSE Kerala"
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Sree Narayana Public School, Chathannoor – Vilappuram",
    description: "CBSE Affiliated | NEP 2020 Aligned | Proposed New Sainik School | Enlightenment through Education",
    type: "website",
    images: ['/logo.png'],
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}




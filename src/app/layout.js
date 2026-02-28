import { WindSong, Playfair_Display, Lato } from "next/font/google";
import ClientCursor from "@/components/ClientCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Modern, breezy, effortless signature script
const signature = WindSong({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Editorial Serif for "Luxury" text parts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});



// Humanist sans-serif for body text - warmer and friendlier
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "South Asian Bridal Makeup & Mehndi Pittsburgh | MK Studio",
    template: "%s | MK Studio Bridal",
  },
  description: "Pittsburgh's premier South Asian bridal makeup artist & mehndi specialist. 27+ years transforming brides. Indian, Pakistani, Gujarati, South Indian wedding looks.",
  keywords: ["south asian bridal makeup pittsburgh", "indian makeup artist pittsburgh", "bridal mehndi pittsburgh", "south indian bridal makeup", "gujarati bridal makeup", "henna artist pittsburgh pa", "pakistani bridal makeup", "Mayuri Kakkad", "MK Studio Bridal"],
  siteName: "MK Studio Bridal",
  authors: [{ name: "Mayuri Kakkad" }],
  metadataBase: new URL('https://www.mayurikakkad.com'),
  openGraph: {
    title: "South Asian Bridal Makeup & Mehndi Pittsburgh | MK Studio",
    description: "Pittsburgh's premier South Asian bridal makeup & mehndi artist. 27+ years of transforming brides.",
    type: "website",
    locale: "en_US",
    url: "https://www.mayurikakkad.com",
    images: [
      {
        url: "https://www.mayurikakkad.com/images/hero-bridal.jpg",
        width: 1200,
        height: 630,
        alt: "MK Studio Bridal - South Asian Bridal Makeup & Mehndi in Pittsburgh",
      },
    ],
  },
  alternates: {
    canonical: "https://www.mayurikakkad.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Asian Bridal Makeup & Mehndi Pittsburgh | MK Studio",
    description: "Pittsburgh's premier South Asian bridal makeup & mehndi artist. 27+ years of transforming brides.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-vibe="traditional">
      <body
        className={`${signature.variable} ${playfair.variable} ${lato.variable} antialiased`}
      >
        <ClientCursor />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

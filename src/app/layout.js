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
  title: "MK Studio Bridal | Mayuri Kakkad",
  description: "Expert makeup, hair styling & mehendi artistry with 27 years of experience. Serving Western Pennsylvania and the Northeast. Bridal services by Mayuri Kakkad.",
  keywords: ["makeup artist", "hair stylist", "mehendi", "mehndi", "bridal makeup", "bridal henna", "Pittsburgh makeup artist", "Western Pennsylvania", "Mayuri Kakkad", "MK Studio Bridal"],
  siteName: "MK Studio Bridal",
  authors: [{ name: "Mayuri Kakkad" }],
  metadataBase: new URL('https://www.mayurikakkad.com'), // Replace with actual domain when live
  openGraph: {
    title: "MK Studio Bridal | Mayuri Kakkad",
    description: "Expert makeup, hair styling & mehendi artistry with 27 years of experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Studio Bridal | Mayuri Kakkad",
    description: "Expert makeup, hair styling & mehendi artistry with 27 years of experience.",
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

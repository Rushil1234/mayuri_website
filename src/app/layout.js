import { WindSong, Playfair_Display, Lato } from "next/font/google";
import ClientCursor from "@/components/ClientCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import PreloadPortfolio from "@/components/PreloadPortfolio";
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
    default: "South Asian Bridal Makeup & Mehndi Pittsburgh | MK Bridal Studio",
    template: "%s | MK Bridal Studio",
  },
  description: "Mayuri Kakkad is Pittsburgh's premier South Asian bridal makeup artist & mehndi specialist. 27+ years transforming brides with Indian, Gujarati & South Indian wedding looks. 5.0 stars, 47 reviews.",
  keywords: ["south asian bridal makeup pittsburgh", "indian makeup artist pittsburgh", "bridal mehndi pittsburgh", "south indian bridal makeup", "gujarati bridal makeup", "henna artist pittsburgh pa", "bridal hair styling pittsburgh", "wedding makeup artist pittsburgh", "mehndi artist near me", "best bridal makeup pittsburgh", "indian wedding makeup", "bridal henna near me", "Mayuri Kakkad", "MK Bridal Studio"],
  siteName: "MK Bridal Studio",
  authors: [{ name: "Mayuri Kakkad" }],
  metadataBase: new URL('https://www.mkbridalstudio.com'),
  openGraph: {
    title: "Best South Asian Bridal Makeup & Mehndi Artist Pittsburgh | MK Bridal Studio",
    description: "Mayuri Kakkad at MK Bridal Studio is Pittsburgh's top-rated South Asian bridal makeup artist & mehndi specialist. 27+ years, 5.0 stars from 47 reviews. Indian, Gujarati & South Indian weddings.",
    type: "website",
    locale: "en_US",
    url: "https://www.mkbridalstudio.com",
    images: [
      {
        url: "https://www.mkbridalstudio.com/images/hero-bridal.jpg",
        width: 1200,
        height: 630,
        alt: "MK Bridal Studio - South Asian Bridal Makeup & Mehndi Artist in Pittsburgh, PA",
      },
    ],
  },
  alternates: {
    canonical: "https://www.mkbridalstudio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best South Asian Bridal Makeup & Mehndi Artist Pittsburgh | MK Bridal Studio",
    description: "Mayuri Kakkad — Pittsburgh's top-rated bridal makeup & mehndi artist. 27+ years, 5.0 stars. Indian, Gujarati & South Indian weddings.",
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
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MK Bridal Studio",
    "alternateName": ["MK Studio Bridal", "Mayuri Kakkad Bridal Studio", "mkbridalstudio.com"],
    "url": "https://www.mkbridalstudio.com",
    "description": "MK Bridal Studio is Pittsburgh's premier South Asian bridal makeup artist and mehndi specialist. Led by Mayuri Kakkad with 27+ years of experience since 1997, serving brides across the Northeast United States.",
    "publisher": {
      "@type": "Organization",
      "name": "MK Bridal Studio",
      "url": "https://www.mkbridalstudio.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mkbridalstudio.com/images/Mayuri.png"
      },
      "foundingDate": "1997"
    },
    "inLanguage": "en-US",
    "dateModified": "2025-03-07"
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MK Bridal Studio",
    "alternateName": ["MK Studio Bridal", "mkbridalstudio.com"],
    "url": "https://www.mkbridalstudio.com",
    "logo": "https://www.mkbridalstudio.com/images/Mayuri.png",
    "sameAs": [
      "https://www.instagram.com/mkbridalstudio",
      "https://www.facebook.com/MayuriBridalstudio/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Mayuri Kakkad"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+12019126702",
      "contactType": "customer service",
      "email": "mayurikakkad@gmail.com",
      "areaServed": "US",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };

  return (
    <html lang="en" data-vibe="traditional">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${signature.variable} ${playfair.variable} ${lato.variable} antialiased`}
      >
        <ClientCursor />
        <Navbar />
        {children}
        <PreloadPortfolio />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

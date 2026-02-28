import HomeTemplate from "@/components/templates/HomeTemplate";

export const metadata = {
  title: "South Asian Bridal Makeup & Mehndi Artist Pittsburgh",
  description: "Luxury South Asian bridal makeup, mehndi & hair by Mayuri Kakkad in Pittsburgh, PA. Specializing in Indian, Gujarati & South Indian wedding looks. 27+ years. Book now.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "MK Studio Bridal",
    "alternateName": "Mayuri Kakkad Bridal Studio",
    "image": "https://www.mayurikakkad.com/images/hero-bridal.jpg",
    "description": "Premier South Asian bridal makeup artist and mehndi specialist in Pittsburgh, PA. 27+ years of luxury Indian, Gujarati, and South Indian bridal transformations.",
    "url": "https://www.mayurikakkad.com",
    "telephone": "+12019126702",
    "email": "mayurikakkad@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pittsburgh",
      "addressRegion": "PA",
      "postalCode": "15228",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.3585,
      "longitude": -80.0365
    },
    "areaServed": [
      { "@type": "City", "name": "Pittsburgh", "sameAs": "https://en.wikipedia.org/wiki/Pittsburgh" },
      { "@type": "State", "name": "Pennsylvania" },
      { "@type": "AdministrativeArea", "name": "Western Pennsylvania" },
      { "@type": "AdministrativeArea", "name": "Northeast United States" },
      { "@type": "City", "name": "Philadelphia" },
      { "@type": "City", "name": "New York" },
      { "@type": "City", "name": "Washington, D.C." },
      { "@type": "State", "name": "New Jersey" },
      { "@type": "State", "name": "Ohio" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bridal Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "South Asian Bridal Makeup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "South Indian Event Makeup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Mehndi / Henna Art" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Hair Styling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gujarati Bridal Makeup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pakistani Bridal Makeup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement & Sangeet Makeup" } }
      ]
    },
    "priceRange": "$$$",
    "sameAs": [
      "https://instagram.com/mayuris_studio",
      "https://www.facebook.com/MayuriBridalstudio/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeTemplate />
    </>
  );
}

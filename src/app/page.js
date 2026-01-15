import HomeTemplate from "@/components/templates/HomeTemplate";

export const metadata = {
  title: "Indian Bridal Makeup & Henna Artist Pittsburgh | MK Studio Bridal",
  description: "Award-winning luxury bridal makeup and intricate henna artistry by Mayuri Kakkad. Serving Pittsburgh & Northeast US. 27+ years experience. Book your consultation.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MK Studio Bridal",
    "image": "https://www.mayurikakkad.com/images/hero-bridal.jpg",
    "description": "Award-winning luxury bridal makeup artist specializing in South Asian weddings, serving Pittsburgh and Western Pennsylvania.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pittsburgh",
      "addressRegion": "PA",
      "addressCountry": "US",
      "postalCode": "15228"
    },
    "areaServed": ["Pittsburgh", "Western Pennsylvania", "Northeast US"],
    "priceRange": "$$$",
    "url": "https://www.mayurikakkad.com",
    "telephone": "+1-555-555-5555" // Replace with actual business phone if available
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

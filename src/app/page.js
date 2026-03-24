import HomeTemplate from "@/components/templates/HomeTemplate";

export const metadata = {
  title: "Best South Asian Bridal Makeup & Mehndi Artist Pittsburgh | MK Bridal Studio",
  description: "Mayuri Kakkad is Pittsburgh's top-rated South Asian bridal makeup artist & mehndi specialist with 27+ years of experience. Indian, Gujarati & South Indian wedding makeup, bridal henna, and hair styling. 5.0 stars from 47 reviews. Book now.",
  openGraph: {
    siteName: "MK Bridal Studio",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "name": "MK Bridal Studio",
        "alternateName": ["MK Studio Bridal", "Mayuri Kakkad Bridal Studio", "mkbridalstudio.com"],
        "image": "https://www.mkbridalstudio.com/images/hero-bridal.jpg",
        "description": "MK Bridal Studio is Pittsburgh's premier South Asian bridal makeup and mehndi studio, led by Mayuri Kakkad with 27+ years of experience. Specializing in Indian, Gujarati, and South Indian bridal makeup, intricate henna art, and bridal hair styling. Rated 5.0 stars from 47 verified reviews. Serves brides across Pennsylvania, New Jersey, New York, Ohio, and Washington D.C.",
        "url": "https://www.mkbridalstudio.com",
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
          "name": "Bridal & Event Beauty Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "South Asian Bridal Makeup", "description": "Full bridal makeup for Indian, Gujarati, and South Indian weddings in Pittsburgh. Includes airbrush foundation, dramatic eye looks, and long-lasting setting for all-day wear. Expertise in both traditional and modern soft glam bridal looks for melanin-rich skin tones." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Mehndi / Henna Art", "description": "Intricate bridal mehndi designs in Gujarati, Rajasthani, Arabic, and fusion styles using 100% natural henna paste. Full bridal coverage from fingertips to elbows. Custom designs with traditional motifs including paisley, peacock, lotus, and mandala patterns." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Hair Styling", "description": "Elegant bridal hairstyles for South Asian weddings in Pittsburgh. Classic updos, bridal buns with dupatta setting, passa and tikka styling, and flowing reception looks that complement your lehenga and jewelry." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement & Sangeet Makeup", "description": "Celebratory makeup looks for pre-wedding events including sangeet, engagement parties, and mehndi night ceremonies. Soft glam to full glam options available." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haldi Ceremony Makeup", "description": "Fresh, radiant makeup for haldi ceremonies that withstands the festivities. Designed to complement traditional yellow attire and outdoor settings." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reception Makeup & Hair", "description": "Glamorous reception looks for South Asian brides. Second-day styling, complete look changes, and editorial-quality makeup for evening celebrations and photography." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hindu Wedding Ceremony Makeup", "description": "Traditional Hindu bridal makeup honoring ceremony customs. Long-lasting formulas for multi-hour ceremonies, complementing red and gold bridal attire." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Party & Family Makeup", "description": "Makeup and hair styling for bridesmaids, mother of the bride, and wedding party members. Group packages available for multi-day South Asian wedding celebrations." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mehndi for Wedding Guests", "description": "Henna application for wedding guests at sangeet, mehndi night, and wedding celebrations. Individual and group packages available in Pittsburgh and surrounding areas." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup Trial", "description": "Pre-wedding makeup trial session to perfect your bridal look. Includes consultation on color palette, style preferences, and product testing for your skin type." } }
          ]
        },
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "47",
          "reviewCount": "47"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Mohini Vakil" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Mayuri was amazing to work with! She was incredibly punctual, arriving even before the scheduled time. She also did mehndi for my immediate family — her henna gave the darkest, richest stain by far."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Huda Algasas" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "I have been going to Mayuri for mehendi and other services for over 10+ years now! She is amazing, kind, understanding, and gives perfect results every single time."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Pravallika N" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Her makeup work was flawless — natural yet elegant, enhancing my features without going overboard. The mehendi design was intricate and neat, and the color came out rich and dark."
          }
        ],
        "sameAs": [
          "https://www.instagram.com/mkbridalstudio",
          "https://www.facebook.com/MayuriBridalstudio/"
        ],
        "founder": {
          "@type": "Person",
          "name": "Mayuri Kakkad",
          "jobTitle": "Bridal Makeup & Henna Artist",
          "description": "Mayuri Kakkad is a licensed cosmetologist and bridal beauty artist with 27+ years of experience specializing in South Asian bridal makeup and mehndi in Pittsburgh, PA.",
          "knowsAbout": [
            "South Asian bridal makeup",
            "Indian bridal makeup",
            "Gujarati bridal makeup",
            "South Indian bridal makeup",
            "bridal mehndi design",
            "bridal henna art",
            "bridal hair styling",
            "airbrush bridal makeup",
            "natural bridal makeup",
            "soft glam bridal makeup",
            "traditional bridal looks",
            "modern bridal makeup",
            "Rajasthani mehndi",
            "Gujarati mehndi",
            "Arabic henna designs",
            "makeup for brown skin tones",
            "long-lasting wedding makeup",
            "dupatta setting and styling"
          ]
        },
        "knowsAbout": [
          "south asian bridal makeup pittsburgh",
          "indian bridal makeup pittsburgh",
          "bridal mehndi pittsburgh",
          "bridal henna pittsburgh",
          "wedding makeup artist pittsburgh",
          "indian wedding makeup near pittsburgh",
          "bridal hair styling pittsburgh",
          "mehndi artist pittsburgh",
          "henna artist for weddings pittsburgh"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mkbridalstudio.com" }
        ]
      }
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

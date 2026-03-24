import ContactTemplate from "@/components/templates/ContactTemplate";

export const metadata = {
    title: "Book South Asian Bridal Makeup & Mehndi in Pittsburgh",
    description: "Inquire about bridal makeup, mehndi, and hair styling packages with Mayuri Kakkad in Pittsburgh. Travel-friendly for PA, NJ, NY, OH & DC weddings. Bridal trials available.",
    alternates: {
        canonical: "https://www.mkbridalstudio.com/contact",
    },
    openGraph: {
        title: "Book Your Bridal Consultation | MK Bridal Studio Pittsburgh",
        description: "Request a quote for bridal makeup, mehndi & hair in Pittsburgh. Travel available across the Northeast.",
        url: "https://www.mkbridalstudio.com/contact",
        type: "website",
        siteName: "MK Bridal Studio",
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "name": "Book South Asian Bridal Makeup & Mehndi in Pittsburgh",
                "description": "Inquire about bridal makeup, mehndi, and hair styling with Mayuri Kakkad at MK Bridal Studio. 27+ years experience, 5.0-star rated. Bridal trials available. Travel-friendly across PA, NJ, NY, OH & DC.",
                "url": "https://www.mkbridalstudio.com/contact",
                "mainEntity": {
                    "@type": "LocalBusiness",
                    "name": "MK Bridal Studio",
                    "telephone": "+12019126702",
                    "email": "mayurikakkad@gmail.com",
                    "url": "https://www.mkbridalstudio.com",
                    "priceRange": "$$",
                    "image": "https://www.mkbridalstudio.com/images/Mayuri.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Pittsburgh",
                        "addressRegion": "PA",
                        "addressCountry": "US"
                    },
                    "areaServed": [
                        { "@type": "State", "name": "Pennsylvania" },
                        { "@type": "State", "name": "New Jersey" },
                        { "@type": "State", "name": "New York" },
                        { "@type": "State", "name": "Ohio" },
                        { "@type": "State", "name": "Washington D.C." }
                    ],
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Bridal Services",
                        "itemListElement": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup Trial" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding-Day Bridal Makeup" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Mehndi & Henna" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Hair Styling" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement & Sangeet Makeup" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Party Makeup" } }
                        ]
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.mkbridalstudio.com/contact" }
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
            <ContactTemplate />
        </>
    );
}

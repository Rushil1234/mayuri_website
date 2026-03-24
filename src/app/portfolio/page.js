import PortfolioTemplate from "@/components/templates/PortfolioTemplate";

export const metadata = {
    title: "Bridal Makeup & Mehndi Portfolio | Real South Asian Brides Pittsburgh",
    description: "Browse real bridal transformations by Mayuri Kakkad — Indian, Gujarati & South Indian brides in Pittsburgh. Bridal makeup looks, intricate mehndi designs, luxury hair styling & reception glam.",
    alternates: {
        canonical: "https://www.mkbridalstudio.com/portfolio",
    },
    openGraph: {
        title: "MK Bridal Studio Portfolio | Real South Asian Brides",
        description: "Explore bridal makeup, mehndi designs, and hair styling by Mayuri Kakkad in Pittsburgh.",
        url: "https://www.mkbridalstudio.com/portfolio",
        type: "website",
        siteName: "MK Bridal Studio",
    },
};

export default function PortfolioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "name": "Bridal Makeup & Mehndi Portfolio — Real South Asian Brides in Pittsburgh",
                "description": "Browse 90+ real bridal transformations by Mayuri Kakkad at MK Bridal Studio. Indian, Gujarati & South Indian brides showcasing bridal makeup, intricate henna designs, hair styling, and reception looks in Pittsburgh, PA.",
                "url": "https://www.mkbridalstudio.com/portfolio",
                "about": [
                    { "@type": "Thing", "name": "South Asian bridal makeup" },
                    { "@type": "Thing", "name": "bridal mehndi designs" },
                    { "@type": "Thing", "name": "bridal hair styling" },
                    { "@type": "Thing", "name": "Indian wedding makeup" },
                    { "@type": "Thing", "name": "Gujarati mehndi" },
                    { "@type": "Thing", "name": "Rajasthani mehndi" }
                ],
                "mainEntity": {
                    "@type": "ImageGallery",
                    "name": "Real Brides & Henna Designs by Mayuri Kakkad",
                    "about": "Bridal makeup, mehndi, and hair styling portfolio featuring real South Asian weddings in Pittsburgh",
                    "author": {
                        "@type": "Person",
                        "name": "Mayuri Kakkad",
                        "url": "https://www.mkbridalstudio.com/about",
                        "jobTitle": "Bridal Makeup & Mehndi Artist"
                    }
                },
                "provider": {
                    "@type": "BeautySalon",
                    "name": "MK Bridal Studio",
                    "url": "https://www.mkbridalstudio.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Pittsburgh",
                        "addressRegion": "PA",
                        "addressCountry": "US"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.mkbridalstudio.com/portfolio" }
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
            <PortfolioTemplate />
        </>
    );
}

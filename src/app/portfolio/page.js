import PortfolioTemplate from "@/components/templates/PortfolioTemplate";

export const metadata = {
    title: "South Asian Bridal Makeup & Mehndi Portfolio",
    description: "Real Indian, Gujarati & South Indian brides by Mayuri Kakkad. Explore bridal makeup looks, intricate mehndi designs & luxury hair styling in Pittsburgh, PA.",
};

export default function PortfolioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Bridal Makeup & Henna Portfolio",
        "description": "A curated archive of bridal elegance, intricate henna, and timeless beauty by Mayuri Kakkad.",
        "mainEntity": {
            "@type": "ImageGallery",
            "name": "Real Brides & Henna Designs",
            "author": {
                "@type": "Person",
                "name": "Mayuri Kakkad"
            }
        }
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

import PortfolioTemplate from "@/components/templates/PortfolioTemplate";

export const metadata = {
    title: "Bridal Makeup & Henna Portfolio | Real Brides | MK Studio",
    description: "Explore our curated gallery of real Indian brides, traditional Gujarati looks, intricate bridal henna designs, and luxury hair styling by Mayuri Kakkad.",
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

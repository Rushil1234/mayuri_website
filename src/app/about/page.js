import AboutTemplate from "@/components/templates/AboutTemplate";

export const metadata = {
    title: "About Mayuri Kakkad | 27 Years of Bridal Artistry",
    description: "Meet Mayuri Kakkad, a celebrated cosmetologist and henna artist with over two decades of experience transforming brides in Pennsylvania and beyond.",
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mayuri Kakkad",
        "jobTitle": "Bridal Makeup & Henna Artist",
        "url": "https://www.mayurikakkad.com/about",
        "image": "https://www.mayurikakkad.com/images/Mayuri.png",
        "sameAs": [
            "https://instagram.com/mayuris_studio",
            "https://facebook.com/mayurisstudio"
        ],
        "worksFor": {
            "@type": "LocalBusiness",
            "name": "MK Studio Bridal"
        },
        "description": "A celebrated cosmetologist and mehendi artist bringing 27 years of artistry to life. Based in Western PA, crafting timeless beauty for brides across the Northeast."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutTemplate />
        </>
    );
}

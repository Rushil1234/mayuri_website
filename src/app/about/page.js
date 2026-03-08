import AboutTemplate from "@/components/templates/AboutTemplate";

export const metadata = {
    title: "Meet Mayuri Kakkad | 27+ Years of Bridal Artistry in Pittsburgh",
    description: "Mayuri Kakkad is a licensed cosmetologist and South Asian bridal makeup & mehndi artist in Pittsburgh with 27+ years of experience. Specializing in Indian, Gujarati & South Indian wedding transformations. Established 1997.",
    alternates: {
        canonical: "https://www.mkbridalstudio.com/about",
    },
    openGraph: {
        title: "Meet Mayuri Kakkad | Pittsburgh's Most Experienced Bridal Artist",
        description: "27+ years of South Asian bridal makeup & mehndi artistry. Licensed cosmetologist serving brides across the Northeast.",
        url: "https://www.mkbridalstudio.com/about",
        type: "profile",
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "name": "Mayuri Kakkad",
                "jobTitle": "Bridal Makeup & Henna Artist",
                "url": "https://www.mkbridalstudio.com/about",
                "image": "https://www.mkbridalstudio.com/images/Mayuri.png",
                "sameAs": [
                    "https://instagram.com/mkbridalstudio",
                    "https://facebook.com/mayurisstudio"
                ],
                "worksFor": {
                    "@type": "LocalBusiness",
                    "name": "MK Studio Bridal",
                    "url": "https://www.mkbridalstudio.com"
                },
                "description": "Mayuri Kakkad is Pittsburgh's most experienced South Asian bridal makeup and mehndi artist, with 27+ years of professional artistry since 1997. A licensed cosmetologist based in Western PA, she specializes in Indian, Gujarati, and South Indian bridal transformations. She serves brides across Pennsylvania, New Jersey, New York, Ohio, and Washington D.C., offering bridal makeup, intricate mehndi designs, and hair styling for weddings and special events.",
                "knowsAbout": [
                    "South Asian bridal makeup",
                    "Indian bridal makeup",
                    "Gujarati bridal makeup",
                    "South Indian bridal makeup",
                    "Bridal mehndi design",
                    "Henna art",
                    "Bridal hair styling",
                    "Airbrush bridal makeup",
                    "Mehndi aftercare",
                    "natural bridal makeup",
                    "soft glam bridal looks",
                    "Rajasthani mehndi patterns",
                    "Gujarati mehndi patterns",
                    "Arabic henna designs",
                    "makeup for melanin-rich skin tones",
                    "dupatta setting and jewelry styling",
                    "sangeet and reception makeup",
                    "haldi ceremony makeup",
                    "bridal party and bridesmaids makeup"
                ],
                "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "Professional Certification",
                    "name": "Licensed Cosmetologist"
                },
                "alumniOf": {
                    "@type": "Organization",
                    "name": "Professional Cosmetology Training"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.mkbridalstudio.com/about" }
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
            <AboutTemplate />
        </>
    );
}

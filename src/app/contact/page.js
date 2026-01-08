import ContactTemplate from "@/components/templates/ContactTemplate";

export const metadata = {
    title: "Book Bridal Makeup Artist Pittsburgh | Inquiry | MK Studio",
    description: "Contact Mayuri Kakkad for bridal makeup, henna, and hair styling availability. Reserve your date for weddings in Pittsburgh and the Northeast US.",
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact MK Studio Bridal",
        "description": "Book a consultation for bridal makeup and henna artistry with Mayuri Kakkad.",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "MK Studio Bridal",
            "telephone": "+12019126702",
            "email": "mayurikakkad@gmail.com",
            "areaServed": "Northeast United States"
        }
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

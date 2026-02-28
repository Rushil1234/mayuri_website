import ContactTemplate from "@/components/templates/ContactTemplate";

export const metadata = {
    title: "Book Your South Asian Bridal Consultation",
    description: "Book Mayuri Kakkad for South Asian bridal makeup, mehndi & hair in Pittsburgh. Travel-friendly for PA, NJ, NY, OH & DC weddings. Inquire now.",
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

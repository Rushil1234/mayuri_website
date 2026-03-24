import Link from "next/link";

export const metadata = {
    title: "Best Bridal Makeup in Pittsburgh | South Asian Bridal Makeup by MK Bridal Studio",
    description:
        "Looking for the best bridal makeup in Pittsburgh? MK Bridal Studio offers South Asian bridal makeup, bridal trials, engagement makeup, reception glam, and long-wear wedding day beauty by Mayuri Kakkad.",
    alternates: {
        canonical: "https://www.mkbridalstudio.com/bridal-makeup-pittsburgh",
    },
    openGraph: {
        title: "Best Bridal Makeup in Pittsburgh | South Asian Bridal Makeup by MK Bridal Studio",
        description:
            "Top-rated bridal makeup in Pittsburgh for Indian, Gujarati, and South Asian weddings. Bridal trials, wedding-day glam, and long-lasting makeup by Mayuri Kakkad.",
        url: "https://www.mkbridalstudio.com/bridal-makeup-pittsburgh",
        type: "website",
        siteName: "MK Bridal Studio",
    },
};

const faqs = [
    {
        q: "Who is this bridal makeup service best for?",
        a: "This page is designed for Pittsburgh brides looking for bridal makeup with experience in South Asian wedding styling, melanin-rich skin tones, bridal trials, and long-wear event makeup.",
    },
    {
        q: "Do you offer bridal makeup trials in Pittsburgh?",
        a: "Yes. Bridal trials are available so you can finalize foundation matching, eye intensity, lip color, finish, and timing before the wedding day.",
    },
    {
        q: "Do you only do ceremony makeup?",
        a: "No. Makeup services can cover bridal trials, ceremony glam, reception changes, engagement looks, sangeet makeup, haldi-ready looks, and bridal party makeup.",
    },
    {
        q: "Why is this page focused on Pittsburgh bridal makeup?",
        a: "The goal is to help local brides find a dedicated makeup page instead of only general studio pages. It clearly explains the makeup service, the artist's experience, and how to book in Pittsburgh.",
    },
];

export default function BridalMakeupPittsburghPage() {
    const faqSchema = {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: "Bridal Makeup in Pittsburgh",
                serviceType: "South Asian Bridal Makeup",
                url: "https://www.mkbridalstudio.com/bridal-makeup-pittsburgh",
                description:
                    "Bridal makeup in Pittsburgh by Mayuri Kakkad at MK Bridal Studio. Specializing in South Asian bridal makeup, bridal trials, long-wear wedding day glam, and event makeup for Indian, Gujarati, and South Indian weddings.",
                areaServed: [
                    { "@type": "City", name: "Pittsburgh" },
                    { "@type": "State", name: "Pennsylvania" },
                ],
                provider: {
                    "@type": "BeautySalon",
                    name: "MK Bridal Studio",
                    url: "https://www.mkbridalstudio.com",
                    telephone: "+12019126702",
                    email: "mayurikakkad@gmail.com",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Pittsburgh",
                        addressRegion: "PA",
                        postalCode: "15228",
                        addressCountry: "US",
                    },
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "5.0",
                        reviewCount: "47",
                        bestRating: "5",
                        worstRating: "1",
                    },
                },
                offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    url: "https://www.mkbridalstudio.com/contact",
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", position: 2, name: "Bridal Makeup Pittsburgh", item: "https://www.mkbridalstudio.com/bridal-makeup-pittsburgh" },
                ],
            },
            faqSchema,
        ],
    };

    const benefits = [
        "27+ years of bridal artistry since 1997",
        "Specialized experience with Indian, Gujarati, and South Indian bridal looks",
        "Bridal makeup designed for melanin-rich skin tones and long wedding timelines",
        "Bridal trials available before the wedding day",
        "Soft glam, natural glam, and full glam bridal makeup options",
        "Reception changes, sangeet looks, engagement glam, and bridal party makeup available",
    ];

    const makeupMoments = [
        "Bridal makeup trial appointments",
        "Wedding ceremony makeup",
        "Reception makeup and second-look glam",
        "Engagement makeup and hair styling",
        "Sangeet and mehndi night makeup",
        "Bridesmaid and family makeup",
    ];

    const reasons = [
        "Local Pittsburgh relevance: this page is built specifically for brides searching bridal makeup in Pittsburgh, not just general beauty terms.",
        "Clear proof: the service highlights 27+ years of experience, a licensed cosmetologist background, and 5.0-star review signals already used across the site.",
        "Higher-intent copy: the page focuses on bridal makeup first, with supporting mentions of trials, reception glam, engagement looks, and wedding-day wear.",
        "Conversion-ready structure: strong internal links push users directly to the portfolio and booking page instead of leaving them on an informational dead end.",
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-[#FDF8F4] px-6 pb-24 pt-32">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8">
                        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355]">
                            Pittsburgh Bridal Makeup
                        </p>
                        <h1 className="mb-5 font-serif text-4xl text-[#1a1a1a] md:text-5xl">
                            Best Bridal Makeup in Pittsburgh for South Asian Weddings
                        </h1>
                        <p className="max-w-3xl font-sans text-lg leading-[1.9] text-[#5E5245]">
                            Mayuri Kakkad at MK Bridal Studio offers Pittsburgh bridal makeup for brides who want polished,
                            long-wear glam that still looks elegant in person and in photos. The focus is bridal makeup first:
                            trials, wedding-day artistry, reception changes, and event makeup built around Indian, Gujarati,
                            and South Asian wedding styling.
                        </p>
                    </div>

                    <section className="mb-12 rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7 shadow-[0_2px_20px_rgba(139,115,85,0.08)]">
                        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="mb-3 font-serif text-2xl text-[#1a1a1a]">
                                    Why brides search this page
                                </h2>
                                <p className="mb-5 font-sans text-[15px] leading-[1.9] text-[#5E5245]">
                                    If someone searches for the best bridal makeup in Pittsburgh, they usually want one page
                                    that confirms experience, bridal focus, local relevance, and proof. This page is built to
                                    answer that exact intent clearly.
                                </p>
                                <ul className="space-y-3 font-sans text-[15px] leading-[1.8] text-[#444]">
                                    {reasons.map((reason) => (
                                        <li key={reason} className="flex gap-3">
                                            <span className="mt-1 text-[#8B7355]">•</span>
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-[#FBF6F0] px-6 py-6">
                                <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355]">
                                    Fast Facts
                                </p>
                                <div className="space-y-4 font-sans text-[15px] leading-[1.8] text-[#5E5245]">
                                    <p><strong className="text-[#1a1a1a]">Artist:</strong> Mayuri Kakkad</p>
                                    <p><strong className="text-[#1a1a1a]">Based in:</strong> Pittsburgh, Pennsylvania</p>
                                    <p><strong className="text-[#1a1a1a]">Experience:</strong> 27+ years since 1997</p>
                                    <p><strong className="text-[#1a1a1a]">Reviews:</strong> 5.0 stars from 47 reviews</p>
                                    <p><strong className="text-[#1a1a1a]">Focus:</strong> South Asian bridal makeup, bridal trials, reception glam, long-wear wedding makeup</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 grid gap-8 md:grid-cols-2">
                        <div className="rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7">
                            <h2 className="mb-4 font-serif text-2xl text-[#1a1a1a]">
                                What bridal makeup services are included
                            </h2>
                            <ul className="space-y-3 font-sans text-[15px] leading-[1.8] text-[#444]">
                                {makeupMoments.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 text-[#8B7355]">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7">
                        <h2 className="mb-4 font-serif text-2xl text-[#1a1a1a]">
                                Why Pittsburgh brides choose MK Bridal Studio
                            </h2>
                            <ul className="space-y-3 font-sans text-[15px] leading-[1.8] text-[#444]">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-3">
                                        <span className="mt-1 text-[#8B7355]">•</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12 rounded-3xl border border-[#D9CFC4] bg-[#FBF6F0] px-7 py-7">
                        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355]">
                            Bridal Makeup Fit
                        </p>
                        <h2 className="mb-4 font-serif text-2xl text-[#1a1a1a]">
                            A strong fit for brides who want makeup to lead the experience
                        </h2>
                        <p className="max-w-3xl font-sans text-[15px] leading-[1.9] text-[#5E5245]">
                            This page is intentionally makeup-led. It is for brides whose first search is not just mehndi or
                            hair, but specifically bridal makeup in Pittsburgh. The service is especially relevant for brides
                            who want professional foundation matching, bridal trials, camera-ready eye makeup, reception look
                            changes, and wedding-day makeup that holds through long South Asian events.
                        </p>
                    </section>

                    <section className="mb-12 rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7">
                        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355]">
                            Review Signals
                        </p>
                        <h2 className="mb-6 font-serif text-2xl text-[#1a1a1a]">
                            Proof that supports the “best bridal makeup in Pittsburgh” query
                        </h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            <blockquote className="rounded-2xl bg-[#FBF6F0] p-5 font-sans text-[14px] leading-[1.8] text-[#5E5245]">
                                “Her makeup work was flawless, natural yet elegant, enhancing my features without going overboard.”
                            </blockquote>
                            <blockquote className="rounded-2xl bg-[#FBF6F0] p-5 font-sans text-[14px] leading-[1.8] text-[#5E5245]">
                                “I moved to Pittsburgh in 2020 and since then I only visit her for my mehandi, haircut or any make up work.”
                            </blockquote>
                            <blockquote className="rounded-2xl bg-[#FBF6F0] p-5 font-sans text-[14px] leading-[1.8] text-[#5E5245]">
                                “She listens to my expectations and needs and provides the same result. I am always happy and satisfied.”
                            </blockquote>
                        </div>
                    </section>

                    <section className="mb-12 rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7">
                        <h2 className="mb-6 font-serif text-2xl text-[#1a1a1a]">
                            Frequently asked questions about bridal makeup in Pittsburgh
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq) => (
                                <div key={faq.q}>
                                    <h3 className="mb-2 font-sans text-base font-semibold text-[#1a1a1a]">
                                        {faq.q}
                                    </h3>
                                    <p className="font-sans text-[15px] leading-[1.9] text-[#5E5245]">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-3xl border border-[#D9CFC4] bg-white px-7 py-7">
                        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355]">
                            Next Step
                        </p>
                        <h2 className="mb-3 font-serif text-2xl text-[#1a1a1a]">
                            Want to rank for bridal makeup in Pittsburgh and convert that traffic?
                        </h2>
                        <p className="mb-6 max-w-3xl font-sans text-[15px] leading-[1.9] text-[#5E5245]">
                            This page gives Google a dedicated bridal makeup target. The next conversion step is simple:
                            show real work and send brides directly to booking.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center rounded-full bg-[#8B7355] px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#6B5340]"
                            >
                                View Makeup Portfolio
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                            >
                                Book A Bridal Trial
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                            >
                                Read Makeup Guides
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

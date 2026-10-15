import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./bridal-makeup.module.css";

const pageUrl = "https://www.mkbridalstudio.com/bridal-makeup-pittsburgh";
const title = "Bridal Makeup in Pittsburgh | MK Bridal Studio";
const description =
    "South Asian bridal makeup in Pittsburgh by Mayuri Kakkad. Explore bridal looks, makeup trials and wedding-day services. Inquire about your date and a custom quote.";

export const metadata = {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
        title,
        description,
        url: pageUrl,
        type: "website",
        siteName: "MK Bridal Studio",
        locale: "en_US",
        images: [{
            url: "https://www.mkbridalstudio.com/images/henna-1.jpg",
            width: 1440,
            height: 1799,
            alt: "Soft bridal makeup and traditional jewelry from the MK Bridal Studio portfolio",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://www.mkbridalstudio.com/images/henna-1.jpg"],
    },
};

const faqs = [
    {
        q: "Do you offer bridal makeup trials?",
        a: "Yes. A trial is a chance to explore your foundation match, eye makeup, lip color and overall finish with Mayuri before your wedding. Bring makeup inspiration and photos of your outfit and jewelry, and share any skin sensitivities when you inquire.",
    },
    {
        q: "How much does bridal makeup cost?",
        a: "Ask for a quote based on your wedding date, location, number of events and the people needing services. Include whether you would like a trial, hair styling or mehndi so Mayuri can discuss the right options for your celebration.",
    },
    {
        q: "Can you create a natural look or a more dramatic bridal look?",
        a: "Both. Your look can range from soft, natural makeup to a more defined eye and fuller bridal glam. Share the looks you love and how you usually wear makeup so your wedding look feels comfortable and personal.",
    },
    {
        q: "Do you offer hair, mehndi and bridal party makeup too?",
        a: "Yes. MK Bridal Studio also offers bridal hair styling, mehndi, and makeup for bridesmaids and family. Mention everyone who needs services and each event's getting-ready time so availability and scheduling can be discussed together.",
    },
    {
        q: "Do you travel to wedding venues?",
        a: "Mayuri is based in Pittsburgh and is open to traveling around the Northeast. Share your venue and getting-ready location when you inquire to confirm travel availability and any additional costs for your date.",
    },
    {
        q: "How do I check availability for my wedding?",
        a: "Send your wedding date, venue or city, the services you are interested in, and the time you need to be ready. You can use the contact form, email Mayuri, or call (201) 912-6702 to discuss availability and next steps.",
    },
];

const services = [
    {
        number: "01",
        title: "Find your look",
        label: "Bridal makeup trials",
        copy: "Explore the colors, coverage and details that feel right for you. Bring your outfit inspiration and the makeup looks you love.",
    },
    {
        number: "02",
        title: "Your wedding day",
        label: "Ceremony & reception makeup",
        copy: "From a soft bridal glow to a defined, expressive eye, plan makeup that complements your features, jewelry and wedding traditions.",
    },
    {
        number: "03",
        title: "Every celebration",
        label: "Pre-wedding & bridal party beauty",
        copy: "Bring your engagement, sangeet, reception and family beauty plans together. Ask about hair styling and mehndi for a complete bridal look.",
    },
];

function Arrow() {
    return <span aria-hidden="true">↗</span>;
}

export default function BridalMakeupPittsburghPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${pageUrl}#service`,
                name: "Bridal Makeup in Pittsburgh",
                serviceType: "South Asian bridal makeup and bridal makeup trials",
                description,
                url: pageUrl,
                image: "https://www.mkbridalstudio.com/images/henna-1.jpg",
                areaServed: { "@type": "City", name: "Pittsburgh" },
                provider: {
                    "@type": "Organization",
                    name: "MK Bridal Studio",
                    url: "https://www.mkbridalstudio.com",
                    telephone: "+12019126702",
                    email: "mayurikakkad@gmail.com",
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", position: 2, name: "Bridal Makeup", item: pageUrl },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: faqs.map(({ q, a }) => ({
                    "@type": "Question",
                    name: q,
                    acceptedAnswer: { "@type": "Answer", text: a },
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
            <main className={styles.page}>
                <div className={styles.container}>
                    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                        <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Bridal Makeup</span>
                    </nav>

                    <section className={styles.hero} aria-labelledby="bridal-title">
                        <div className={styles.heroCopy}>
                            <p className={styles.eyebrow}>South Asian bridal beauty · Since 1997</p>
                            <h1 id="bridal-title">Bridal makeup<br />in Pittsburgh.</h1>
                            <p className={styles.signature}>Beautifully you.</p>
                            <p className={styles.intro}>
                                From soft, luminous skin to a defined bridal eye, your look is planned around
                                you, your outfit, and your wedding celebrations. Discover bridal makeup by Mayuri Kakkad.
                            </p>
                            <div className={styles.actions}>
                                <Link href="/contact" className={styles.primaryButton}>Check my wedding date <Arrow /></Link>
                                <a href="#bridal-looks" className={styles.textLink}>Explore bridal looks <span aria-hidden="true">↓</span></a>
                            </div>
                            <p className={styles.heroNote}>Makeup trials · Wedding-day beauty · Hair & mehndi</p>
                        </div>
                        <figure className={styles.heroPhoto}>
                            <Image
                                src="/images/henna-1.jpg"
                                alt="Bride wearing soft eye makeup, a natural lip and gold jewelry, with her partner beside her"
                                fill
                                sizes="(max-width: 760px) 90vw, 46vw"
                                priority
                                className={styles.cover}
                            />
                            <figcaption>For the moments you&apos;ll always remember.</figcaption>
                        </figure>
                    </section>

                    <div className={styles.detailsStrip}>
                        <span>Personal artistry by Mayuri Kakkad</span>
                        <span>Indian & South Asian weddings</span>
                        <span>Pittsburgh, Pennsylvania</span>
                    </div>

                    <section className={styles.section} aria-labelledby="services-title">
                        <div className={styles.sectionHeading}>
                            <div>
                                <p className={styles.eyebrow}>Your bridal beauty experience</p>
                                <h2 id="services-title">A look that feels like you.<br /><em>For every part of your day.</em></h2>
                            </div>
                            <p>One celebration or a full wedding weekend. Tell Mayuri what you have planned, and explore the beauty services that fit.</p>
                        </div>
                        <div className={styles.services}>
                            {services.map((service) => (
                                <article key={service.number} className={styles.service}>
                                    <span className={styles.serviceNumber} aria-hidden="true">{service.number}</span>
                                    <h3>{service.title}</h3>
                                    <p className={styles.serviceLabel}>{service.label}</p>
                                    <p>{service.copy}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="bridal-looks" className={styles.section} aria-labelledby="looks-title">
                        <div className={styles.sectionHeading}>
                            <div>
                                <p className={styles.eyebrow}>From the MK Bridal portfolio</p>
                                <h2 id="looks-title">The beauty is in <em>the details.</em></h2>
                            </div>
                            <Link href="/portfolio" className={styles.textLink}>See the full portfolio <Arrow /></Link>
                        </div>
                        <div className={styles.gallery}>
                            <figure>
                                <div className={styles.galleryPortrait}>
                                    <Image src="/images/portfolio/IMG_9366.jpeg" alt="South Asian bride in a blue silk sari with defined eye makeup, a deep lip color and traditional gold jewelry" fill sizes="(max-width: 760px) 90vw, 35vw" className={styles.cover} />
                                </div>
                                <figcaption>Traditional bridal beauty</figcaption>
                            </figure>
                            <figure>
                                <div className={styles.galleryLandscape}>
                                    <Image src="/images/portfolio/A12I0780.jpeg" alt="Bride in red with her bridal party in green, gathered for wedding photographs" fill sizes="(max-width: 760px) 90vw, 55vw" className={styles.cover} />
                                </div>
                                <figcaption>Made for the whole celebration</figcaption>
                                <blockquote className={styles.galleryQuote}>
                                    <p>“Her makeup work was flawless — natural yet elegant, enhancing my features without going overboard.”</p>
                                    <cite>Pravallika N · Bridal client</cite>
                                </blockquote>
                            </figure>
                        </div>
                    </section>
                </div>

                <section className={styles.artistSection} aria-labelledby="artist-title">
                    <div className={`${styles.container} ${styles.artist}`}>
                        <div className={styles.artistPhoto}>
                            <Image src="/images/Mayuri.png" alt="Mayuri Kakkad, the artist behind MK Bridal Studio" fill sizes="(max-width: 760px) 75vw, 28vw" className={styles.cover} />
                        </div>
                        <div className={styles.artistCopy}>
                            <p className={styles.eyebrow}>Meet your artist</p>
                            <h2 id="artist-title">Experienced hands.<br /><em>A personal touch.</em></h2>
                            <p>Mayuri Kakkad is a licensed makeup artist and cosmetologist based in Pittsburgh. Creating bridal beauty since 1997, she brings experience with Indian, Gujarati and South Indian wedding traditions to every look.</p>
                            <p>Share what you love, what feels comfortable, and the details that matter to you. Your makeup, hair and mehndi should feel like part of your story.</p>
                            <Link href="/about" className={styles.textLink}>More about Mayuri <Arrow /></Link>
                        </div>
                    </div>
                </section>

                <div className={styles.container}>
                    <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
                        <div>
                            <p className={styles.eyebrow}>Before you say “I do”</p>
                            <h2 id="faq-title">A few things<br /><em>you might be wondering.</em></h2>
                            <p className={styles.faqIntro}>Have something else in mind? <Link href="/contact">Ask Mayuri.</Link></p>
                        </div>
                        <div className={styles.faqs}>
                            {faqs.map(({ q, a }) => (
                                <details key={q} name="bridal-faq">
                                    <summary>{q}<span aria-hidden="true" className={styles.faqIcon} /></summary>
                                    <p>{a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className={styles.inquiry} aria-labelledby="inquiry-title">
                        <p className={styles.eyebrow}>Let&apos;s start with your date</p>
                        <h2 id="inquiry-title">Your bridal look<br />starts <em>with a conversation.</em></h2>
                        <p>Share your wedding date, venue, services and getting-ready time.<br className={styles.desktopBreak} /> Mayuri can discuss availability, your ideas and a personalized quote.</p>
                        <div className={styles.actions}>
                            <Link href="/contact" className={styles.primaryButton}>Inquire about my wedding <Arrow /></Link>
                            <a href="tel:+12019126702" className={styles.textLink}>Call (201) 912-6702 <Arrow /></a>
                        </div>
                        <a className={styles.email} href="mailto:mayurikakkad@gmail.com?subject=Bridal%20makeup%20inquiry">Prefer email? mayurikakkad@gmail.com</a>
                    </section>
                    <p className={styles.planningGuide}>Still gathering ideas? <Link href="/blog/how-to-choose-south-asian-bridal-makeup-artist-pittsburgh">Read our guide to choosing your bridal makeup artist <Arrow /></Link></p>
                </div>
                <aside className={styles.mobileInquiry} aria-label="Wedding inquiries">
                    <a href="tel:+12019126702">Call Mayuri</a>
                    <Link href="/contact" className={styles.primaryButton}>Check my date <Arrow /></Link>
                </aside>
            </main>
            <Footer />
        </>
    );
}

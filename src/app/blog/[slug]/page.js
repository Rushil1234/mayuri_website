import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, formatDate } from "../posts";

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return {
        title: `${post.title} | MK Studio Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://www.mkbridalstudio.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.mkbridalstudio.com/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const faqBlock = post.content.find((b) => b.type === "faq");
    const faqSchema = faqBlock ? {
        "@type": "FAQPage",
        mainEntity: faqBlock.items.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a
            }
        }))
    } : null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                dateModified: post.dateModified || post.date,
                image: post.image ? `https://www.mkbridalstudio.com${post.image}` : undefined,
                author: {
                    "@type": "Person",
                    name: "Mayuri Kakkad",
                    url: "https://www.mkbridalstudio.com/about",
                    jobTitle: "Bridal Makeup & Mehndi Artist",
                    image: "https://www.mkbridalstudio.com/images/Mayuri.png",
                    knowsAbout: ["South Asian bridal makeup", "bridal mehndi", "henna art", "bridal hair styling", "Indian wedding beauty"],
                    sameAs: [
                        "https://instagram.com/mkbridalstudio",
                        "https://www.facebook.com/MayuriBridalstudio/"
                    ]
                },
                publisher: {
                    "@type": "Organization",
                    name: "MK Studio Bridal",
                    url: "https://www.mkbridalstudio.com",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://www.mkbridalstudio.com/images/Mayuri.png"
                    },
                    foundingDate: "1997"
                },
                mainEntityOfPage: `https://www.mkbridalstudio.com/blog/${post.slug}`,
                articleBody: post.content.filter((b) => b.type === "text").map((b) => b.body).join(" "),
                wordCount: post.content.filter((b) => b.type === "text").map((b) => b.body).join(" ").split(/\s+/).length,
                articleSection: post.category,
                inLanguage: "en-US",
                about: {
                    "@type": "Thing",
                    name: post.category === "Makeup" ? "South Asian bridal makeup" : post.category === "Aftercare" ? "bridal henna aftercare" : post.category === "Education" ? "natural henna ingredients" : "bridal mehndi traditions"
                },
                speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", "article p:first-of-type"]
                },
                isPartOf: {
                    "@type": "Blog",
                    name: "MK Studio Henna & Bridal Beauty Blog",
                    url: "https://www.mkbridalstudio.com/blog"
                }
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mkbridalstudio.com/blog" },
                    { "@type": "ListItem", position: 3, name: post.title, item: `https://www.mkbridalstudio.com/blog/${post.slug}` }
                ]
            },
            ...(faqSchema ? [faqSchema] : [])
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-[#FDF8F4] pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-[#8B7355] hover:text-[#6B5340] transition-colors mb-10"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs font-sans uppercase tracking-widest text-[#8B7355] bg-[#E8D5C4] px-2.5 py-1 rounded-full">
                            {post.category}
                        </span>
                        <time className="text-xs font-sans text-[#8B7355]/60">
                            {formatDate(post.date)}
                        </time>
                    </div>

                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Hero image */}
                    {post.image && (
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 768px"
                                priority
                            />
                        </div>
                    )}

                    <p className="text-[#8B7355] font-sans text-lg leading-relaxed mb-10 border-l-2 border-[#8B7355]/20 pl-5">
                        {post.excerpt}
                    </p>

                    <article className="space-y-6">
                        {post.content.map((block, i) => {
                            if (block.type === "summary") {
                                return (
                                    <div key={i} className="bg-[#FBF6F0] border border-[#D4C5B0] rounded-xl px-6 py-5 mb-8">
                                        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#8B7355] mb-2">Key Takeaway</p>
                                        <p className="text-[#1a1a1a] font-sans text-base leading-[1.8]">
                                            {block.body}
                                        </p>
                                    </div>
                                );
                            }
                            if (block.type === "heading") {
                                return (
                                    <h2 key={i} style={{ fontSize: '1.375rem', lineHeight: '1.4' }} className="font-serif text-[#1a1a1a] mt-10 mb-2">
                                        {block.body}
                                    </h2>
                                );
                            }
                            if (block.type === "subheading") {
                                return (
                                    <h3 key={i} className="font-serif text-lg text-[#1a1a1a] mt-6 mb-1">
                                        {block.body}
                                    </h3>
                                );
                            }
                            if (block.type === "image") {
                                return (
                                    <div key={i} className="relative aspect-[3/2] rounded-xl overflow-hidden my-8">
                                        <Image
                                            src={block.src}
                                            alt={block.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 768px"
                                        />
                                    </div>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <ul key={i} className="list-disc pl-6 space-y-2 text-[#444] font-sans text-base leading-[1.8]">
                                        {block.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (block.type === "faq") {
                                return (
                                    <section key={i} className="mt-12 pt-8 border-t border-[#8B7355]/10">
                                        <h2 style={{ fontSize: '1.375rem', lineHeight: '1.4' }} className="font-serif text-[#1a1a1a] mb-6">
                                            Frequently Asked Questions
                                        </h2>
                                        <dl className="space-y-6">
                                            {block.items.map((faq, j) => (
                                                <div key={j}>
                                                    <dt className="font-sans text-base font-semibold text-[#1a1a1a] mb-1">
                                                        {faq.q}
                                                    </dt>
                                                    <dd className="text-[#444] font-sans text-base leading-[1.8]">
                                                        {faq.a}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </section>
                                );
                            }
                            if (block.type === "callout") {
                                return (
                                    <div key={i} className="bg-[#F5EDE4] border-l-3 border-[#8B7355] rounded-r-xl px-6 py-5 my-8">
                                        <p className="text-[#5E5245] font-sans text-[15px] leading-[1.8] italic">
                                            {block.body}
                                        </p>
                                    </div>
                                );
                            }
                            if (block.type === "references") {
                                return (
                                    <section key={i} className="mt-12 pt-8 border-t border-[#8B7355]/10">
                                        <h2 style={{ fontSize: '1.125rem', lineHeight: '1.4' }} className="font-serif text-[#1a1a1a] mb-4">
                                            References
                                        </h2>
                                        <ol className="list-decimal pl-6 space-y-2 text-[#8B7355]/80 font-sans text-sm leading-[1.7]">
                                            {block.items.map((ref, j) => (
                                                <li key={j}>{ref}</li>
                                            ))}
                                        </ol>
                                    </section>
                                );
                            }
                            return (
                                <p
                                    key={i}
                                    className="text-[#444] font-sans text-base leading-[1.8]"
                                >
                                    {block.body}
                                </p>
                            );
                        })}
                    </article>

                    <div className="mt-16 pt-8 border-t border-[#8B7355]/10">
                        <p className="text-[#8B7355]/40 font-sans text-xs uppercase tracking-widest mb-2">
                            Written by
                        </p>
                        <p className="font-serif text-lg text-[#1a1a1a]">
                            Mayuri Kakkad
                        </p>
                        <p className="text-[#8B7355]/60 font-sans text-sm mt-1">
                            27+ years of bridal artistry
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

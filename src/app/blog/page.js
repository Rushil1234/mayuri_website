import Link from "next/link";
import Image from "next/image";
import { posts, formatDate } from "./posts";

export const metadata = {
    title: "Pittsburgh Bridal Makeup & Mehndi Blog | MK Bridal Studio",
    description:
        "Research-backed Pittsburgh bridal makeup, mehndi, bridal trial, and South Asian wedding beauty tips from Mayuri Kakkad at MK Bridal Studio.",
    openGraph: {
        title: "Pittsburgh Bridal Makeup & Mehndi Blog | MK Bridal Studio",
        description:
            "Research-backed Pittsburgh bridal makeup, mehndi, bridal trial, and South Asian wedding beauty tips from Mayuri Kakkad at MK Bridal Studio.",
        url: "https://www.mkbridalstudio.com/blog",
        type: "website",
        siteName: "MK Bridal Studio",
    },
    alternates: {
        canonical: "https://www.mkbridalstudio.com/blog",
    },
};

const categoryColors = {
    Aftercare: { pill: "bg-[#E8D5C4] text-[#6B5340]", band: "from-[#D4A574]/20 to-[#C4956A]/5" },
    Traditions: { pill: "bg-[#D4C5B0] text-[#5C4E3C]", band: "from-[#B8A48C]/20 to-[#A89474]/5" },
    Makeup: { pill: "bg-[#E4CFC0] text-[#7A5F4A]", band: "from-[#C9A88E]/20 to-[#B8937A]/5" },
    Education: { pill: "bg-[#D9CFC4] text-[#5E5245]", band: "from-[#A89888]/20 to-[#988878]/5" },
};

export default function BlogPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                name: "MK Bridal Studio Henna & Bridal Beauty Blog",
                description:
                    "Research-backed Pittsburgh bridal makeup, bridal trial, mehndi, and South Asian wedding beauty guidance.",
                url: "https://www.mkbridalstudio.com/blog",
                author: {
                    "@type": "Person",
                    name: "Mayuri Kakkad",
                    url: "https://www.mkbridalstudio.com/about",
                },
                publisher: {
                    "@type": "Organization",
                    name: "MK Bridal Studio",
                    url: "https://www.mkbridalstudio.com",
                },
                blogPost: posts.map((post) => ({
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.excerpt,
                    datePublished: post.date,
                    dateModified: post.dateModified || post.date,
                    image: post.image ? `https://www.mkbridalstudio.com${post.image}` : undefined,
                    url: `https://www.mkbridalstudio.com/blog/${post.slug}`,
                    author: { "@type": "Person", name: "Mayuri Kakkad", url: "https://www.mkbridalstudio.com/about" },
                    articleSection: post.category,
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mkbridalstudio.com" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mkbridalstudio.com/blog" },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-[#FDF8F4] pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
                        Pittsburgh Bridal Makeup & Mehndi Guides
                    </h1>
                    <p className="text-[#8B7355] font-sans text-lg mb-16 max-w-2xl">
                        Research-backed articles on bridal makeup, bridal trials, mehndi aftercare,
                        and South Asian wedding beauty for Pittsburgh brides planning a polished, long-lasting wedding look.
                    </p>

                    <section className="mb-14 rounded-2xl border border-[#D9CFC4] bg-white px-6 py-6 md:px-8">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B7355] mb-3">
                            Planning Your Wedding?
                        </p>
                        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-2xl">
                                <h2 style={{ fontSize: "1.5rem", lineHeight: "1.35" }} className="font-serif text-[#1a1a1a] mb-2">
                                    Looking for a Pittsburgh bridal makeup and mehndi artist?
                                </h2>
                                <p className="text-[#5E5245] font-sans text-[15px] leading-[1.8]">
                                    Read the guides, explore real bridal work, and book with Mayuri Kakkad for bridal makeup, mehndi, and hair styling in Pittsburgh.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/bridal-makeup-pittsburgh"
                                    className="inline-flex items-center justify-center rounded-full bg-[#8B7355] px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#6B5340]"
                                >
                                    Pittsburgh Makeup Page
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                                >
                                    Book Consultation
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            const colors = categoryColors[post.category] || categoryColors.Aftercare;
                            return (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(139,115,85,0.08)] hover:shadow-[0_8px_40px_rgba(139,115,85,0.15)] transition-all duration-500 hover:-translate-y-1.5"
                                >
                                    {/* Cover image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        <span className={`absolute top-4 left-4 text-[10px] font-sans uppercase tracking-[0.15em] px-3 py-1 rounded-full ${colors.pill}`}>
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div className="px-6 pb-6 pt-5 flex flex-col">
                                        <time style={{ fontSize: '0.6875rem' }} className="font-sans text-[#8B7355]/40 mb-2">
                                            {formatDate(post.date)}
                                        </time>
                                        <h2 style={{ fontSize: '1.0625rem', lineHeight: '1.45' }} className="font-serif text-[#1a1a1a] group-hover:text-[#8B7355] transition-colors duration-300 mb-3">
                                            {post.title}
                                        </h2>
                                        <p style={{ fontSize: '0.8125rem', lineHeight: '1.7' }} className="text-[#999] font-sans line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-5 pt-4 border-t border-[#8B7355]/8 flex items-center justify-between">
                                            <span style={{ fontSize: '0.625rem' }} className="font-sans uppercase tracking-[0.2em] text-[#8B7355]/70 group-hover:text-[#8B7355] transition-colors">
                                                Read article
                                            </span>
                                            <span className="text-[#8B7355]/40 group-hover:text-[#8B7355] group-hover:translate-x-1 transition-all duration-300 text-sm">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-[#8B7355]/60 font-sans text-sm mb-5">
                            More articles coming soon.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/bridal-makeup-pittsburgh"
                                className="inline-flex items-center justify-center rounded-full bg-[#8B7355] px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#6B5340]"
                            >
                                Bridal Makeup In Pittsburgh
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                            >
                                Ask About Your Date
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center rounded-full border border-[#8B7355]/20 px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#8B7355] transition-colors hover:border-[#8B7355] hover:text-[#6B5340]"
                            >
                                See Real Brides
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

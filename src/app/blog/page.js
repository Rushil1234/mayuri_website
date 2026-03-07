import Link from "next/link";
import Image from "next/image";
import { posts, formatDate } from "./posts";

export const metadata = {
    title: "Henna & Bridal Beauty Blog | MK Studio",
    description:
        "Expert tips on bridal henna, mehndi aftercare, design traditions, and South Asian wedding beauty. Educational guides by Mayuri Kakkad, 27+ years of artistry.",
    openGraph: {
        title: "Henna & Bridal Beauty Blog | MK Studio",
        description:
            "Expert tips on bridal henna, mehndi aftercare, design traditions, and South Asian wedding beauty.",
        url: "https://www.mayurikakkad.com/blog",
        type: "website",
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
        "@type": "Blog",
        name: "MK Studio Henna & Bridal Beauty Blog",
        description:
            "Expert tips on bridal henna, mehndi aftercare, design traditions, and South Asian wedding beauty.",
        url: "https://www.mayurikakkad.com/blog",
        author: {
            "@type": "Person",
            name: "Mayuri Kakkad",
        },
        publisher: {
            "@type": "Organization",
            name: "MK Studio Bridal",
            url: "https://www.mayurikakkad.com",
        },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: "Mayuri Kakkad" },
            articleBody: post.content.filter((b) => b.type === "text").map((b) => b.body).join(" "),
        })),
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
                        Henna & Bridal Beauty
                    </h1>
                    <p className="text-[#8B7355] font-sans text-lg mb-16 max-w-2xl">
                        Expert guides on mehndi traditions, bridal beauty, aftercare
                        tips, and the artistry behind South Asian weddings.
                    </p>

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
                        <p className="text-[#8B7355]/60 font-sans text-sm">
                            More articles coming soon.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

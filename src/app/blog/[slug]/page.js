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
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.mayurikakkad.com/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Person", name: "Mayuri Kakkad" },
        publisher: {
            "@type": "Organization",
            name: "MK Studio Bridal",
            url: "https://www.mayurikakkad.com",
        },
        mainEntityOfPage: `https://www.mayurikakkad.com/blog/${post.slug}`,
        articleBody: post.content.filter((b) => b.type === "text").map((b) => b.body).join(" "),
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
                            if (block.type === "heading") {
                                return (
                                    <h2 key={i} style={{ fontSize: '1.375rem', lineHeight: '1.4' }} className="font-serif text-[#1a1a1a] mt-10 mb-2">
                                        {block.body}
                                    </h2>
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
                            if (block.type === "callout") {
                                return (
                                    <div key={i} className="bg-[#F5EDE4] border-l-3 border-[#8B7355] rounded-r-xl px-6 py-5 my-8">
                                        <p className="text-[#5E5245] font-sans text-[15px] leading-[1.8] italic">
                                            {block.body}
                                        </p>
                                    </div>
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

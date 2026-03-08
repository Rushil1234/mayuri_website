import { posts } from "./blog/posts";

export default function sitemap() {
    const baseUrl = 'https://www.mayurikakkad.com';

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date('2025-03-07'),
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2025-03-07'),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date('2025-03-07'),
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2025-03-07'),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(
                posts.reduce((latest, p) => {
                    const d = p.dateModified || p.date;
                    return d > latest ? d : latest;
                }, posts[0].date)
            ),
            priority: 0.7,
        },
    ];

    const blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateModified || post.date),
        priority: 0.6,
        images: post.image ? [`${baseUrl}${post.image}`] : [],
    }));

    return [...staticPages, ...blogPages];
}

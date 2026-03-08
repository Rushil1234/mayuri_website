export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            // Explicitly allow AI search bots for AEO/citation
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
        ],
        sitemap: 'https://www.mayurikakkad.com/sitemap.xml',
    }
}

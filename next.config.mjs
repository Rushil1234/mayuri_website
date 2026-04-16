/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
    },
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'mkbridalstudio.com' }],
                destination: 'https://www.mkbridalstudio.com/:path*',
                permanent: true,
            },
            {
                source: '/about-me-2',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/about-me-2/:path*',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/contact-us/:path*',
                destination: '/contact',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

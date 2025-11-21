/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        qualities: [75, 90, 100],
    },
    assetPrefix: '/portfolio/',
    basePath: '/portfolio',
    trailingSlash: true,
};

export default nextConfig;
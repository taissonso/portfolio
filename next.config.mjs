/** @type {import('next').NextConfig} */
const nextConfig = {};

// Export static Next Pages
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/portfolio/' : '',
    basePath: isProd ? '/portfolio/' : '',
}

export default nextConfig;

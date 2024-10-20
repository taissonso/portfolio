const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/portfolio/' : '',
    basePath: isProd ? '/portfolio/' : '',
};

// Exporta a configuração usando sintaxe ES6
export default nextConfig;
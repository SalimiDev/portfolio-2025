/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'export',
    swcMinify: true,
    images: {
        loader: 'custom',
        loaderFile: './src/utils/image-loader.js',
        // Define responsive image sizes for better optimization
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Supported formats (WebP for better compression)
        formats: ['image/webp'],
        // Enable remote patterns if needed (for external images)
        remotePatterns: []
    }
};

module.exports = nextConfig;

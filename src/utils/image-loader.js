/**
 * Custom image loader for Next.js static exports
 **/

module.exports = function customImageLoader({ src, width, quality }) {
    // For static imports (._next/static/media/...)
    // Next.js handles these at build time with optimization
    if (src.startsWith('/_next/')) {
        return src;
    }

    // Handle external URLs (pass through)
    if (src.startsWith('http://') || src.startsWith('https://')) {
        return src;
    }

    // For public folder images
    // Return as-is since we'll pre-optimize these
    return src;
};

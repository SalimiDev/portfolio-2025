// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'export',
    swcMinify: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;

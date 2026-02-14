/**
 * Image Optimization Script
 * Uses Sharp to optimize images in public/images folder
 * Converts to WebP and compresses for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OPTIMIZED_DIR = path.join(PUBLIC_IMAGES_DIR, 'optimized');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Ensure the optimized directory exists
 */
function ensureOptimizedDir() {
    if (!fs.existsSync(OPTIMIZED_DIR)) {
        fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
        console.log('✓ Created optimized directory');
    }
}

/**
 * Get all image files from a directory recursively
 */
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip the optimized directory to avoid recursion
            if (file !== 'optimized') {
                getImageFiles(filePath, fileList);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

/**
 * Optimize a single image
 */
async function optimizeImage(imagePath) {
    try {
        const filename = path.basename(imagePath);
        const ext = path.extname(filename);
        const nameWithoutExt = filename.replace(ext, '');

        // Output path (convert to .webp)
        const outputFilename = `${nameWithoutExt}.webp`;
        const outputPath = path.join(OPTIMIZED_DIR, outputFilename);

        // Get image metadata
        const metadata = await sharp(imagePath).metadata();

        // Optimize image
        await sharp(imagePath)
            .webp({
                quality: 80, // Good balance between quality and file size
                effort: 6 // Compression effort (0-6, higher = better compression)
            })
            .toFile(outputPath);

        const originalSize = fs.statSync(imagePath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

        console.log(
            `  ✓ ${filename} (${metadata.width}x${metadata.height})` +
                `\n    Original: ${(originalSize / 1024).toFixed(1)}KB` +
                `\n    Optimized: ${(optimizedSize / 1024).toFixed(1)}KB` +
                `\n    Reduction: ${reduction}%`
        );

        return { success: true, filename, reduction };
    } catch (error) {
        console.error(`  ✗ Failed to optimize ${path.basename(imagePath)}: ${error.message}`);
        return { success: false, filename: path.basename(imagePath) };
    }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
    console.log('\n🖼️  Starting image optimization...\n');

    // Ensure directories exist
    if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
        console.error('❌ Public images directory not found');
        return;
    }

    ensureOptimizedDir();

    // Get all image files
    const imageFiles = getImageFiles(PUBLIC_IMAGES_DIR);

    if (imageFiles.length === 0) {
        console.log('ℹ️  No images found to optimize');
        return;
    }

    console.log(`Found ${imageFiles.length} image(s) to optimize\n`);

    // Optimize all images
    const results = await Promise.all(imageFiles.map((file) => optimizeImage(file)));

    // Summary
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success).length;

    console.log('\n✅ Optimization complete!');
    console.log(`   Successful: ${successful}`);
    if (failed > 0) {
        console.log(`   Failed: ${failed}`);
    }
    console.log(`   Output: ${OPTIMIZED_DIR}\n`);
}

// Run the optimization
optimizeAllImages().catch((error) => {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
});

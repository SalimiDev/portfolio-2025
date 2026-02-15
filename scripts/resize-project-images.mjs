/**
 * Resize Project Images Script
 * Resizes large project images to appropriate dimensions for responsive display
 * Based on actual grid layout sizes to optimize PageSpeed performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, '..', 'src', 'assets', 'images', 'projects');
const BACKUP_DIR = path.join(PROJECTS_DIR, 'originals');

// Target widths for responsive images
// Based on grid layout: max display size is ~600px on mobile, ~800px on larger screens
const RESPONSIVE_SIZES = [
    { width: 600, suffix: '@1x' },  // For mobile and small screens
    { width: 1200, suffix: '@2x' }, // For retina displays and larger screens
];

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Ensure backup directory exists
 */
function ensureBackupDir() {
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
        console.log('✓ Created backup directory');
    }
}

/**
 * Get all image files from projects directory
 */
function getImageFiles() {
    if (!fs.existsSync(PROJECTS_DIR)) {
        console.error('❌ Projects directory not found');
        return [];
    }

    const files = fs.readdirSync(PROJECTS_DIR);
    return files
        .filter((file) => {
            const ext = path.extname(file).toLowerCase();
            return IMAGE_EXTENSIONS.includes(ext);
        })
        .map((file) => path.join(PROJECTS_DIR, file));
}

/**
 * Backup original image
 */
async function backupOriginal(imagePath) {
    const filename = path.basename(imagePath);
    const backupPath = path.join(BACKUP_DIR, filename);

    // Only backup if not already backed up
    if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(imagePath, backupPath);
        console.log(`  📦 Backed up original: ${filename}`);
    }
}

/**
 * Resize and optimize image
 */
async function resizeImage(imagePath, targetWidth, suffix = '') {
    try {
        const filename = path.basename(imagePath);
        const ext = path.extname(filename);
        const nameWithoutExt = filename.replace(ext, '');

        // Output filename
        const outputFilename = suffix ? `${nameWithoutExt}${suffix}.webp` : `${nameWithoutExt}.webp`;
        const outputPath = path.join(PROJECTS_DIR, outputFilename);
        const tempPath = path.join(PROJECTS_DIR, `temp_${outputFilename}`);

        // Get original metadata
        const metadata = await sharp(imagePath).metadata();

        // Skip if image is already smaller than target
        if (metadata.width <= targetWidth && !suffix) {
            console.log(`  ⏭️  ${filename} is already optimized (${metadata.width}x${metadata.height})`);
            return { success: true, skipped: true };
        }

        // Resize and optimize to temp file
        await sharp(imagePath)
            .resize(targetWidth, null, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({
                quality: 85, // Slightly higher quality for project images
                effort: 6,
            })
            .toFile(tempPath);

        const originalSize = fs.statSync(imagePath).size;
        const optimizedSize = fs.statSync(tempPath).size;
        const newMetadata = await sharp(tempPath).metadata();

        // Replace original with optimized version
        fs.renameSync(tempPath, outputPath);

        console.log(
            `  ✓ ${outputFilename}` +
                `\n    ${metadata.width}x${metadata.height} → ${newMetadata.width}x${newMetadata.height}` +
                `\n    ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB` +
                `\n    Saved: ${((1 - optimizedSize / originalSize) * 100).toFixed(1)}%`
        );

        return { success: true, filename: outputFilename, skipped: false };
    } catch (error) {
        console.error(`  ✗ Failed to resize ${path.basename(imagePath)}: ${error.message}`);
        return { success: false, filename: path.basename(imagePath), skipped: false };
    }
}

/**
 * Process a single image
 */
async function processImage(imagePath) {
    const filename = path.basename(imagePath);
    console.log(`\n📸 Processing: ${filename}`);

    // Backup original
    await backupOriginal(imagePath);

    // Generate main optimized version (max 1200px for @2x retina)
    const mainResult = await resizeImage(imagePath, 1200);

    return mainResult;
}

/**
 * Main function
 */
async function main() {
    console.log('\n🖼️  Resizing project images for optimal performance...\n');

    ensureBackupDir();

    const imageFiles = getImageFiles();

    if (imageFiles.length === 0) {
        console.log('ℹ️  No images found to process');
        return;
    }

    console.log(`Found ${imageFiles.length} image(s) to process`);

    // Process all images
    const results = await Promise.all(imageFiles.map((file) => processImage(file)));

    // Summary
    const successful = results.filter((r) => r.success && !r.skipped).length;
    const skipped = results.filter((r) => r.skipped).length;
    const failed = results.filter((r) => !r.success).length;

    console.log('\n✅ Resize complete!');
    console.log(`   Processed: ${successful}`);
    console.log(`   Skipped: ${skipped}`);
    if (failed > 0) {
        console.log(`   Failed: ${failed}`);
    }
    console.log(`   Originals backed up to: ${BACKUP_DIR}`);
    console.log('\n💡 Remember to update your imports if filenames changed!\n');
}

// Run
main().catch((error) => {
    console.error('❌ Resize failed:', error);
    process.exit(1);
});

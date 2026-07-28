#!/usr/bin/env node

/**
 * Generates a sitemap for the canonical portfolio URL.
 * By default, lastmod comes from the latest commit that changed site content.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
const requestedDate = process.env.UPDATE_DATE?.trim();
const contentPaths = [
    'src',
    'public/images',
    'public/favicon.ico',
    'public/favicon-16x16.png',
    'public/favicon-32x32.png',
    'public/apple-touch-icon.png',
    'public/android-chrome-192x192.png',
    'public/android-chrome-512x512.png'
];

function getLatestContentDate() {
    try {
        return execFileSync('git', ['log', '-1', '--format=%cs', '--', ...contentPaths], {
            cwd: projectRoot,
            encoding: 'utf8'
        }).trim();
    } catch {
        return '';
    }
}

const updateDate = requestedDate || getLatestContentDate();
const isValidDate =
    updateDate && /^\d{4}-\d{2}-\d{2}$/.test(updateDate) && !Number.isNaN(Date.parse(`${updateDate}T00:00:00Z`));

if (!isValidDate) {
    console.error(`❌ Invalid update date: ${updateDate}`);
    process.exit(1);
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://mehdisalimi.com/</loc>
        <lastmod>${updateDate}</lastmod>
    </url>
</urlset>
`;

try {
    const currentContent = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';

    if (currentContent === sitemapContent) {
        console.log(`✅ Sitemap is already current (${updateDate})`);
        process.exit(0);
    }

    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log(`✅ Sitemap updated from the latest content commit (${updateDate})`);
} catch (error) {
    console.error('❌ Sitemap update failed:', error.message);
    process.exit(1);
}

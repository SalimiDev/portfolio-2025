#!/usr/bin/env node

/**
 * Sitemap Update Script
 * Updates all lastmod dates in sitemap.xml.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const requestedDate = process.env.UPDATE_DATE?.trim();
const updateDate = requestedDate || new Date().toISOString().split('T')[0];

if (!/^\d{4}-\d{2}-\d{2}$/.test(updateDate) || Number.isNaN(Date.parse(`${updateDate}T00:00:00Z`))) {
    console.error(`❌ Invalid update date: ${updateDate}`);
    process.exit(1);
}

console.log('🔄 Updating Sitemap');
console.log(`📅 Update date: ${updateDate}`);
console.log(`📁 File path: ${sitemapPath}\n`);

try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const lastModRegex = /<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
    const matches = [...sitemapContent.matchAll(lastModRegex)];

    if (matches.length > 0) {
        const updatedContent = sitemapContent.replace(
            /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
            `<lastmod>${updateDate}</lastmod>`
        );

        fs.writeFileSync(sitemapPath, updatedContent, 'utf8');

        console.log(`✅ Update successful!`);
        console.log(`📝 All dates updated to ${updateDate}`);
        console.log(`📊 URLs updated: ${matches.length}`);
    } else {
        console.log('❌ No lastmod dates found in file');
    }
} catch (error) {
    console.error('❌ Update error:', error.message);
    process.exit(1);
}

console.log('\n✨ Sitemap updated successfully!');

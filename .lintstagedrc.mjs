export default {
    '*.{js,mjs,cjs,ts,jsx,tsx}': (filenames) => {
        const files = filenames.filter((f) => {
            const normalized = f.replace(/\\/g, '/');
            return (
                !normalized.includes('node_modules') &&
                !normalized.includes('.next') &&
                !normalized.includes('eslint.config') &&
                !normalized.includes('.lintstagedrc') &&
                !normalized.endsWith('.config.js') &&
                !normalized.endsWith('.config.mjs') &&
                !normalized.endsWith('.config.ts') &&
                !normalized.includes('.husky/')
            );
        });

        if (files.length === 0) return 'echo "No files to lint"';

        const fileList = files.map((f) => `"${f}"`).join(' ');
        return [
            `eslint --fix --cache --cache-location .eslintcache --quiet ${fileList}`,
            `prettier --write ${fileList}`
        ];
    },
    '*.{json,md,yml,yaml,css,scss}': (filenames) => {
        const files = filenames.filter((f) => {
            const normalized = f.replace(/\\/g, '/');
            return (
                !normalized.includes('node_modules') &&
                !normalized.includes('.next') &&
                !normalized.includes('package-lock.json')
            );
        });
        if (files.length === 0) return 'echo "No files to format"';

        return `prettier --write ${files.map((f) => `"${f}"`).join(' ')}`;
    }
};

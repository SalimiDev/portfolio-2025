import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';

import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPromise from 'eslint-plugin-promise';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: { ...globals.browser, ...globals.node }
        }
    },
    pluginJs.configs.recommended, // ? https://github.com/eslint/eslint
    ...tseslint.configs.recommended, // ? https://github.com/typescript-eslint/typescript-eslint
    pluginPromise.configs['flat/recommended'], // ? https://github.com/eslint-community/eslint-plugin-promise
    eslintConfigPrettier, // ? https://github.com/prettier/eslint-config-prettier
    tailwind.configs.recommended, // ? https://github.com/francoismassart/eslint-plugin-tailwindcss
    {
        settings: {
            tailwindcss: {
                cssConfigPath: './src/app/globals.css'
            }
        },
        rules: {
            'no-unused-vars': 'off',
            'newline-before-return': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/migration-from-tailwind-2': 'off',
            'tailwindcss/no-unnecessary-arbitrary-value': 'off',
            'promise/param-names': 'off'
        }
    },

    {
        plugins: {
            '@next/next': nextPlugin
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off'
        }
    },
    {
        ignores: ['.next/**', 'out/**', 'public/images/optimized/**', 'node_modules/**']
    }
];

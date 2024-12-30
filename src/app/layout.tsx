'use client';

import { useEffect } from 'react';

import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

import { useThemeStore } from '@/store/useThemeStore';
import { loadThemeFromStorage, saveThemeToStorage } from '@/utils/theme';

import { Header } from './_components/header';
import './globals.css';

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree'
});

const poppins = localFont({
    src: [
        {
            path: '../../public/fonts/poppins/poppins-light.woff2',
            weight: '100',
            style: 'normal'
        },
        {
            path: '../../public/fonts/poppins/poppins-regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/poppins/poppins-medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/fonts/poppins/poppins-semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../public/fonts/poppins/poppins-bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-poppins'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        const savedTheme = loadThemeFromStorage();
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);

        // Set the theme to the document
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, [setTheme]);

    useEffect(() => {
        // Save theme to localStorage and update the document
        saveThemeToStorage(theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <html dir='ltr' className={`${theme} ${poppins.variable} ${figtree.variable}`}>
            <body className='container grid bg-base-25 text-base-200 dark:bg-base-100 dark:text-base-content'>
                <Header />
                <main className=''>{children}</main>
            </body>
        </html>
    );
}

'use client';

import { useEffect } from 'react';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
        }
    }, []);

    return (
        <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}

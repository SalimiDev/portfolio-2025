import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html dir='ltr' className={`dark ${figtree.variable}`}>
            <body className='grid dark:bg-base-100 dark:text-base-content'>
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}

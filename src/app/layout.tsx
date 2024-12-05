import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

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
    return (
        <html dir='ltr' className={`dark ${poppins.variable} ${figtree.variable}`}>
            <body className='container grid dark:bg-base-100 dark:text-base-content'>
                <Header />
                <main className=''>{children}</main>
            </body>
        </html>
    );
}

import { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

import { Header } from './_components/header';
import './globals.css';
import { Providers } from './providers';

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-figtree',
    preload: true,
    fallback: ['system-ui', 'arial']
});

const poppins = localFont({
    src: [
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
    variable: '--font-poppins',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial']
});

export const viewport = 'width=device-width, initial-scale=1.0';
export const metadata: Metadata = {
    title: 'Portfolio | Mehdi Salimi',
    description:
        "Hello, I'm Mehdi. 👋 a software engineer based in Tehran, Iran. I specialize in web development and have a passion for building beautiful and functional web applications. 🧑‍💻",
    applicationName: 'Mehdi Salimi Portfolio',
    generator: 'Next.js',
    creator: 'Mehdi Salimi',
    publisher: 'Mehdi Salimi',
    metadataBase: new URL('https://mehdisalimi.com'),
    keywords: [
        'Mehdi Salimi',
        'Mehdi',
        'Salimi',
        'Software Engineer',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Web Development',
        'Web Development',
        'Frontend Development',
        'Web Developer',
        'Software Developer',
        'Software Engineer'
    ],
    referrer: 'origin-when-cross-origin',
    alternates: {
        types: {
            'application/rss+xml': '/feed.xml'
        }
    },
    openGraph: {
        title: 'Mehdi Salimi',
        description:
            "Hello, I'm Mehdi. 👋 a software engineer based in Tehran, Iran. I specialize in web development and have a passion for building beautiful and functional web applications. 🧑‍💻",
        url: 'https://mehdisalimi.com',
        siteName: 'Mehdi Salimi Portfolio',
        images: [
            {
                url: '/images/mehdi_salimi.jpg',
                width: 1200,
                height: 630,
                alt: 'Mehdi Salimi'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mehdi Salimi',
        description:
            "Hello, I'm Mehdi. 👋 a software engineer based in Tehran, Iran. I specialize in web development and have a passion for building beautiful and functional web applications. 🧑‍💻",
        images: ['/images/mehdi_salimi.jpg']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
        }
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico' }
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' dir='ltr' className={` ${poppins.variable} ${figtree.variable}`} suppressHydrationWarning>
            <head>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='preload'
                    href='/fonts/poppins/poppins-regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='/fonts/poppins/poppins-medium.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
            </head>
            <body className='container grid bg-base-25 text-base-200 dark:bg-base-100 dark:text-base-content'>
                <Providers>
                    <Header />

                    <main className=''>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

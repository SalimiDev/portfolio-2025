import { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#04040d' }
    ]
};

const siteUrl = 'https://mehdisalimi.com';
const siteTitle = 'Mehdi Salimi | Frontend Engineer';
const siteDescription =
    "Frontend engineer building high-performance, accessible web applications with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: '%s | Mehdi Salimi'
    },
    description: siteDescription,
    applicationName: 'Mehdi Salimi Portfolio',
    creator: 'Mehdi Salimi',
    publisher: 'Mehdi Salimi',
    manifest: '/site.webmanifest',
    keywords: [
        'Mehdi Salimi',
        'Software Engineer',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'JavaScript',
        'Portfolio',
        'Frontend Development',
        'Web Performance',
        'SEO'
    ],
    referrer: 'origin-when-cross-origin',
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: 'Mehdi Salimi Portfolio',
        locale: 'en_US',
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
        title: siteTitle,
        description: siteDescription,
        creator: '@salimidevop',
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

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mehdi Salimi',
    jobTitle: 'Frontend Engineer',
    url: siteUrl,
    image: `${siteUrl}/images/mehdi_salimi.jpg`,
    sameAs: ['https://github.com/SalimiDev', 'https://www.linkedin.com/in/salimidevop/']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' dir='ltr' className={`${poppins.variable} ${figtree.variable}`} suppressHydrationWarning>
            <body className='grid bg-base-25 p-1 text-base-200 antialiased lg:container dark:bg-base-100 dark:text-base-content'>
                <Providers>
                    <Header />

                    <main>{children}</main>
                </Providers>
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            </body>
        </html>
    );
}

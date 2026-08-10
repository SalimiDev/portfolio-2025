import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { user_avatar } from '@/assets/images';
import RoutedPortfolioGrid from '@/features/portfolio-grid/components/routed-portfolio-grid';

import { Header } from './_components/header';
import './globals.css';
import { Providers } from './providers';

const poppins = localFont({
    src: [
        {
            path: '../assets/fonts/poppins/poppins-regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../assets/fonts/poppins/poppins-medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../assets/fonts/poppins/poppins-semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../assets/fonts/poppins/poppins-bold.woff2',
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
const siteTitle = 'Mehdi Salimi | Software Engineer — Next.js Projects';
const siteDescription =
    'Mehdi Salimi is a software engineer building high-performance, accessible React and Next.js projects, dashboards, and web applications with TypeScript.';
const avatarUrl = user_avatar.src;
const absoluteAvatarUrl = new URL(avatarUrl, siteUrl).toString();

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
    referrer: 'origin-when-cross-origin',
    // About and Work are alternate layouts of the same portfolio content.
    // Keep the root URL canonical while allowing each layout to stay directly addressable.
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
                url: avatarUrl,
                width: 914,
                height: 864,
                alt: 'Portrait of Mehdi Salimi',
                type: 'image/webp'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: siteTitle,
        description: siteDescription,
        creator: '@salimidevop',
        images: [avatarUrl]
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

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': websiteId,
            url: siteUrl,
            name: 'Mehdi Salimi Portfolio',
            description: siteDescription,
            inLanguage: 'en-US',
            author: { '@id': personId }
        },
        {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#profile`,
            url: siteUrl,
            name: siteTitle,
            description: siteDescription,
            inLanguage: 'en-US',
            isPartOf: { '@id': websiteId },
            mainEntity: { '@id': personId }
        },
        {
            '@type': 'Person',
            '@id': personId,
            name: 'Mehdi Salimi',
            jobTitle: 'Software Engineer',
            description: siteDescription,
            url: siteUrl,
            image: {
                '@type': 'ImageObject',
                url: absoluteAvatarUrl,
                width: 914,
                height: 864
            },
            knowsAbout: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Performance', 'Accessibility'],
            sameAs: [
                'https://github.com/SalimiDev',
                'https://www.linkedin.com/in/salimidevop/',
                'https://www.instagram.com/mehdi_salimi92/'
            ]
        }
    ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' dir='ltr' className={poppins.variable} suppressHydrationWarning>
            <head>
                <script
                    src='https://analytics.ahrefs.com/analytics.js'
                    data-key='6hyjAUA3690VOhtN0hl7dQ'
                    async
                />
            </head>
            <body className='grid bg-base-25 p-1 text-base-200 antialiased lg:container dark:bg-base-100 dark:text-base-content'>
                <Providers>
                    <Header />

                    <main className='min-w-0'>
                        <RoutedPortfolioGrid />
                        {children}
                    </main>
                </Providers>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </body>
        </html>
    );
}

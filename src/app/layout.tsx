import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const figtree = localFont({
    src: [
        {
            path: '../assets/fonts/Figtree-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Figtree-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
    ],
    variable: '--font-figtree',
    display: 'swap',
});

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title: {
        default: 'Prince Kumar',
        template: '%s | Prince Kumar',
    },
    description:
        'Portfolio of Prince Kumar, featuring software engineering projects and experience.',
    keywords: [
        'Prince Kumar',
        'software engineer',
        'computer science portfolio',
        'full stack development',
    ],
    authors: [{ name: 'Prince Kumar' }],
    creator: 'Prince Kumar',
    publisher: 'Prince Kumar',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Prince Kumar',
        description:
            'Portfolio of Prince Kumar, featuring software engineering projects and experience.',
        siteName: 'Prince Kumar Portfolio',
        url: '/',
        images: [
            {
                url: '/website-mockup-1.png',
                alt: 'Prince Kumar portfolio preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prince Kumar',
        description:
            'Portfolio of Prince Kumar, featuring software engineering projects and experience.',
        images: ['/website-mockup-1.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    category: 'technology',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${figtree.variable} ${roboto.variable} font-sans antialiased`}>
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}

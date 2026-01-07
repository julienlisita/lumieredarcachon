// src/app/layout.tsx

import Script from 'next/script';
import './globals.css';
import { metadata } from './metadata';
export { metadata };

import { Playfair_Display, Inter, Montserrat, Lora } from 'next/font/google';
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker';
import { Suspense } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${lora.variable}`}
    >
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
        )}
        {children}
      </body>
    </html>
  );
}

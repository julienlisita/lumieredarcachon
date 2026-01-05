// src/app/metadata.ts

export const metadata = {
  title: 'Lumière d’Arcachon — Photographie & instants du Bassin',
  description:
    'Un regard photographique sur le Bassin d’Arcachon : ambiances, reflets, dunes et horizons. Galerie, sélections et carnet de terrain.',
  metadataBase: new URL('https://lumieredarcachon.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumière d’Arcachon — Photographie & instants du Bassin',
    description:
      'Explorez une sélection de photos du Bassin d’Arcachon : lumières, marées, dunes et atmosphères. Ouvrez la galerie et plongez dans l’univers.',
    url: 'https://lumieredarcachon.fr',
    siteName: 'Lumière d’Arcachon',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://lumieredarcachon.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumière d’Arcachon — Photographie du Bassin d’Arcachon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière d’Arcachon',
    description:
      'Photographies du Bassin d’Arcachon : lumières, reflets, dunes et instants simples. Galerie & sélections.',
    images: ['https://lumieredarcachon.fr/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lumière d’Arcachon',
  },
};

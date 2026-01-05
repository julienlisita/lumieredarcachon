// src/app/(site)/gallery/page.tsx

import Gallery from '@/components/pages/Gallery';

export const metadata = {
  title: 'Galerie — Lumière d’Arcachon',
  description:
    'Explorez la galerie photo de Lumière d’Arcachon : ambiances, lumières marines, dunes et instants capturés autour du Bassin d’Arcachon.',
  alternates: {
    canonical: 'https://www.lumieredarcachon.fr/gallery',
  },
};

export default function GalleryPage() {
  return <Gallery />;
}

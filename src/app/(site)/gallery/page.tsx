// src/app/(site)/gallery/page.tsx

import Gallery from '@/components/pages/Gallery';

export const metadata = {
  title: 'Galerie photo – Lumière d’Arcachon',
  description:
    'Découvrez ma galerie photo : paysages du Bassin d’Arcachon, ambiances naturelles, lumières marines et instants capturés avec sensibilité.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/gallery',
  },
};

export default function GalleryPage() {
  return <Gallery />;
}

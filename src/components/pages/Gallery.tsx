// src/components/pages/Gallery.tsx

import { Image as ImageIcon } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import GallerySection from '../gallery/GallerySection';
import { Suspense } from 'react';

export default function Gallery() {
  return (
    <div>
      <PageHero
        icon={<ImageIcon size={40} />}
        title="Galerie"
        subtitle="Une sélection photographique autour des ambiances, des marées et des horizons du Bassin d’Arcachon."
        align="left"
      />

      <Suspense fallback={null}>
        <GallerySection />
      </Suspense>
    </div>
  );
}

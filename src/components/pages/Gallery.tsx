// src/components/pages/Gallery.tsx

import { Image as ImageIcon } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import GallerySection from '../gallery/GallerySection';
import Cta from '../patterns/Cta';

export default function Gallery() {
  return (
    <div>
      <PageHero
        icon={<ImageIcon size={40} />}
        title="Portfolio"
        subtitle="Découvrez une sélection de nos plus belles photographies et réalisations."
        align="center"
      />

      <GallerySection />

      <Cta
        title="Vous souhaitez réaliser un shooting ?"
        description="Contactez-nous pour immortaliser vos instants sous les plus belles lumières du Bassin."
        align="left"
        primaryLabel="Réserver un créneau"
        primaryHref="/contact"
      />
    </div>
  );
}

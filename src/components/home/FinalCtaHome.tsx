// src/components/home/FinalCtaSection.tsx

import Cta from '@/components/patterns/Cta';

export default function FinalCtaHome() {
  return (
    <Cta
      title="Envie de suivre les prochaines lumières ?"
      description="Je publie régulièrement de nouvelles séries autour du Bassin d’Arcachon. Tu peux me suivre sur Instagram, ou explorer la galerie ici."
      primaryLabel="Suivre sur Instagram"
      primaryHref="https://instagram.com/TON_COMPTE"
      secondaryLabel="Voir la galerie"
      secondaryHref="/gallery"
      align="center"
    />
  );
}

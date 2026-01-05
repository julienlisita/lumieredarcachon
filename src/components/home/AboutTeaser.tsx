// src/components/home/AboutTeaser.tsx

import SplitSection from '@/components/patterns/SplitSection';

export default function AboutTeaser() {
  return (
    <SplitSection
      eyebrow="À propos"
      title="Un carnet de lumière, au fil des saisons"
      subtitle="Photographier le Bassin, comprendre ses ambiances, et partager ce qui rend chaque instant unique."
      imageSrc="/images/home/about-01.webp"
      imageAlt="Ambiance douce sur le Bassin d’Arcachon"
      reverse
      aspect="portrait"
      imageFit="cover"
      tone="default"
      ctaLabel="Découvrir la démarche"
      ctaHref="/about"
      content={
        <>
          <p>
            Je photographie le Bassin d’Arcachon comme on tient un carnet : au rythme des marées,
            des brumes et des heures dorées. J’aime les instants calmes, les reflets, et les
            variations de lumière qui transforment un lieu en quelques minutes.
          </p>
          <p className="mt-4">
            Ce site est aussi un projet personnel de développement web — conçu et réalisé à la main
            — pour relier mes séries, mes notes, et bientôt des ressources plus pratiques (spots,
            conseils, et échanges entre passionnés).
          </p>
        </>
      }
    />
  );
}

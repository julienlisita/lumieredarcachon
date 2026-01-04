// src/components/pages/About.tsx

import { Camera } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import AboutContentSection from '../about/AboutContentSection';
import Cta from '../patterns/Cta';

export default function About() {
  return (
    <main id="main-content">
      <PageHero
        icon={<Camera size={40} />}
        title="À propos"
        subtitle="Une démarche photographique autour des lumières du Bassin d’Arcachon."
        align="center"
      />

      <AboutContentSection />

      <Cta
        title="Envie d’échanger ?"
        description="Une question, une collaboration ou simplement un message autour du Bassin."
        align="center"
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Instagram"
        secondaryHref="https://instagram.com/julienlisita"
      />
    </main>
  );
}

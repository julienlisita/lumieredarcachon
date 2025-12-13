// src/app/(site)/about/page.tsx

import About from '@/components/pages/About';

export const metadata = {
  title: 'À propos – Lumière d’Arcachon',
  description:
    'Découvrez Lumière d’Arcachon, notre approche photographique, nos valeurs et notre regard sensible sur le Bassin d’Arcachon.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/about',
  },
};

export default function AboutPage() {
  return <About />;
}

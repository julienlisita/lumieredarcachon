// src/app/(site)/page.tsx

import Home from '@/components/pages/Home';

export const metadata = {
  title: 'Photographie sur le Bassin d’Arcachon – Lumière d’Arcachon',
  description:
    'Lumière d’Arcachon est un projet photographique personnel inspiré par les paysages, la mer et les lumières changeantes du Bassin d’Arcachon.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.com/',
  },
};

export default function HomePage() {
  return <Home />;
}

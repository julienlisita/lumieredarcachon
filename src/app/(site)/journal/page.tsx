// src/app/(site)/journal/page.tsx

import Journal from '@/components/pages/Journal';

export const metadata = {
  title: 'Blog – Lumière d’Arcachon',
  description:
    'Articles, inspirations et réflexions personnelles autour du Bassin d’Arcachon, de la photographie et de la lumière.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/blog',
  },
};

export default function BlogPage() {
  return <Journal />;
}

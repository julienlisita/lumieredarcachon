// src/app/(site)/blog/page.tsx

import Blog from '@/components/pages/Blog';

export const metadata = {
  title: 'Blog – Lumière d’Arcachon',
  description:
    'Articles, inspirations et réflexions personnelles autour du Bassin d’Arcachon, de la photographie et de la lumière.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}

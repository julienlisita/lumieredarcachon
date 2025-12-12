// src/app/(site)/blog/page.tsx

import Blog from '@/components/pages/Blog';

export const metadata = {
  title: 'Blog – Lumières d’Arcachon',
  description:
    'Découvrez nos articles, actualités et inspirations autour du Bassin d’Arcachon et de ses lumières uniques.',
  alternates: {
    canonical: 'https://www.lumieres-arcachon.com/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}

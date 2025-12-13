// src/app/(site)/legal/term/page.tsx

import Terms from '@/components/pages/legal/Term';

export const metadata = {
  title: 'Conditions d’utilisation – Lumière d’Arcachon',
  description:
    'Conditions générales d’utilisation du site Lumière d’Arcachon et règles applicables à la navigation et aux contenus.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/legal/term',
  },
};

export default function TermsPage() {
  return <Terms />;
}

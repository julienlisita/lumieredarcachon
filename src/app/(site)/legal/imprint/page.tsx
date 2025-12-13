// src/app/(site)/legal/imprint/page.tsx

import Imprint from '@/components/pages/legal/Imprint';

export const metadata = {
  title: 'Mentions légales – Lumière d’Arcachon',
  description:
    'Mentions légales du site Lumière d’Arcachon : éditeur du site, hébergement, responsabilité et propriété intellectuelle.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/legal/imprint',
  },
};

export default function ImprintPage() {
  return <Imprint />;
}

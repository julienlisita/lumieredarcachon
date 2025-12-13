// src/app/(site)/legal/privacy/page.tsx

import Privacy from '@/components/pages/legal/Policy';

export const metadata = {
  title: 'Politique de confidentialité – Lumière d’Arcachon',
  description:
    'Politique de confidentialité du site Lumière d’Arcachon : collecte, utilisation et protection des données personnelles.',
  alternates: {
    canonical: 'https://www.lumiere-arcachon.fr/legal/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}

// src/app/(site)/contact/page.tsx

import Contact from '@/components/pages/Contact';

export const metadata = {
  title: 'Contact — Lumière d’Arcachon',
  description:
    'Une question, un message ou une envie d’échange autour du Bassin d’Arcachon ? Contactez Lumière d’Arcachon pour toute demande ou collaboration.',
  alternates: {
    canonical: 'https://www.lumieredarcachon.fr/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}

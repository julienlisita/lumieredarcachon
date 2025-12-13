// src/app/(site)/contact/page.tsx

import Contact from '@/components/pages/Contact';

export const metadata = {
  title: 'Contact – Lumière d’Arcachon',
  description:
    'Une question, un projet photo ou une collaboration ? Contactez moi pour échanger autour de vos envies et de votre univers.',
  alternates: {
    canonical: 'https://www.lumieres-arcachon.fr/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}

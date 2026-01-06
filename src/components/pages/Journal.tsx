// src/components/pages/Blog.tsx

import { PenSquare } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import JournalListSection from '../journal/JournalListSection';
import Cta from '../patterns/Cta';
import { Suspense } from 'react';

export default function Journal() {
  return (
    <div>
      <PageHero
        icon={<PenSquare size={40} />}
        title="Notre Blog"
        subtitle="Articles, inspirations et actualités autour du Bassin d’Arcachon."
        align="center"
      />

      <Suspense fallback={<div className="px-4 sm:px-8 lg:px-24 xl:px-32 py-12">Chargement…</div>}>
        <JournalListSection />
      </Suspense>

      <Cta
        title="Vous souhaitez collaborer avec nous ?"
        description="Contactez-nous pour discuter de votre projet ou partager vos idées."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

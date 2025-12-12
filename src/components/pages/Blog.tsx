// src/components/pages/Blog.tsx

import { PenSquare } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import BlogListSection from '../blog/BlogListSection';
import Cta from '../patterns/Cta';

export default function Blog() {
  return (
    <div>
      <PageHero
        icon={<PenSquare size={40} />}
        title="Notre Blog"
        subtitle="Articles, inspirations et actualités autour du Bassin d’Arcachon."
        align="center"
      />

      <BlogListSection />

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

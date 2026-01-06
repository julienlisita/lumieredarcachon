// src/components/blog/JournalListSection.tsx

import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import JournalPostCard, { type JournalPost } from './JournalPostCard';

const POSTS: JournalPost[] = [
  {
    slug: 'heure-doree-pereire',
    title: 'L’heure dorée à Pereire : quand tout devient calme',
    excerpt:
      'Quelques repères simples pour profiter des reflets et des couleurs sans se presser — et rentrer avec une série cohérente.',
    date: 'À venir',
    readingTime: '4 min',
    tag: 'Spots',
  },
  // ...
];

export default function JournalListSection() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Carnet"
          title="Tous les articles"
          subtitle="Notes, images et fragments autour du Bassin d’Arcachon."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <JournalPostCard key={p.slug} post={p} />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}

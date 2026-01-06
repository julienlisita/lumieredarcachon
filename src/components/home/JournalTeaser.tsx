// src/components/home/JournalTeaser.tsx

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';
import JournalPostCard, { type JournalPost } from '@/components/journal/JournalPostCard';

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

export default function JournalTeaser() {
  return (
    <Section id="carnet">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Carnet"
          title="Derniers articles"
          subtitle="Spots, ambiances et conseils photo — un format court, au rythme du Bassin."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {POSTS.map((p) => (
            <JournalPostCard key={p.slug} post={p} />
          ))}
        </div>

        <ActionsStack
          align="left"
          items={[{ label: 'Voir tout le carnet', href: '/journal', variant: 'primary' }]}
        />
      </SectionWrapper>
    </Section>
  );
}

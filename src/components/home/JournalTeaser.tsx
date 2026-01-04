// src/components/home/JournalTeaser.tsx

import Link from 'next/link';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import './JournalTeaser.css';

type PostTeaser = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ex: "12 janv. 2026"
  readingTime: string; // ex: "4 min"
  tag?: string; // ex: "Conseils"
};

const POSTS: PostTeaser[] = [
  {
    slug: 'heure-doree-pereire',
    title: 'L’heure dorée à Pereire : quand tout devient calme',
    excerpt:
      'Quelques repères simples pour profiter des reflets et des couleurs sans se presser — et rentrer avec une série cohérente.',
    date: 'À venir',
    readingTime: '4 min',
    tag: 'Spots',
  },
  {
    slug: 'photographier-marees-bassin',
    title: 'Comprendre les marées pour mieux photographier le Bassin',
    excerpt:
      'Marée haute, marée basse, coefficients : l’essentiel pour anticiper les ambiances et choisir le bon moment.',
    date: 'À venir',
    readingTime: '6 min',
    tag: 'Conseils',
  },
  {
    slug: 'brumes-matin-cap-ferret',
    title: 'Brumes du matin : une atmosphère rare côté Cap Ferret',
    excerpt:
      'Quand le ciel se fait doux et que la lumière se diffuse : comment composer et garder une palette naturelle.',
    date: 'À venir',
    readingTime: '5 min',
    tag: 'Ambiances',
  },
];

function PostCard({ post }: { post: PostTeaser }) {
  return (
    <article className="journal-card">
      <div className="journal-card__meta">
        {post.tag && <span className="journal-tag">{post.tag}</span>}
        <span className="journal-meta">
          {post.date} · {post.readingTime}
        </span>
      </div>

      <h3 className="journal-card__title">{post.title}</h3>
      <p className="journal-card__excerpt">{post.excerpt}</p>

      <Link href={`/carnet/${post.slug}`} className="journal-card__link">
        Lire l’article <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

export default function JournalTeaser() {
  const titleId = 'carnet-title';
  const subtitleId = 'carnet-subtitle';

  return (
    <Section id="carnet" labelledBy={titleId} describedBy={subtitleId}>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Carnet"
          title="Derniers articles"
          subtitle="Spots, ambiances et conseils photo — un format court, au rythme du Bassin."
          align="center"
          titleId={titleId}
          subtitleId={subtitleId}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {POSTS.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link href="/blog" className="journal-cta">
            Voir tout le carnet <span aria-hidden>→</span>
          </Link>
        </div>
      </SectionWrapper>
    </Section>
  );
}

// src/components/blog/JournalListSection.tsx

'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Pagination from '@/components/navigation/Pagination';
import JournalPostCard, { type JournalPost } from './JournalPostCard';

const PAGE_SIZE = 9;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

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
  const params = useSearchParams();
  const router = useRouter();

  const totalPages = useMemo(() => Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE)), []);

  const page = useMemo(() => {
    const raw = Number(params.get('page') ?? '1');
    const safe = Number.isFinite(raw) && raw > 0 ? raw : 1;
    return clamp(safe, 1, totalPages);
  }, [params, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return POSTS.slice(start, start + PAGE_SIZE);
  }, [page]);

  const pushPage = (nextPage: number) => {
    const q = new URLSearchParams(params.toString());
    q.set('page', String(clamp(nextPage, 1, totalPages)));
    const s = q.toString();
    router.push(`/journal${s ? `?${s}` : ''}`, { scroll: false });
  };

  return (
    <Section labelledBy="journal-title" describedBy="journal-subtitle">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Carnet"
          title="Tous les articles"
          subtitle="Notes, images et fragments autour du Bassin d’Arcachon."
          align="left"
          titleId="journal-title"
          subtitleId="journal-subtitle"
        />

        <p className="font-ui text-sm" style={{ color: 'var(--color-muted)' }}>
          {POSTS.length} article{POSTS.length > 1 ? 's' : ''} — page {page}/{totalPages}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((p) => (
            <JournalPostCard key={p.slug} post={p} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => pushPage(page - 1)}
          onNext={() => pushPage(page + 1)}
        />
      </SectionWrapper>
    </Section>
  );
}
// src/app/(site)/journal/[slug]/page.tsx

import { notFound } from 'next/navigation';
import JournalArticle from '@/components/journal/JournalArticle';
import { JOURNAL_POSTS } from '@/data/journal';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;

  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  return <JournalArticle post={post} />;
}

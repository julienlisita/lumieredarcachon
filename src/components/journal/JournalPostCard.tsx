// src/components/journal/JournalPostCard.tsx

import Link from 'next/link';
import './JournalPostCard.css';

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag?: string;
};

type Props = {
  post: JournalPost;
};

export default function JournalPostCard({ post }: Props) {
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

      <Link href={`/journal/${post.slug}`} className="journal-card__link">
        Lire l’article <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

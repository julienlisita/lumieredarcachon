// src/components/journal/JournalArticle.tsx

import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import type { JournalPost } from '@/data/journal';
import './JournalArticle.css';

type Props = {
  post: JournalPost;
};

export default function JournalArticle({ post }: Props) {
  return (
    <main id="main-content">
      <Section className="journal-article">
        <SectionWrapper>
          {/* Top nav */}
          <div className="journal-article__top">
            <Link href="/journal" className="journal-article__back">
              ← Retour au carnet
            </Link>
          </div>

          {/* Header */}
          <header className="journal-article__header">
            {post.tag && <span className="journal-article__tag">{post.tag}</span>}

            <h1 className="journal-article__title">{post.title}</h1>

            <p className="journal-article__meta">
              {post.date} · {post.readingTime}
            </p>

            {post.excerpt && <p className="journal-article__excerpt">{post.excerpt}</p>}
          </header>

          {/* Cover only */}
          {post.cover?.src && (
            <div className="journal-article__cover">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                width={1600}
                height={900}
                className="journal-article__cover-img"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
          )}

          {/* Content (no image blocks) */}
          <article className="journal-article__content">
            {post.content.map((block, idx) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={idx} className="journal-article__h2">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'p') {
                return (
                  <p key={idx} className="journal-article__p">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="journal-article__quote">
                    {block.text}
                  </blockquote>
                );
              }

              if (block.type === 'ul') {
                return (
                  <ul key={idx} className="journal-article__ul">
                    {block.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </article>
        </SectionWrapper>
      </Section>
    </main>
  );
}

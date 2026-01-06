// src/components/blog/JournalListSection.tsx

import clsx from 'clsx';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import './JournalListSection.css';

export default function JournalListSection() {
  return (
    <Section className={clsx('blog-list-section')}>
      <SectionWrapper>
        <HeaderBlock title="Derniers Articles" align="left" />
        {/* Placeholder : cards d’articles */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Titre de l’article</h3>
            <p className="text-gray-600 mb-4">Petite introduction à l’article présenté ici...</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Lire l’article →
            </a>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

// src/components/home/ExploreSection.tsx

import Link from 'next/link';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import './ExploreSection.css';
import Button from '../ui/Button';
import ActionsStack from '../patterns/ActionsStack';

type ExploreItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

function Arrow() {
  return (
    <span aria-hidden className="explore__arrow">
      →
    </span>
  );
}

function ExploreCard({ item }: { item: ExploreItem }) {
  return (
    <Link href={item.href} className="explore-card">
      <div className="explore-card__icon" aria-hidden>
        {item.icon}
      </div>

      <div className="explore-card__body">
        <h3 className="explore-card__title">{item.title}</h3>
        <p className="explore-card__desc">{item.description}</p>
      </div>

      <Arrow />
    </Link>
  );
}

const AMBIANCES: ExploreItem[] = [
  {
    title: 'Aurores',
    description: 'Premières couleurs, calme du matin.',
    href: '/gallery?ambiance=aurores',
    icon: '🌅',
  },
  {
    title: 'Reflets',
    description: 'Miroirs d’eau, textures et marées.',
    href: '/gallery?ambiance=reflets',
    icon: '🌊',
  },
  {
    title: 'Brumes',
    description: 'Ambiances feutrées et silencieuses.',
    href: '/gallery?ambiance=brumes',
    icon: '🌫️',
  },
];

const LIEUX: ExploreItem[] = [
  {
    title: 'Arcachon',
    description: 'Jetées, ville, lumières du front de mer.',
    href: '/gallery?lieu=Arcachon',
    icon: '📍',
  },
  {
    title: 'Dune du Pilat',
    description: 'Courbes, vents, horizons immenses.',
    href: '/gallery?lieu=La+Teste-de-Buch',
    icon: '🏜️',
  },
  {
    title: 'Cap Ferret',
    description: 'Villages, pins, bassin et océan.',
    href: '/gallery?lieu=Lège-Cap-Ferret',
    icon: '⛵',
  },
];

export default function ExploreSection() {
  const titleId = 'explorer-title';
  const subtitleId = 'explorer-subtitle';

  return (
    <Section id="explorer" labelledBy={titleId} describedBy={subtitleId}>
      <SectionWrapper>
        {/* Header principal */}
        <HeaderBlock
          eyebrow="Explorer"
          title="Explorer le Bassin"
          subtitle="Une navigation rapide : trois ambiances et trois lieux pour entrer dans l’univers."
          align="left"
          titleId={titleId}
          subtitleId={subtitleId}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Ambiances */}
          <div className="space-y-4">
            <div className="explore-subhead">
              <p className="explore-kicker">Ambiances</p>
              <h3 className="explore-mini-title">Par la lumière</h3>
            </div>

            <div className="grid gap-4">
              {AMBIANCES.map((item) => (
                <ExploreCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* Lieux */}
          <div className="space-y-4">
            <div className="explore-subhead">
              <p className="explore-kicker">Lieux</p>
              <h3 className="explore-mini-title">Par endroit</h3>
            </div>

            <div className="grid gap-4">
              {LIEUX.map((item) => (
                <ExploreCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA  */}
        {/* <div className="pt-2 text-center">
          <Button
            variant="primary"
            href="/gallery"
          >
            Voir toute la galerie
          </Button>
        </div> */}
        <ActionsStack
          align="left"
          items={[{ label: 'Voir toute la galerie', href: '/gallery', variant: 'primary' }]}
        />
      </SectionWrapper>
    </Section>
  );
}

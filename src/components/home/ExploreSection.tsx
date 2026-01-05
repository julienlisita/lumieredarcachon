// src/components/home/ExploreSection.tsx

import Link from 'next/link';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import './ExploreSection.css';
import ActionsStack from '../patterns/ActionsStack';
import { Moon, Waves, Sunrise, MapPin, Mountain, Sailboat, LucideIcon } from 'lucide-react';
const ICONS: Record<string, LucideIcon> = {
  moon: Moon,
  waves: Waves,
  sunrise: Sunrise,
  mappin: MapPin,
  mountain: Mountain,
  sailboat: Sailboat,
};

import { ElementType, ReactNode } from 'react';

function renderIcon(icon: ElementType | ReactNode) {
  if (typeof icon === 'function') {
    const Icon = icon;
    return <Icon size={20} aria-hidden="true" />;
  }
  return icon;
}

// ExploreItem
type ExploreItem = {
  title: string;
  description: string;
  href: string;
  iconKey: 'moon' | 'waves' | 'sunrise' | 'mappin' | 'mountain' | 'sailboat';
};

function Arrow() {
  return (
    <span aria-hidden className="explore__arrow">
      →
    </span>
  );
}

function ExploreCard({ item }: { item: ExploreItem }) {
  const Icon = ICONS[item.iconKey];

  return (
    <Link href={item.href} className="explore-card">
      <div className="explore-card__icon" aria-hidden>
        {Icon ? <Icon size={20} strokeWidth={1.75} /> : null}
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
    title: 'Crépuscule',
    description: 'Dernières lueurs et couleurs changeantes  du soir.',
    href: '/gallery?ambiance=crepuscules',
    iconKey: 'moon',
  },
  {
    title: 'Reflet',
    description: 'Miroirs d’eau, textures et marées.',
    href: '/gallery?ambiance=reflets',
    iconKey: 'waves',
  },
  {
    title: 'Horizon',
    description: 'Lignes lointaines et respiration du paysage.',
    href: '/gallery?ambiance=horizons',
    iconKey: 'sunrise',
  },
];

const LIEUX: ExploreItem[] = [
  {
    title: 'Arcachon',
    description: 'Jetées, ville, lumières du front de mer.',
    href: '/gallery?lieu=Arcachon',
    iconKey: 'mappin',
  },
  {
    title: 'La Teste-de-Buch',
    description: 'Courbes, vents, horizons immenses.',
    href: '/gallery?lieu=La+Teste-de-Buch',
    iconKey: 'mountain',
  },
  {
    title: 'Cap Ferret',
    description: 'Villages, pins, bassin et océan.',
    href: '/gallery?lieu=Lège-Cap-Ferret',
    iconKey: 'sailboat',
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

        <ActionsStack
          align="left"
          items={[{ label: 'Voir toute la galerie', href: '/gallery', variant: 'primary' }]}
        />
      </SectionWrapper>
    </Section>
  );
}

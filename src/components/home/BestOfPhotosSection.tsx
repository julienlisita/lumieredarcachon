// src/components/media/BestOfPhotoSection.tsx

import Link from 'next/link';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import ActionsStack from '@/components/patterns/ActionsStack';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import BestOfPhotoCard, { type BestOfPhoto } from '../media/BestOfPhotoCard';

import { PHOTOS } from '@/data/photos';
import { BEST_OF_IDS } from '@/data/selections';

type Props = {
  photos?: BestOfPhoto[];
};

const buildBestOfFromData = (): BestOfPhoto[] => {
  const items = BEST_OF_IDS.map((id, index) => {
    const p = PHOTOS.find((x) => x.id === id);
    if (!p) return null;

    return {
      id: p.id,
      src: p.src,
      alt: p.alt,
      label: p.label,
      href: `/gallery#${p.id}`,
      priority: index === 0,
    } satisfies BestOfPhoto;
  }).filter(Boolean) as BestOfPhoto[];

  return items;
};

export default function BestOfPhotosSection({ photos }: Props) {
  const titleId = 'bestof-title';
  const subtitleId = 'bestof-subtitle';

  const bestOf = photos ?? buildBestOfFromData();

  // Sécurité : si la sélection n'a pas exactement 6 photos, on évite les crashes
  if (bestOf.length < 6) return null;

  return (
    <Section id="best-of" labelledBy={titleId} describedBy={subtitleId}>
      <SectionWrapper>
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex items-start justify-between gap-6">
            <HeaderBlock
              align="left"
              eyebrow="Galerie"
              title="Sélection du moment"
              subtitle="Les dernières lumières capturées sur le Bassin d’Arcachon."
              titleId={titleId}
              subtitleId={subtitleId}
              className="mb-0"
            />

            {/* CTA desktop uniquement */}
            <Link
              href="/gallery"
              className="hidden sm:inline-flex font-ui text-sm text-[color:var(--color-link)] hover:text-[color:var(--color-link-hover)] transition-colors"
            >
              Voir toute la galerie <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Grid premium */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4">
            {/* Grande */}
            <BestOfPhotoCard
              photo={bestOf[0]}
              className="col-span-2 lg:col-span-7 bestof-aspect-hero"
            />

            {/* Droite */}
            <BestOfPhotoCard
              photo={bestOf[1]}
              className="col-span-1 lg:col-span-5 bestof-aspect-square"
            />
            <BestOfPhotoCard
              photo={bestOf[2]}
              className="col-span-1 lg:col-span-5 bestof-aspect-square"
            />

            <BestOfPhotoCard
              photo={bestOf[3]}
              className="col-span-1 lg:col-span-4 bestof-aspect-43"
            />
            <BestOfPhotoCard
              photo={bestOf[4]}
              className="col-span-1 lg:col-span-3 bestof-aspect-43"
            />

            {/* Panoramique */}
            <BestOfPhotoCard
              photo={bestOf[5]}
              className="col-span-2 lg:col-span-12 bestof-aspect-pano"
            />
          </div>

          {/* CTA mobile */}
          <ActionsStack
            align="left"
            items={[{ label: 'Voir toute la galerie', href: '/galerie', variant: 'secondary' }]}
            className="sm:hidden"
          />
        </div>
      </SectionWrapper>
    </Section>
  );
}

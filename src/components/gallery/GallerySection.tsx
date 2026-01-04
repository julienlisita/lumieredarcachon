// src/components/gallery/GallerySection.tsx

'use client';

import { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import { PHOTOS } from '@/data/photos';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';
import GalleryFilters from './GalleryFilters';
import { AMBIANCE_FILTERS } from '@/data/ambiences';

const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);

export default function GallerySection() {
  const params = useSearchParams();
  const router = useRouter();

  const activeId = params.get('photo');
  const activeAmbiance = params.get('ambiance');
  const activeLieu = params.get('lieu');

  // options de filtres (provenant des données)
  const ambiances = useMemo(() => {
    const present = new Set(PHOTOS.flatMap((p) => p.tags ?? []));
    // n'affiche que les ambiances "officielles" présentes dans tes données
    return AMBIANCE_FILTERS.filter((a) => present.has(a));
  }, []);

  const locations = useMemo(() => uniq(PHOTOS.map((p) => p.area ?? '')), []);

  // liste filtrée
  const filtered = useMemo(() => {
    return PHOTOS.filter((p) => {
      const ambianceOk = !activeAmbiance || (p.tags ?? []).includes(activeAmbiance);
      const lieuOk = !activeLieu || p.area === activeLieu;
      return ambianceOk && lieuOk;
    });
  }, [activeAmbiance, activeLieu]);

  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return filtered.findIndex((p) => p.id === activeId);
  }, [activeId, filtered]);

  const isOpen = activeIndex >= 0;

  // Garde les filtres (ambiance/lieu) dans l'URL quand on ouvre/ferme la lightbox
  const qsBase = useMemo(() => {
    const q = new URLSearchParams(params.toString());
    q.delete('photo');
    const s = q.toString();
    return s ? `?${s}` : '';
  }, [params]);

  const open = (id: string) =>
    router.push(`/gallery${qsBase}${qsBase ? '&' : '?'}photo=${id}`, { scroll: false });

  const close = () => router.push(`/gallery${qsBase}`, { scroll: false });

  const goPrev = () => {
    if (!isOpen) return;
    const prev = (activeIndex - 1 + filtered.length) % filtered.length;
    router.push(`/gallery${qsBase}${qsBase ? '&' : '?'}photo=${filtered[prev].id}`, {
      scroll: false,
    });
  };

  const goNext = () => {
    if (!isOpen) return;
    const next = (activeIndex + 1) % filtered.length;
    router.push(`/gallery${qsBase}${qsBase ? '&' : '?'}photo=${filtered[next].id}`, {
      scroll: false,
    });
  };

  return (
    <Section labelledBy="gallery-title" describedBy="gallery-subtitle">
      <SectionWrapper>
        <HeaderBlock
          align="left"
          eyebrow="Galerie"
          title="Toutes les photos"
          subtitle="Filtre par ambiance ou par lieu, et ouvre une photo en plein écran."
          titleId="gallery-title"
          subtitleId="gallery-subtitle"
        />

        <GalleryFilters ambiances={ambiances} locations={locations} />

        <p className="font-ui text-sm" style={{ color: 'var(--color-muted)' }}>
          {filtered.length} photo{filtered.length > 1 ? 's' : ''}
        </p>

        <GalleryGrid photos={filtered} onOpen={open} />

        <GalleryLightbox
          open={isOpen}
          photo={isOpen ? filtered[activeIndex] : null}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      </SectionWrapper>
    </Section>
  );
}

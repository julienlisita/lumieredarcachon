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

export default function GallerySection() {
  const params = useSearchParams();
  const router = useRouter();

  const activeId = params.get('photo');

  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return PHOTOS.findIndex((p) => p.id === activeId);
  }, [activeId]);

  const isOpen = activeIndex >= 0;

  const open = (id: string) => router.push(`/gallery?photo=${id}`, { scroll: false });
  const close = () => router.push('/gallery', { scroll: false });

  const goPrev = () => {
    if (!isOpen) return;
    const prev = (activeIndex - 1 + PHOTOS.length) % PHOTOS.length;
    router.push(`/gallery?photo=${PHOTOS[prev].id}`, { scroll: false });
  };

  const goNext = () => {
    if (!isOpen) return;
    const next = (activeIndex + 1) % PHOTOS.length;
    router.push(`/gallery?photo=${PHOTOS[next].id}`, { scroll: false });
  };

  return (
    <Section labelledBy="gallery-title" describedBy="gallery-subtitle">
      <SectionWrapper>
        <HeaderBlock
          align="left"
          eyebrow="Galerie"
          title="Toutes les photos"
          subtitle="Une sélection évolutive des lumières du Bassin d’Arcachon."
          titleId="gallery-title"
          subtitleId="gallery-subtitle"
        />

        <GalleryGrid photos={PHOTOS} onOpen={open} />
        <GalleryLightbox
          open={isOpen}
          photo={isOpen ? PHOTOS[activeIndex] : null}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      </SectionWrapper>
    </Section>
  );
}

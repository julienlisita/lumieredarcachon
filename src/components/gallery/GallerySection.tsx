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
import GalleryPagination from './GalleryPagination';
import { AMBIANCE_FILTERS } from '@/data/ambiences';

const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);
const PAGE_SIZE = 12; // ajuste comme tu veux

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function GallerySection() {
  const params = useSearchParams();
  const router = useRouter();

  const activeId = params.get('photo');
  const activeAmbiance = params.get('ambiance');
  const activeLieu = params.get('lieu');

  // options de filtres (provenant des données)
  const ambiances = useMemo(() => {
    const present = new Set(PHOTOS.flatMap((p) => p.tags ?? []));
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

  // pagination
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  }, [filtered.length]);

  const page = useMemo(() => {
    const raw = Number(params.get('page') ?? '1');
    const safe = Number.isFinite(raw) && raw > 0 ? raw : 1;
    return clamp(safe, 1, totalPages);
  }, [params, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // index lightbox dans la liste filtrée complète (pas seulement la page)
  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return filtered.findIndex((p) => p.id === activeId);
  }, [activeId, filtered]);

  const isOpen = activeIndex >= 0;

  // qsBase conserve les filtres + page quand on ouvre/ferme
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

  // helpers pour changer de page en gardant les filtres (et en fermant la lightbox)
  const pushPage = (nextPage: number) => {
    const q = new URLSearchParams(params.toString());
    q.delete('photo'); // ferme la lightbox si ouverte
    q.set('page', String(clamp(nextPage, 1, totalPages)));
    const s = q.toString();
    router.push(`/gallery${s ? `?${s}` : ''}`, { scroll: false });
  };

  return (
    <Section labelledBy="gallery-title" describedBy="gallery-subtitle">
      <SectionWrapper>
        <HeaderBlock
          align="left"
          eyebrow="Galerie"
          title="Toutes les photos"
          subtitle="Filtre par ambiance ou par lieu, puis explore la série."
          titleId="gallery-title"
          subtitleId="gallery-subtitle"
        />

        <GalleryFilters ambiances={ambiances} locations={locations} />

        <p className="font-ui text-sm" style={{ color: 'var(--color-muted)' }}>
          {filtered.length} photo{filtered.length > 1 ? 's' : ''} — page {page}/{totalPages}
        </p>

        <GalleryGrid photos={pageItems} onOpen={open} />

        <GalleryPagination
          page={page}
          totalPages={totalPages}
          onPrev={() => pushPage(page - 1)}
          onNext={() => pushPage(page + 1)}
        />

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

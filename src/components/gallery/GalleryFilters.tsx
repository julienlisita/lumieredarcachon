// src/components/gallery/GalleryFilters.tsx

'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import './GalleryFilters.css';
import { AMBIANCE_LABELS, type Ambiance } from '@/data/ambiences';

type Props = {
  ambiances: Ambiance[];
  locations: string[];
};

function updateParams(params: URLSearchParams, patch: Record<string, string | null>): string {
  const next = new URLSearchParams(params.toString());

  Object.entries(patch).forEach(([k, v]) => {
    if (v === null) next.delete(k);
    else next.set(k, v);
  });

  // si on filtre, on ferme la lightbox + reset pagination
  next.delete('photo');
  next.delete('page');

  const qs = next.toString();
  return qs ? `?${qs}` : '';
}

export default function GalleryFilters({ ambiances, locations }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const activeAmbiance = (params.get('ambiance') as Ambiance | null) ?? null;
  const activeLieu = params.get('lieu') ?? '';

  const hasFilters = !!activeAmbiance || !!activeLieu;

  const onToggleAmbiance = (ambiance: Ambiance) => {
    const next = updateParams(params, { ambiance: activeAmbiance === ambiance ? null : ambiance });
    router.push(`/gallery${next}`, { scroll: false });
  };

  const onToggleLieu = (lieu: string) => {
    const next = updateParams(params, { lieu: activeLieu === lieu ? null : lieu });
    router.push(`/gallery${next}`, { scroll: false });
  };

  const onClear = () => {
    router.push('/gallery', { scroll: false });
  };

  return (
    <div className="gallery-filters">
      <div className="gallery-filters__row">
        <p className="gallery-filters__label">Ambiances</p>
        <div className="gallery-filters__chips" role="list">
          {ambiances.map((a) => (
            <button
              key={a}
              type="button"
              className={clsx('chip', activeAmbiance === a && 'is-active')}
              onClick={() => onToggleAmbiance(a)}
            >
              {AMBIANCE_LABELS[a]}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-filters__row">
        <p className="gallery-filters__label">Lieux</p>
        <div className="gallery-filters__chips" role="list">
          {locations.map((l) => (
            <button
              key={l}
              type="button"
              className={clsx('chip', activeLieu === l && 'is-active')}
              onClick={() => onToggleLieu(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <div className="gallery-filters__actions">
          <button type="button" className="clear" onClick={onClear}>
            Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
}

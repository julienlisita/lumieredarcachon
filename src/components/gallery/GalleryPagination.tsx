// src/components/gallery/GalleryPagination.tsx

'use client';

import clsx from 'clsx';
import './GalleryPagination.css';

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export default function GalleryPagination({ page, totalPages, onPrev, onNext, className }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className={clsx('gallery-pagination', className)}>
      <button
        type="button"
        className="gallery-pagination__btn"
        onClick={onPrev}
        disabled={page <= 1}
      >
        Précédent
      </button>

      <span className="gallery-pagination__info">
        Page {page} / {totalPages}
      </span>

      <button
        type="button"
        className="gallery-pagination__btn"
        onClick={onNext}
        disabled={page >= totalPages}
      >
        Suivant
      </button>
    </div>
  );
}

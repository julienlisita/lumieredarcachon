// src/components/gallery/GalleryLightbox.tsx

'use client';

import { useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';
import { type Photo } from '@/data/photos';
import './gallery.css';

type Props = {
  open: boolean;
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({ open, photo, onClose, onPrev, onNext }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const modalRoot = useMemo(() => {
    if (typeof window === 'undefined') return null;
    return document.getElementById('modal-root');
  }, []);

  useEffect(() => {
    if (!open) return;

    closeBtnRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !photo || !modalRoot) return null;

  return createPortal(
    <div
      className="lightbox-root"
      role="dialog"
      aria-modal="true"
      aria-label="Photo en plein écran"
    >
      <button className="lightbox-backdrop" onClick={onClose} aria-label="Fermer" />

      <div className="lightbox-panel">
        <div className="lightbox-top">
          <div className="lightbox-caption">
            <p className="lightbox-label">{photo.label ?? ''}</p>
          </div>

          <button
            ref={closeBtnRef}
            className="lightbox-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="lightbox-media">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="lightbox-img"
            sizes="90vw"
            priority
          />
        </div>

        <div className="lightbox-nav">
          <button
            className={clsx('lightbox-navbtn')}
            onClick={onPrev}
            aria-label="Photo précédente"
          >
            ←
          </button>
          <button className={clsx('lightbox-navbtn')} onClick={onNext} aria-label="Photo suivante">
            →
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

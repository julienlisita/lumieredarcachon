// src/components/gallery/GalleryLightbox.tsx

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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

const ANIM_MS = 360;

export default function GalleryLightbox({ open, photo, onClose, onPrev, onNext }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const modalRoot = useMemo(() => {
    if (typeof window === 'undefined') return null;
    return document.getElementById('modal-root');
  }, []);

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // ✅ Conserver la dernière photo affichée pour permettre l'animation de fermeture
  const [displayPhoto, setDisplayPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (open && photo) {
      setDisplayPhoto(photo);
    }
  }, [open, photo]);

  useEffect(() => {
    if (!open) {
      // start close animation
      setVisible(false);

      const t = window.setTimeout(() => {
        setMounted(false);
        setDisplayPhoto(null); // ✅ seulement après l'anim
      }, ANIM_MS);

      return () => window.clearTimeout(t);
    }

    // open: mount then animate next frame
    setMounted(true);
    const raf = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, [open]);

  // Focus au moment où c'est visible
  useEffect(() => {
    if (!visible) return;
    closeBtnRef.current?.focus();
  }, [visible]);

  // Scroll lock + keyboard tant que la lightbox est montée (inclut la fermeture animée)
  useEffect(() => {
    if (!mounted) return;

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
  }, [mounted, onClose, onPrev, onNext]);

  if (!mounted || !displayPhoto || !modalRoot) return null;

  return createPortal(
    <div className={clsx('lightbox-root', visible && 'is-visible')} role="dialog" aria-modal="true">
      <button className="lightbox-backdrop" onClick={onClose} aria-label="Fermer" />

      <div className="lightbox-panel" aria-label="Photo en plein écran">
        <div className="lightbox-top">
          <div className="lightbox-caption">
            <p className="lightbox-label">{displayPhoto.label ?? ''}</p>
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
            src={displayPhoto.src}
            alt={displayPhoto.alt}
            fill
            className="lightbox-img"
            sizes="90vw"
            priority
          />
        </div>

        <div className="lightbox-nav">
          <button className="lightbox-navbtn" onClick={onPrev} aria-label="Photo précédente">
            ←
          </button>
          <button className="lightbox-navbtn" onClick={onNext} aria-label="Photo suivante">
            →
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

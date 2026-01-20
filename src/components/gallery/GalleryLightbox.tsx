// src/components/gallery/GalleryLightbox.tsx

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';
import { type Photo } from '@/data/photos';
import './GalleryLightbox.css';

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

  // Garder la dernière photo affichée pendant l’animation de fermeture
  const [displayPhoto, setDisplayPhoto] = useState<Photo | null>(null);

  // Sync photo -> displayPhoto (pour garder la photo pendant l'anim de fermeture)
  useEffect(() => {
    if (open && photo) setDisplayPhoto(photo);
  }, [open, photo]);

  // Gestion mount/visible + délai de fermeture
  useEffect(() => {
    if (!open) {
      setVisible(false);

      const t = window.setTimeout(() => {
        setMounted(false);
        setDisplayPhoto(null);
      }, ANIM_MS);

      return () => window.clearTimeout(t);
    }

    setMounted(true);
    const raf = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, [open]);

  // Focus sur le bouton de fermeture une fois visible
  useEffect(() => {
    if (!visible) return;
    closeBtnRef.current?.focus();
  }, [visible]);

  // Lock scroll (html + body) pendant que la lightbox est montée (inclut l'anim de fermeture)
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [mounted]);

  // Raccourcis clavier
  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mounted, onClose, onPrev, onNext]);

  if (!mounted || !displayPhoto || !modalRoot) return null;

  const titleId = 'lightbox-title';
  const descId = 'lightbox-desc';

  return createPortal(
    <div
      className={clsx('lightbox-root', visible && 'is-visible')}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={displayPhoto.description ? descId : undefined}
    >
      <button className="lightbox-backdrop" onClick={onClose} aria-label="Fermer" />

      <div className="lightbox-panel">
        {/* Top bar */}
        <div className="lightbox-top">
          <p id={titleId} className="lightbox-label">
            {displayPhoto.label ?? ''}
          </p>

          <button
            ref={closeBtnRef}
            className="lightbox-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Photo */}
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

        {/* Bottom info + nav */}
        <div className="lightbox-bottom">
          <div className="lightbox-caption">
            {displayPhoto.location && (
              <div className="lightbox-meta">
                <span className="lightbox-chip">{displayPhoto.location}</span>
              </div>
            )}

            {displayPhoto.description && (
              <p id={descId} className="lightbox-desc">
                {displayPhoto.description}
              </p>
            )}
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
      </div>
    </div>,
    modalRoot
  );
}

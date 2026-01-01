// src/components/media/BestOfPhotoCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import './BestOfPhotoCard.css';

export type BestOfPhoto = {
  id: string;
  src: string;
  alt: string;
  label?: string;
  href?: string;
  priority?: boolean;
};

type Props = {
  photo: BestOfPhoto;
  className?: string;
};

export default function BestOfPhotoCard({ photo, className }: Props) {
  const href = photo.href ?? '/galerie';

  return (
    <Link href={href} className={clsx('bestof-card', className)}>
      <div className="bestof-media">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={photo.priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="bestof-img"
        />
        <div className="bestof-overlay" />
        {photo.label && (
          <div className="bestof-caption">
            <span className="bestof-label">{photo.label}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

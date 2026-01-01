// src/components/media/GalleryPhotoCard.tsx

import Image from 'next/image';
import { type Photo } from '@/data/photos';
import './GalleryPhotoCard.css';

type Props = {
  photo: Photo;
  onOpen: () => void;
};

export default function GalleryPhotoCard({ photo, onOpen }: Props) {
  return (
    <button id={photo.id} type="button" className="gallery-card" onClick={onOpen}>
      <div className="gallery-media">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="gallery-img"
        />
      </div>
    </button>
  );
}

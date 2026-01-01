// src/components/gallery/GalleryGrid.tsx

import { Photo } from '@/data/photos';
import GalleryPhotoCard from '../media/GalleryPhotoCard';

type Props = {
  photos: Photo[];
  onOpen: (id: string) => void;
};

export default function GalleryGrid({ photos, onOpen }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {photos.map((p) => (
        <GalleryPhotoCard key={p.id} photo={p} onOpen={() => onOpen(p.id)} />
      ))}
    </div>
  );
}

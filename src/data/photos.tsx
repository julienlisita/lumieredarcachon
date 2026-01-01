export type Photo = {
  id: string;
  src: string;
  alt: string;
  label?: string;
};

export const PHOTOS: Photo[] = [
  {
    id: 'plage-chapelle',
    src: '/photos/01.webp',
    alt: 'Vue de la plage de la chapelle',
    label: 'Cap Ferret — vue de la dune',
  },
  {
    id: 'escalumade-illumination',
    src: '/photos/02.webp',
    alt: 'Illumination de L’escalumade',
    label: 'L’escalumade — Marée basse',
  },
  {
    id: 'andernos-plage',
    src: '/photos/03.webp',
    alt: 'Plage des américain à Andernos',
    label: 'Andernos — plage des américains',
  },
  {
    id: 'dune-crepuscule',
    src: '/photos/04.webp',
    alt: 'Crépuscule sur la dune du pilat',
    label: 'Dune du pilat — Crépuscule',
  },
  {
    id: 'capferret-phare',
    src: '/photos/05.webp',
    alt: 'Phare du cap ferret',
    label: 'Cap Ferret — vue du Phare',
  },
  {
    id: 'plage-pereire',
    src: '/photos/06.webp',
    alt: 'Chevaux sur la plage',
    label: 'Arcachon — plage pereire',
  },
];

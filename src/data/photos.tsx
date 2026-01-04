// src/data/photos.tsx

export type Photo = {
  id: string;
  src: string;
  alt: string;
  area: string;
  label?: string;
  description?: string;
  location?: string;
  tags?: string[];
  date?: string;
};

export const PHOTOS: Photo[] = [
  {
    id: 'plage-chapelle',
    src: '/photos/01.webp',
    alt: 'Vue de la plage de la Chapelle au Cap Ferret',
    label: 'Cap Ferret — entre dune et pins',
    area: 'Lège-Cap-Ferret',
    description:
      'Depuis la dune, la plage de la Chapelle se dévoile doucement, encadrée par les pins et la lumière du Bassin.',
    location: 'Plage de la Chapelle',
    tags: ['plages', 'pins', 'lumiere-douce', 'horizons'],
    date: '2024-06',
  },
  {
    id: 'escalumade-illumination',
    src: '/photos/02.webp',
    alt: 'Reflets et lumière sur L’Escalumade à marée basse',
    label: 'L’Escalumade — lignes de marée',
    area: 'Lège-Cap-Ferret',
    description:
      'À marée basse, L’Escalumade se transforme en un jeu de reflets et de lignes dessinées par l’eau.',
    location: 'Plage de la Croix des Marins (Claouey)',
    tags: ['marée-basse', 'reflets', 'lignes', 'eau'],
    date: '2024-05',
  },
  {
    id: 'andernos-plage',
    src: '/photos/03.webp',
    alt: 'Plage des Quinconces à Andernos-les-Bains',
    label: 'Andernos — plage des Quinconces',
    area: 'Andernos-les-Bains',
    description:
      'Une plage paisible à Andernos, où le Bassin révèle son visage le plus calme et lumineux.',
    location: 'Plage des Quinconces',
    tags: ['plages', 'lumiere-douce', 'ciel-calme', 'eau'],
    date: '2024-05',
  },
  {
    id: 'dune-crepuscule',
    src: '/photos/04.webp',
    alt: 'Crépuscule sur la dune du Pilat',
    label: 'Dune du Pilat — crépuscule',
    area: 'La Teste-de-Buch',
    description:
      'Au sommet de la dune, le jour s’efface lentement, laissant place aux teintes chaudes du crépuscule.',
    location: 'Dune du Pilat',
    tags: ['dunes', 'crépuscules', 'lumiere-doree', 'horizons'],
    date: '2024-07',
  },
  {
    id: 'capferret-phare',
    src: '/photos/05.webp',
    alt: 'Vue depuis le phare du Cap Ferret vers la dune du Pilat',
    label: 'Cap Ferret — vue du phare',
    area: 'Lège-Cap-Ferret',
    description:
      'Depuis le phare du Cap Ferret, le regard se porte au loin, jusqu’à la silhouette de la dune du Pilat.',
    location: 'Phare du Cap Ferret',
    tags: ['points-de-vue', 'horizons', 'lumiere-claire'],
    date: '2024-04',
  },
  {
    id: 'plage-pereire',
    src: '/photos/06.webp',
    alt: 'Chevaux sur la plage Pereire à Arcachon',
    label: 'Arcachon — plage Pereire',
    area: 'Arcachon',
    description:
      'Un instant suspendu sur la plage Pereire, où les chevaux avancent face à l’horizon du Bassin.',
    location: 'Plage Pereire',
    tags: ['plages', 'chevaux', 'horizons', 'lumiere-douce'],
    date: '2024-06',
  },
];

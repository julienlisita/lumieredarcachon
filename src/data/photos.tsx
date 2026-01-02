// src/data/photos.tsx

export type Photo = {
  id: string;
  src: string;
  alt: string;
  label?: string;
  description?: string;
  location?: string;
  date?: string;
};

export const PHOTOS: Photo[] = [
  {
    id: 'plage-chapelle',
    src: '/photos/01.webp',
    alt: 'Vue de la plage de la Chapelle au Cap Ferret',
    label: 'Cap Ferret — entre dune et pins',
    description:
      'Depuis la dune, la plage de la Chapelle se dévoile doucement, encadrée par les pins et la lumière du Bassin.',
    location: 'Plage de la Chapelle, Lège-Cap-Ferret',
    date: '2024-06',
  },
  {
    id: 'escalumade-illumination',
    src: '/photos/02.webp',
    alt: 'Reflets et lumière sur L’Escalumade à marée basse',
    label: 'L’Escalumade — lignes de marée',
    description:
      'À marée basse, L’Escalumade se transforme en un jeu de reflets et de lignes dessinées par l’eau.',
    location: 'Plage de la Croix des Marins, Claouey, Lège-Cap-Ferret',
    date: '2024-05',
  },
  {
    id: 'andernos-plage',
    src: '/photos/03.webp',
    alt: 'Plage des Quinconces à Andernos-les-Bains',
    label: 'Andernos — plage des Quinconces',
    description:
      'Une plage paisible à Andernos, où le Bassin révèle son visage le plus calme et lumineux.',
    location: 'Plage des Quinconces, Andernos-les-Bains',
    date: '2024-05',
  },
  {
    id: 'dune-crepuscule',
    src: '/photos/04.webp',
    alt: 'Crépuscule sur la dune du Pilat',
    label: 'Dune du Pilat — crépuscule',
    description:
      'Au sommet de la dune, le jour s’efface lentement, laissant place aux teintes chaudes du crépuscule.',
    location: 'Dune du Pilat, Pyla-sur-Mer, La Teste-de-Buch',
    date: '2024-07',
  },
  {
    id: 'capferret-phare',
    src: '/photos/05.webp',
    alt: 'Vue depuis le phare du Cap Ferret vers la dune du Pilat',
    label: 'Cap Ferret — vue du phare',
    description:
      'Depuis le phare du Cap Ferret, le regard se porte au loin, jusqu’à la silhouette de la dune du Pilat.',
    location: 'Phare du Cap Ferret, Lège-Cap-Ferret',
    date: '2024-04',
  },
  {
    id: 'plage-pereire',
    src: '/photos/06.webp',
    alt: 'Chevaux sur la plage Pereire à Arcachon',
    label: 'Arcachon — plage Pereire',
    description:
      'Un instant suspendu sur la plage Pereire, où les chevaux avancent face à l’horizon du Bassin.',
    location: 'Plage Pereire, Arcachon',
    date: '2024-06',
  },
];

// src/data/journal.ts

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag?: string;
  cover?: {
    src: string;
    alt: string;
  };
  content: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'quote'; text: string }
    | { type: 'ul'; items: string[] }
  >;
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'heure-doree-pereire',
    title: 'L’heure dorée à Pereire : quand tout devient calme',
    excerpt:
      'Quelques repères simples pour profiter des reflets et des couleurs sans se presser — et rentrer avec une série cohérente.',
    date: 'À venir',
    readingTime: '4 min',
    tag: 'Spots',
    cover: {
      src: '/photos/06.webp',
      alt: 'Lumière dorée sur la plage Pereire, au Bassin d’Arcachon',
    },
    content: [
      {
        type: 'p',
        text: 'Il y a des soirs où Pereire semble ralentir. Le vent tombe, la plage s’étire, et le Bassin prend cette teinte dorée qui transforme les scènes les plus simples en souvenirs nets. L’heure dorée n’est pas un “effet” : c’est une atmosphère. Et c’est souvent là que les images deviennent plus justes.',
      },
      {
        type: 'p',
        text: 'Ce que j’aime ici, c’est qu’on n’a pas besoin de grand-chose : un horizon, des silhouettes, quelques reflets. À condition d’arriver avec l’idée de regarder avant de déclencher — et de laisser la lumière venir à toi.',
      },
      { type: 'h2', text: 'Choisir le bon moment (sans courir)' },
      {
        type: 'p',
        text: 'Sur le Bassin, l’heure dorée varie beaucoup selon la saison. Plutôt que de viser “le coucher de soleil”, je te conseille de penser en deux temps : l’avant (quand la lumière commence à s’adoucir) et l’après (quand les contrastes retombent et que tout devient plus délicat).',
      },
      {
        type: 'ul',
        items: [
          'Arriver 30 à 45 minutes avant le moment “fort” : tu repères calmement les lignes et les points d’intérêt.',
          'Observer l’eau : quand les reflets deviennent longs et continus, tu es dans la bonne fenêtre.',
          'Accepter de rater des images : à Pereire, l’ambiance se construit sur plusieurs minutes, pas sur un seul instant.',
        ],
      },
      { type: 'h2', text: 'Composer simple : horizon, silhouettes, respiration' },
      {
        type: 'p',
        text: 'Quand la lumière est belle, on peut être tenté de tout mettre dans le cadre. En réalité, c’est l’inverse : plus tu simplifies, plus tu laisses la lumière parler. Une ligne d’horizon bien posée, une silhouette isolée, un espace vide assumé — et l’image respire.',
      },
      {
        type: 'p',
        text: 'Un repère utile : si tu ne sais pas quoi garder, enlève. Recule légèrement. Et cherche une seule intention : le calme, le mouvement, le reflet, ou la rencontre entre une forme et la lumière.',
      },
      {
        type: 'quote',
        text: 'La lumière ne se chasse pas : elle se laisse approcher.',
      },
      { type: 'h2', text: 'Couleurs : rester proche du réel' },
      {
        type: 'p',
        text: 'Le doré de fin de journée peut vite virer au jaune. Mon conseil : vise une balance des blancs un peu plus neutre que ce que “tu ressens”. Tu garderas les nuances du sable, la douceur du ciel, et cette finesse qui fait l’identité du Bassin.',
      },
      {
        type: 'ul',
        items: [
          'Garde un contraste modéré : les ombres doivent rester lisibles.',
          'Préserve les hautes lumières : le ciel et l’eau gagnent en douceur.',
          'Si tu retouches : réduis un peu la saturation avant de toucher au reste.',
        ],
      },
      { type: 'h2', text: 'Sortir avec une petite série cohérente' },
      {
        type: 'p',
        text: 'Avant de repartir, je me fixe souvent un mini-objectif : 6 à 10 images qui racontent la même ambiance. Une ouverture large (la plage, l’horizon), deux scènes de vie (silhouettes, marche, chevaux…), puis des détails (reflets, traces dans le sable). Ce n’est pas la quantité qui compte : c’est la continuité.',
      },
      {
        type: 'p',
        text: 'Si tu veux, je publierai bientôt une version “marées + Pereire” pour mieux anticiper les conditions. En attendant : prends le temps, marche un peu, et laisse Pereire te donner le rythme.',
      },
    ],
  },
];

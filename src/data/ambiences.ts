// src/data/ambiences.ts

export const AMBIANCE_FILTERS = [
  'aurore',
  'crepuscule',

  'lumiere-douce',
  'clarte',
  'contre-jour',

  'brume',
  'reflets',
] as const;

export type Ambiance = (typeof AMBIANCE_FILTERS)[number];

export const AMBIANCE_LABELS: Record<Ambiance, string> = {
  aurore: 'Aurore',
  crepuscule: 'Crépuscule',

  'lumiere-douce': 'Lumière douce',
  clarte: 'Clarté',
  'contre-jour': 'Contre-jour',

  brume: 'Brume',
  reflets: 'Reflets',
};

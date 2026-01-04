// src/data/ambiences.ts

export const AMBIANCE_FILTERS = [
  'aurores',
  'crépuscules',
  'brumes',
  'reflets',
  'horizons',
  'lumiere-douce',
] as const;

export type Ambiance = (typeof AMBIANCE_FILTERS)[number];

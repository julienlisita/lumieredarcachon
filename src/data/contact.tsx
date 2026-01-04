// src/data/contact.ts

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';
import { Mail, Instagram, MapPin, Facebook } from 'lucide-react';

export const contactInfos: ReadonlyArray<FeatureItem> = [
  {
    title: 'Email',
    description: 'contact@julienlisita.com',
    icon: <Mail aria-hidden="true" />,
    href: 'mailto:contact@julienlisita.com',
  },
  {
    title: 'Instagram',
    description: '@julienlisita',
    icon: <Instagram aria-hidden="true" />,
    href: 'https://instagram.com/julienlisita',
  },
  {
    title: 'Facebook',
    description: 'Julien Lisita',
    icon: <Facebook aria-hidden="true" />,
    href: 'https://www.facebook.com/people/Julien-Lisita/61558499249833/',
  },
] as const;

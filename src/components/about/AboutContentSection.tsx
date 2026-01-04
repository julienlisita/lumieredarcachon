// src/components/about/AboutContentSection.tsx

import Image from 'next/image';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';

export default function AboutContentSection() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Démarche"
          title="Derrière Lumière d’Arcachon"
          subtitle="Une passion pour la lumière, le littoral et les instants simples."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <Image
              src="/images/about/me.webp"
              alt="Marche sur la plage du Bassin d’Arcachon, à la recherche des lumières du littoral"
              width={800}
              height={1067} // ratio ~3/4
              className="h-auto w-full rounded-xl object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
              priority
            />
          </div>

          {/* Texte */}
          <div className="space-y-5 max-w-prose">
            <p className="font-body text-base leading-relaxed">
              Lumière d’Arcachon est né d’un attachement profond au Bassin et à ses variations
              infinies. Ici, la lumière ne se répète jamais : elle glisse sur l’eau, traverse les
              pins, s’adoucit au lever du jour ou s’embrase à l’approche du crépuscule.
            </p>

            <p className="font-body text-base leading-relaxed">
              Amateur de photographie, je parcours le littoral au fil des saisons, appareil en main,
              à la recherche d’instants simples et sincères. Plus que des lieux, ce sont des
              ambiances que je cherche à saisir — des silences, des reflets, des horizons.
            </p>

            <p className="font-body text-base leading-relaxed">
              En parallèle, je suis développeur web freelance. Ce site est aussi l’occasion de
              réunir ces deux univers : créer un espace sobre et durable pour partager des images,
              raconter un territoire, et laisser le temps faire son œuvre.
            </p>

            <p className="font-body text-base leading-relaxed">
              Lumière d’Arcachon est un projet en évolution, ouvert aux échanges, aux regards
              croisés et aux rencontres autour du Bassin.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

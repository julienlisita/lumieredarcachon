// src/components/home/Hero.tsx

import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  const showBackground = true;

  return (
    <section className="hero-section">
      {/* Image de fond */}
      {showBackground && (
        <>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/home/hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {/* Overlay noir avec opacité */}
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      <div className="hero-container">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/logo-dark-mode.png"
            alt="Logo de 'Lumière d'Arcachon'"
            width={300}
            height={300}
            sizes="300px"
          />
        </div>

        {/* Titre */}
        <PageTitle className="text-center md:text-left">
          Instants, reflets et horizons du Bassin d’Arcachon
        </PageTitle>

        {/* CTAs */}
        <div className="hero-actions">
          <Button variant="primary" href="/gallery">
            Découvrir la galerie
          </Button>
          <Button variant="glasslight" href="https://www.instagram.com/julienlisita/">
            Voir sur Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}

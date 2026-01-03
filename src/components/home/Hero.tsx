// src/components/home/Hero.tsx

import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  const showBackground = true;

  return (
    <section className="hero-section">
      {/* Background */}
      {showBackground && (
        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/images/home/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg__img"
          />
          <div className="hero-bg__overlay" />
        </div>
      )}

      {/* Content */}
      <div className="hero-container">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/logo-dark-mode.png"
            alt="Logo de 'Lumière d'Arcachon'"
            width={300}
            height={300}
            sizes="300px"
            priority
          />
        </div>

        <PageTitle className="text-center md:text-left" color="inherit">
          Instants, reflets et horizons du Bassin d’Arcachon
        </PageTitle>

        <div className="hero-actions">
          <Button variant="primary" href="/galerie">
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

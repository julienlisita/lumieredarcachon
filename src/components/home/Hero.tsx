// src/components/home/Hero.tsx

import Button from '@/components/ui/Button';
import './Hero.css';
import Image from 'next/image';
import heroImage from '../../../public/images/home/hero.webp';

export default function Hero({ showBackground = true }: { showBackground?: boolean }) {
  return (
    <section className="hero-section" aria-labelledby="home-hero-title">
      {/* Background */}
      {showBackground && (
        <div className="hero-bg" aria-hidden="true">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg__img"
            placeholder="blur"
            quality={80}
          />
          <div className="hero-bg__overlay" />
        </div>
      )}

      {/* Content */}
      <div className="hero-container">
        <h1 id="home-hero-title" className="sr-only">
          Lumière d’Arcachon
        </h1>

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

        <p className="hero-claim">Instants, reflets et horizons du Bassin d’Arcachon</p>

        <div className="hero-actions">
          <Button variant="primary" href="/gallery">
            Découvrir la galerie
          </Button>
          <Button
            variant="glasslight"
            href="https://www.instagram.com/julienlisita/"
            target="_blank"
          >
            Voir sur Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}

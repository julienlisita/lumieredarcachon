// src/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './Header.css';

const NAV_ITEMS = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
];

type Theme = 'light' | 'dark';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null); // <nav> maintenant
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => setIsOpen(false);

  // ✅ Init theme: localStorage > system preference
  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    const initialTheme: Theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // ✅ Toggle theme + persist
  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      window.localStorage.setItem('theme', next);
      return next;
    });
  };

  // Esc pour fermer
  useEffect(() => {
    if (!isOpen) return; // on ne fait rien si le menu est fermé
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        btnRef.current?.focus(); // on remet le focus sur le bouton burger
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Fermer si clic en dehors
  useEffect(() => {
    if (!isOpen) return; // on ne fait rien si le menu est fermé
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        // la ref est bien attachée.
        menuRef.current &&
        //  le clic ne s’est pas produit dans le menu.
        !menuRef.current.contains(target) &&
        // le clic ne vient pas du bouton burger
        target !== btnRef.current
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [isOpen]);

  // Fermer le menu quand la route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    const html = document.documentElement; // plus sûr que body seul
    const body = document.body;

    if (isOpen) {
      const scrollY = window.scrollY;
      html.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      return () => {
        html.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, scrollY); // restaure la position précédente
      };
    }
  }, [isOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const linkProps = (href: string) => (isActive(href) ? { 'aria-current': 'page' as const } : {});

  return (
    <header className="site-header">
      {/* Logo (lien vers l’accueil) */}
      <Link href="/" aria-label="Accueil" className="logo-wrapper">
        <Image
          src="/images/logo-light-mode.png"
          alt="Logo du site"
          fill
          sizes="(max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>

      {/* Nav desktop */}
      <nav className="main-nav hidden lg:block" aria-label="Navigation principale">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link className="nav-link" href={item.href} {...linkProps(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Actions à droite (desktop) */}
      <div className="header-actions hidden lg:flex">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <Sun className="icon" aria-hidden="true" />
          ) : (
            <Moon className="icon" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Bouton burger (mobile) + toggle */}
      <div className="header-actions lg:hidden">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <Sun className="icon" aria-hidden="true" />
          ) : (
            <Moon className="icon" aria-hidden="true" />
          )}
        </button>

        <button
          ref={btnRef}
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          type="button"
        >
          {isOpen ? (
            <X className="icon" aria-hidden="true" />
          ) : (
            <Menu className="icon" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        ref={menuRef}
        id="mobile-nav"
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        aria-label="Navigation principale mobile"
        hidden={!isOpen}
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: true } : {})}
      >
        <ul className="mobile-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="mobile-link"
                {...linkProps(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

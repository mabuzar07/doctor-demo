'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '@/assets/images/logo.svg';

/* nav links – all point to home for now */
const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',  href: '/' },
  { label: 'Services',  href: '/' },
  { label: 'Pricing',   href: '/' },
  { label: 'Doctors',   href: '/' },
  { label: 'Contact Us', href: '/' },
];

/* languages with flag images via flagcdn.com */
const LANGUAGES = [
  { code: 'EN', label: 'English',   iso: 'us' },
  { code: 'HI', label: 'हिन्दी',   iso: 'in' },
  { code: 'AF', label: 'Afrikaans', iso: 'za' },
  { code: 'ZU', label: 'Zulu',      iso: 'za' },
  { code: 'FR', label: 'Français',  iso: 'fr' },
  { code: 'ES', label: 'Español',   iso: 'es' },
  { code: 'PT', label: 'Português', iso: 'pt' },
  { code: 'ZH', label: '中文',      iso: 'cn' },
  { code: 'AR', label: 'العربية',   iso: 'sa' },
];

const flagUrl = (iso) => `https://flagcdn.com/w40/${iso}.png`;

/* mobile drawer variants */
const drawerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -8,  scale: 0.97, transition: { duration: 0.18, ease: 'easeIn' } },
};

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [langOpen,    setLangOpen]    = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef(null);
  const pathname = usePathname();

  /* show navbar pill after scrolling 60px */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close lang dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu  = () => setMenuOpen(false);

  const selectLang = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  return (
    /* navbar strip – fixed, hidden until scroll */
    <div className={`navbar-wrapper${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container-custom">
        <div className="navbar-inner">

          {/* logo */}
          <Link href="/" className="navbar-logo" onClick={closeMenu} aria-label="My Doctor RSA home">
            <Image
              src={logoSrc}
              alt="My Doctor RSA"
              width={140}
              height={36}
              priority
              className="navbar-logo-img"
            />
          </Link>

          {/* desktop nav links */}
          <ul className="nav-links d-none d-lg-flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* desktop controls */}
          <div className="navbar-controls d-none d-lg-flex">
            {/* language selector */}
            <div className="lang-selector" ref={langRef} onClick={() => setLangOpen((p) => !p)} aria-label="Select language" aria-expanded={langOpen}>
              <span className="lang-flag-wrap">
                <img src={flagUrl(selectedLang.iso)} alt={selectedLang.label} width={22} height={15} className="lang-flag-img" />
              </span>
              <span>{selectedLang.code}</span>
              <span className={`lang-caret${langOpen ? ' open' : ''}`}>&#9660;</span>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    className="lang-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } }}
                    exit={{ opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.14 } }}
                    role="listbox"
                  >
                    {LANGUAGES.map((lang) => (
                      <li
                        key={lang.code}
                        className={`lang-option${lang.code === selectedLang.code ? ' active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); selectLang(lang); }}
                        role="option"
                        aria-selected={lang.code === selectedLang.code}
                      >
                        <span className="lang-flag-wrap">
                          <img src={flagUrl(lang.iso)} alt={lang.label} width={22} height={15} className="lang-flag-img" />
                        </span>
                        <span className="lang-option-code">{lang.code}</span>
                        <span className="lang-option-label">{lang.label}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link href="/" className="login-link">Login</Link>
            <Link href="/" className="btn-get-started">Get Started</Link>
          </div>

          {/* hamburger – mobile */}
          <button
            className={`hamburger d-lg-none${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
            <div className="mobile-controls">
              <div className="lang-selector mobile-lang" onClick={() => setLangOpen((p) => !p)} aria-label="Select language">
                <span className="lang-flag-wrap">
                  <img src={flagUrl(selectedLang.iso)} alt={selectedLang.label} width={22} height={15} className="lang-flag-img" />
                </span>
                <span>{selectedLang.code}</span>
                <span className={`lang-caret${langOpen ? ' open' : ''}`}>&#9660;</span>
              </div>
              {langOpen && (
                <ul className="lang-dropdown lang-dropdown--mobile" role="listbox">
                  {LANGUAGES.map((lang) => (
                    <li
                      key={lang.code}
                      className={`lang-option${lang.code === selectedLang.code ? ' active' : ''}`}
                      onClick={() => selectLang(lang)}
                      role="option"
                      aria-selected={lang.code === selectedLang.code}
                    >
                      <span className="lang-flag-wrap">
                        <img src={flagUrl(lang.iso)} alt={lang.label} width={22} height={15} className="lang-flag-img" />
                      </span>
                      <span className="lang-option-code">{lang.code}</span>
                      <span className="lang-option-label">{lang.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link href="/" className="login-link" onClick={closeMenu}>Login</Link>
              <Link href="/" className="btn-get-started" onClick={closeMenu}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

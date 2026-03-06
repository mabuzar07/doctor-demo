'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '@/assets/images/logo.svg';
import usFlagSrc from '@/assets/images/united states.svg';

/* nav links */
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Contact Us', href: '/contact' },
];

/* mobile drawer variants */
const drawerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -8,  scale: 0.97, transition: { duration: 0.18, ease: 'easeIn' } },
};

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [isScrolled,  setIsScrolled]  = useState(false);
  const pathname = usePathname();

  /* show navbar pill after scrolling 60px */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu  = () => setMenuOpen(false);

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
            <div className="lang-selector" role="button" aria-label="Select language">
              <div className="lang-flag-wrap">
                <Image src={usFlagSrc} alt="US flag" width={22} height={22} className="lang-flag-img" />
              </div>
              <span>EN</span>
              <span className="lang-caret">&#9660;</span>
            </div>

            <Link href="/login" className="login-link">Login</Link>
            <Link href="/get-started" className="btn-get-started">Get Started</Link>
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
              <div className="lang-selector" role="button" aria-label="Select language">
                <div className="lang-flag-wrap">
                  <Image src={usFlagSrc} alt="US flag" width={22} height={22} className="lang-flag-img" />
                </div>
                <span>EN</span>
                <span className="lang-caret">&#9660;</span>
              </div>
              <Link href="/login" className="login-link" onClick={closeMenu}>Login</Link>
              <Link href="/get-started" className="btn-get-started" onClick={closeMenu}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

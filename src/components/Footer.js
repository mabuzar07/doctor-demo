'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import logoSrc      from '@/assets/images/logo.svg';
import linkedinIcon  from '@/assets/images/linkedin.svg';
import facebookIcon  from '@/assets/images/facebook.svg';
import instagramIcon from '@/assets/images/instagram.svg';
import youtubeIcon   from '@/assets/images/youtube.svg';
import whatsappIcon  from '@/assets/images/whatsapp.svg';
import googlePlayIcon from '@/assets/images/google-play.svg';
import appleStoreIcon from '@/assets/images/apple-store.svg';

/* footer navigation columns */
const FOOTER_COLS = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Rates', href: '/pricing' },
      { label: 'Doctors', href: '/doctors' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'ToS', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Disclaimer of liability', href: '/disclaimer' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Email', href: '/contact#email' },
      { label: 'Phone', href: '/contact#phone' },
      { label: 'Address', href: '/contact#address' },
    ],
  },
];

/* social icon definitions using local SVG assets */
const SOCIAL_ICONS = [
  { src: linkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { src: facebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { src: instagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  { src: youtubeIcon, href: 'https://youtube.com', label: 'YouTube' },
  { src: whatsappIcon, href: 'https://whatsapp.com', label: 'WhatsApp' },
];

/* fade-up animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function AnimatedSection({ children, custom, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

/* footer component */
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container-custom">
        <div className="row g-5">

          {/* brand column */}
          <div className="col-12 col-lg-5">
            <AnimatedSection custom={0}>
              {/* logo image */}
              <div className="footer-logo-wrap">
                <Image src={logoSrc} alt="My Doctor RSA" width={160} height={42}  />
              </div>
              <p className="footer-tagline">Your health, our intelligence</p>

              {/* social icons – using local SVG assets */}
              <div className="footer-socials">
                {SOCIAL_ICONS.map(({ src, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={label}
                  >
                    <Image src={src} alt={label} width={18} height={18} />
                  </a>
                ))}
              </div>

            </AnimatedSection>
          </div>

          {/* nav columns */}
          <div className="col-12 col-lg-7">
            <div className="row g-4 justify-content-between">
              {FOOTER_COLS.map(({ heading, links }, colIdx) => (
                <div key={heading} className="col-6 col-sm-auto">
                  <AnimatedSection custom={colIdx + 1}>
                    <p className="footer-nav-heading">{heading}</p>
                    <ul className="footer-nav-list">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* bottom bar */}
        <div className="footer-bottom">
          <div className="store-badges">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Get it on Google Play">
              <Image src={googlePlayIcon} alt="Get it on Google Play" width={135} height={40}  />
              <div>
                <div className="text-sm">Get it on</div>
                <div className="text-md">Google Play</div>
              </div>
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Download on the App Store">
              <Image src={appleStoreIcon} alt="Download on the App Store" width={135} height={40}  />
              <div>
                <div className="text-sm">Download on the</div>
                <div className="text-md">App Store</div>
              </div>
            </a>
          </div>
          <div className="footer-bottom-text">
            <span>2026 My Doctor RSA. All rights reserved.</span>
            <br />
            <span>Disclaimer: Not a substitute for medical advice.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

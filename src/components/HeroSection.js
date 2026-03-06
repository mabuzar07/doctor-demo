'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutIcon from '@/assets/images/about-icon.svg';
import headerImage from '@/assets/images/header.png';
import headerBg from '@/assets/images/header-bg.png';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

const badgePop = {
  hidden: { opacity: 0, y: -14, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut', delay: 0.05 } },
};

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${typeof headerBg === 'string' ? headerBg : headerBg.src})` }}
        aria-hidden="true"
      />

      <div className="hero-content">
        <div className="row align-items-start g-4 g-lg-5">

          <motion.div
            className="col-12 col-lg-6"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="about-badge"
              variants={badgePop}
              initial="hidden"
              animate="visible"
            >
              <img
                src={typeof aboutIcon === 'string' ? aboutIcon : aboutIcon.src}
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
              />
              <span>About Us</span>
            </motion.div>

            <h1 className="hero-heading">
              Democratizing <br /> Access to Healthcare <br /> in the RSA
            </h1>

            <p className="hero-description">
             My Doctor App was created to make intelligent, <br /> accessible, and affordable healthcare available to every South african household — regardless of location or connectivity.
            </p>
          </motion.div>

          <motion.div
            className="col-12 col-lg-6"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-image-wrap">
              <img
                src={typeof headerImage === 'string' ? headerImage : headerImage.src}
                alt="My Doctor RSA – doctor with patient and pharmacy app"
                className="hero-main-img"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

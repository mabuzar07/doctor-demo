'use client';

import Image from 'next/image';
import relumeIcon from '@/assets/images/relume.svg';
import webflowIcon from '@/assets/images/webflow.svg';

const MARQUEE_LOGOS = [
  { src: relumeIcon,  alt: 'Relume'  },
  { src: webflowIcon, alt: 'Webflow' },
  { src: relumeIcon,  alt: 'Relume'  },
  { src: webflowIcon, alt: 'Webflow' },
  { src: relumeIcon,  alt: 'Relume'  },
  { src: webflowIcon, alt: 'Webflow' },
];

export default function TrustedSection() {
  return (
    <section className="trusted-section">
      <p className="trusted-heading">Trusted &amp; Supported By</p>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
            <div key={i} className="marquee-item">
              <Image src={logo.src} alt={logo.alt} width={120} height={32} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

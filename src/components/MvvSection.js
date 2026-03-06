'use client';

import Image from 'next/image';
import shapeRight from '@/assets/images/shape-right.png';
import shapeBottom from '@/assets/images/shape-bottom.png';
import patternImg from '@/assets/images/pattern.jpg';

const MVV_CARDS = [
  {
    title: 'Mission',
    text: 'To make quality healthcare guidance accessible to everyone in the Republic of South Africa.',
    blue: false,
  },
  {
    title: 'Vision',
    text: "To become Africa's leading AI-powered healthcare platform, transforming how communities access medical support.",
    blue: false,
  },
  {
    title: 'Values',
    items: ['Accessibility', 'Innovation', 'Trust', 'Human-Centered Care', 'Data Security'],
    blue: false,
  },
];

const STATS = [
  { num: '100M', sym: '+', label: 'Population' },
  { num: '78',   sym: '%', label: 'Limited Access to Diagnosis' },
  { num: '19',   sym: '%', label: 'Internet Penetration' },
  { num: '85',   sym: '%', label: 'GSM Coverage' },
];

export default function MvvSection() {
  return (
    <section className="mvv-section">
      <div className="container-custom">

        <h2 className="mvv-heading">Mission &bull; Vision &bull; Values</h2>

        <div className="mvv-cards-row">
          {MVV_CARDS.map(({ title, text, items, blue }) => (
            <div key={title} className={`mvv-card${blue ? ' mvv-card--blue' : ''}`}>
              <div className="mvv-card-pattern">
                <Image src={patternImg} alt="" fill className="mvv-pattern-img" aria-hidden="true" />
              </div>
              <div className="mvv-shape mvv-shape--right">
                <Image src={shapeRight} alt="" fill className="mvv-shape-img" aria-hidden="true" />
              </div>
              <div className="mvv-shape mvv-shape--bottom">
                <Image src={shapeBottom} alt="" fill className="mvv-shape-img" aria-hidden="true" />
              </div>
              <div className="mvv-card-body">
                <h3 className="mvv-card-title">{title}</h3>
                {text && <p className="mvv-card-text">{text}</p>}
                {items && (
                  <ul className="mvv-values-list">
                    {items.map((item) => (
                      <li key={item} className="mvv-card-text">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="wtm-row">
          <div className="wtm-left">
            <h3 className="wtm-title">Why This Matters</h3>
            <p className="wtm-desc">These realities inspired us to design <br /> healthcare that works with — not against — <br /> infrastructure limitations.</p>
          </div>
          <div className="wtm-stats-card">
            <div className="wtm-stats-grid">
              {STATS.map(({ num, sym, label }) => (
                <div key={label} className="wtm-stat">
                  <span className="wtm-stat-value">
                    <span className="wtm-stat-num">{num}</span><span className="wtm-stat-sym">{sym}</span>
                  </span>
                  <span className="wtm-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

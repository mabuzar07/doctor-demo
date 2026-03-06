'use client';

import { useRef } from 'react';
import Image from 'next/image';
import profileDefault from '@/assets/images/profile-default.jpg';
import profileHover from '@/assets/images/profile-hover.jpg';
import rockImg from '@/assets/images/rock.png';
import dr1 from '@/assets/images/dr1.png';
import dr2 from '@/assets/images/dr2.png';
import dr3 from '@/assets/images/dr3.png';
import dr4 from '@/assets/images/dr4.png';
import aboutIcon from '@/assets/images/about-icon.svg';
import drIcon from '@/assets/images/dr.svg';

const DOCTORS = [
  { name: 'Dr. Jonathan M.', role: 'Founder & CEO',      img: dr1 },
  { name: 'Dr. Nasasira S.', role: 'Medical Director',   img: dr2 },
  { name: 'Dr. Jane M.',     role: 'Head of Operations', img: dr3 },
  { name: 'Dr. Smith K.',    role: 'Lead Technologist',  img: dr4 },
];

export default function TeamSection() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
    sliderRef.current.classList.add('team-slider-wrap--dragging');
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollStart.current - (x - startX.current) * 1.2;
  };

  const stopDrag = () => {
    isDragging.current = false;
    sliderRef.current?.classList.remove('team-slider-wrap--dragging');
  };

  return (
    <section className="team-section">
      <div className="container-custom">
        <div className="team-badge" style={{background:"#EBFCFF"}}>
          <Image src={aboutIcon} alt="" width={16} height={16} />
          <span>Our Team</span>
        </div>

        <div className="team-header-row">
          <h2 className="team-heading">
            Meet The Team Behind<br />My Doctor App
          </h2>
          <p className="team-desc">
            A multidisciplinary team of healthcare professionals, technologists, and operators
            working to transform access to medical care across the Republic of South Africa.
          </p>
        </div>
      </div>

      <div
        className="team-slider-wrap"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="team-slider">
          {DOCTORS.map(({ name, role, img }, idx) => (
            <div
              key={name}
              className={`team-card${idx === 0 ? ' team-card--active' : ''}`}
            >
              {/* Default background */}
              <div className="team-card-bg team-card-bg--default">
                <Image src={profileDefault} alt="" fill className="team-bg-img" />
              </div>

              {/* Hover / active background */}
              <div className="team-card-bg team-card-bg--hover">
                <Image src={profileHover} alt="" fill className="team-bg-img" />
              </div>

              {/* Decorative rock shape — middle right */}
              <div className="team-rock">
                <Image src={rockImg} alt="" fill className="team-rock-img" />
              </div>

              {/* Doctor photo fills entire card, sits above backgrounds */}
              <div className="team-doctor-wrap">
                <Image src={img} alt={name} fill className="team-doctor-img" />
              </div>

              {/* Info bar — overlaid at bottom inside the card */}
              <div className="team-card-info">
                <div>
                  <p className="team-card-name">{name}</p>
                  <p className="team-card-role">{role}</p>
                </div>
                <div className="team-card-icon">
                  <Image src={drIcon} alt="" width={20} height={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

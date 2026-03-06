'use client';

import Image from 'next/image';
import joinBg from '@/assets/images/joinbg.png';
import joinCard from '@/assets/images/join.jpg';
import rockImg from '@/assets/images/rock.png';

export default function JoinSection() {
  return (
    <section className="join-section">
      <div className="container-custom">
        <div className="join-wrapper">

          {/* joinbg.jpg fills the whole wrapper (nurse on the left) */}
          <div className="join-bg">
            <Image src={joinBg} alt="" fill className="join-bg-img" priority />
          </div>

          {/* #ABEBF7 circle — top-right, behind card */}
          <div className="join-circle" aria-hidden="true" />

          {/* Blue card — bottom-right, join.jpg as background */}
          <div className="join-card">
            <div className="join-card-bg">
              <Image src={joinCard} alt="" fill className="join-card-bg-img" />
            </div>

            {/* Rock shape right side of card */}
            <div className="join-rock">
              <Image src={rockImg} alt="" fill className="join-rock-img" />
            </div>

            <div className="join-card-body">
              <h2 className="join-heading">
                Join Us in Transforming Healthcare Access Across the RSA
              </h2>
              <div className="join-buttons">
                <a href="#" className="join-btn join-btn--outline">
                  Get Started as a Patient
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="join-btn join-btn--ghost">
                  Join as a Doctor
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

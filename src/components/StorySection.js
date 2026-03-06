'use client';

import Image from 'next/image';
import storyImg from '@/assets/images/story.svg';

export default function StorySection() {
  return (
    <section className="story-section">
      <div className="container-custom">
        <div className="story-card">

          <div className="story-left">
            <h2 className="story-title-text">Our Story</h2>
            <div className="story-img-wrap">
              <Image
                src={storyImg}
                alt="Our Story – doctors with health badges"
              
                className="story-bg-img"
              />
            </div>
          </div>

          <div className="story-right">
            <div className="story-divider" />
            <p className="story-desc">
              Founded in 2025, My Doctor RSA was born from a simple but urgent observation: millions of South african lack timely access to reliable medical guidance.
            </p>
            <p className="story-desc">
              Long distances to hospitals, limited internet connectivity, and healthcare infrastructure gaps leave many families without immediate support when symptoms appear. We believed technology could change that.
            </p>
            <p className="story-desc">
              By combining artificial intelligence, certified medical professionals, and multi-channel accessibility — including WhatsApp and USSD — My Doctor App was built to bridge the healthcare gap across the Republic of South Africa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import HeroSection from '@/components/HeroSection';
import TrustedSection from '@/components/TrustedSection';
import MvvSection from '@/components/MvvSection';
import StorySection from '@/components/StorySection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';

export default function HomePage() {
  console.log("version 1")
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <StorySection />
      <MvvSection />
      <TeamSection />
      <JoinSection />
    </>
  );
}


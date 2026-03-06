import TrustedSection from '@/components/TrustedSection';
import StorySection from '@/components/StorySection';
import MvvSection from '@/components/MvvSection';

export const metadata = {
  title: 'About Us | My Doctor RSA',
  description: 'Learn about our mission, vision, values and the story behind My Doctor RSA.',
};

export default function AboutPage() {
  return (
    <>
      <TrustedSection />
      <StorySection />
      <MvvSection />
    </>
  );
}

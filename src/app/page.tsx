import { About } from '@/components/home/about';
import { Faq } from '@/components/home/faq';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { Hero } from '@/components/home/hero';
import { ReviewsPreview } from '@/components/home/reviews-preview';
import { Stats } from '@/components/home/stats';
import { SectionDivider } from '@/components/ui/section-divider';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <FeaturedProperties />
      <About />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <ReviewsPreview />
      <Faq />
    </>
  );
}

import { About } from '@/components/home/about';
import { Faq } from '@/components/home/faq';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { Hero } from '@/components/home/hero';
import { ReviewsPreview } from '@/components/home/reviews-preview';
import { Stats } from '@/components/home/stats';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <About />
      <Stats />
      <ReviewsPreview />
      <Faq />
    </>
  );
}

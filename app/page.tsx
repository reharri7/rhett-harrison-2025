import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import LatestPosts from '@/components/LatestPosts';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </div>
  );
}
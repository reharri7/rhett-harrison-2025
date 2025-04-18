import Hero from '@/components/Hero';
import LatestPosts from '@/components/LatestPosts';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      {/*<FeaturedProjects />*/}
      <LatestPosts />
    </div>
  );
}

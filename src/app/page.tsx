import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import SpecsSection from '@/components/SpecsSection';
import PreOrderSection from '@/components/PreOrderSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <SpecsSection />
      <PreOrderSection />
      <Footer />
    </main>
  );
}

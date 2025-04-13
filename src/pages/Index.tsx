
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = '3zedshop | High-Tech my Order — Local-Tech, Local';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        {/* More sections can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

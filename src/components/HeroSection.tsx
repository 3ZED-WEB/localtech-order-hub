
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/lovable-uploads/a17b260b-6258-456d-b058-05f2b75d054b.png',
      title: 'High-Tech my order',
      subtitle: 'Local-Tech, Local',
      description: 'Hi-fi headsets are essential accessories for gaming enthusiasts enjoying optimal sound quality and immersive experiences. Expertly engineered to convey immersive audio environments with crystal-clear precision.',
    },
    {
      id: 2,
      image: '/placeholder.svg',
      title: 'Gaming Controllers',
      subtitle: 'Precision Control',
      description: 'Experience ultimate precision with our premium gaming controllers, designed for professional gamers and enthusiasts who demand responsive, comfortable control.',
    },
    {
      id: 3,
      image: '/placeholder.svg',
      title: 'Immersive Gear',
      subtitle: 'Next-Level Gaming',
      description: 'Discover cutting-edge VR headsets and immersive gaming accessories that transport you into new worlds with unparalleled realism and responsiveness.',
    }
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-darker to-transparent z-10"></div>
      
      {/* Hero image */}
      <div className="relative h-full w-full">
        <img
          src={slides[currentSlide].image}
          alt="3zedshop Hero"
          className="absolute h-full w-full object-cover object-center"
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-gray-light mb-8 max-w-md">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red hover:bg-red-light text-white px-8 py-6">
                See Offers
              </Button>
              <Button variant="outline" className="border-gray-light text-white hover:bg-gray-dark/50 px-8 py-6">
                Send my cart <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-red' : 'bg-gray-light/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

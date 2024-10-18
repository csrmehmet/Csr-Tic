import { useState, useEffect } from 'react';
import { heroData } from '@/data';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="relative h-screen overflow-hidden">
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? 'translate-x-0'
              : index < currentSlide
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
        >
          <img 
            src={slide.desktopImage} 
            alt={slide.subtitle} 
            className="w-full h-full  object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <h3 className="text-sm mb-12 text-white">{slide.title}</h3>
                <h2 className="text-4xl font-bold mb-12 text-white">{slide.subtitle}</h2>
                <p className="text-lg mb-12 text-white">{slide.description}</p>
                <Button variant="default" size="lg">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        disabled={isTransitioning}
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        disabled={isTransitioning}
      >
        <ChevronRight size={40} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-0.5">
          {heroData.map((_, index) => (
            <div 
              key={index} 
              className={`w-12 h-2  ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
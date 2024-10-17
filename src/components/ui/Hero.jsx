import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { heroData } from '@/data';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
      >
        {heroData.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Mobil görünüm */}
            <div className="md:hidden">
              <img src={slide.mobileImage} alt={slide.subtitle} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-sm mb-2">{slide.title}</h3>
                <h2 className="text-3xl font-bold mb-2">{slide.subtitle}</h2>
                <p className="text-center mb-4">{slide.description}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded">{slide.buttonText}</button>
              </div>
            </div>
            
            {/* Desktop görünüm */}
            <div className="hidden md:block">
              <img src={slide.desktopImage} alt={slide.subtitle} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg">
                    <h3 className="text-sm mb-2 text-white">{slide.title}</h3>
                    <h2 className="text-5xl font-bold mb-4 text-white">{slide.subtitle}</h2>
                    <p className="text-lg mb-6 text-white">{slide.description}</p>
                    <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg">{slide.buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
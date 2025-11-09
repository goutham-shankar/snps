'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to SNPS",
      subtitle: "Nurturing Future Leaders Since 2015",
      imageUrl: "/SCHOOL.JPG",
    },
    {
      title: "14 Acres of Eco-Friendly Campus",
      subtitle: "A Safe and Inspiring Learning Environment",
      imageUrl: "/schooimg/IMG_20251108_120411.jpg",
    },
    {
      title: "CBSE Affiliated Excellence",
      subtitle: "From Pre-KG to Grade XII",
      imageUrl: "/schooimg/SCHOOL.JPG",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              data-fallback={(slide as any).fallbackUrl || ''}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement & { dataset: { fallback?: string } };
                if (el.dataset.fallback && el.src !== el.dataset.fallback) {
                  el.src = el.dataset.fallback;
                }
              }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="max-w-4xl w-full text-white text-center">
          <div className="mb-6 inline-block">
            <span className="bg-[#af5f36] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-lg">
              Admissions Open 2025-26
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 px-4">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link
              href="/admission"
              className="w-full sm:w-auto bg-[#af5f36] hover:bg-[#8b4a28] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">14</div>
              <div className="text-xs sm:text-sm text-gray-200">Acres Campus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">2015</div>
              <div className="text-xs sm:text-sm text-gray-200">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">CBSE</div>
              <div className="text-xs sm:text-sm text-gray-200">Affiliated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-200">Holistic Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}




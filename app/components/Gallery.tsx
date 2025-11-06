'use client';

import { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  category: 'academics' | 'arts' | 'sports' | 'school';
  title: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academics' | 'arts' | 'sports' | 'school'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);

  const categories = [
    { id: 'all' as const, name: 'All Photos', icon: '📸' },
    { id: 'academics' as const, name: 'Academics', icon: '📚' },
    { id: 'arts' as const, name: 'Arts', icon: '🎨' },
    { id: 'sports' as const, name: 'Sports', icon: '⚽' },
    { id: 'school' as const, name: 'School', icon: '🏫' }
  ];

  // Initialize images
  useEffect(() => {
    const allImages: GalleryImage[] = [];

    // Academics images
    const academicsFiles = [
      '20251101_115015AMByGPSMapCamera.jpg', '20251101_115023AMByGPSMapCamera.jpg',
      '20251101_115025AMByGPSMapCamera.jpg', '20251101_115033AMByGPSMapCamera.jpg',
      '20251101_11640PMByGPSMapCamera.jpg', '20251101_11902PMByGPSMapCamera.jpg',
      '20251101_11911PMByGPSMapCamera.jpg', '20251101_11914PMByGPSMapCamera.jpg',
      '20251101_11926PMByGPSMapCamera.jpg', '20251101_11937PMByGPSMapCamera.jpg',
      '20251101_11939PMByGPSMapCamera.jpg', '20251101_11941PMByGPSMapCamera.jpg',
      '20251101_120354PMByGPSMapCamera.jpg', '20251101_120437PMByGPSMapCamera.jpg',
      '20251101_120448PMByGPSMapCamera.jpg', '20251101_120452PMByGPSMapCamera.jpg',
      '20251101_120507PMByGPSMapCamera.jpg', '20251101_12448PMByGPSMapCamera.jpg',
      '20251101_12518PMByGPSMapCamera.jpg', '20251101_12523PMByGPSMapCamera.jpg',
      '20251101_12525PMByGPSMapCamera.jpg', '20251101_12526PMByGPSMapCamera.jpg',
      '20251101_12542PMByGPSMapCamera.jpg', '20251101_12544PMByGPSMapCamera.jpg',
      '20251101_12556PMByGPSMapCamera.jpg', '20251101_12718PMByGPSMapCamera.jpg',
      '20251101_12719PMByGPSMapCamera.jpg', '20251101_12733PMByGPSMapCamera.jpg',
      '20251101_12739PMByGPSMapCamera.jpg', '20251101_12741PMByGPSMapCamera.jpg',
      '20251101_12752PMByGPSMapCamera.jpg', '20251101_12754PMByGPSMapCamera.jpg',
      '20251101_12758PMByGPSMapCamera.jpg', '20251101_13018PMByGPSMapCamera.jpg',
      '20251101_13026PMByGPSMapCamera.jpg', '20251101_13028PMByGPSMapCamera.jpg',
      '20251101_13030PMByGPSMapCamera.jpg', '20251101_13031PMByGPSMapCamera.jpg',
      '20251101_13038PMByGPSMapCamera.jpg', '20251101_13040PMByGPSMapCamera.jpg',
      '20251101_13602PMByGPSMapCamera.jpg', '20251101_13614PMByGPSMapCamera.jpg',
      '20251101_13621PMByGPSMapCamera.jpg'
    ];

    academicsFiles.forEach((file, index) => {
      allImages.push({
        id: `academics-${index}`,
        src: `/gallery/academics/${file}`,
        category: 'academics',
        title: `Academic Activity ${index + 1}`
      });
    });

    // Arts images
    const artsFiles = [
      'PHOTO-2025-11-02-19-42-21 2.jpg', 'PHOTO-2025-11-02-19-42-21 3.jpg',
      'PHOTO-2025-11-02-19-42-21.jpg', 'PHOTO-2025-11-02-19-42-22 2.jpg',
      'PHOTO-2025-11-02-19-42-22 3.jpg', 'PHOTO-2025-11-02-19-42-22.jpg',
      'PHOTO-2025-11-02-19-42-23 2.jpg', 'PHOTO-2025-11-02-19-42-23 3.jpg',
      'PHOTO-2025-11-02-19-42-23.jpg', 'PHOTO-2025-11-02-19-42-24 2.jpg',
      'PHOTO-2025-11-02-19-42-24 3.jpg', 'PHOTO-2025-11-02-19-42-24.jpg',
      'PHOTO-2025-11-02-19-42-25 2.jpg', 'PHOTO-2025-11-02-19-42-25.jpg',
      'PHOTO-2025-11-02-19-42-26 2.jpg', 'PHOTO-2025-11-02-19-42-26.jpg',
      'PHOTO-2025-11-02-19-42-27 2.jpg', 'PHOTO-2025-11-02-19-42-27 3.jpg',
      'PHOTO-2025-11-02-19-42-27.jpg', 'PHOTO-2025-11-02-19-42-28.jpg',
      'PHOTO-2025-11-02-19-43-21 2.jpg', 'PHOTO-2025-11-02-19-43-21.jpg',
      'PHOTO-2025-11-02-19-43-22 2.jpg', 'PHOTO-2025-11-02-19-43-22 3.jpg',
      'PHOTO-2025-11-02-19-43-22.jpg', 'PHOTO-2025-11-02-19-43-23 2.jpg',
      'PHOTO-2025-11-02-19-43-23 3.jpg', 'PHOTO-2025-11-02-19-43-23.jpg',
      'PHOTO-2025-11-02-19-43-24 2.jpg', 'PHOTO-2025-11-02-19-43-24 3.jpg',
      'PHOTO-2025-11-02-19-43-24 4.jpg', 'PHOTO-2025-11-02-19-43-24.jpg',
      'PHOTO-2025-11-02-19-43-25 2.jpg', 'PHOTO-2025-11-02-19-43-25 3.jpg',
      'PHOTO-2025-11-02-19-43-25.jpg', 'PHOTO-2025-11-02-19-43-26 2.jpg',
      'PHOTO-2025-11-02-19-43-26 3.jpg', 'PHOTO-2025-11-02-19-43-26.jpg',
      'PHOTO-2025-11-02-19-43-27 2.jpg', 'PHOTO-2025-11-02-19-43-27 3.jpg',
      'PHOTO-2025-11-02-19-43-27.jpg', 'PHOTO-2025-11-02-19-43-28 2.jpg',
      'PHOTO-2025-11-02-19-43-28.jpg', 'PHOTO-2025-11-02-19-43-29 2.jpg',
      'PHOTO-2025-11-02-19-43-29 3.jpg', 'PHOTO-2025-11-02-19-43-29 4.jpg',
      'PHOTO-2025-11-02-19-43-29.jpg', 'PHOTO-2025-11-02-19-43-30 2.jpg',
      'PHOTO-2025-11-02-19-43-30.jpg', 'PHOTO-2025-11-02-19-43-31 2.jpg',
      'PHOTO-2025-11-02-19-43-31.jpg'
    ];

    artsFiles.forEach((file, index) => {
      allImages.push({
        id: `arts-${index}`,
        src: `/gallery/arts/${file}`,
        category: 'arts',
        title: `Arts Activity ${index + 1}`
      });
    });

    // School images
    const schoolFiles = [
      '20251101_11312PMByGPSMapCamera.jpg', '20251101_11326PMByGPSMapCamera.jpg',
      '20251101_11327PMByGPSMapCamera.jpg', '20251101_113937AMByGPSMapCamera.jpg',
      '20251101_113940AMByGPSMapCamera.jpg', '20251101_115042AMByGPSMapCamera.jpg',
      '20251101_115043AMByGPSMapCamera.jpg', '20251101_115051AMByGPSMapCamera.jpg',
      '20251101_115057AMByGPSMapCamera.jpg', '20251101_115115AMByGPSMapCamera.jpg',
      '20251101_115130AMByGPSMapCamera.jpg', '20251101_115204AMByGPSMapCamera.jpg',
      '20251101_115248AMByGPSMapCamera.jpg', '20251101_115316AMByGPSMapCamera.jpg',
      '20251101_11533PMByGPSMapCamera.jpg', '20251101_115344AMByGPSMapCamera.jpg',
      '20251101_11535PMByGPSMapCamera.jpg', '20251101_11612PMByGPSMapCamera.jpg',
      '20251101_120005PMByGPSMapCamera.jpg', '20251101_120019PMByGPSMapCamera.jpg',
      '20251101_120106PMByGPSMapCamera.jpg', '20251101_120110PMByGPSMapCamera.jpg',
      '20251101_120115PMByGPSMapCamera.jpg', '20251101_120444PMByGPSMapCamera.jpg',
      '20251101_13544PMByGPSMapCamera.jpg', '20251101_13652PMByGPSMapCamera.jpg',
      '20251101_14030PMByGPSMapCamera.jpg', '20251101_20053PMByGPSMapCamera.jpg',
      '20251101_20059PMByGPSMapCamera.jpg', '20251101_20103PMByGPSMapCamera.jpg',
      '20251101_20136PMByGPSMapCamera.jpg', 'PHOTO-2025-11-02-20-06-30.jpg',
      'PHOTO-2025-11-02-20-06-31 2.jpg', 'PHOTO-2025-11-02-20-06-31 3.jpg',
      'PHOTO-2025-11-02-20-06-31.jpg', 'PHOTO-2025-11-02-20-06-32 2.jpg',
      'PHOTO-2025-11-02-20-06-32 3.jpg', 'PHOTO-2025-11-02-20-06-32.jpg'
    ];

    schoolFiles.forEach((file, index) => {
      allImages.push({
        id: `school-${index}`,
        src: `/gallery/school/${file}`,
        category: 'school',
        title: `School Campus ${index + 1}`
      });
    });

    // Sports images
    const sportsFiles = [
      '20251101_115121AMByGPSMapCamera.jpg', '20251101_115126AMByGPSMapCamera.jpg',
      '20251101_115329AMByGPSMapCamera.jpg', '20251101_13538PMByGPSMapCamera.jpg',
      '20251101_13601PMByGPSMapCamera.jpg', '20251101_13612PMByGPSMapCamera.jpg',
      '20251101_13618PMByGPSMapCamera.jpg', '20251101_13645PMByGPSMapCamera.jpg',
      '20251101_13654PMByGPSMapCamera.jpg', '20251101_14002PMByGPSMapCamera.jpg',
      '20251101_14015PMByGPSMapCamera.jpg', '20251101_14018PMByGPSMapCamera.jpg',
      '20251101_14052PMByGPSMapCamera.jpg', '20251101_14334PMByGPSMapCamera.jpg',
      '20251101_14451PMByGPSMapCamera.jpg', '20251101_14454PMByGPSMapCamera.jpg',
      '20251101_14456PMByGPSMapCamera.jpg', '20251101_14459PMByGPSMapCamera.jpg',
      '20251101_14507PMByGPSMapCamera.jpg', '20251101_14509PMByGPSMapCamera.jpg',
      '20251101_14645PMByGPSMapCamera.jpg', '20251101_14711PMByGPSMapCamera.jpg',
      '20251101_14725PMByGPSMapCamera.jpg', '20251101_14730PMByGPSMapCamera.jpg',
      '20251101_14733PMByGPSMapCamera.jpg', '20251101_14735PMByGPSMapCamera.jpg',
      '20251101_14737PMByGPSMapCamera.jpg', '20251101_14749PMByGPSMapCamera.jpg',
      '20251101_15827PMByGPSMapCamera.jpg', '20251101_15931PMByGPSMapCamera.jpg',
      '20251101_15937PMByGPSMapCamera.jpg', '20251101_15939PMByGPSMapCamera.jpg',
      '20251101_15945PMByGPSMapCamera.jpg'
    ];

    sportsFiles.forEach((file, index) => {
      allImages.push({
        id: `sports-${index}`,
        src: `/gallery/sports/${file}`,
        category: 'sports',
        title: `Sports Activity ${index + 1}`
      });
    });

    setImages(allImages);
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openPreview = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = filteredImages.length - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1;
        setSelectedImage(filteredImages[newIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Photo Gallery
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Capturing Moments,<br />
            Creating Memories
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Explore the vibrant life at SNPS through our collection of photos showcasing 
            academic excellence, cultural events, sports achievements, and campus beauty.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all border ${
                  activeCategory === category.id
                    ? 'bg-[#af5f36] text-white border-[#af5f36] shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: `${filteredImages.length}`, label: "Photos", sublabel: "In Collection" },
            { value: "4", label: "Categories", sublabel: "To Explore" },
            { value: categories.find(c => c.id === activeCategory)?.name || "All", label: "Current", sublabel: "Viewing" },
            { value: images.filter(img => img.category === 'school').length, label: "Campus", sublabel: "Photos" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#af5f36] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12 md:mb-16">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openPreview(image)}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer bg-white border border-gray-200"
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Hide broken images
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-bold text-sm mb-1">{image.title}</h3>
                  <p className="text-white/90 text-xs capitalize">{image.category}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-[#af5f36]/90 backdrop-blur-sm text-white text-xs font-semibold rounded">
                    {image.category}
                  </span>
                </div>

                {/* Preview Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Image Preview Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image */}
              <div onClick={(e) => e.stopPropagation()}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[90vh] mx-auto object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-center">
                <p className="font-semibold">{selectedImage.title}</p>
                <p className="text-sm text-white/80 capitalize">{selectedImage.category}</p>
                <p className="text-xs text-white/60 mt-1">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div 
          className="rounded-2xl shadow-lg p-8 md:p-12 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #af5f36 0%, #8b4a28 100%)' }}
        >
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Visit Our Campus</h3>
              <p className="text-orange-100 text-lg">
                Experience our beautiful campus and world-class facilities in person.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-bold rounded-lg shadow-lg hover:shadow-xl transition"
              >
                Schedule Visit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

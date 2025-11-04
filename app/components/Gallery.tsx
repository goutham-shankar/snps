'use client';

import { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'academics', name: 'Academics' }
  ];

  const images = [
    { 
      id: 1, 
      category: 'campus', 
      title: 'School Campus', 
      description: 'Our beautiful 13-acre campus',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 2, 
      category: 'campus', 
      title: 'Main Building', 
      description: 'Modern architecture and facilities',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 3, 
      category: 'academics', 
      title: 'Smart Classroom', 
      description: 'Technology-enabled learning spaces',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 4, 
      category: 'academics', 
      title: 'Science Laboratory', 
      description: 'State-of-the-art lab facilities',
      image: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 5, 
      category: 'academics', 
      title: 'Library', 
      description: 'Extensive collection of resources',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 6, 
      category: 'sports', 
      title: 'Sports Complex', 
      description: 'World-class sports facilities',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 7, 
      category: 'sports', 
      title: 'Basketball Court', 
      description: 'Indoor basketball facilities',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 8, 
      category: 'sports', 
      title: 'Football Ground', 
      description: 'Professional football field',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 9, 
      category: 'events', 
      title: 'Annual Day Celebration', 
      description: 'Cultural performances and awards',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 10, 
      category: 'events', 
      title: 'Science Exhibition', 
      description: 'Student innovation showcase',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 11, 
      category: 'events', 
      title: 'Cultural Program', 
      description: 'Music and dance performances',
      image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 12, 
      category: 'campus', 
      title: 'Green Campus', 
      description: 'Eco-friendly environment',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 13, 
      category: 'academics', 
      title: 'Computer Lab', 
      description: 'Modern computing facilities',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 14, 
      category: 'events', 
      title: 'Sports Day', 
      description: 'Athletic competitions and awards',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 15, 
      category: 'campus', 
      title: 'Art Studio', 
      description: 'Creative expression spaces',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 16, 
      category: 'academics', 
      title: 'Students Learning', 
      description: 'Interactive classroom sessions',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 mb-12 md:mb-16 text-center">
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
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#af5f36] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: `${filteredImages.length}`, label: "Photos", sublabel: "In Collection" },
            { value: "5", label: "Categories", sublabel: "To Explore" },
            { value: "100+", label: "Events", sublabel: "Documented" },
            { value: "13", label: "Acres", sublabel: "Campus Beauty" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#af5f36] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 md:mb-16">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative aspect-square">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' }}
                ></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#af5f36] text-xs font-semibold rounded-full">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Gallery Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Featured
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Campus Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into the vibrant life and world-class facilities at SNPS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-video">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Students Learning"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
                decoding="async"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)' }}
              >
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Academic Excellence</h4>
                  <p className="text-white/90">Innovative teaching methods and modern facilities</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-video">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                alt="Cultural Events"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
                decoding="async"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)' }}
              >
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Cultural Events</h4>
                  <p className="text-white/90">Celebrating talent and fostering creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #af5f36 0%, #8b4a28 100%)' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Take a Virtual Campus Tour</h3>
              <p className="text-orange-100 text-lg">
                Experience our beautiful 13-acre campus and world-class facilities from anywhere.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
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




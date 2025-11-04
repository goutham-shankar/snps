export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Technology-enabled learning spaces with interactive displays and digital boards",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology labs for hands-on learning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Library & Resource Center",
      description: "Extensive collection of books, journals, and digital resources for research",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor facilities for cricket, football, basketball, and athletics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Computer Labs",
      description: "Modern computing facilities equipped with latest software and high-speed internet",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Auditorium",
      description: "Fully equipped auditorium with modern acoustics for events and performances",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Art & Music Studios",
      description: "Dedicated creative spaces for artistic expression and musical excellence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Transportation",
      description: "Safe and reliable bus service with GPS tracking covering extensive routes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Cafeteria",
      description: "Hygienic dining facility serving nutritious and balanced meals daily",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Medical Room",
      description: "Well-equipped first-aid facility with trained medical staff on campus",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Eco-Friendly Campus",
      description: "13 acres of green, sustainable environment with lush gardens and trees",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Security & Safety",
      description: "24/7 CCTV surveillance with trained security personnel ensuring campus safety",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="facilities" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Sophisticated hero with integrated image */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Campus Facilities
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                World-Class<br />
                Infrastructure
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                Our <strong className="text-[#af5f36] font-semibold">13-acre campus</strong> features 
                state-of-the-art facilities designed to provide an enriching and 
                comprehensive learning environment for every student.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Modern Labs", icon: "🔬" },
                  { label: "Smart Classrooms", icon: "💻" },
                  { label: "Sports Complex", icon: "⚽" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm font-medium text-[#af5f36]">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/admission" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#af5f36] text-white font-semibold rounded-xl hover:bg-[#8b4a28] transition shadow-md"
                >
                  Schedule a Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#af5f36] hover:text-[#af5f36] transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Image side - properly sized and blended */}
            <div className="lg:col-span-2 relative min-h-80 lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                alt="SNPS Campus Facilities"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(135deg, rgba(175,95,54,0.1) 0%, rgba(175,95,54,0.05) 100%)' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats bar - elegant design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: "13", label: "Acres", sublabel: "Green Campus" },
            { value: "12+", label: "Facilities", sublabel: "Modern Amenities" },
            { value: "24/7", label: "Security", sublabel: "Safe Environment" },
            { value: "100%", label: "Equipped", sublabel: "Latest Technology" }
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

        {/* Facilities Grid */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Our Amenities
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Campus Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive infrastructure supporting academic excellence and holistic development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition"
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)' }}
                  ></div>
                  
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#af5f36] shadow-lg">
                      {facility.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Highlights - refined section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Why SNPS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Campus Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key features that make our campus a premier learning destination
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Eco-Friendly",
                desc: "13 acres of lush green sustainable campus",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Safe & Secure",
                desc: "24/7 CCTV monitoring and trained personnel",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Modern Tech",
                desc: "Smart classrooms with latest technology",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Complete Care",
                desc: "Medical room, cafeteria, and transportation",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((highlight, i) => (
              <div 
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-[#af5f36] group-hover:scale-110 transition">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - sophisticated and refined */}
        <div 
          className="rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #af5f36 0%, #8b4a28 100%)' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Experience Our Campus Firsthand</h3>
              <p className="text-orange-100 text-lg">
                Schedule a campus tour and explore our world-class facilities in person.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                Book Campus Tour
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




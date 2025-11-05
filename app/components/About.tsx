import schoolInfo from '../data/school-info';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section - Sophisticated with integrated image */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  About Us
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Shaping Minds,<br />
                Building Futures
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                Since <strong className="text-[#af5f36] font-semibold">2015</strong>, 
                Sree Narayana Public School has been nurturing young minds with 
                value-based CBSE education in {schoolInfo.fullLocation}, Kerala.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "CBSE Affiliated", icon: "✓" },
                  { label: `${schoolInfo.campusSize} Campus`, icon: "🌳" },
                  { label: schoolInfo.grades, icon: "📚" },
                  { label: schoolInfo.specialStatus, icon: "🏆" }
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
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#af5f36] hover:text-[#af5f36] transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Image side - properly sized and blended */}
            <div className="lg:col-span-2 relative min-h-80 lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                alt="SNPS Campus"
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
            { value: "2015", label: "Established", sublabel: "Years of Excellence" },
            { value: schoolInfo.campusSize, label: "Campus", sublabel: "Eco-friendly Environment" },
            { value: "CBSE", label: "Affiliated", sublabel: "National Board" },
            { value: "NEP 2020", label: "Aligned", sublabel: "Modern Curriculum" }
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

        {/* Welcome Message Section - Elegantly Integrated */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Welcome Message
                </span>
              </div>
              <div className="inline-block mb-6">
                <span className="bg-[#af5f36] text-white px-6 py-3 rounded-full text-lg font-semibold italic">
                  "{schoolInfo.motto}"
                </span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 text-gray-700 leading-relaxed space-y-4">
                  {schoolInfo.welcomeMessage.content.split('\n\n').slice(0, 3).map((paragraph, index) => (
                    <p key={index} className="text-base">{paragraph}</p>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-[#af5f36] mb-3">Our Philosophy</h3>
                  <p className="text-sm text-gray-700 italic mb-4">
                    "{schoolInfo.guruMessage}"
                  </p>
                  <p className="text-xs text-gray-600">
                    - Sree Narayana Guru
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-[#af5f36] italic">
                  {schoolInfo.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Message - Redesigned */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-4 gap-0">
            {/* Principal Info */}
            <div className="lg:col-span-1 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] p-8 flex flex-col justify-center text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{schoolInfo.principal.name}</h3>
                <p className="text-orange-200 text-sm">{schoolInfo.principal.title}</p>
                <p className="text-orange-100 text-xs mt-1">{schoolInfo.specialStatus}</p>
              </div>
            </div>
            
            {/* Message Content */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Principal's Message
                </span>
              </div>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                {schoolInfo.principalMessage.content.split('\n\n').slice(0, 4).map((paragraph, index) => (
                  <p key={index} className="text-base">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl border-l-4 border-[#af5f36]">
                <p className="text-[#af5f36] font-semibold italic">
                  "{schoolInfo.motto}" — our light, our legacy, our way forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story - refined two-column */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                A Legacy of Educational Excellence
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Established under the aegis of the <strong className="font-semibold text-gray-900">{schoolInfo.managingBody}</strong>, 
                SNPS stands as a beacon of quality education in {schoolInfo.fullLocation}, Kerala.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Affiliated with <strong className="font-semibold text-gray-900">{schoolInfo.affiliation}</strong>, 
                we offer comprehensive education that seamlessly blends traditional values with modern pedagogical approaches.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our {schoolInfo.campusSize} eco-friendly campus provides a nurturing environment where students develop 
                academically, socially, and emotionally to become responsible global citizens.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose SNPS?</h3>
              
              {[
                { title: "Holistic Development", desc: "Balanced focus on academics, sports, arts, and character building" },
                { title: "Modern Infrastructure", desc: "Smart classrooms, well-equipped labs, and extensive sports facilities" },
                { title: "Experienced Faculty", desc: "Dedicated teachers committed to student success and well-being" },
                { title: "Safe Environment", desc: "Secure, eco-friendly campus with comprehensive safety measures" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#af5f36] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission - elegant cards with design elements */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              title: "Our Vision",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              content: "To nurture enlightened individuals — minds that think with clarity, hearts that feel with compassion and spirits that act with integrity, shaping illuminated intellects and responsible citizens of a harmonious world."
            },
            {
              title: "Our Mission",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              content: "To provide holistic, competency-based education rooted in values, leadership, and discipline through experiential learning aligned with NEP 2020, fostering academic excellence, creativity, and responsible citizenship."
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="relative bg-white rounded-3xl shadow-lg p-8 md:p-10 overflow-hidden group hover:shadow-xl transition"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-[#af5f36] mb-5 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values - refined grid with proper icons */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Our Foundation
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take, aligned with NEP 2020
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolInfo.coreValues.map((value, i) => {
              const getIcon = (iconType: string) => {
                switch (iconType) {
                  case 'shield':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    );
                  case 'heart':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    );
                  case 'star':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    );
                  case 'checklist':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    );
                  case 'users':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    );
                  case 'lightbulb':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    );
                  case 'briefcase':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    );
                  case 'wellness':
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    );
                  default:
                    return (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                }
              };
              
              return (
                <div 
                  key={i}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 text-[#af5f36] group-hover:scale-110 transition flex items-center justify-center">
                    {getIcon(value.iconType)}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campus gallery - elegant presentation */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Campus Life
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Experience SNPS</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", alt: "Students" },
              { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", alt: "Classroom" },
              { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", alt: "Learning" },
              { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Activities" }
            ].map((img, i) => (
              <div 
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group aspect-square"
              >
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  decoding="async"
                />
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
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Join Our Community?</h3>
              <p className="text-orange-100 text-lg">
                Visit our campus and discover how SNPS can shape your child's future with enlightenment through education.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                Schedule a Visit
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
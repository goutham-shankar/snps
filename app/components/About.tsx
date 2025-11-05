import schoolInfo from '../data/school-info';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Welcome Message Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Welcome Message
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {schoolInfo.welcomeMessage.title}
            </h1>
            
            <div className="inline-block mb-6">
              <span className="bg-[#af5f36] text-white px-6 py-3 rounded-full text-lg font-semibold italic">
                "{schoolInfo.motto}"
              </span>
            </div>
            
            <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4">
              {schoolInfo.welcomeMessage.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-[#af5f36] italic">
                {schoolInfo.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Principal's Message
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                {schoolInfo.principal.name}
              </h2>
              
              <p className="text-lg text-[#af5f36] font-semibold mb-6">
                {schoolInfo.principal.designation}
              </p>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                {schoolInfo.principalMessage.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8 mb-8">
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

        {/* Core Values - refined grid with icons */}
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
            {schoolInfo.coreValues.map((value, i) => (
              <div 
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
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
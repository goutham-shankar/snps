export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Sophisticated hero with integrated image */}
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
                value-based CBSE education in Chathannoor, Kerala.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "CBSE Affiliated", icon: "✓" },
                  { label: "13 Acre Campus", icon: "🌳" },
                  { label: "Pre-KG to Grade XII", icon: "📚" }
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
            { value: "1000+", label: "Students", sublabel: "Active Learners" },
            { value: "60+", label: "Faculty", sublabel: "Expert Teachers" },
            { value: "100%", label: "Results", sublabel: "Board Pass Rate" },
            { value: "10+", label: "Years", sublabel: "Of Excellence" }
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
                Established under the aegis of the <strong className="font-semibold text-gray-900">Sree Narayana Educational Society</strong>, 
                SNPS stands as a beacon of quality education in Chathannoor, Kerala.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Affiliated with <strong className="font-semibold text-gray-900">CBSE, New Delhi</strong>, 
                we offer comprehensive education that seamlessly blends traditional values with modern pedagogical approaches.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our 13-acre eco-friendly campus provides a nurturing environment where students develop 
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
              content: "To develop confident, value-driven individuals equipped with critical thinking, life skills, and a deep sense of national pride, who contribute positively to society and the nation."
            },
            {
              title: "Our Mission",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              content: "To provide holistic, competency-based education rooted in values, leadership, and discipline through a safe, inclusive environment that fosters academic excellence, creativity, and responsible citizenship."
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
              The principles that guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Excellence", 
                desc: "Pursuing the highest standards in academics and character",
                icon: "⭐"
              },
              { 
                title: "Integrity", 
                desc: "Building character through honesty and ethical conduct",
                icon: "🛡️"
              },
              { 
                title: "Compassion", 
                desc: "Nurturing empathy and respect for all",
                icon: "❤️"
              },
              { 
                title: "Innovation", 
                desc: "Embracing creativity and modern approaches",
                icon: "💡"
              }
            ].map((value, i) => (
              <div 
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
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
                Visit our campus and discover how SNPS can shape your child's future.
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




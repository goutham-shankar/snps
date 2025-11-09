export default function Academics() {
  const programs = [
    {
      title: "Pre-Primary",
      grades: "Pre-KG to UKG",
      description: "Play-based learning with focus on foundational skills",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Primary",
      grades: "Grade I to V",
      description: "Building strong academic foundation with life skills",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-orange-500 to-orange-500"
    },
    {
      title: "Middle School",
      grades: "Grade VI to VIII",
      description: "Comprehensive curriculum with co-curricular excellence",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Secondary",
      grades: "Grade IX to X",
      description: "CBSE board preparation with holistic development",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Senior Secondary",
      grades: "Grade XI to XII",
      description: "Stream specialization: Science, Commerce, Humanities",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      color: "from-orange-500 to-amber-500"
    }
  ];

  const features = [
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, 
      title: "CBSE Curriculum", 
      desc: "Competency-based learning" 
    },
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, 
      title: "Expert Faculty", 
      desc: "Highly qualified educators" 
    },
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, 
      title: "Smart Classes", 
      desc: "Technology-enabled learning" 
    },
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, 
      title: "STEM Labs", 
      desc: "Hands-on experimentation" 
    },
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, 
      title: "Arts & Culture", 
      desc: "Creative expression" 
    },
    { 
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
      title: "Sports", 
      desc: "Physical education" 
    }
  ];

  return (
    <section id="academics" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Sophisticated hero with integrated image */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Academic Programs
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Comprehensive CBSE<br />
                Education Excellence
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                From <strong className="text-[#af5f36] font-semibold">Pre-KG to Grade XII</strong>, 
                we provide world-class education that nurtures academic excellence, 
                critical thinking, and holistic development.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "CBSE Affiliated", icon: "✓" },
                  { label: "Pre-KG to XII", icon: "📚" },
                  { label: "Multiple Streams", icon: "🎓" }
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
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#programs" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#af5f36] hover:text-[#af5f36] transition"
                >
                  Explore Programs
                </a>
              </div>
            </div>

            {/* Image side - properly sized and blended */}
            <div className="lg:col-span-2 relative min-h-80 lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                alt="Students Learning"
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
            { value: "100%", label: "Results", sublabel: "Board Pass Rate" },
            { value: "60+", label: "Faculty", sublabel: "Expert Teachers" },
            { value: "1500+", label: "Students", sublabel: "Active Learners" },
            { value: "12+", label: "Labs", sublabel: "Modern Facilities" }
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

        {/* Programs Section */}
        <div className="mb-12 md:mb-16" id="programs">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Educational Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully designed programs for every stage of your child's educational journey
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg p-8 md:p-10 overflow-hidden group hover:shadow-xl transition"
            >
              <div className="relative">
                <div 
                  className="w-16 h-16 rounded-2xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-[#af5f36] mb-5 group-hover:scale-110 transition"
                >
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="inline-block px-3 py-1 bg-orange-100 text-[#af5f36] rounded-full text-sm font-semibold mb-3 border border-orange-200">
                  {program.grades}
                </div>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities gallery - elegant presentation */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Our Facilities
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Learning Environments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: "/gallery/academics/20251101_11937PMByGPSMapCamera.jpg", alt: "Modern Classrooms", title: "Smart Classrooms" },
              { src: "/gallery/academics/20251101_12518PMByGPSMapCamera.jpg", alt: "Science Labs", title: "Advanced Labs" }
            ].map((img, i) => (
              <div 
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group aspect-video"
              >
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div 
                  className="absolute inset-0 flex items-end"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' }}
                >
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">{img.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Features - refined grid */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Why Choose SNPS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Academic Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class facilities and innovative methodologies for comprehensive learning
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group"
              >
                <div className="w-16 h-16 mx-auto mb-3 text-[#af5f36] group-hover:scale-110 transition">{feature.icon}</div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Secondary Streams - sophisticated card layout */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                Classes XI & XII
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Senior Secondary Streams</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your path to success with specialized stream options tailored to your career aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Science Stream",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                subjects: ["Physics", "Chemistry", "Biology", "Mathematics"]
              },
              {
                title: "Commerce Stream",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"]
              },
              {
                title: "Humanities Stream",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                ),
                subjects: ["History", "Political Science", "Psychology", "English"]
              }
            ].map((stream, i) => (
              <div 
                key={i}
                className="relative bg-white rounded-2xl shadow-md p-8 overflow-hidden group hover:shadow-lg transition border border-gray-100 hover:border-orange-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-[#af5f36] mb-5 group-hover:scale-110 transition">
                  {stream.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stream.title}</h3>
                
                <div className="space-y-2">
                  {stream.subjects.map((subject, j) => (
                    <div key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#af5f36] font-bold">✓</span>
                      <span className="text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Begin Your Academic Journey?</h3>
              <p className="text-orange-100 text-lg">
                Join SNPS and experience world-class CBSE education that nurtures excellence.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                Apply for Admission
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




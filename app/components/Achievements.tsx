export default function Achievements() {
  const achievements = [
    {
      title: "Academic Excellence",
      items: [
        { text: "100% Pass Rate in CBSE Board Exams", icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="12" y="6" width="3" height="11"/><rect x="17" y="12" width="3" height="5"/></svg>
        ) },
        { text: "State Topper in Mathematics", icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8m-4-4v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M5 9a3 3 0 01-3-3V5h3m14 4a3 3 0 003-3V5h-3"/></svg>
        ) },
        { text: "National Science Olympiad Winners", icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 20l6-4 6 4"/></svg>
        ) }
      ],
      color: "from-orange-500 to-[#8b4a28]"
    },
    {
      title: "Sports Achievements",
      items: [
        { text: "District Champions - Football", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3l3 5-3 4-3-4 3-5z"/></svg>) },
        { text: "State Level Athletics Medal", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 00-2 2v7a6 6 0 0012 0V4a2 2 0 00-2-2z"/></svg>) },
        { text: "Inter-School Cricket Trophy", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 3l-6 6"/><circle cx="8" cy="16" r="3"/></svg>) }
      ],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Cultural Excellence",
      items: [
        { text: "Best School in Arts Competition", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 013 3v10a4 4 0 11-4-4h4"/></svg>) },
        { text: "State Dance Championship Winner", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v6l-2 2 4 4-2 2"/></svg>) },
        { text: "Music Festival Gold Medal", icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="18" r="3"/><path d="M9 18V5l10-2v11"/></svg>) }
      ],
      color: "from-purple-500 to-purple-700"
    }
  ];

  const recognitions = [
    { title: "CBSE Affiliation", desc: "Recognized by CBSE, New Delhi", icon: "🏅" },
    { title: "Eco-School Award", desc: "Green Campus Certification", icon: "🌿" },
    { title: "Best Infrastructure", desc: "District Level Recognition", icon: "🏗️" },
    { title: "Safety Standards", desc: "Certified Safe School", icon: "🛡️" }
  ];

  return (
  <section id="achievements" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in academics, sports, and beyond
          </p>
        </div>

        {/* Achievement Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-4 bg-linear-to-r ${category.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#af5f36] mb-6 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-50 text-[#af5f36] shrink-0">{item.icon}</span>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recognitions */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Recognition & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-[#af5f36]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8m-4-4v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M5 9a3 3 0 01-3-3V5h3m14 4a3 3 0 003-3V5h-3"/></svg>
                </div>
                <h4 className="text-lg font-bold text-[#af5f36] mb-2">
                  {recognition.title}
                </h4>
                <p className="text-sm text-gray-600">{recognition.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
  <div className="mt-16 bg-linear-to-r from-[#af5f36] to-[#8b4a28] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-orange-300">100%</div>
              <p className="text-xl">Board Pass Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-orange-300">50+</div>
              <p className="text-xl">Awards Won</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-orange-300">25+</div>
              <p className="text-xl">Sports Trophies</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-orange-300">10+</div>
              <p className="text-xl">Cultural Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




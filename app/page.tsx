"use client";
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      title: "Academic Excellence",
      description: "CBSE-affiliated curriculum with innovative teaching methodologies and personalized attention for holistic learning",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: "/academics"
    },
    {
      title: "World-Class Infrastructure",
      description: "14-acre campus featuring modern laboratories, sports facilities, smart classrooms, and eco-friendly spaces",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/facilities"
    },
    {
      title: "Holistic Development",
      description: "Comprehensive programs fostering creativity, critical thinking, leadership skills, and strong moral values",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/about"
    },
    {
      title: "Proven Track Record",
      description: "Consistent excellence in board examinations, competitive sports, and state-level cultural competitions",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      link: "/achievements"
    }
  ];

  const quickLinks = [
    { 
      title: "Admissions 2025-26", 
      desc: "Application Process & Requirements", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: "/admission", 
      color: "from-[#af5f36] to-[#8b4a28]" 
    },
    { 
      title: "Virtual Campus Tour", 
      desc: "Explore Our Facilities", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: "/gallery", 
      color: "from-orange-500 to-orange-600" 
    },
    { 
      title: "Academic Calendar", 
      desc: "Term Dates & Events", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: "/calendar", 
      color: "from-amber-500 to-amber-600" 
    },
    { 
      title: "Get in Touch", 
      desc: "Contact Information", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/contact", 
      color: "from-rose-500 to-rose-600" 
    }
  ];

  const stats = [
    { number: "2015", label: "Year Established" },
    { number: "14", label: "Acres Campus" },
    { number: "500+", label: "Students Enrolled" },
    { number: "100%", label: "Board Results" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-20 bg-linear-to-br from-white to-orange-50">
        <div className="container mx-auto px-4">
          {/* Header with Images */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold text-[#af5f36] tracking-wide uppercase">Excellence in Education</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Shaping Tomorrow's Leaders Today
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At Sree Narayana Public School, we are committed to providing quality education that nurtures 
                intellectual growth, character development, and social responsibility. Join our legacy of excellence 
                established in 2015.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-[#af5f36] font-semibold text-lg hover:gap-3 transition-all"
              >
                <span>Discover Our Story</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/SCHOOL.JPG"
                    alt="Students Learning"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img
                    src="/schooimg/IMG_20251108_121231.jpg"
                    alt="Classroom"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#af5f36] rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-[#af5f36] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-[#af5f36] font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-linear-to-br from-white to-orange-50 rounded-xl p-6 text-center shadow-md border border-orange-100"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#af5f36] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#af5f36] tracking-wide uppercase">Why Choose SNPS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine academic rigor with holistic development to prepare students for tomorrow's challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600 mb-4">
                Our highly qualified and experienced teachers are dedicated to nurturing each student's potential through innovative teaching methods.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Continuous professional development
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Student-centric approach
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Regular mentoring programs
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Learning</h3>
              <p className="text-gray-600 mb-4">
                Modern smart classrooms equipped with interactive displays, digital learning resources, and technology integration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Interactive digital boards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  E-learning platforms
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Digital library access
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Attention</h3>
              <p className="text-gray-600 mb-4">
                Small class sizes ensure personalized attention, enabling teachers to address each student's unique learning needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Optimal student-teacher ratio
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Personalized learning plans
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  One-on-one counseling
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sports Excellence</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive sports program with professional coaching, modern facilities, and regular participation in competitions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Multi-sport facilities
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Professional coaches
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  District & state tournaments
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value Education</h3>
              <p className="text-gray-600 mb-4">
                Character building and moral education integrated into curriculum, inspired by the teachings of Sree Narayana Guru.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Ethics & values program
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Community service projects
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Leadership development
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-linear-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#af5f36]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Parent Partnership</h3>
              <p className="text-gray-600 mb-4">
                Strong home-school collaboration through regular communication, parent portal, and involvement in school activities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Digital parent portal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Regular PTM sessions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#af5f36] rounded-full"></span>
                  Progress tracking system
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Gallery */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experience Campus Life
              </h3>
              <p className="text-lg text-gray-600">
                A glimpse into our vibrant learning environment
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/gallery/academics/20251101_11937PMByGPSMapCamera.jpg"
                  alt="Smart Classrooms"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">Smart Classrooms</h4>
                    <p className="text-sm text-gray-200">Interactive learning spaces</p>
                  </div>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/gallery/academics/20251101_13026PMByGPSMapCamera.jpg"
                  alt="Modern Labs"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">Modern Labs</h4>
                    <p className="text-sm text-gray-200">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/gallery/academics/20251101_115033AMByGPSMapCamera.jpg"
                  alt="Sports Facilities"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">Sports Arena</h4>
                    <p className="text-sm text-gray-200">Multi-sport facilities</p>
                  </div>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/gallery/academics/20251101_120437PMByGPSMapCamera.jpg"
                  alt="Library"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">Library</h4>
                    <p className="text-sm text-gray-200">Vast knowledge resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join Our Family CTA */}
      <section className="py-20 bg-linear-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-linear-to-r from-[#af5f36] to-[#8b4a28] rounded-3xl p-12 text-center shadow-2xl">
              <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Join Our Family?
                </h3>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Discover how SNPS nurtures young minds to become confident, compassionate leaders
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#af5f36] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Learn More About Us</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    href="/admission"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#af5f36]"
                  >
                    <span>Start Admission Process</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview - Reimagined */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, orange-500 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#af5f36] tracking-wide uppercase mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shaping Tomorrow's Leaders Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where tradition meets innovation in education
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Key Info Cards */}
            <div className="group bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-14 h-14 bg-[#af5f36] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Heritage & Trust</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Managed by <span className="font-semibold text-[#af5f36]">Sree Narayana Educational Society</span>, 
                carrying forward a legacy of value-based education since 2015.
              </p>
              <div className="text-4xl font-bold text-[#af5f36]">2015</div>
              <div className="text-sm text-gray-500">Established</div>
            </div>

            <div className="group bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-14 h-14 bg-[#af5f36] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">National Recognition</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Proudly affiliated with <span className="font-semibold text-[#af5f36]">CBSE, New Delhi</span>, 
                ensuring world-class education standards and global opportunities.
              </p>
              <div className="text-4xl font-bold text-[#af5f36]">Pre-KG to XII</div>
              <div className="text-sm text-gray-500">Complete Education</div>
            </div>

            <div className="group bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-14 h-14 bg-[#af5f36] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expansive Campus</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spread across <span className="font-semibold text-[#af5f36]">14 acres</span> of lush greenery 
                with cutting-edge infrastructure and eco-friendly facilities.
              </p>
              <div className="text-4xl font-bold text-[#af5f36]">14 Acres</div>
              <div className="text-sm text-gray-500">Green Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8500020/pexels-photo-8500020.jpeg"
            alt="Students"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#af5f36]/95 to-[#8b4a28]/95"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Begin Your Journey With Us
            </h2>
            <p className="text-xl mb-10 text-orange-100 leading-relaxed">
              Applications are now open for the 2025-26 academic year. Invest in your child's future with 
              a well-rounded education that prepares them for global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#af5f36] hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Apply Now</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#af5f36] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Schedule a Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}




'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import schoolInfo from '../data/school-info';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-gray-300">
      {/* Decorative Top Border */}
      <div className="h-1 bg-[#af5f36]"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-20">
        {/* Top Section - School Info */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
            <div className="w-20 h-20 transition-transform group-hover:scale-110 duration-300">
              <Image
                src="/logo.png"
                alt="SNPS Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-2xl text-white mb-1">{schoolInfo.name}</h3>
              <p className="text-sm text-gray-400">{schoolInfo.fullLocation} | {schoolInfo.affiliation}</p>
            </div>
          </Link>
          <p className="text-gray-400 text-lg leading-relaxed italic max-w-3xl mx-auto">
            &quot;Empowering minds, nurturing values, and shaping future leaders on our {schoolInfo.campusSize} campus since {schoolInfo.established}. {schoolInfo.motto}.&quot;
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Quick Access */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#af5f36] rounded-full"></span>
              Quick Access
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Academics</Link></li>
              <li><Link href="/facilities" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Facilities</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#af5f36] rounded-full"></span>
              Admissions
            </h4>
            <ul className="space-y-3">
              <li><Link href="/admission" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Admission Process</Link></li>
              <li><Link href="/fees" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Fee Structure</Link></li>
              <li><Link href="/calendar" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Academic Calendar</Link></li>
              <li><Link href="/results" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Exam Results</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#af5f36] rounded-full"></span>
              Important
            </h4>
            <ul className="space-y-3">
              <li><Link href="/policies" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Policies</Link></li>
              <li><Link href="/grievance" className="text-gray-400 hover:text-[#af5f36] transition-colors hover:translate-x-1 inline-block text-sm">Grievance Redressal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#af5f36] rounded-full"></span>
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#af5f36] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{schoolInfo.contact.address.line2}, {schoolInfo.district}, {schoolInfo.state}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#af5f36] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{schoolInfo.contact.phone.main}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#af5f36] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{schoolInfo.contact.email.general}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {schoolInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500">
              Designed and developed by{' '}
              <a 
                href="https://www.obsidyne.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#af5f36] hover:text-[#8b4a28] transition-colors underline"
              >
                Obsidyne
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 bg-[#af5f36] hover:bg-[#8b4a28] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </footer>
  );
}




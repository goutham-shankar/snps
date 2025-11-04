'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Set initial scroll state
    setIsScrolled(window.scrollY > 20);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admission', href: '/admission' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  // Check if link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Determine if header should be solid (scrolled on home page OR on any other page)
  const isSolidBackground = !isHomePage || isScrolled;
  
  // Keep consistent size - only transparent/white text on homepage at top
  const isTransparentMode = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidBackground 
          ? 'bg-white shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 transition-all duration-300">
          {/* Logo and School Name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-14 h-14 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="SNPS Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className={`font-bold leading-tight transition-all duration-300 text-sm md:text-lg ${
                  isTransparentMode ? 'text-white' : 'text-[#af5f36]'
                }`}>
                  Sree Narayana Public School
                </h1>
                <p className={`transition-all duration-300 text-xs md:text-sm ${
                  isTransparentMode ? 'text-gray-200' : 'text-gray-600'
                }`}>Chathannoor | CBSE Affiliated</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm relative ${
                    isTransparentMode 
                      ? active
                        ? 'text-white bg-white/30 font-semibold'
                        : 'text-white hover:text-white hover:bg-white/20'
                      : active
                        ? 'text-[#af5f36] bg-orange-100 font-semibold'
                        : 'text-gray-700 hover:text-[#af5f36] hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 ${
                      isTransparentMode ? 'bg-white' : 'bg-[#af5f36]'
                    }`} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/admission"
              className="bg-[#af5f36] hover:bg-[#8b4a28] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Admissions Open
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-all duration-200 ${
              isTransparentMode 
                ? 'text-white hover:text-gray-200' 
                : 'text-gray-700 hover:text-[#af5f36]'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white rounded-b-lg shadow-lg">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      active
                        ? 'text-[#af5f36] bg-orange-100 font-semibold'
                        : 'text-gray-700 hover:text-[#af5f36] hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/admission"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-[#af5f36] hover:bg-[#8b4a28] text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Admissions Open
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}




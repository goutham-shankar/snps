'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
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
    setMobileDropdowns({});
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/about',
      dropdown: [
        { label: 'About Us', href: '/about' },
        { label: 'Management', href: '/management' },
        { 
          label: 'Academics', 
          href: '/academics',
          subDropdown: [
            { label: 'Programs', href: '/academics' },
            { label: 'Calendar', href: '/calendar' },
            { label: 'Results', href: '/results' }
          ]
        },
        { label: 'Achievements', href: '/achievements' },
        { label: 'Infrastructure', href: '/infrastructure' }
      ]
    },
    { 
      label: 'Admission', 
      href: '/admission',
      dropdown: [
        { label: 'Process', href: '/admission' },
        { label: 'Fee Structure', href: '/fees' }
      ]
    },
    { 
      label: 'Campus', 
      href: '/facilities',
      dropdown: [
        { label: 'Facilities', href: '/facilities' },
        { label: 'Gallery', href: '/gallery' }
      ]
    },
    { 
      label: 'Information', 
      href: '/mandatory-disclosure',
      dropdown: [
        { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
        { label: 'Policies', href: '/policies' },
        { label: 'Governance', href: '/governance' },
        { label: 'Compliance', href: '/compliance' }
      ]
    },
    { 
      label: 'Contact', 
      href: '/contact',
      dropdown: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Grievance', href: '/grievance' }
      ]
    },
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
                }`}>Chathannoor – Vilappuram | CBSE Affiliated</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              
              if (item.dropdown) {
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm relative flex items-center gap-1 ${
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {active && (
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 ${
                          isTransparentMode ? 'bg-white' : 'bg-[#af5f36]'
                        }`} />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((dropdownItem) => {
                        if (dropdownItem.subDropdown) {
                          return (
                            <div key={dropdownItem.label} className="relative group/nested">
                              <Link
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-700 hover:text-[#af5f36] hover:bg-orange-50 transition-colors first:rounded-t-lg flex items-center justify-between"
                              >
                                <span>{dropdownItem.label}</span>
                                <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                              {/* Nested Submenu - positioned to the right */}
                              <div className="nested-submenu absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-[60] whitespace-nowrap">
                                {dropdownItem.subDropdown.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-4 py-3 text-gray-700 hover:text-[#af5f36] hover:bg-orange-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:text-[#af5f36] hover:bg-orange-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {dropdownItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              
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
            <nav className="flex flex-col gap-0.5">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                
                if (item.dropdown) {
                  const isOpen = mobileDropdowns[item.label];
                  return (
                    <div key={item.label} className="border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex-1 px-4 py-3.5 transition-all duration-200 font-medium text-[15px] ${
                            active
                              ? 'text-[#af5f36] font-semibold'
                              : 'text-gray-700 hover:text-[#af5f36]'
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className={`px-4 py-3.5 transition-all duration-200 ${
                            isOpen ? 'text-[#af5f36]' : 'text-gray-500'
                          }`}
                          aria-label={`Toggle ${item.label} dropdown`}
                        >
                          <svg 
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {isOpen && (
                        <div className="bg-orange-50/50 border-t border-orange-100">
                          {item.dropdown.map((dropdownItem) => {
                            if (dropdownItem.subDropdown) {
                              const subIsOpen = mobileDropdowns[`${item.label}-${dropdownItem.label}`];
                              return (
                                <div key={dropdownItem.label} className="border-b border-orange-100/50 last:border-0">
                                  <div className="flex items-center justify-between">
                                    <Link
                                      href={dropdownItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex-1 pl-8 pr-4 py-3 text-[14px] text-gray-600 hover:text-[#af5f36] hover:bg-orange-50 transition-colors"
                                    >
                                      {dropdownItem.label}
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleMobileDropdown(`${item.label}-${dropdownItem.label}`);
                                      }}
                                      className={`px-4 py-3 transition-all duration-200 ${
                                        subIsOpen ? 'text-[#af5f36]' : 'text-gray-500'
                                      }`}
                                      aria-label={`Toggle ${dropdownItem.label} submenu`}
                                    >
                                      <svg 
                                        className={`w-4 h-4 transition-transform duration-300 ${subIsOpen ? 'rotate-90' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </button>
                                  </div>
                                  {subIsOpen && (
                                    <div className="bg-orange-100/30 border-t border-orange-200/50">
                                      {dropdownItem.subDropdown.map((subItem) => (
                                        <Link
                                          key={subItem.label}
                                          href={subItem.href}
                                          onClick={() => setIsMenuOpen(false)}
                                          className="block pl-12 pr-4 py-2.5 text-[13px] text-gray-600 hover:text-[#af5f36] hover:bg-orange-50 transition-colors border-b border-orange-200/30 last:border-0"
                                        >
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block pl-8 pr-4 py-3 text-[14px] text-gray-600 hover:text-[#af5f36] hover:bg-orange-50 transition-colors border-b border-orange-100/50 last:border-0"
                              >
                                {dropdownItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3.5 transition-all duration-200 font-medium text-[15px] border-b border-gray-100 last:border-0 ${
                      active
                        ? 'text-[#af5f36] font-semibold'
                        : 'text-gray-700 hover:text-[#af5f36]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="px-4 pt-4">
                <Link
                  href="/admission"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-[#af5f36] hover:bg-[#8b4a28] text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Admissions Open
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}



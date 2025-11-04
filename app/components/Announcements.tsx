'use client';

import { useState, useEffect } from 'react';

export default function Announcements() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const announcements = [
    {
      title: "Admissions Open for 2025-26",
      message: "Applications are now being accepted for Pre-KG to Grade XII. Apply before March 31, 2025!",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5a2 2 0 002 2h8a2 2 0 002-2v-5"/>
        </svg>
      ),
      type: "admission"
    },
    {
      title: "Annual Day Celebration",
      message: "Join us for our Annual Day celebration on February 15, 2025. Cultural programs and award ceremony.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3l7 18 4-8 8-4L3 3z"/>
        </svg>
      ),
      type: "event"
    },
    {
      title: "Parent-Teacher Meeting",
      message: "Upcoming PTM scheduled for January 25, 2025. Please check the portal for your slot timing.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/>
          <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/>
        </svg>
      ),
      type: "meeting"
    },
    {
      title: "Sports Day Results",
      message: "Congratulations to all participants! Our students won 3 gold medals in the district athletics meet.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 21h8m-4-4v4"/>
          <path d="M7 4h10v5a5 5 0 01-10 0V4z"/>
          <path d="M5 9a3 3 0 01-3-3V5h3m14 4a3 3 0 003-3V5h-3"/>
        </svg>
      ),
      type: "achievement"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-linear-to-r from-orange-500 to-orange-600 py-4 shadow-lg" aria-label="Announcements">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-white font-bold text-lg shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3l4-4v10l-4-4H3z"/><path d="M14 7v10"/></svg>
            <span>Announcements</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="relative h-12 flex items-center" aria-live="polite" aria-atomic="true">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center transition-all duration-500 ${
                    index === currentAnnouncement
                      ? 'opacity-100 translate-x-0'
                      : index < currentAnnouncement
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="flex items-center gap-3 text-white">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                      {announcement.icon}
                    </span>
                    <div>
                      <span className="font-bold mr-2">{announcement.title}:</span>
                      <span className="text-orange-50">{announcement.message}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 shrink-0" role="tablist" aria-label="Announcements navigation">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAnnouncement(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentAnnouncement ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to announcement ${index + 1}`}
        aria-selected={index === currentAnnouncement}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




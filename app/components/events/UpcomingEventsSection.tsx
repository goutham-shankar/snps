'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchAPI, getStrapiMediaUrl, extractExcerpt, StrapiResponse, EventAttributes } from '../../lib/api';
import { getDateParts, formatTime, isUpcoming } from '../../utils/formatDate';

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetchAPI<StrapiResponse<EventAttributes>>('/events');
        
        if (!response.data || !Array.isArray(response.data)) {
          setEvents([]);
          setLoading(false);
          return;
        }
        
        // Filter upcoming events, sort by date, and take latest 3
        const upcomingEvents = response.data
          .filter(event => {
            const data = event.attributes || event;
            return data && data.title && data.eventDate && isUpcoming(data.eventDate);
          })
          .sort((a, b) => {
            const aData = a.attributes || a;
            const bData = b.attributes || b;
            const dateA = new Date(aData.eventDate || 0);
            const dateB = new Date(bData.eventDate || 0);
            return dateA.getTime() - dateB.getTime();
          })
          .slice(0, 3);
        
        setEvents(upcomingEvents);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                    <div className="flex-1">
                      <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-md">
            <svg className="w-5 h-5 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[#af5f36] font-semibold text-sm">Coming Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events & Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendar for these exciting events happening at our school
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {events.map((event) => {
            const data = event.attributes || event;
            const { title, description, eventDate, eventTime, location, banner } = data;
            
            if (!title || !eventDate) return null;
            
            const imageUrl = getStrapiMediaUrl(banner);
            const excerpt = description ? extractExcerpt(description, 80) : '';
            const dateParts = getDateParts(eventDate);
            const eventId = (event as any).documentId || (event as any).id;
            const eventSlug = (data as any).slug || eventId;
            const isEventUpcoming = isUpcoming(eventDate);

            return (
              <Link
                key={eventId}
                href={`/events/${eventSlug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-200"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={banner?.alternativeText || title || 'Event image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {isEventUpcoming ? (
                    <div className="absolute top-3 right-3 bg-gradient-to-br from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Upcoming
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-gradient-to-br from-gray-500 to-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Past
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Date Block */}
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] text-white rounded-xl p-3 text-center min-w-[70px] shadow-lg">
                      <div className="text-2xl font-bold leading-none">{dateParts.day}</div>
                      <div className="text-xs font-medium mt-1">{dateParts.month}</div>
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#af5f36] transition-colors line-clamp-2">
                        {title}
                      </h3>

                      {/* Meta Info */}
                      <div className="space-y-1">
                        {eventTime && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{formatTime(eventTime)}</span>
                          </div>
                        )}
                        {location && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="line-clamp-1">{location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Excerpt */}
                  {excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {excerpt}
                    </p>
                  )}

                  {/* View Details */}
                  <div className="flex items-center gap-2 text-[#af5f36] font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#af5f36] to-[#8b4a28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


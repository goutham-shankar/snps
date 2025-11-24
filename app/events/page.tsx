import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI, getStrapiMediaUrl, extractExcerpt, StrapiResponse, EventAttributes } from '../lib/api';
import { formatDate, getDateParts, formatTime, isUpcoming } from '../utils/formatDate';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Stay updated with upcoming events, academic activities, sports competitions, and cultural programs at Sree Narayana Public School. Join us in celebrating excellence.',
  keywords: ['school events', 'SNPS events', 'academic calendar', 'school activities', 'sports events', 'cultural programs'],
  openGraph: {
    title: 'Events | Sree Narayana Public School',
    description: 'Upcoming events and activities at Sree Narayana Public School',
    type: 'website',
  },
};

async function getEvents() {
  try {
    const response = await fetchAPI<StrapiResponse<EventAttributes>>('/events', {
      cache: 'no-store',
    });
    
    if (!response.data || !Array.isArray(response.data)) {
      return { upcoming: [], past: [] };
    }
    
    // Filter valid events and sort by eventDate
    const validEvents = response.data
      .filter(item => {
        const data = item.attributes || item;
        return data && data.title && data.eventDate;
      });
    
    const sortedEvents = validEvents.sort((a, b) => {
      const aData = a.attributes || a;
      const bData = b.attributes || b;
      const dateA = new Date(aData.eventDate || 0);
      const dateB = new Date(bData.eventDate || 0);
      return dateA.getTime() - dateB.getTime();
    });
    
    // Separate upcoming and past events
    const upcoming = sortedEvents.filter(event => {
      const data = event.attributes || event;
      return data.eventDate && isUpcoming(data.eventDate);
    });
    const past = sortedEvents.filter(event => {
      const data = event.attributes || event;
      return data.eventDate && !isUpcoming(data.eventDate);
    }).reverse();
    
    return { upcoming, past };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { upcoming: [], past: [] };
  }
}

export default async function EventsPage() {
  const { upcoming, past } = await getEvents();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#af5f36] to-[#8b4a28] py-24 overflow-hidden mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-semibold">School Calendar</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              School Events & Activities
            </h1>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              Stay connected with all activities, celebrations, and important dates at our school
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Events</h2>
                <p className="text-gray-600">Mark your calendar for these exciting events</p>
              </div>
            </div>
          </div>

          {upcoming.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">Check back soon for new events and activities</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => {
                const data = event.attributes || event;
                const { title, description, eventDate, eventTime, location, banner, slug } = data;
                
                if (!title || !eventDate) return null;
                
                const imageUrl = getStrapiMediaUrl(banner);
                const excerpt = description ? extractExcerpt(description, 100) : '';
                const dateParts = getDateParts(eventDate);
                const eventId = event.documentId || event.id;
                const eventSlug = slug || eventId;
                const isEventUpcoming = isUpcoming(eventDate);

                return (
                  <Link
                    key={eventId}
                    href={`/events/${eventSlug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-200"
                  >
                    {/* Event Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <Image
                        src={imageUrl}
                        alt={banner?.alternativeText || title || 'Event image'}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Upcoming
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date Block */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] text-white rounded-xl p-4 text-center min-w-[80px] shadow-lg">
                          <div className="text-3xl font-bold leading-none">{dateParts.day}</div>
                          <div className="text-sm font-medium mt-1">{dateParts.month}</div>
                        </div>

                        <div className="flex-1">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#af5f36] transition-colors line-clamp-2">
                            {title}
                          </h3>

                          {/* Meta Info */}
                          <div className="space-y-1.5">
                            {eventTime && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{formatTime(eventTime)}</span>
                              </div>
                            )}
                            {location && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                          {excerpt}
                        </p>
                      )}

                      {/* View Details Link */}
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
          )}
        </div>
      </section>

      {/* Past Events */}
      {past.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Past Events</h2>
                  <p className="text-gray-600">Memorable moments from our school community</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((event) => {
                const data = event.attributes || event;
                const { title, description, eventDate, eventTime, location, banner, slug } = data;
                
                if (!title || !eventDate) return null;
                
                const imageUrl = getStrapiMediaUrl(banner);
                const excerpt = description ? extractExcerpt(description, 100) : '';
                const dateParts = getDateParts(eventDate);
                const eventId = event.documentId || event.id;
                const eventSlug = slug || eventId;

                return (
                  <Link
                    key={eventId}
                    href={`/events/${eventSlug}`}
                    className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 opacity-90 hover:opacity-100"
                  >
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <Image
                        src={imageUrl}
                        alt={banner?.data?.attributes?.alternativeText || title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-gray-500 to-gray-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        Past
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0 bg-gray-300 text-gray-700 rounded-lg p-3 text-center min-w-[70px]">
                          <div className="text-2xl font-bold leading-none">{dateParts.day}</div>
                          <div className="text-xs font-medium mt-1">{dateParts.month}</div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {title}
                          </h3>
                          {excerpt && (
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}


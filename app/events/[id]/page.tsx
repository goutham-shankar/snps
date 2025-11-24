import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { fetchAPI, getStrapiMediaUrl, StrapiSingleResponse, EventAttributes, extractExcerpt } from '../../lib/api';
import { formatDate, formatTime, generateICS } from '../../utils/formatDate';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getEvent(slug: string) {
  try {
    // First, fetch all events to find the one with matching slug
    const allEventsResponse = await fetchAPI<{ data: Array<any> }>('/events', {
      cache: 'no-store',
    });
    
    if (!allEventsResponse.data || !Array.isArray(allEventsResponse.data)) {
      return null;
    }
    
    // Find the item with matching slug
    const matchingItem = allEventsResponse.data.find((item) => {
      const data = item.attributes || item;
      return data.slug === slug;
    });
    
    if (!matchingItem) {
      return null;
    }
    
    // Get the documentId from the matching item
    const documentId = matchingItem.documentId || matchingItem.id;
    
    if (!documentId) {
      return null;
    }
    
    // Now fetch the single item using documentId
    const singleItemResponse = await fetchAPI<StrapiSingleResponse<EventAttributes>>(`/events/${documentId}`, {
      cache: 'no-store',
    });
    
    if (!singleItemResponse.data) {
      return null;
    }
    
    return singleItemResponse.data;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  const data = event.attributes || event;
  const { title, description, banner, eventDate, location } = data;
  const imageUrl = getStrapiMediaUrl(banner);
  const excerpt = description ? extractExcerpt(description, 160) : 'Event details';

  return {
    title: title || 'Event',
    description: excerpt,
    keywords: ['SNPS event', 'school event', title || '', location || ''].filter(Boolean),
    openGraph: {
      title: `${title} | Sree Narayana Public School`,
      description: excerpt,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: [imageUrl],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    notFound();
  }

  const data = event.attributes || event;
  const { 
    title, 
    description, 
    eventDate, 
    eventTime, 
    location, 
    banner, 
    registrationLink,
    isAllDay 
  } = data;
  
  if (!title || !description || !eventDate) {
    notFound();
  }
  
  const imageUrl = getStrapiMediaUrl(banner);

  // Generate ICS file content
  const handleAddToCalendar = () => {
    const icsContent = generateICS(
      title || 'Event',
      description ? extractExcerpt(description, 200) : 'Event details',
      location || 'TBA',
      eventDate || new Date().toISOString(),
      eventTime || null,
      isAllDay || false
    );
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#af5f36] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/events" className="text-gray-600 hover:text-[#af5f36] transition-colors">
              Events
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate">{title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] bg-gray-900 overflow-hidden mt-16">
        <Image
          src={imageUrl}
          alt={banner?.alternativeText || title || 'Event image'}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                {title}
              </h1>

              {/* Event Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                {eventDate && (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-orange-200 font-medium">Date</div>
                      <div className="text-white font-semibold">{formatDate(eventDate)}</div>
                    </div>
                  </div>
                )}

                {/* Time */}
                {eventTime && (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-orange-200 font-medium">Time</div>
                      <div className="text-white font-semibold">{formatTime(eventTime)}</div>
                    </div>
                  </div>
                )}

                {/* Location */}
                {location && (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-orange-200 font-medium">Location</div>
                      <div className="text-white font-semibold line-clamp-1">{location}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Action Buttons */}
            <div className="bg-gradient-to-r from-[#af5f36] to-[#8b4a28] rounded-2xl p-6 mb-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-1">Don't Miss This Event!</h3>
                  <p className="text-orange-100 text-sm">Add it to your calendar or register now</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleAddToCalendar}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#af5f36] hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Add to Calendar</span>
                  </button>
                  {registrationLink && (
                    <a
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#af5f36] px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      <span>Register Now</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Event Details</span>
              </h2>

              <div className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#af5f36] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-[#af5f36] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSanitize]}
                >
                  {description}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-gray-600 font-medium">Share this event:</div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: title,
                            text: extractExcerpt(description, 100),
                            url: window.location.href,
                          });
                        }
                      }}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-[#af5f36] font-semibold hover:gap-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to All Events</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


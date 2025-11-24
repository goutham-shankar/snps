import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI, getStrapiMediaUrl, extractExcerpt, StrapiResponse, SchoolNewsAttributes } from '../lib/api';
import { formatDate } from '../utils/formatDate';

export const metadata: Metadata = {
  title: 'School News',
  description: 'Stay updated with the latest news, announcements, and achievements from Sree Narayana Public School. Read about academic excellence, student accomplishments, and school events.',
  keywords: ['school news', 'SNPS news', 'school announcements', 'student achievements', 'academic updates'],
  openGraph: {
    title: 'School News | Sree Narayana Public School',
    description: 'Latest news and updates from Sree Narayana Public School',
    type: 'website',
  },
};

// Loading skeleton component
function NewsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <div className="w-full h-56 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function getSchoolNews() {
  try {
    const response = await fetchAPI<StrapiResponse<SchoolNewsAttributes>>('/school-news-all', {
      cache: 'no-store',
    });
    
    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }
    
    // Sort by publishedDate (newest first)
    const sortedNews = response.data
      .filter(item => item && (item.title || item.attributes?.title)) // Filter out invalid items
      .sort((a, b) => {
        // Handle both Strapi v4 (attributes) and v5 (direct) structures
        const aData = a.attributes || a;
        const bData = b.attributes || b;
        
        const dateA = new Date(aData.publishedDate || aData.publishedAt || aData.createdAt || 0);
        const dateB = new Date(bData.publishedDate || bData.publishedAt || bData.createdAt || 0);
        return dateB.getTime() - dateA.getTime();
      });
    
    return sortedNews;
  } catch (error) {
    console.error('Error fetching school news:', error);
    return [];
  }
}

export default async function SchoolNewsPage() {
  const newsItems = await getSchoolNews();

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-white font-semibold">Latest Updates</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              School News & Announcements
            </h1>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              Stay informed about the latest happenings, achievements, and important updates from our school community
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {newsItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No News Available</h3>
              <p className="text-gray-600">Check back soon for the latest updates and announcements</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((newsItem) => {
                // Handle both Strapi v4 (attributes) and v5 (direct) structures
                const data = newsItem.attributes || newsItem;
                const { title, slug, description, publishedDate, author, thumbnail, publishedAt, createdAt } = data;
                
                // Skip if no title
                if (!title) return null;
                
                const imageUrl = getStrapiMediaUrl(thumbnail);
                const excerpt = description ? extractExcerpt(description, 120) : '';
                const displayDate = publishedDate || publishedAt || createdAt || '';
                const itemId = newsItem.id || newsItem.documentId;

                return (
                  <Link
                    key={itemId}
                    href={`/school-news/${itemId}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <Image
                        src={imageUrl}
                        alt={thumbnail?.alternativeText || title || 'News image'}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      {displayDate && (
                        <div className="flex items-center gap-3 mb-4 text-sm">
                          <div className="flex items-center gap-1 text-[#af5f36]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formatDate(displayDate)}</span>
                          </div>
                          {author && (
                            <>
                              <span className="text-gray-300">•</span>
                              <span className="text-gray-600">{author}</span>
                            </>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#af5f36] transition-colors line-clamp-2">
                        {title}
                      </h3>

                      {/* Excerpt */}
                      {excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {excerpt}
                        </p>
                      )}

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-[#af5f36] font-semibold group-hover:gap-3 transition-all">
                        <span>Read More</span>
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

      <Footer />
    </div>
  );
}


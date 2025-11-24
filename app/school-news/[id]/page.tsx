import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { fetchAPI, getStrapiMediaUrl, StrapiSingleResponse, SchoolNewsAttributes, extractExcerpt } from '../../lib/api';
import { formatDate } from '../../utils/formatDate';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getNewsItem(slugOrId: string) {
  try {
    // Try to fetch by documentId first
    const response = await fetchAPI<StrapiSingleResponse<SchoolNewsAttributes>>(`/school-news-all/${slugOrId}`, {
      cache: 'no-store',
    });
    
    // Handle both v4 and v5 structures
    if (!response.data) return null;
    
    return response.data;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    return {
      title: 'News Not Found',
    };
  }

  const data = newsItem.attributes || newsItem;
  const { title, description, thumbnail, publishedDate, author } = data;
  const imageUrl = getStrapiMediaUrl(thumbnail);
  const excerpt = description ? extractExcerpt(description, 160) : '';

  return {
    title: title,
    description: excerpt,
    keywords: ['SNPS news', 'school announcement', title, author].filter(Boolean),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: `${title} | Sree Narayana Public School`,
      description: excerpt,
      type: 'article',
      publishedTime: publishedDate,
      authors: author ? [author] : undefined,
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

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  // Handle both Strapi v4 (attributes) and v5 (direct) structures
  const data = newsItem.attributes || newsItem;
  const { title, description, publishedDate, author, thumbnail, publishedAt, createdAt } = data;
  
  if (!title || !description) {
    notFound();
  }
  
  const imageUrl = getStrapiMediaUrl(thumbnail);
  const displayDate = publishedDate || publishedAt || createdAt || '';

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
            <Link href="/school-news" className="text-gray-600 hover:text-[#af5f36] transition-colors">
              School News
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
          alt={thumbnail?.alternativeText || title || 'News image'}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                {displayDate && (
                  <div className="flex items-center gap-2 text-orange-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{formatDate(displayDate)}</span>
                  </div>
                )}
                {author && (
                  <div className="flex items-center gap-2 text-orange-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">{author}</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
                  <div className="text-gray-600 font-medium">Share this article:</div>
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
                href="/school-news"
                className="inline-flex items-center gap-2 text-[#af5f36] font-semibold hover:gap-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to All News</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


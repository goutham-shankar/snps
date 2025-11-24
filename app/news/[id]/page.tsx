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
import ShareButton from '../../components/news/ShareButton';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getNewsItem(slug: string) {
  try {
    // First, fetch all news items to find the one with matching slug
    const allNewsResponse = await fetchAPI<{ data: Array<any> }>('/school-news-all', {
      cache: 'no-store',
    });
    
    if (!allNewsResponse.data || !Array.isArray(allNewsResponse.data)) {
      return null;
    }
    
    // Find the item with matching slug
    const matchingItem = allNewsResponse.data.find((item) => {
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
    const singleItemResponse = await fetchAPI<StrapiSingleResponse<SchoolNewsAttributes>>(`/school-news-all/${documentId}`, {
      cache: 'no-store',
    });
    
    if (!singleItemResponse.data) {
      return null;
    }
    
    return singleItemResponse.data;
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
    keywords: ['SNPS news', 'school announcement', title || '', author || ''].filter(Boolean) as string[],
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
            <Link href="/news" className="text-gray-600 hover:text-[#af5f36] transition-colors">
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
      <section className="relative h-[400px] md:h-[500px] bg-gray-900 overflow-hidden">
        <Image
          src={imageUrl}
          alt={thumbnail?.alternativeText || title || 'News image'}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
        
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
            <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8 pb-6 border-b-2 border-[#af5f36]">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span>Article</span>
                </h2>
              </div>
              <div className="prose prose-lg max-w-none prose-slate
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-[#af5f36] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-ul:text-gray-700
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4 prose-ol:text-gray-700
                prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-[#af5f36] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-code:text-[#af5f36] prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                prose-hr:border-gray-300 prose-hr:my-8"
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
                    <ShareButton
                      title={title || 'News Article'}
                      description={extractExcerpt(description, 100)}
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                href="/news"
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


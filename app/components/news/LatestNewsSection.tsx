'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchAPI, getStrapiMediaUrl, extractExcerpt, StrapiResponse, SchoolNewsAttributes } from '../../lib/api';
import { formatDateShort } from '../../utils/formatDate';

export default function LatestNewsSection() {
  const [newsItems, setNewsItems] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetchAPI<StrapiResponse<SchoolNewsAttributes>>('/school-news-all');
        
        if (!response.data || !Array.isArray(response.data)) {
          setNewsItems([]);
          setLoading(false);
          return;
        }
        
        // Sort by publishedDate and take latest 3
        const sortedNews = response.data
          .filter(item => {
            const data = item.attributes || item;
            return data && data.title;
          })
          .sort((a, b) => {
            const aData = a.attributes || a;
            const bData = b.attributes || b;
            const dateA = new Date(aData.publishedDate || aData.publishedAt || aData.createdAt || 0);
            const dateB = new Date(bData.publishedDate || bData.publishedAt || bData.createdAt || 0);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 3);
        
        setNewsItems(sortedNews);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (newsItems.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-[#af5f36] font-semibold text-sm">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            School News & Announcements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest happenings and achievements from our school community
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {newsItems.map((newsItem) => {
            const data = newsItem.attributes || newsItem;
            const { title, description, publishedDate, thumbnail, publishedAt, createdAt } = data;
            
            if (!title) return null;
            
            const imageUrl = getStrapiMediaUrl(thumbnail);
            const excerpt = description ? extractExcerpt(description, 100) : '';
            const displayDate = publishedDate || publishedAt || createdAt || '';
            const newsId = (newsItem as any).documentId || (newsItem as any).id;
            const newsSlug = (data as any).slug || newsId;

            return (
              <Link
                key={newsId}
                href={`/school-news/${newsSlug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={thumbnail?.alternativeText || title || 'News image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  {displayDate && (
                    <div className="flex items-center gap-2 text-sm text-[#af5f36] mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{formatDateShort(displayDate)}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#af5f36] transition-colors line-clamp-2">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  {excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-[#af5f36] font-semibold text-sm group-hover:gap-3 transition-all">
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/school-news"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#af5f36] to-[#8b4a28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View All News</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


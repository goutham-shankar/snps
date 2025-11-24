/**
 * API Wrapper for Strapi CMS
 * 
 * To change the API base URL, update the STRAPI_API_URL constant below.
 * This wrapper handles all Strapi API calls with automatic population and error handling.
 * 
 * Usage:
 * - fetchAPI('/school-news-all') - fetches all news with relationships populated
 * - fetchAPI('/school-news-all/1') - fetches single news item by ID
 * - fetchAPI('/events') - fetches all events
 * - fetchAPI('/events/1') - fetches single event by ID
 */

// Base URL for Strapi API - change this if your API URL changes
const STRAPI_API_URL = 'https://inspiring-frog-36ed0e23b7.strapiapp.com/api';

export interface StrapiImage {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  url?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface SchoolNewsAttributes {
  title?: string;
  slug?: string;
  description?: string;
  publishedDate?: string;
  author?: string | null;
  thumbnail?: StrapiImage | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface EventAttributes {
  title?: string;
  slug?: string;
  description?: string;
  eventDate?: string;
  eventTime?: string | null;
  location?: string | null;
  banner?: StrapiImage | null;
  registrationLink?: string | null;
  isAllDay?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface StrapiResponse<T> {
  data: Array<{
    id?: number;
    documentId?: string;
    attributes?: T;
  } & T>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: ({
    id?: number;
    documentId?: string;
    attributes?: T;
  } & T) | null;
  meta?: Record<string, unknown>;
}

interface FetchOptions {
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
  populate?: string;
}

/**
 * Fetch data from Strapi API
 * Automatically appends ?populate=* to get all relations
 * 
 * @param endpoint - API endpoint (e.g., '/school-news-all', '/events/1')
 * @param options - Fetch options including cache settings
 * @returns Parsed JSON response
 */
export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  // Add populate parameter if not already present
  const populate = options.populate || '*';
  const separator = cleanEndpoint.includes('?') ? '&' : '?';
  const url = `${STRAPI_API_URL}/${cleanEndpoint}${separator}populate=${populate}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: options.cache || 'no-store',
      next: options.next,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        url,
        body: errorText,
      });
      throw new Error(
        `Failed to fetch from ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

/**
 * Get the full URL for a Strapi media file
 * Handles both relative and absolute URLs, and Strapi v5 structure
 * 
 * @param image - Strapi image object
 * @returns Full URL to the media file
 */
export function getStrapiMediaUrl(image: StrapiImage | null | undefined): string {
  if (!image) return '/placeholder.jpg'; // Fallback image
  
  // Check if url exists directly (Strapi v5)
  const url = image.url;
  
  if (!url) return '/placeholder.jpg';
  
  // If URL is already absolute, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Otherwise, prepend Strapi base URL
  const baseUrl = STRAPI_API_URL.replace('/api', '');
  return `${baseUrl}${url}`;
}

/**
 * Extract excerpt from markdown content
 * Removes markdown syntax and limits to specified length
 * 
 * @param content - Full markdown content
 * @param maxLength - Maximum length of excerpt (default 150)
 * @returns Plain text excerpt
 */
export function extractExcerpt(content: string, maxLength: number = 150): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.slice(0, maxLength).trim() + '...';
}


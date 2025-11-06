import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://snpschool.edu.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/academics',
    '/admission',
    '/contact',
    '/facilities',
    '/gallery',
    '/management',
    '/grievance',
    '/mandatory-disclosure',
    '/achievements',
    '/infrastructure',
    '/calendar',
    '/results',
    '/fees',
    '/policies',
    '/governance',
    '/compliance',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/about' || route === '/academics' || route === '/admission' ? 0.9 : 0.7,
  }));
}


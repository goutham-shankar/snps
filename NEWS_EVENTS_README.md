# News & Events CMS System - Implementation Guide

## 📋 Overview

This document provides a complete guide to the News and Events system integrated with Strapi CMS for Sree Narayana Public School website.

---

## 🚀 Features Implemented

### ✅ Core Features

#### News System
- **News Listing Page** (`/school-news`)
  - Grid layout (1-3 columns responsive)
  - Thumbnail images with hover effects
  - Published date and author display
  - Excerpt preview
  - Loading skeletons
  - Empty state handling
  - SEO optimized

- **News Detail Page** (`/school-news/[id]`)
  - Full-width hero banner
  - Rich markdown rendering
  - Social sharing
  - Breadcrumb navigation
  - Open Graph & Twitter Cards
  - Safe HTML sanitization

#### Events System
- **Events Listing Page** (`/events`)
  - Upcoming events section (featured)
  - Past events section (grayscale)
  - Large date blocks
  - Time and location badges
  - Automatic date filtering
  - SEO optimized

- **Event Detail Page** (`/events/[id]`)
  - Hero banner with event meta
  - Add to Calendar (ICS download)
  - Optional registration link
  - Rich markdown descriptions
  - Event sharing
  - All-day event support

#### Homepage Integration
- **Latest News Section**
  - Shows 3 most recent news items
  - Matches site design
  - View all CTA button
  
- **Upcoming Events Section**
  - Shows 3 upcoming events only
  - Date blocks with gradients
  - View all CTA button

---

## 📁 File Structure

```
app/
├── lib/
│   └── api.ts                                    # Strapi API wrapper
├── utils/
│   └── formatDate.ts                             # Date utilities
├── school-news/
│   ├── page.tsx                                  # News listing
│   └── [id]/
│       └── page.tsx                              # News detail
├── events/
│   ├── page.tsx                                  # Events listing
│   └── [id]/
│       └── page.tsx                              # Event detail
├── components/
│   ├── news/
│   │   └── LatestNewsSection.tsx                 # Homepage news
│   ├── events/
│   │   └── UpcomingEventsSection.tsx             # Homepage events
│   └── Header.tsx                                # Updated navigation
└── page.tsx                                       # Homepage (updated)
```

---

## 🔧 API Configuration

### Strapi API Base URL

```typescript
// Location: app/lib/api.ts
const STRAPI_API_URL = 'https://inspiring-frog-36ed0e23b7.strapiapp.com/api';
```

**To change the API URL:**
1. Open `app/lib/api.ts`
2. Update the `STRAPI_API_URL` constant
3. No other changes needed!

### API Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `GET /api/school-news-all?populate=*` | Fetch all news with relations |
| `GET /api/school-news-all/:id?populate=*` | Fetch single news item |
| `GET /api/events?populate=*` | Fetch all events with relations |
| `GET /api/events/:id?populate=*` | Fetch single event |

---

## 📊 Strapi Content Type Definitions

### SchoolNews Content Type

```typescript
{
  title: string;                    // Required - News title
  slug: string;                     // UID - Auto-generated from title
  thumbnail: Media;                 // Single image - Card/OG image
  description: RichText;            // Markdown - Full article content
  publishedDate: Date;              // Date - Sorting & display
  author: string;                   // Optional - Author name
}
```

### Events Content Type

```typescript
{
  title: string;                    // Required - Event title
  slug: string;                     // UID - Auto-generated from title
  banner: Media;                    // Single image - Hero/banner
  description: RichText;            // Markdown - Full event details
  eventDate: Date;                  // Date - Main event date
  eventTime: string;                // Optional - Time (e.g., "10:30 AM")
  location: string;                 // Optional - Location/venue
  registrationLink: string;         // Optional - External registration URL
  isAllDay: boolean;                // Optional - All-day event flag
}
```

---

## 🎨 Design System

### Colors
- **Primary Brown**: `#af5f36`
- **Dark Brown**: `#8b4a28`
- **Orange Accents**: `#f97316`, `#fb923c`
- **Backgrounds**: `#f9fafb` (gray-50), `white`

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Component Styles
- **Cards**: `rounded-2xl` with `shadow-lg` hover `shadow-2xl`
- **Borders**: `border-gray-100` for subtle separation
- **Hover**: `-translate-y-2` with smooth transitions
- **Images**: Zoom effect (`scale-110`) on hover

---

## 🔐 Security & Performance

### Security
- ✅ All markdown sanitized with `rehype-sanitize`
- ✅ Safe HTML rendering
- ✅ XSS protection built-in
- ✅ Image sources validated

### Performance
- ✅ ISR caching (60-second revalidation)
- ✅ Next.js Image optimization
- ✅ Lazy loading for images
- ✅ Efficient data fetching
- ✅ Loading skeletons for better UX

### SEO
- ✅ Dynamic metadata per page
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Proper heading hierarchy

---

## 📦 Dependencies

```json
{
  "react-markdown": "^9.x",           // Markdown rendering
  "remark-gfm": "^4.x",               // GitHub Flavored Markdown
  "rehype-sanitize": "^6.x"          // HTML sanitization
}
```

**Installation:**
```bash
npm install react-markdown remark-gfm rehype-sanitize
```

---

## 🛠️ Usage Examples

### Using the API Wrapper

```typescript
import { fetchAPI, StrapiResponse, SchoolNewsAttributes } from '@/app/lib/api';

// Fetch all news
const response = await fetchAPI<StrapiResponse<SchoolNewsAttributes>>(
  '/school-news-all',
  { next: { revalidate: 60 } }
);

// Fetch single news item
const newsItem = await fetchAPI<StrapiSingleResponse<SchoolNewsAttributes>>(
  '/school-news-all/1'
);

// Get media URL
import { getStrapiMediaUrl } from '@/app/lib/api';
const imageUrl = getStrapiMediaUrl(thumbnail?.data?.attributes?.url);
```

### Using Date Utilities

```typescript
import { 
  formatDate, 
  formatDateShort, 
  getDateParts, 
  formatTime,
  isUpcoming 
} from '@/app/utils/formatDate';

// Format dates
formatDate('2025-01-15');              // "January 15, 2025"
formatDateShort('2025-01-15');         // "Jan 15, 2025"

// Get date parts for cards
const { day, month } = getDateParts('2025-01-15'); // { day: "15", month: "JAN" }

// Format time
formatTime('10:30 AM');                // "10:30 AM" (passthrough if formatted)
formatTime('14:30');                   // "2:30 PM" (converts 24hr to 12hr)

// Check if upcoming
isUpcoming('2025-12-31');              // true/false
```

---

## 🎯 Key Components

### API Wrapper (`app/lib/api.ts`)

**Key Functions:**
- `fetchAPI<T>(endpoint, options)` - Main API fetch function
- `getStrapiMediaUrl(url)` - Converts relative URLs to absolute
- `extractExcerpt(content, maxLength)` - Creates preview text from markdown

**Features:**
- Auto-appends `?populate=*`
- TypeScript-first with full typing
- Built-in error handling
- SSR-friendly caching

### Date Utilities (`app/utils/formatDate.ts`)

**Key Functions:**
- `formatDate(dateString)` - Full date format
- `formatDateShort(dateString)` - Short date format
- `getDateParts(dateString)` - Day/month for cards
- `formatTime(timeString)` - 12-hour time format
- `isUpcoming(dateString)` - Check if future date
- `getRelativeTime(dateString)` - "2 days ago" format
- `generateICS(...)` - Create calendar file

---

## 🚦 How to Test

### 1. Check News Pages
- Visit `/school-news` - Should show all news
- Click any news card - Should open detail page
- Check images load correctly
- Verify markdown renders properly
- Test social share button

### 2. Check Events Pages
- Visit `/events` - Should show upcoming & past events
- Click any event card - Should open detail page
- Test "Add to Calendar" button (downloads .ics file)
- Check registration link (if present)
- Verify date/time/location display

### 3. Check Homepage
- Homepage should show "Latest News" section (3 items)
- Homepage should show "Upcoming Events" section (3 items)
- Both sections should have "View All" buttons
- Loading states should appear briefly on first load

### 4. Check Navigation
- Header should have "News" and "Events" menu items
- Active state should highlight current page
- Mobile menu should include new items

---

## 🐛 Troubleshooting

### No News/Events Showing

**Problem:** Pages are empty or show "No items" message

**Solutions:**
1. Check Strapi API is running
2. Verify API URL in `app/lib/api.ts`
3. Check browser console for errors
4. Ensure content is published in Strapi
5. Verify `?populate=*` is working

```bash
# Test API directly
curl https://inspiring-frog-36ed0e23b7.strapiapp.com/api/school-news-all?populate=*
```

### Images Not Loading

**Problem:** Placeholder images shown instead of actual images

**Solutions:**
1. Check image URLs in Strapi response
2. Verify `getStrapiMediaUrl()` is used
3. Update Next.js image domains if needed:

```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'inspiring-frog-36ed0e23b7.strapiapp.com',
    }
  ]
}
```

### Markdown Not Rendering

**Problem:** Raw markdown showing instead of formatted content

**Solutions:**
1. Verify `react-markdown` is installed
2. Check import statements
3. Ensure `remarkGfm` and `rehypeSanitize` are imported

### Calendar Download Not Working

**Problem:** "Add to Calendar" doesn't download .ics file

**Solutions:**
1. Check browser console for errors
2. Verify event has date and time
3. Test `generateICS()` function with sample data
4. Check popup blockers

---

## 📝 Content Management Tips

### Writing Good News Articles

1. **Title**: Keep under 60 characters for SEO
2. **Thumbnail**: Use 1200x630px images (or 16:9 ratio)
3. **Description**: Write in markdown format
4. **Author**: Include for credibility
5. **Published Date**: Set to article date (not creation date)

### Creating Events

1. **Title**: Clear and descriptive
2. **Banner**: Use high-quality 1200x630px images
3. **Event Date**: Set accurately (affects upcoming/past sorting)
4. **Event Time**: Use "10:30 AM" format for consistency
5. **Location**: Be specific (e.g., "Main Auditorium, SNPS Campus")
6. **Description**: Include agenda, dress code, RSVP details
7. **Registration Link**: Use full URL with https://

### Markdown Tips

```markdown
# Use headings for structure
## Sub-sections help readability

- Bullet points for lists
- Easy to scan
- Clear information

**Bold** for emphasis
*Italic* for subtle emphasis

[Link text](https://example.com) for external links

> Blockquotes for important notes or quotes

---

Use horizontal rules to separate sections
```

---

## 🔄 Future Enhancements (Optional)

### Potential Features
- [ ] News categories/tags filtering
- [ ] Event RSVP/registration form
- [ ] Search functionality
- [ ] Related news/events
- [ ] Newsletter subscription
- [ ] Comments system
- [ ] Archive by date/category
- [ ] Featured/pinned items
- [ ] Multi-language support
- [ ] Admin preview mode

### Performance Optimizations
- [ ] Implement pagination for long lists
- [ ] Add infinite scroll
- [ ] Optimize images further (WebP, AVIF)
- [ ] Implement full ISR with tags
- [ ] Add service worker for offline

---

## 📞 Support

### Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for linting errors
npm run lint

# Clear Next.js cache
rm -rf .next
```

### Useful Resources
- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## ✅ Checklist for Deployment

- [ ] Verify Strapi API is accessible from production
- [ ] Update `STRAPI_API_URL` if needed
- [ ] Test all pages in production build
- [ ] Verify images load correctly
- [ ] Check SEO metadata in production
- [ ] Test Open Graph preview (Facebook Debugger)
- [ ] Verify calendar downloads work
- [ ] Check mobile responsiveness
- [ ] Test loading states and error handling
- [ ] Monitor API response times
- [ ] Set up error tracking (Sentry, etc.)

---

## 📄 License

This implementation is part of the Sree Narayana Public School website project.

---

**Last Updated:** November 2024  
**Version:** 1.0.0  
**Author:** Development Team


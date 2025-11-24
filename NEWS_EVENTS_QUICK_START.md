# 🚀 News & Events System - Quick Start Guide

## ✅ What Was Built

A complete **News and Events CMS system** integrated with Strapi for your school website.

---

## 📍 New Pages Created

### News
- **`/school-news`** - Lists all news articles
- **`/school-news/[id]`** - Individual news article view

### Events  
- **`/events`** - Lists upcoming and past events
- **`/events/[id]`** - Individual event detail view

### Homepage Additions
- Latest 3 news items section
- Upcoming 3 events section

---

## 🔗 API Configuration

**Current Strapi API URL:**
```
https://inspiring-frog-36ed0e23b7.strapiapp.com/api
```

**To change it:**
1. Open `app/lib/api.ts`
2. Update line 16: `const STRAPI_API_URL = 'YOUR_NEW_URL';`

---

## 📊 Strapi Content Types Required

### 1. SchoolNews (`/api/school-news-all`)
```typescript
{
  title: string              // ✅ Required
  slug: UID                  // Auto-generated
  thumbnail: Media           // Single image
  description: RichText      // Markdown content
  publishedDate: Date        // ✅ Required for sorting
  author: string             // Optional
}
```

### 2. Events (`/api/events`)
```typescript
{
  title: string              // ✅ Required
  slug: UID                  // Auto-generated
  banner: Media              // Single image
  description: RichText      // Markdown content
  eventDate: Date            // ✅ Required
  eventTime: string          // e.g., "10:30 AM"
  location: string           // Venue name
  registrationLink: string   // Optional URL
  isAllDay: boolean          // Optional flag
}
```

---

## 🎨 Key Features

### News System
✅ Grid layout with hover effects  
✅ Thumbnail images  
✅ Author and date display  
✅ Full markdown rendering  
✅ Social sharing  
✅ SEO optimized (Open Graph, Twitter Cards)  

### Events System
✅ Upcoming vs Past event separation  
✅ Large date blocks  
✅ Time and location badges  
✅ **Add to Calendar** (ICS download)  
✅ Registration link support  
✅ Full markdown descriptions  
✅ SEO optimized  

### Homepage Integration
✅ Latest News section (3 items)  
✅ Upcoming Events section (3 items)  
✅ Matching site design and colors  
✅ "View All" CTA buttons  

### Navigation
✅ Added "News" and "Events" to header menu  
✅ Mobile menu support  

---

## 🛠️ Tech Stack

- **Next.js 15** - App Router (Server Components)
- **TypeScript** - Full type safety
- **React Markdown** - Safe markdown rendering
- **Tailwind CSS** - Styling
- **Strapi API** - Headless CMS

---

## 🎯 How to Use

### 1. View News
```
http://localhost:3000/school-news
```
Click any card to read full article.

### 2. View Events
```
http://localhost:3000/events
```
Click any event card for details. Use "Add to Calendar" to download .ics file.

### 3. Homepage Sections
```
http://localhost:3000
```
Scroll down to see "School News & Announcements" and "Upcoming Events & Activities" sections.

---

## 🧪 Testing Checklist

- [ ] Visit `/school-news` - See all news articles
- [ ] Click a news card - Opens detail page with full content
- [ ] Visit `/events` - See upcoming and past events
- [ ] Click an event - Opens detail page
- [ ] Test "Add to Calendar" button - Downloads .ics file
- [ ] Check homepage - See latest 3 news and 3 events
- [ ] Test on mobile - All responsive
- [ ] Check header navigation - "News" and "Events" visible

---

## 🐛 Quick Troubleshooting

### No Content Showing?
1. Check Strapi API is running
2. Verify content is **published** in Strapi
3. Check browser console for errors
4. Test API directly:
   ```bash
   curl https://inspiring-frog-36ed0e23b7.strapiapp.com/api/school-news-all?populate=*
   ```

### Images Not Loading?
1. Check if images are uploaded in Strapi
2. Verify image URLs in API response
3. Update Next.js config if using external images:
   ```typescript
   // next.config.ts
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'your-strapi-domain.com',
       }
     ]
   }
   ```

### Markdown Not Rendering?
- Packages installed: ✅ `react-markdown`, `remark-gfm`, `rehype-sanitize`
- Check imports in detail pages

---

## 📝 Content Tips

### Writing News
- **Title**: Keep under 60 characters
- **Thumbnail**: 1200x630px or 16:9 ratio
- **Description**: Use markdown formatting
- **Published Date**: Set to article date (affects sorting)

### Creating Events
- **Title**: Clear and descriptive
- **Banner**: High-quality 1200x630px image
- **Event Date**: Must be set (determines upcoming/past)
- **Event Time**: Format as "10:30 AM" for consistency
- **Location**: Be specific (e.g., "Main Auditorium")
- **Description**: Include agenda, dress code, RSVP info

### Markdown Examples
```markdown
# Main Heading
## Sub Heading

**Bold text** for emphasis
*Italic text* for subtle emphasis

- Bullet point 1
- Bullet point 2

[Link text](https://example.com)

> Important note or quote

---
Horizontal rule separates sections
```

---

## 📂 Key Files

| File | Purpose |
|------|---------|
| `app/lib/api.ts` | Strapi API wrapper |
| `app/utils/formatDate.ts` | Date formatting utilities |
| `app/school-news/page.tsx` | News listing page |
| `app/school-news/[id]/page.tsx` | News detail page |
| `app/events/page.tsx` | Events listing page |
| `app/events/[id]/page.tsx` | Event detail page |
| `app/components/news/LatestNewsSection.tsx` | Homepage news |
| `app/components/events/UpcomingEventsSection.tsx` | Homepage events |

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Update `STRAPI_API_URL` if using different API
- [ ] Test all pages with production API
- [ ] Verify images load correctly
- [ ] Check SEO metadata (use Facebook Debugger)
- [ ] Test mobile responsiveness
- [ ] Verify calendar downloads work
- [ ] Check loading states
- [ ] Monitor API response times

---

## 📞 Need Help?

Refer to `NEWS_EVENTS_README.md` for detailed documentation including:
- Complete API reference
- Design system details
- Security & performance notes
- Troubleshooting guide
- Content management tips
- Future enhancement ideas

---

## 🎉 Summary

You now have a **production-ready News and Events system** that:

✅ Fetches content from Strapi CMS  
✅ Displays beautifully on all devices  
✅ Includes SEO optimization  
✅ Matches your school's branding  
✅ Has loading states and error handling  
✅ Supports markdown content  
✅ Includes calendar integration  
✅ Is fully type-safe with TypeScript  

**Ready to go live! 🚀**


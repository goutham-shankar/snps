
# 🏫 Sree Narayana Public School Website   

**"Enlightenment through Education"**

A modern, responsive website for Sree Narayana Public School, Chathannoor – Vilappuram, Kerala. Built with Next.js 16, React 19, and Tailwind CSS 4.

## 🌟 About the School

- **Established**: 2015
- **Location**: Chathannoor – Vilappuram, Kollam District, Kerala
- **Campus**: 14 acres of eco-friendly environment
- **Affiliation**: CBSE, New Delhi
- **Grades**: Pre-KG to Grade XII
- **Managing Body**: Sree Narayana Educational Society, Kollam
- **Special Status**: Proposed New Sainik School
- **Curriculum**: NEP 2020 Aligned

## 🚀 Technology Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4
- **Architecture**: App Router (Next.js 13+)

## 📁 Project Structure

```
snps/
├── app/
│   ├── components/          # Reusable UI components
│   ├── data/               # Centralized school data
│   ├── about/              # About page
│   ├── academics/          # Academics page
│   ├── admission/          # Admission page
│   ├── contact/            # Contact page
│   ├── facilities/         # Facilities page
│   ├── gallery/            # Gallery page
│   └── [other pages]/      # Additional pages
├── docs/                   # Documentation files
├── public/                 # Static assets
└── [config files]          # Next.js, TypeScript, Tailwind configs
```

## 🎯 Key Features

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### 🎨 **Modern UI/UX**
- Clean, professional design
- Consistent color scheme (#af5f36 primary)
- Smooth animations and transitions
- Accessibility compliant

### 📄 **Comprehensive Content**
- Welcome message with school philosophy
- Principal's message
- 8 core values aligned with NEP 2020
- Detailed facilities information
- Academic programs overview
- Admission process guide

### 🔧 **Technical Excellence**
- Fast loading performance
- SEO optimized
- TypeScript for type safety
- Centralized data management
- Component-based architecture

## 🏗️ Architecture

### **Data Management**
All school information is centralized in `app/data/school-info.ts`:
- Contact details
- School statistics
- Core values
- Welcome messages
- Principal information

### **Component Structure**
- **Header**: Navigation and school branding
- **Footer**: Contact info and quick links
- **Hero**: Dynamic slideshow with key messages
- **About**: Welcome message, principal's message, core values
- **Contact**: Contact form and information
- **Facilities**: Infrastructure showcase
- **Gallery**: Photo gallery with categories
- **Academics**: Academic programs and curriculum

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd snps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### **Updating School Information**

All school data is centralized in `app/data/school-info.ts`. To update:

1. **Contact Information**
   ```typescript
   contact: {
     phone: {
       main: "+91 XXXX-XXXXXX", // Update with actual number
       admission: "+91 XXXX-XXXXXX"
     },
     email: {
       general: "info@snpschool.edu.in",
       admissions: "admissions@snpschool.edu.in"
     }
   }
   ```

2. **Statistics**
   ```typescript
   stats: {
     students: 0, // Update with actual count
     faculty: 0,  // Update with actual count
     boardResults: "100%", // Update with actual percentage
   }
   ```

3. **Academic Year**
   ```typescript
   academicYear: "2025-26" // Update annually
   ```

### **Quick Reference**

For detailed content locations and update instructions, see:
- `docs/CONTENT_UPDATE_GUIDE.md` - Quick reference guide
- `docs/PROJECT_ANALYSIS.md` - Comprehensive analysis
- `CHANGELOG.md` - Recent updates and changes

## 🎨 Design System

### **Colors**
- **Primary**: #af5f36 (Brown/Rust)
- **Secondary**: #8b4a28 (Darker Brown)
- **Accent**: Orange variations
- **Text**: Gray scale

### **Typography**
- **Primary Font**: Inter
- **Secondary Font**: Poppins
- **Weights**: 300, 400, 500, 600, 700, 800

### **Components**
- Consistent border radius (rounded-xl, rounded-2xl, rounded-3xl)
- Shadow system (shadow-sm, shadow-lg, shadow-xl, shadow-2xl)
- Hover effects and transitions
- Responsive spacing system

## 📊 SEO & Performance

### **SEO Features**
- Optimized meta tags
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times

### **Performance Optimizations**
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## 🔧 Development

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### **Code Style**
- TypeScript for type safety
- ESLint for code quality
- Consistent component patterns
- Proper error handling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

### **Content Updates**
1. Update `app/data/school-info.ts` for school information
2. Test changes locally
3. Verify across all pages
4. Update documentation if needed

### **Code Contributions**
1. Follow existing code patterns
2. Maintain TypeScript types
3. Test responsive design
4. Update documentation

## 📞 Support

For technical support or content updates:
- Review documentation in `docs/` folder
- Check `CHANGELOG.md` for recent changes
- Follow patterns in existing components

## 📄 License

This project is proprietary to Sree Narayana Public School, Chathannoor – Vilappuram.

## 🏆 Acknowledgments

- **Sree Narayana Guru** - Philosophical inspiration
- **Sree Narayana Educational Society, Kollam** - Management and guidance
- **Principal Gireesh Babu K. V.** - Leadership and vision
- **Faculty and Staff** - Content and feedback
- **Students and Parents** - Community support

---

**Built with ❤️ for Excellence in Education**

*"Where Learning Inspires, Values Endure and Minds Illuminate the Future"*

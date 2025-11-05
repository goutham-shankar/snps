# 📊 SNPS Website - Project Analysis Report

## Executive Summary

This is a **Next.js 16** website for **Sree Narayana Public School (SNPS), Chathannoor, Kerala**. The project uses React 19, TypeScript, and Tailwind CSS 4. The website is structured with multiple pages and reusable components, with school content currently **hardcoded** throughout various files.

---

## 🏗️ Project Structure

### Technology Stack
- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4
- **Architecture**: App Router (Next.js 13+)

### Directory Structure
```
app/
├── components/          # Reusable UI components
├── about/              # About page
├── academics/          # Academics page
├── admission/          # Admission page
├── achievements/       # Achievements page
├── calendar/           # Calendar page
├── compliance/         # Compliance page
├── contact/            # Contact page
├── facilities/         # Facilities page
├── gallery/            # Gallery page
├── governance/         # Governance page
├── grievance/          # Grievance page
├── infrastructure/     # Infrastructure page
├── mandatory-disclosure/ # Mandatory disclosure page
├── policies/           # Policies page
├── results/            # Results page
├── fees/               # Fees page
└── page.tsx            # Home page
```

---

## 📍 School Content Distribution Map

### **Core School Information** (Currently Hardcoded)

#### 1. **School Identity**
- **Name**: Sree Narayana Public School
- **Location**: Chathannoor, Kollam District, Kerala
- **Pin Code**: 691572 (mentioned in Contact.tsx)
- **Established**: 2015
- **Campus Size**: 13 acres
- **Affiliation**: CBSE, New Delhi
- **Grades**: Pre-KG to Grade XII
- **Managing Body**: Sree Narayana Educational Society

#### 2. **Contact Information** (Currently Placeholder/Generic)
- **Phone**: +91 XXXX-XXXXXX (placeholder)
- **Email**: info@snpschool.edu.in
- **Admissions Email**: admissions@snpschool.edu.in
- **Address**: Chathannoor, Kollam, Kerala

---

## 📄 Content Location by Page/Component

### **1. Home Page** (`app/page.tsx`)
**Content Sections:**
- School name: "Sree Narayana Public School"
- Location: "Chathannoor | CBSE Affiliated"
- Establishment year: "2015"
- Campus size: "13 Acres"
- Stats: 
  - Year Established: 2015
  - Acres Campus: 13
  - Students Enrolled: 500+ (placeholder)
  - Board Results: 100% (placeholder)
- Features descriptions
- Quick links
- Welcome section text
- Why Choose Us section
- About preview section

### **2. Header Component** (`app/components/Header.tsx`)
**Content:**
- School name: "Sree Narayana Public School"
- Subtitle: "Chathannoor | CBSE Affiliated"
- Logo: `/logo.png`
- Navigation menu items

### **3. Footer Component** (`app/components/Footer.tsx`)
**Content:**
- School name: "Sree Narayana Public School"
- Tagline: "Empowering minds, nurturing values, and shaping future leaders on our 13-acre campus since 2015."
- Location: "Chathannoor, Kollam, Kerala"
- Phone: "+91 XXXX-XXXXXX" (placeholder)
- Email: "info@snpschool.edu.in"
- Copyright: "© {year} Sree Narayana Public School. All rights reserved."

### **4. Hero Component** (`app/components/Hero.tsx`)
**Content:**
- Slide 1: "Excellence in Holistic Education" / "Nurturing Future Leaders Since 2015"
- Slide 2: "13 Acres of Eco-Friendly Campus" / "A Safe and Inspiring Learning Environment"
- Slide 3: "CBSE Affiliated Excellence" / "From Pre-KG to Grade XII"
- Stats:
  - 13 Acres Campus
  - 2015 Established
  - CBSE Affiliated
  - 100% Holistic Growth

### **5. About Component** (`app/components/About.tsx`)
**Content:**
- School name and location
- Establishment: "Since 2015"
- Managing body: "Sree Narayana Educational Society"
- Affiliation: "CBSE, New Delhi"
- Campus: "13-acre eco-friendly campus"
- Stats:
  - 1000+ Students (placeholder)
  - 60+ Faculty (placeholder)
  - 100% Results (placeholder)
  - 10+ Years (placeholder)
- Vision statement
- Mission statement
- Core values (Excellence, Integrity, Compassion, Innovation)
- Why Choose SNPS section

### **6. Contact Component** (`app/components/Contact.tsx`)
**Content:**
- **Address**: 
  ```
  Sree Narayana Public School
  Chathannoor, Kollam District
  Kerala, India - 691572
  ```
- **Phone**: 
  - Main Office: +91 XXXX-XXXXXX (placeholder)
  - Admission Office: +91 XXXX-XXXXXX (placeholder)
- **Email**: 
  - General: info@snpschool.edu.in
  - Admissions: admissions@snpschool.edu.in
- **Office Hours**:
  - Monday - Friday: 8:00 AM - 4:00 PM
  - Saturday: 9:00 AM - 1:00 PM
  - Sunday: Closed
- Google Maps embed (placeholder coordinates)

### **7. Academics Component** (`app/components/Academics.tsx`)
**Content:**
- CBSE curriculum references
- Grade levels: Pre-KG to Grade XII
- Academic descriptions

### **8. Admission Component** (`app/components/Admission.tsx`)
**Content:**
- Admissions email: admissions@snpschool.edu.in
- Admission process descriptions
- Academic year references (2025-26)

### **9. Facilities Component** (`app/components/Facilities.tsx`)
**Content:**
- Campus size: "13 acres"
- Infrastructure descriptions
- Facility listings

### **10. Achievements Component** (`app/components/Achievements.tsx`)
**Content:**
- "100% Pass Rate in CBSE Board Exams"
- CBSE affiliation references
- Achievement descriptions

### **11. Layout Metadata** (`app/layout.tsx`)
**SEO Content:**
- Title: "Sree Narayana Public School, Chathannoor | CBSE Affiliated | NEP 2020 Aligned"
- Description: "Sree Narayana Public School (SNPS), Chathannoor is a CBSE-affiliated institution (est. 2015) offering education from Pre-KG to Grade XII..."
- Keywords: School name, location, CBSE, NEP 2020
- Open Graph tags

### **12. Mandatory Disclosure Page** (`app/mandatory-disclosure/page.tsx`)
**Content:**
- Establishment: "Year of Establishment: 2015"
- CBSE affiliation references
- Disclosure section structure

### **13. Other Pages**
- **Governance** (`app/governance/page.tsx`): Governance structure references
- **Compliance** (`app/compliance/page.tsx`): CBSE/NEP 2020 alignment references
- **Gallery** (`app/components/Gallery.tsx`): Image references (using placeholder URLs)

---

## 🔍 Content Categories Requiring Updates

### **1. Contact Information** (CRITICAL - Currently Placeholders)
**Files to Update:**
- `app/components/Footer.tsx` (line 116)
- `app/components/Contact.tsx` (lines 52-55, 68-69)
- Any other files with phone numbers

**Current Placeholders:**
- Phone: `+91 XXXX-XXXXXX`
- May need: Fax, Mobile numbers, WhatsApp numbers

### **2. Address Details** (VERIFY ACCURACY)
**Files to Update:**
- `app/components/Contact.tsx` (lines 37-40)
- `app/components/Footer.tsx` (line 110)
- Verify pin code: 691572

### **3. Student/Faculty Statistics** (VERIFY ACCURACY)
**Files to Update:**
- `app/page.tsx` (line 102): "500+ Students" 
- `app/components/About.tsx` (lines 84-87):
  - "1000+ Students"
  - "60+ Faculty"
  - "100% Results"
  - "10+ Years"

**Note**: These numbers are inconsistent between pages!

### **4. Email Addresses** (VERIFY/DOMAIN CHECK)
**Current:**
- info@snpschool.edu.in
- admissions@snpschool.edu.in

**Files:**
- `app/components/Footer.tsx` (line 123)
- `app/components/Contact.tsx` (lines 68-69)
- `app/components/Admission.tsx` (line 254)

### **5. Google Maps Coordinates** (CRITICAL)
**File:** `app/components/Contact.tsx` (line 96)
**Current:** Placeholder coordinates
**Action Required:** Replace with actual school location coordinates

### **6. Academic Year References**
**Current:** "2025-26" appears in multiple places
**Files:**
- `app/page.tsx` (line 54)
- `app/components/Hero.tsx` (line 71)
- Update annually or make dynamic

### **7. CBSE Affiliation Number** (IF AVAILABLE)
**Files to Check:**
- `app/mandatory-disclosure/page.tsx` (line 10)
- May need to add to other pages if required

### **8. Society/Trust Details** (VERIFY)
**Current:** "Sree Narayana Educational Society"
**Files:**
- `app/page.tsx` (line 536)
- `app/components/About.tsx` (line 116)
- Verify exact name and registration details

### **9. Campus Size Consistency**
**Current:** "13 acres" appears throughout
**Files:** Multiple
**Action:** Verify accuracy and consistency

### **10. Establishment Year Consistency**
**Current:** "2015" appears throughout
**Files:** Multiple
**Action:** Verify accuracy

---

## 📋 Content Update Checklist

### **Phase 1: Critical Information**
- [ ] **Phone Numbers**: Replace all `+91 XXXX-XXXXXX` placeholders
- [ ] **Address**: Verify complete address and pin code
- [ ] **Google Maps**: Update with actual coordinates
- [ ] **Email Domain**: Verify domain ownership and accuracy

### **Phase 2: Statistics & Numbers**
- [ ] **Student Count**: Verify and standardize across all pages
- [ ] **Faculty Count**: Verify and standardize
- [ ] **Board Results**: Verify actual pass percentage
- [ ] **Campus Size**: Verify exact acreage

### **Phase 3: Institutional Details**
- [ ] **CBSE Affiliation Number**: Add if available
- [ ] **Society/Trust Name**: Verify exact legal name
- [ ] **Registration Details**: Add if required for disclosures
- [ ] **NOC/Recognition Numbers**: Add if required

### **Phase 4: Content Accuracy**
- [ ] **Academic Year**: Update to current year
- [ ] **Mission/Vision**: Verify and update if needed
- [ ] **Core Values**: Verify alignment with school philosophy
- [ ] **Descriptions**: Review all descriptive text for accuracy

### **Phase 5: Media & Assets**
- [ ] **Logo**: Verify `/public/logo.png` is correct
- [ ] **Gallery Images**: Replace placeholder URLs with actual school photos
- [ ] **Hero Images**: Replace with actual campus photos

---

## 🎯 Recommended Approach for Content Updates

### **Option 1: Centralized Data File** (RECOMMENDED)
Create a centralized data file to store all school information:

**File:** `app/data/school-info.ts`
```typescript
export const schoolInfo = {
  name: "Sree Narayana Public School",
  shortName: "SNPS",
  location: "Chathannoor",
  district: "Kollam",
  state: "Kerala",
  pinCode: "691572",
  established: 2015,
  campusSize: "13 acres",
  affiliation: "CBSE, New Delhi",
  affiliationNumber: "", // Add if available
  grades: "Pre-KG to Grade XII",
  managingBody: "Sree Narayana Educational Society",
  contact: {
    phone: {
      main: "+91 XXXX-XXXXXX",
      admission: "+91 XXXX-XXXXXX",
      mobile: "", // Add if available
    },
    email: {
      general: "info@snpschool.edu.in",
      admissions: "admissions@snpschool.edu.in",
    },
    address: {
      full: "Sree Narayana Public School, Chathannoor, Kollam District, Kerala, India - 691572",
      line1: "Sree Narayana Public School",
      line2: "Chathannoor, Kollam District",
      line3: "Kerala, India - 691572",
    },
    officeHours: {
      weekdays: "8:00 AM - 4:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    mapCoordinates: {
      lat: 0, // Update with actual
      lng: 0, // Update with actual
    },
  },
  stats: {
    students: 0, // Update with actual
    faculty: 0, // Update with actual
    boardResults: "100%", // Update with actual
    yearsOfExcellence: new Date().getFullYear() - 2015,
  },
  academicYear: "2025-26", // Update annually
};
```

Then import and use throughout components:
```typescript
import { schoolInfo } from '@/app/data/school-info';
// Use: schoolInfo.name, schoolInfo.contact.phone.main, etc.
```

### **Option 2: Direct Updates**
Update each file individually with actual data.

---

## 🔧 Files Requiring Immediate Updates

### **High Priority (Contact Information)**
1. `app/components/Footer.tsx` - Phone numbers, email
2. `app/components/Contact.tsx` - Complete contact details, map coordinates
3. `app/components/Admission.tsx` - Admission contact details

### **Medium Priority (Statistics)**
1. `app/page.tsx` - Student count, stats
2. `app/components/About.tsx` - All statistics
3. `app/components/Hero.tsx` - Stats display

### **Low Priority (Content Refinement)**
1. All other component files - Verify descriptions and content accuracy
2. `app/components/Gallery.tsx` - Replace placeholder images
3. SEO metadata in `app/layout.tsx` - Verify keywords

---

## 📝 Notes for Content Update

1. **Consistency**: Ensure all numbers (students, faculty, campus size) are consistent across all pages
2. **Accuracy**: Verify all dates, numbers, and details with school administration
3. **Legal Compliance**: Ensure mandatory disclosure information is accurate and complete
4. **SEO**: Update meta descriptions and keywords with accurate information
5. **Accessibility**: Ensure all contact information is accessible and up-to-date
6. **Annual Updates**: Set reminders for annual updates (academic year, statistics)

---

## 🚀 Next Steps

1. **Gather Actual Data**: Collect real school information from administration
2. **Create Data File**: Implement centralized data structure (Option 1 recommended)
3. **Update Components**: Replace hardcoded values with data file references
4. **Verify & Test**: Review all pages for accuracy and consistency
5. **Documentation**: Update this analysis with actual values after updates

---

**Last Updated**: Analysis Date
**Project Status**: Ready for Content Updates
**Priority**: High - Contact information and statistics need immediate attention


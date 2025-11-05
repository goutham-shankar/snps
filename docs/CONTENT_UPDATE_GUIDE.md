# 📝 SNPS Content Update Guide - Quick Reference

## 🎯 Critical Content Locations

### **School Name**
**Current Value:** "Sree Narayana Public School"
**Files to Update:**
- `app/components/Header.tsx` (line 82)
- `app/components/Footer.tsx` (line 43)
- `app/components/Contact.tsx` (line 37)
- `app/layout.tsx` (line 19, 35)
- `app/page.tsx` (line 124)
- `app/components/About.tsx` (line 24)

---

### **Location: Chathannoor**
**Current Value:** "Chathannoor, Kollam, Kerala"
**Files to Update:**
- `app/components/Header.tsx` (line 86)
- `app/components/Footer.tsx` (line 44, 110)
- `app/components/Contact.tsx` (line 38)
- `app/components/Hero.tsx` (multiple references)
- `app/components/About.tsx` (line 25)

---

### **Establishment Year: 2015**
**Current Value:** "2015"
**Files to Update:**
- `app/page.tsx` (lines 100, 124, 539)
- `app/components/Hero.tsx` (line 105)
- `app/components/Footer.tsx` (line 48)
- `app/components/About.tsx` (line 23)
- `app/mandatory-disclosure/page.tsx` (line 9)
- `app/layout.tsx` (line 20)

---

### **Campus Size: 13 Acres**
**Current Value:** "13 acres" / "13 Acres"
**Files to Update:**
- `app/page.tsx` (lines 22, 101, 566, 569)
- `app/components/Hero.tsx` (line 101)
- `app/components/Footer.tsx` (line 48)
- `app/components/About.tsx` (line 31, 126)
- `app/components/Facilities.tsx` (line 105)

---

### **CBSE Affiliation**
**Current Value:** "CBSE, New Delhi" / "CBSE Affiliated"
**Files to Update:**
- `app/components/Header.tsx` (line 86)
- `app/components/Footer.tsx` (line 44)
- `app/page.tsx` (line 12, 551)
- `app/components/Hero.tsx` (line 109)
- `app/components/About.tsx` (line 30, 121)
- `app/components/Academics.tsx` (multiple)
- `app/layout.tsx` (line 19, 20)

---

### **Phone Numbers** ⚠️ PLACEHOLDER
**Current Value:** `+91 XXXX-XXXXXX`
**Files to Update:**
- `app/components/Footer.tsx` (line 116)
- `app/components/Contact.tsx` (lines 53-54)

**Action Required:** Replace with actual phone numbers

---

### **Email Addresses**
**Current Values:**
- `info@snpschool.edu.in`
- `admissions@snpschool.edu.in`

**Files to Update:**
- `app/components/Footer.tsx` (line 123)
- `app/components/Contact.tsx` (lines 68-69)
- `app/components/Admission.tsx` (line 254)

**Action Required:** Verify domain ownership

---

### **Address Details**
**Current Value:**
```
Sree Narayana Public School
Chathannoor, Kollam District
Kerala, India - 691572
```

**Files to Update:**
- `app/components/Contact.tsx` (lines 37-40)
- `app/components/Footer.tsx` (line 110)

**Action Required:** Verify pin code and complete address

---

### **Google Maps Coordinates** ⚠️ PLACEHOLDER
**Current Value:** Placeholder coordinates in iframe
**File:** `app/components/Contact.tsx` (line 96)

**Action Required:** Replace with actual school location coordinates

---

### **Student Statistics** ⚠️ INCONSISTENT
**Current Values:**
- Home page: "500+ Students"
- About page: "1000+ Students"

**Files to Update:**
- `app/page.tsx` (line 102)
- `app/components/About.tsx` (line 84)

**Action Required:** Verify actual count and standardize

---

### **Faculty Statistics** ⚠️ PLACEHOLDER
**Current Value:** "60+ Faculty"
**File:** `app/components/About.tsx` (line 85)

**Action Required:** Verify actual count

---

### **Board Results** ⚠️ PLACEHOLDER
**Current Value:** "100%"
**Files to Update:**
- `app/page.tsx` (line 103)
- `app/components/About.tsx` (line 86)

**Action Required:** Verify actual pass percentage

---

### **Managing Body**
**Current Value:** "Sree Narayana Educational Society"
**Files to Update:**
- `app/page.tsx` (line 536)
- `app/components/About.tsx` (line 116)
- `app/mandatory-disclosure/page.tsx` (line 9)

**Action Required:** Verify exact legal name

---

### **Academic Year**
**Current Value:** "2025-26"
**Files to Update:**
- `app/page.tsx` (line 54)
- `app/components/Hero.tsx` (line 71)

**Action Required:** Update annually or make dynamic

---

### **Grades Offered**
**Current Value:** "Pre-KG to Grade XII" / "Pre-KG to XII"
**Files to Update:**
- `app/components/About.tsx` (line 32)
- `app/components/Hero.tsx` (line 24)
- `app/layout.tsx` (line 20)
- `app/page.tsx` (line 554)

**Action Required:** Verify exact grade levels

---

## 📊 Statistics Summary Table

| Statistic | Home Page | About Page | Status |
|-----------|-----------|------------|--------|
| Students | 500+ | 1000+ | ⚠️ INCONSISTENT |
| Faculty | - | 60+ | ⚠️ VERIFY |
| Board Results | 100% | 100% | ⚠️ VERIFY |
| Campus Size | 13 Acres | 13 Acre | ✅ Consistent |
| Established | 2015 | 2015 | ✅ Consistent |
| Years | - | 10+ | ⚠️ VERIFY (dynamic) |

---

## 🔄 Update Priority Matrix

### **🔴 CRITICAL (Update Immediately)**
1. Phone numbers (placeholders everywhere)
2. Google Maps coordinates (placeholder)
3. Student/faculty statistics (inconsistent)

### **🟡 HIGH (Verify & Update)**
1. Email domain verification
2. Address completeness
3. Board results accuracy
4. CBSE affiliation number (if available)

### **🟢 MEDIUM (Review & Refine)**
1. Academic year references
2. Managing body exact name
3. Grade levels offered
4. Office hours

### **⚪ LOW (Content Polish)**
1. Mission/Vision statements
2. Core values descriptions
3. Feature descriptions
4. Gallery images

---

## 📋 Quick Update Checklist

### Before Starting:
- [ ] Gather all actual school data from administration
- [ ] Verify contact information
- [ ] Confirm statistics
- [ ] Check domain ownership

### During Updates:
- [ ] Update phone numbers in Footer and Contact
- [ ] Update Google Maps coordinates
- [ ] Standardize student/faculty counts
- [ ] Verify all addresses
- [ ] Check email domains

### After Updates:
- [ ] Review all pages for consistency
- [ ] Test all contact links
- [ ] Verify map loads correctly
- [ ] Check statistics match across pages
- [ ] Update SEO metadata if needed

---

## 💡 Pro Tips

1. **Use Find & Replace**: Many values appear multiple times - use IDE find/replace for efficiency
2. **Check Consistency**: After updates, search for old values to ensure nothing is missed
3. **Test Contact Info**: Verify all phone numbers and emails are correct before publishing
4. **Map Coordinates**: Use Google Maps to get exact lat/lng for school location
5. **Annual Updates**: Set calendar reminders for annual content updates (academic year, statistics)

---

## 🔍 Search Commands

Use these grep patterns to find all instances:

```bash
# Find all phone number placeholders
grep -r "XXXX-XXXXXX" app/

# Find all "2015" references
grep -r "2015" app/

# Find all "13 acre" references
grep -ri "13 acre" app/

# Find all "Chathannoor" references
grep -ri "chathannoor" app/

# Find all email addresses
grep -r "snpschool.edu.in" app/
```

---

**Last Updated**: Analysis Date
**Status**: Ready for Content Updates


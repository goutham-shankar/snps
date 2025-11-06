import { schoolInfo } from '../data/school-info';

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://snpschool.edu.in';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": schoolInfo.name,
    "alternateName": schoolInfo.shortName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/image-preview.png`,
    "description": `${schoolInfo.name} is a CBSE-affiliated institution offering education from ${schoolInfo.grades} on a ${schoolInfo.campusSize} campus. ${schoolInfo.motto}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolInfo.contact.address.line2,
      "addressLocality": schoolInfo.location,
      "addressRegion": schoolInfo.state,
      "postalCode": schoolInfo.pinCode,
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": schoolInfo.contact.phone.main,
      "email": schoolInfo.contact.email.general,
      "contactType": "General Inquiry"
    },
    "foundingDate": schoolInfo.established.toString(),
    "areaServed": {
      "@type": "City",
      "name": schoolInfo.location
    },
    "sameAs": [
      // Add social media links when available
    ]
  };

  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": schoolInfo.name,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/image-preview.png`,
    "description": `${schoolInfo.name} - ${schoolInfo.motto}. CBSE-affiliated, NEP 2020 aligned education from ${schoolInfo.grades}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolInfo.contact.address.full,
      "addressLocality": schoolInfo.location,
      "addressRegion": schoolInfo.state,
      "postalCode": schoolInfo.pinCode,
      "addressCountry": "IN"
    },
    "telephone": schoolInfo.contact.phone.main,
    "email": schoolInfo.contact.email.general,
    "foundingDate": schoolInfo.established.toString(),
    "numberOfStudents": schoolInfo.stats.students || undefined,
    "numberOfEmployees": schoolInfo.stats.faculty || undefined,
    "slogan": schoolInfo.motto,
    "award": schoolInfo.specialStatus
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}


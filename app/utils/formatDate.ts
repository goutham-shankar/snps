/**
 * Date formatting utilities for displaying dates consistently across the app
 */

/**
 * Format a date string to a readable format
 * Example: "January 15, 2025"
 * 
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format a date string to a short format
 * Example: "Jan 15, 2025"
 * 
 * @param dateString - ISO date string
 * @returns Short formatted date string
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Get day and month for event cards
 * Returns object with day number and month abbreviation
 * Example: { day: "15", month: "JAN" }
 * 
 * @param dateString - ISO date string
 * @returns Object with day and month
 */
export function getDateParts(dateString: string): { day: string; month: string } {
  const date = new Date(dateString);
  
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
}

/**
 * Format time for display
 * Example: "10:30 AM"
 * 
 * @param timeString - Time string
 * @returns Formatted time string
 */
export function formatTime(timeString: string | null): string {
  if (!timeString) return '';
  
  // If already formatted, return as is
  if (timeString.includes('AM') || timeString.includes('PM')) {
    return timeString;
  }
  
  // Try to parse and format
  try {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    
    return `${displayHour}:${minutes} ${period}`;
  } catch {
    return timeString;
  }
}

/**
 * Check if an event date is upcoming (in the future)
 * 
 * @param dateString - ISO date string
 * @returns true if date is in the future
 */
export function isUpcoming(dateString: string): boolean {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return eventDate >= today;
}

/**
 * Get relative time string
 * Example: "2 days ago", "In 3 days"
 * 
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = date.getTime() - now.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Tomorrow';
  if (diffInDays === -1) return 'Yesterday';
  if (diffInDays > 1 && diffInDays < 7) return `In ${diffInDays} days`;
  if (diffInDays < -1 && diffInDays > -7) return `${Math.abs(diffInDays)} days ago`;
  if (diffInDays < -7 && diffInDays > -30) {
    const weeks = Math.floor(Math.abs(diffInDays) / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }
  if (diffInDays > 7 && diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `In ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
  }
  
  return formatDateShort(dateString);
}

/**
 * Generate ICS (iCalendar) content for "Add to Calendar" functionality
 * 
 * @param title - Event title
 * @param description - Event description
 * @param location - Event location
 * @param startDate - Event date (ISO string)
 * @param startTime - Event time (e.g., "10:30 AM")
 * @param isAllDay - Whether event is all day
 * @returns ICS file content string
 */
export function generateICS(
  title: string,
  description: string,
  location: string,
  startDate: string,
  startTime: string | null,
  isAllDay: boolean = false
): string {
  const eventDate = new Date(startDate);
  
  let dtstart: string;
  let dtend: string;
  
  if (isAllDay) {
    // All-day event format: YYYYMMDD
    const dateStr = eventDate.toISOString().split('T')[0].replace(/-/g, '');
    dtstart = dateStr;
    dtend = dateStr;
  } else {
    // Timed event format: YYYYMMDDTHHmmss
    if (startTime) {
      // Parse time and combine with date
      const timeParts = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (timeParts) {
        let hours = parseInt(timeParts[1], 10);
        const minutes = parseInt(timeParts[2], 10);
        const period = timeParts[3].toUpperCase();
        
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        
        eventDate.setHours(hours, minutes, 0, 0);
      }
    }
    
    const startStr = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000); // +1 hour
    const endStr = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    dtstart = startStr;
    dtend = endStr;
  }
  
  // Clean description for ICS format
  const cleanDesc = description
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .substring(0, 200); // Limit description length
  
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sree Narayana Public School//Events//EN',
    'BEGIN:VEVENT',
    `DTSTART${isAllDay ? ';VALUE=DATE' : ''}:${dtstart}`,
    `DTEND${isAllDay ? ';VALUE=DATE' : ''}:${dtend}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${cleanDesc}`,
    `LOCATION:${location}`,
    `STATUS:CONFIRMED`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  
  return ics;
}


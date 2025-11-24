'use client';

import { generateICS } from '../../utils/formatDate';

interface AddToCalendarButtonProps {
  title: string;
  description: string;
  location: string;
  eventDate: string;
  eventTime: string | null;
  isAllDay: boolean;
}

export default function AddToCalendarButton({
  title,
  description,
  location,
  eventDate,
  eventTime,
  isAllDay,
}: AddToCalendarButtonProps) {
  const handleAddToCalendar = () => {
    const icsContent = generateICS(
      title,
      description,
      location,
      eventDate,
      eventTime,
      isAllDay
    );
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleAddToCalendar}
      className="inline-flex items-center gap-2 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Add to Calendar
    </button>
  );
}


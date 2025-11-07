'use client';

import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  type?: 'admission' | 'grievance';
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title,
  message,
  type = 'admission' 
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const defaultTitle = type === 'admission' 
    ? 'Admission Inquiry Submitted Successfully!' 
    : 'Feedback Submitted Successfully!';
  
  const defaultMessage = type === 'admission'
    ? 'Thank you for your interest in Sree Narayana Public School. Our admission team will review your inquiry and contact you within 24-48 hours. We look forward to welcoming you to our school community!'
    : 'Thank you for your valuable feedback. Your submission has been received and will be reviewed by our team. We will acknowledge your concern within 24 hours and work towards a resolution within 7-10 working days.';

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#af5f36] to-[#8b4a28] p-6 rounded-t-2xl text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center">
            {title || defaultTitle}
          </h3>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            {message || defaultMessage}
          </p>

          {/* Additional Info */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#af5f36] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-gray-700">
                {type === 'admission' ? (
                  <>
                    <strong className="text-[#af5f36]">What's Next?</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                      <li>Check your email for confirmation</li>
                      <li>Our team will contact you soon</li>
                      <li>Prepare required documents</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <strong className="text-[#af5f36]">What Happens Next?</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                      <li>You'll receive an acknowledgment email</li>
                      <li>Your concern will be reviewed</li>
                      <li>We'll provide updates on resolution</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#af5f36] hover:bg-[#8b4a28] text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform"
          >
            Got it, Thank You!
          </button>
        </div>
      </div>
    </div>
  );
}


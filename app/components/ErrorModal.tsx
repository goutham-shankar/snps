'use client';

import { useEffect } from 'react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  type?: 'error' | 'warning';
}

export default function ErrorModal({ 
  isOpen, 
  onClose, 
  title = 'Error',
  message,
  type = 'error'
}: ErrorModalProps) {
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

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 rounded-t-2xl ${
          type === 'error' 
            ? 'bg-gradient-to-r from-red-600 to-red-700' 
            : 'bg-gradient-to-r from-orange-500 to-orange-600'
        } text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              {type === 'error' ? (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            {message}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#af5f36] hover:bg-[#8b4a28] text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}


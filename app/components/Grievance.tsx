'use client';

import { useState } from 'react';
import schoolInfo from '../data/school-info';
import SuccessModal from './SuccessModal';

export default function Grievance() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Add form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('priority', formData.priority);
      
      // Create comprehensive subject line with category and priority
      const emailSubject = formData.category && formData.priority
        ? `[${formData.priority.toUpperCase()}] ${formData.category} - ${formData.subject}`
        : formData.subject || 'Feedback/Complaint Submission';
      
      formDataToSend.append('subject', emailSubject);
      formDataToSend.append('description', formData.description);
      
      // Create detailed message body
      formDataToSend.append('message', `Feedback/Complaint Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nCategory: ${formData.category}\nPriority: ${formData.priority}\nSubject: ${formData.subject}\n\nDescription:\n${formData.description}`);
      
      // Add Web3Forms access key from environment variable
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_GRIEVANCE_KEY || '0fb3d977-2f38-40dc-93e2-68d6e162ba8b';
      formDataToSend.append('access_key', accessKey);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          subject: '',
          description: '',
          priority: 'medium'
        });
        // Show success modal
        setShowSuccessModal(true);
      } else {
        alert('There was an error submitting your feedback. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your feedback. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const feedbackCategories = [
    { 
      id: 'academic', 
      title: 'Academic Matters', 
      desc: 'Curriculum, teaching methods, assessment concerns',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      id: 'administrative', 
      title: 'Administrative', 
      desc: 'Fee, documentation, admission processes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 'infrastructure', 
      title: 'Infrastructure', 
      desc: 'Facilities, transport, safety concerns',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 'behavioral', 
      title: 'Student Conduct', 
      desc: 'Student behavior, disciplinary matters',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 'general', 
      title: 'General Feedback', 
      desc: 'Suggestions and other concerns',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Submit',
      desc: 'Fill out the feedback form',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: 2,
      title: 'Acknowledge',
      desc: 'Receive confirmation within 24 hours',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: 3,
      title: 'Review',
      desc: 'Thorough investigation and review',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: 4,
      title: 'Resolve',
      desc: 'Action taken and feedback provided',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="grievance" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Feedback & Complaints
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Value Your Voice
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your feedback helps us maintain the highest standards of education and service. We are committed to addressing all concerns promptly and fairly.
          </p>
        </div>

        {/* Commitment Statement */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Our Commitment
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transparent & Fair Resolution
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                At {schoolInfo.name}, we maintain the highest standards of transparency and fairness. 
                Our feedback system ensures that every concern is heard, investigated, and resolved with utmost care.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We are committed to creating a safe, inclusive, and supportive environment where students, parents, 
                and staff can voice their concerns and expect prompt, appropriate action.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg">
                  <span className="text-sm">⚡</span>
                  <span className="text-sm font-medium text-gray-700">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg">
                  <span className="text-sm">🔒</span>
                  <span className="text-sm font-medium text-gray-700">Confidential</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg">
                  <span className="text-sm">⚖️</span>
                  <span className="text-sm font-medium text-gray-700">Fair Process</span>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-[#af5f36] to-[#8b4a28] p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <div className="text-orange-100 text-sm">Feedback Officer</div>
                    <div className="font-semibold">{schoolInfo.principal.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-orange-100 text-sm">Phone</div>
                    <div className="font-semibold">{schoolInfo.contact.phone.main}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-orange-100 text-sm">Email</div>
                    <div className="font-semibold">{schoolInfo.contact.email.general}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Categories */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Types of Feedback</h2>
            <p className="text-gray-600">We address all types of concerns to ensure a positive learning environment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbackCategories.map((category, index) => (
              <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[#af5f36] mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600">How we handle your feedback step by step</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#af5f36] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold">
                    {step.step}
                  </div>
                  <div className="mb-3 text-[#af5f36] flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white border-2 border-[#af5f36] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#af5f36]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

          {/* Grievance Redressal Mechanism */}
          <div className="mb-12 md:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Grievance Redressal Mechanism</h2>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Objective</h3>
                  <p className="text-gray-700 leading-relaxed">Sree Narayana Public School, Chathannoor, ensures a fair, transparent and accessible system for addressing grievances of students, parents, teachers and staff. The mechanism promotes harmony, trust and accountability guided by the values of Sree Narayana Guru.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Scope</h3>
                  <p className="text-gray-700 leading-relaxed">Applies to academic, administrative, disciplinary, financial, infrastructure, safety and staff-related grievances.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Grievance Redressal Committee (GRC)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">Formed by the School Management Committee.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong className="text-gray-900">Chairperson:</strong> Principal</li>
                    <li><strong className="text-gray-900">Convener:</strong> Vice Principal or Headmistress</li>
                    <li><strong className="text-gray-900">Members:</strong> Senior teacher, parent representative, non-teaching staff representative and student representative (for student issues).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Procedure</h3>
                  <p className="text-gray-700 leading-relaxed">Grievances may be submitted in writing or through the school website. Complaints must include name, contact details, nature of grievance, evidence and expected resolution. Anonymous complaints are generally not accepted.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Acknowledgement and Inquiry</h3>
                  <p className="text-gray-700 leading-relaxed">Complaints are acknowledged within three working days. The committee conducts a fair inquiry and submits findings within fifteen working days. Decisions are communicated in writing.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Appeal</h3>
                  <p className="text-gray-700 leading-relaxed">If dissatisfied, an appeal may be made to the Chairperson of the School Management Committee within ten working days. The final decision is issued within fifteen days.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Confidentiality</h3>
                  <p className="text-gray-700 leading-relaxed">All grievances are handled confidentially. Retaliation or breach of privacy invites disciplinary action.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Integration</h3>
                  <p className="text-gray-700 leading-relaxed">Cases under sexual harassment, child protection, or finance are referred to the respective committees.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Records and Review</h3>
                  <p className="text-gray-700 leading-relaxed">Records are maintained for five years. The system is reviewed annually to ensure transparency and effectiveness.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">The school is dedicated to creating a just, respectful, and compassionate environment where every voice is heard.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-linear-to-r from-[#af5f36] to-[#8b4a28] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Submit Your Feedback</h2>
            <p className="text-orange-100">We take every concern seriously and will respond promptly</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800"
                  >
                    <option value="">Select Category</option>
                    {feedbackCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="Brief subject of your feedback"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Detailed Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all resize-none text-gray-800 placeholder-gray-500"
                  placeholder="Please provide detailed information about your feedback. Include dates, names, and specific incidents if applicable."
                />
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All feedback is treated confidentially. We are committed to resolving your concerns within 7-10 working days. 
                  You will receive an acknowledgment within 24 hours of submission.
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#af5f36] hover:bg-[#8b4a28] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          type="grievance"
        />
      </div>
    </section>
  );
}
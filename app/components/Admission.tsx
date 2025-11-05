'use client';

import { useState } from 'react';
import schoolInfo from '../data/school-info';

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our admission team will contact you soon.');
    // Here you would typically send the data to a backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const admissionSteps = [
    { 
      step: 1, 
      title: "Inquiry", 
      desc: "Submit online form or visit campus", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      step: 2, 
      title: "Registration", 
      desc: "Fill registration form with documents", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    { 
      step: 3, 
      title: "Interaction", 
      desc: "Student & parent interaction", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      step: 4, 
      title: "Admission", 
      desc: "Fee payment & enrollment", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const documents = [
    "Birth Certificate",
    "Transfer Certificate (if applicable)",
    "Academic Records",
    "Passport Size Photos",
    "Address Proof",
    "Aadhar Card"
  ];

  return (
    <section id="admission" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-6">
            <span className="bg-[#af5f36] text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
              🎓 Admissions Open for {schoolInfo.academicYear}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Admissions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Admission Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our family of excellence - {schoolInfo.grades}
          </p>
        </div>

        {/* Admission Steps - Professional Design */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#af5f36] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 text-[#af5f36] flex justify-center">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                
                {/* Professional Arrow */}
                {index < admissionSteps.length - 1 && (
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form - Professional Design */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#af5f36] to-[#8b4a28] p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Admission Inquiry Form</h3>
              <p className="text-orange-100">Start your journey with us today</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="Enter student's full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#af5f36] focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Grade Applying For *</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#af5f36] focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-800"
                    >
                      <option value="" className="text-gray-500">Select Grade</option>
                      <option value="pre-kg">Pre-KG</option>
                      <option value="ukg">UKG</option>
                      <option value="1">Grade I</option>
                      <option value="2">Grade II</option>
                      <option value="3">Grade III</option>
                      <option value="4">Grade IV</option>
                      <option value="5">Grade V</option>
                      <option value="6">Grade VI</option>
                      <option value="7">Grade VII</option>
                      <option value="8">Grade VIII</option>
                      <option value="9">Grade IX</option>
                      <option value="10">Grade X</option>
                      <option value="11">Grade XI</option>
                      <option value="12">Grade XII</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all text-gray-800 placeholder-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#af5f36] focus:ring-2 focus:ring-[#af5f36]/20 outline-none transition-all resize-none text-gray-800 placeholder-gray-500"
                    placeholder="Enter your complete address"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#af5f36] hover:bg-[#8b4a28] text-white py-4 px-6 rounded-lg font-bold text-lg transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            {/* Documents Required */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#af5f36] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documents Required
              </h3>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#af5f36] rounded-full"></div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-orange-100">Admission Office</div>
                    <div className="text-orange-100">{schoolInfo.contact.phone.admission}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-orange-100">Email</div>
                    <div className="text-orange-100">{schoolInfo.contact.email.admissions}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-orange-100">Visit Us</div>
                    <div className="text-orange-100 text-sm">{schoolInfo.contact.address.full}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">{schoolInfo.contact.officeHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">{schoolInfo.contact.officeHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-500">{schoolInfo.contact.officeHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
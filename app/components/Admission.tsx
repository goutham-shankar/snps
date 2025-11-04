'use client';

import { useState } from 'react';

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
    { step: 1, title: "Inquiry", desc: "Submit online form or visit campus", icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6h6M8 6a2 2 0 012-2h4a2 2 0 012 2"/><rect x="6" y="6" width="12" height="14" rx="2"/></svg>
    ) },
    { step: 2, title: "Registration", desc: "Fill registration form with documents", icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12l8-8"/><path d="M15 3h6v6"/><rect x="3" y="7" width="14" height="14" rx="2"/></svg>
    ) },
    { step: 3, title: "Interaction", desc: "Student & parent interaction", icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/></svg>
    ) },
    { step: 4, title: "Admission", desc: "Fee payment & enrollment", icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
    ) }
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
              🎓 Admissions Open for 2025-26
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
            Join our family of excellence - Pre-KG to Grade XII
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
      {admissionSteps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-[#af5f36]">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#af5f36] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {index < admissionSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#af5f36] mb-6">Admission Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Student Name *</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Enter student's full name"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Grade Applying For *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  >
                    <option value="">Select Grade</option>
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
                <label className="block text-gray-700 font-medium mb-2">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Enter parent's name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#af5f36] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#af5f36] to-[#8b4a28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-8">
            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#af5f36] mb-6">Required Documents</h3>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Admission Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19a2 2 0 01-2 2h-1a19 19 0 01-8-3.5 19 19 0 01-6-6A19 19 0 013 5V4a2 2 0 012-2h2a2 2 0 012 1.72c.1.66.26 1.3.47 1.92a2 2 0 01-.45 2.11L8 9a16 16 0 006 6l1.25-1.02a2 2 0 012.11-.45c.62.21 1.26.37 1.92.47A2 2 0 0122 16.92z"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-orange-100">+91 XXXX-XXXXXX</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-orange-100">admissions@snpschool.edu.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-orange-100">Mon - Sat: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Prospectus */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
              <span className="inline-flex w-6 h-6 items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6h6M8 6a2 2 0 012-2h4a2 2 0 012 2"/><rect x="6" y="6" width="12" height="14" rx="2"/></svg>
              </span>
              <span>Download Prospectus</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




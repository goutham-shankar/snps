import schoolInfo from '../data/school-info';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Visit us or reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#af5f36] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#af5f36] mb-1">Address</h4>
                    <p className="text-gray-600">
                      {schoolInfo.name}<br />
                      {schoolInfo.contact.address.line2}, {schoolInfo.district} District<br />
                      {schoolInfo.state}, India - {schoolInfo.pinCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#af5f36] mb-1">Phone</h4>
                    <p className="text-gray-600">
                      {schoolInfo.contact.phone.main}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#af5f36] mb-1">Email</h4>
                    <p className="text-gray-600">
                      {schoolInfo.contact.email.general}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#af5f36] mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: {schoolInfo.contact.officeHours.weekdays}<br />
                      Sunday: {schoolInfo.contact.officeHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6789!2d76.85!3d8.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTMnMjQuMCJOIDc2wrA1MScwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sree Narayana Public School Location"
              className="w-full h-full min-h-[500px]"
            ></iframe>
            
          </div>
        </div>

  {/* Quick Links (hidden) - remove the wrapper's `hidden` class to show these again */}
  <div className="hidden" aria-hidden="true">
    <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="mx-auto w-12 h-12 mb-3 rounded-lg bg-orange-50 text-[#af5f36] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            <h4 className="font-bold text-[#af5f36] mb-2">Academic Calendar</h4>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Download PDF →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="mx-auto w-12 h-12 mb-3 rounded-lg bg-orange-50 text-[#af5f36] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6h6M8 6a2 2 0 012-2h4a2 2 0 012 2"/><rect x="6" y="6" width="12" height="14" rx="2"/><path d="M9 10h6M9 14h6M9 18h4"/></svg>
            </div>
            <h4 className="font-bold text-[#af5f36] mb-2">Prospectus</h4>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Download PDF →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="mx-auto w-12 h-12 mb-3 rounded-lg bg-orange-50 text-[#af5f36] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="12" y="6" width="3" height="11"/><rect x="17" y="12" width="3" height="5"/></svg>
            </div>
            <h4 className="font-bold text-[#af5f36] mb-2">CBSE Results</h4>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              View Results →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="mx-auto w-12 h-12 mb-3 rounded-lg bg-orange-50 text-[#af5f36] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/><path d="M22 21v-2a4 4 0 00-3-3.87"/></svg>
            </div>
            <h4 className="font-bold text-[#af5f36] mb-2">Parent Portal</h4>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Login →
            </a>
          </div>
        </div>
    </div>
      </div>
    </section>
  );
}




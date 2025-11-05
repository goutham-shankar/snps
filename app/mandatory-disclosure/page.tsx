"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MandatoryDisclosure() {
  const sections = [
    { title: "General Information", items: [
      "Name of the School, Address, Email, Phone, Website",
      "Year of Establishment: 2015, Society/Trust details",
      "CBSE Affiliation Status and Number",
    ]},
    { title: "Documents and Information", items: [
      "Affiliation/LOA/Upgradation letter",
      "NOC from State Government",
      "Recognition Certificate under RTE Act",
      "Society/Trust Registration Certificate",
      "Building Safety Certificate",
      "Fire Safety Certificate",
      "Safe Drinking Water and Sanitation Certificates",
      "Health and Hygiene Certificate",
    ]},
    { title: "Result and Academics", items: [
      "Fee Structure",
      "Annual Academic Calendar",
      "List of School Management Committee (SMC)",
      "List of Parents Teachers Association (PTA) Members",
      "Last three-year Board Exam Results (X/XII)",
    ]},
    { title: "Staff (Teaching & Non-teaching)", items: [
      "Principal Details",
      "Total No. of Teachers (PGT/TGT/PRT)",
      "Details of Special Educator, Counsellor & Wellness Teacher",
    ]},
    { title: "School Infrastructure", items: [
      "Total Campus Area (in Sq. m)",
      "No. and size of Class Rooms and labs",
      "Internet Facility, No. of Girls & Boys Toilets",
      "Transport Facility details",
    ]},
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Transparency & Compliance
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#af5f36] mb-4">
                Mandatory Disclosure
              </h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                As per CBSE Affiliation Bye-Laws. Verified copies of following are available in the school office and uploaded below.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {sections.map((s) => (
                <div key={s.title} className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#af5f36] mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#af5f36] rounded-full"></span>
                    {s.title}
                  </h2>
                  <ul className="space-y-2 md:space-y-3">
                    {s.items.map((i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-start gap-2 flex-1">
                          <svg className="w-4 h-4 mt-1 text-[#8b4a28] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-gray-700 text-sm md:text-base">{i}</span>
                        </div>
                        <a 
                          href="#" 
                          className="text-orange-600 hover:text-orange-700 hover:underline text-sm font-medium whitespace-nowrap ml-6 sm:ml-0"
                          onClick={(e) => { e.preventDefault(); alert('Document download feature coming soon!'); }}
                        >
                          View/Download
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need More Information?</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    For any queries regarding mandatory disclosure or to access physical copies of documents, please contact our administrative office.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[#af5f36] font-semibold hover:text-[#8b4a28] transition-colors"
                  >
                    Contact Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




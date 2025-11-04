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
      <main className="pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Mandatory Disclosure</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">As per CBSE Affiliation Bye-Laws. Verified copies of following are available in the school office and uploaded below.</p>

            <div className="mt-10 space-y-6">
              {sections.map((s) => (
                <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h2 className="text-2xl font-semibold text-[#af5f36]">{s.title}</h2>
                  <ul className="mt-3 list-disc pl-6 text-gray-700 text-sm">
                    {s.items.map((i) => (
                      <li key={i} className="py-1 flex items-start gap-2">
                        <svg className="w-4 h-4 mt-1 text-[#8b4a28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span>{i}</span>
                        <a href="#" className="ml-auto text-orange-600 hover:underline">View/Download</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




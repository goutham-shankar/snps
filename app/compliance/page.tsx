"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Compliance() {
  const cards = [
    { title: "Mandatory Disclosure", href: "/mandatory-disclosure", desc: "CBSE Affiliation Bye-Laws required particulars", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h6m-7 8V7a2 2 0 012-2h5a2 2 0 012 2v9a2 2 0 01-2 2H9a2 2 0 01-2-2z"/></svg>
    ) },
    { title: "Governance & SMC", href: "/governance", desc: "Management details, SMC composition, minutes", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M7 20H2v-2a4 4 0 015-3.87m5 2a4 4 0 10-4-4 4 4 0 004 4z"/></svg>
    ) },
    { title: "Policies & SOPs", href: "/policies", desc: "Child protection, safety, POSH, IT & privacy", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.79-3 4-3s4 1.343 4 3v2a8 8 0 11-16 0v-2c0-1.657 1.79-3 4-3s4 1.343 4 3"/></svg>
    ) },
    { title: "Infrastructure & Safety", href: "/infrastructure", desc: "Land, building, labs, fire NOC, sanitation", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-8z"/></svg>
    ) },
    { title: "Fees & Admissions", href: "/fees", desc: "Transparent fee structure and refunds", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3h6c0-1.657-1.343-3-3-3zM3 6h18M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6"/></svg>
    ) },
    { title: "Results & Outcomes", href: "/results", desc: "Board results, assessments, NEP outcomes", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6m4 6V7m4 10v-3M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
    ) },
    { title: "Academic Calendar", href: "/calendar", desc: "Year plan, assessments, activities", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 8h18M5 10h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"/></svg>
    ) },
    { title: "Grievance Redressal", href: "/grievance", desc: "Mechanism, timelines, committee", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m2 8l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-3l-1 1"/></svg>
    ) },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-10">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36]">Compliance & Transparency</h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                This section provides statutory disclosures and documents aligned with CBSE Affiliation Bye-Laws and NEP 2020. It is designed for parents, educators, and inspection authorities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((c) => (
                <Link key={c.title} href={c.href} className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#af5f36] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-[#af5f36] text-lg">{c.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
                  <span className="text-orange-600 font-medium inline-flex items-center gap-1 mt-3">Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg></span>
                </Link>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-[#af5f36] mb-3">CBSE/NEP 2020 Alignment</h2>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm list-disc pl-5">
                <li>Student-centric pedagogy with experiential learning and assessments</li>
                <li>Foundational, Preparatory, Middle, and Secondary stage alignment</li>
                <li>Safety, child protection and inclusion policies implemented</li>
                <li>Transparent fee structure and governance disclosures</li>
                <li>Teacher professional development and training calendar</li>
                <li>Inclusive education and provisions for CWSN</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




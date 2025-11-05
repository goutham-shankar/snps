"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Policies() {
  const policies = [
    { name: "Child Protection Policy", code: "CPP" },
    { name: "Safety & Security Policy", code: "SSP" },
    { name: "POSH Policy", code: "POSH" },
    { name: "IT & Data Privacy Policy", code: "ITDP" },
    { name: "Inclusion & SEN Policy", code: "INCL" },
    { name: "Health & Hygiene SOP", code: "HHS" },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Policies & SOPs</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">Key policies aligned with CBSE and NEP 2020 ensuring student safety, inclusion and governance transparency.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {policies.map((p) => (
                <div key={p.code} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-[#af5f36]">{p.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">Code: {p.code}</p>
                  <div className="mt-3 flex gap-3">
                    <a href="#" className="text-orange-600 font-medium">View</a>
                    <a href="#" className="text-orange-600 font-medium">Download</a>
                  </div>
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




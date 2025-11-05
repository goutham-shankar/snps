"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Infrastructure() {
  const items = [
    "Land and Building Details",
    "Classrooms, Labs, Library, ICT",
    "Drinking Water & Sanitation",
    "Fire Safety & NOC",
    "Transport Safety & GPS",
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Infrastructure & Safety</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {items.map((t) => (
                <div key={t} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-[#af5f36]">{t}</h3>
                  <a href="#" className="text-orange-600 font-medium mt-2 inline-block">View/Upload Certificate</a>
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




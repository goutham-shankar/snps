"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Fees() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Fee Structure</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8">
              <p className="text-gray-700">Transparent fee structure as per regulatory norms. Tuition, transport, uniforms, refundable deposits and concessions will be listed here with downloadable PDF.</p>
              <a className="text-orange-600 font-medium mt-3 inline-block" href="#">Download Fee Brochure</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




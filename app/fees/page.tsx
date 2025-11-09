"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Fees() {
  const feeStructure = [
    { class: "PRE-KG", tuition: 25000, admission: 5000, caution: 2500, total: 32500 },
    { class: "LKG", tuition: 25000, admission: 5000, caution: 2500, total: 32500 },
    { class: "UKG", tuition: 25000, admission: 5000, caution: 2500, total: 32500 },
    { class: "I", tuition: 28000, admission: 5000, caution: 2500, total: 35500 },
    { class: "II", tuition: 28000, admission: 5000, caution: 2500, total: 35500 },
    { class: "III", tuition: 28000, admission: 5000, caution: 2500, total: 35500 },
    { class: "IV", tuition: 32000, admission: 5000, caution: 2500, total: 39500 },
    { class: "V", tuition: 32000, admission: 5000, caution: 2500, total: 39500 },
    { class: "VI", tuition: 35000, admission: 5000, caution: 2500, total: 42500 },
    { class: "VII", tuition: 35000, admission: 5000, caution: 2500, total: 42500 },
    { class: "VIII", tuition: 40000, admission: 5000, caution: 2500, total: 47500 },
    { class: "IX", tuition: 40000, admission: 5000, caution: 2500, total: 47500 },
    { class: "X", tuition: 40000, admission: 5000, caution: 2500, total: 47500 },
    { class: "XI (SCIENCE)", tuition: 45000, admission: 5000, caution: 2500, total: 52500 },
    { class: "XI (COMMERCE)", tuition: 40000, admission: 5000, caution: 2500, total: 47500 },
    { class: "XII (SCIENCE)", tuition: 45000, admission: 5000, caution: 2500, total: 52500 },
    { class: "XII (COMMERCE)", tuition: 40000, admission: 5000, caution: 2500, total: 47500 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-linear-to-br from-[#af5f36] to-[#8b4a28] text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee Structure</h1>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                Academic Year 2025-26
              </p>
            </div>
          </div>
        </section>

        {/* Fee Table Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Important Notes */}
            <div className="bg-orange-50 border-l-4 border-[#af5f36] p-6 rounded-lg mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#af5f36]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Important Information
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#af5f36] mt-1">•</span>
                  <span><strong>Caution Deposit:</strong> ₹2,500 (One-time refundable deposit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5f36] mt-1">•</span>
                  <span><strong>Admission Fee:</strong> ₹5,000 (One-time non-refundable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5f36] mt-1">•</span>
                  <span><strong>Payment Terms:</strong> Fees can be paid in installments as per school policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5f36] mt-1">•</span>
                  <span><strong>Additional Charges:</strong> Transport, uniform, books, and other materials are charged separately</span>
                </li>
              </ul>
            </div>

            {/* Fee Structure Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-linear-to-r from-[#af5f36] to-[#8b4a28] text-white px-6 py-4">
                <h2 className="text-2xl font-bold text-center">SREE NARAYANA PUBLIC SCHOOL</h2>
                <p className="text-center text-orange-100 mt-1">Fee Structure 2025-26</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-[#af5f36]">
                      <th className="px-6 py-4 text-center font-bold text-gray-900 border-r border-gray-300">CLASS</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900 border-r border-gray-300">TUITION FEE</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900 border-r border-gray-300">ADMISSION FEE</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900 border-r border-gray-300">CAUTION DEPOSIT<br/>(REFUNDABLE)</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="px-6 py-3 text-center font-semibold text-gray-900 border-r border-gray-200">{fee.class}</td>
                        <td className="px-6 py-3 text-center text-gray-700 border-r border-gray-200">₹ {fee.tuition.toLocaleString('en-IN')}</td>
                        <td className="px-6 py-3 text-center text-gray-700 border-r border-gray-200">₹ {fee.admission.toLocaleString('en-IN')}</td>
                        <td className="px-6 py-3 text-center text-gray-700 border-r border-gray-200">₹ {fee.caution.toLocaleString('en-IN')}</td>
                        <td className="px-6 py-3 text-center font-bold text-[#af5f36]">₹ {fee.total.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-1 gap-6 mt-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#af5f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment Methods
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#af5f36] rounded-full"></span>
                    Online Payment (UPI, Net Banking)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#af5f36] rounded-full"></span>
                    Demand Draft
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#af5f36] rounded-full"></span>
                    Cheque (Payable at School Office)
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 bg-linear-to-r from-[#af5f36] to-[#8b4a28] rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Need More Information?</h3>
              <p className="text-orange-100 mb-6">
                For detailed fee information, payment plans, or financial assistance, please contact our office.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#af5f36] font-semibold rounded-xl hover:bg-orange-50 transition"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="tel:9446792941" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  94467 92941
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




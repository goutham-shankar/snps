"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Grievance() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Grievance Redressal</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-semibold text-[#af5f36] text-xl">Committee & Timelines</h2>
                <p className="text-gray-700 text-sm mt-2">Details of the committee members with response timelines and escalation matrix.</p>
                <a href="#" className="text-orange-600 font-medium mt-2 inline-block">View Committee</a>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-semibold text-[#af5f36] text-xl">Submit a Grievance</h2>
                <form className="mt-3 grid gap-3">
                  <input className="border rounded-md px-3 py-2" placeholder="Name" />
                  <input className="border rounded-md px-3 py-2" placeholder="Email" />
                  <textarea className="border rounded-md px-3 py-2" placeholder="Grievance details" rows={4} />
                  <button type="button" className="bg-orange-600 text-white rounded-md px-4 py-2 w-max">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




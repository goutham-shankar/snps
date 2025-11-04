"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Governance() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#af5f36] text-center">Governance & School Management</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
            <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">Transparent governance with accountability: School Management Committee (SMC), PTA, and statutory compliance.</p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-2xl font-semibold text-[#af5f36] mb-3">School Management Committee</h2>
                <p className="text-gray-700 text-sm mb-3">Constituted as per CBSE norms. Details of members, roles, and tenure.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="py-2">Name</th>
                        <th className="py-2">Role</th>
                        <th className="py-2">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1,2,3,4,5].map((i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-2">Member {i}</td>
                          <td className="py-2">Role</td>
                          <td className="py-2">Educationist/Parent/Teacher</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-2xl font-semibold text-[#af5f36] mb-3">Meeting Minutes & Policies</h2>
                <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                  <li>SMC Meeting Minutes - Q1 <a className="text-orange-600 ml-2" href="#">View</a></li>
                  <li>PTA Meeting Summary <a className="text-orange-600 ml-2" href="#">View</a></li>
                  <li>Annual Report <a className="text-orange-600 ml-2" href="#">Download</a></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 md:col-span-2">
                <h2 className="text-2xl font-semibold text-[#af5f36] mb-3">Committees</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {["Child Protection", "Safety & Security", "POSH", "Health & Wellness", "Discipline", "IT & Data Privacy"].map((c) => (
                    <div key={c} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-[#af5f36]">{c} Committee</h3>
                      <p className="text-gray-700 text-sm mt-1">Members and SOPs. <a href="#" className="text-orange-600">View</a></p>
                    </div>
                  ))}
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




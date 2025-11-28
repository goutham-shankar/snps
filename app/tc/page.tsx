"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Production Strapi API URL
const STRAPI_API_URL = "https://inspiring-frog-36ed0e23b7.strapiapp.com";

interface TCDocument {
  id: number;
  name: string;
  url: string;
  mime: string;
}

interface TCData {
  id: number;
  documentId: string;
  studentName: string;
  dateOfBirth: string;
  slug: string;
  tcDocument: TCDocument;
  issueDate: string | null;
  remarks: string | null;
}

// Helper to generate slug from name and DOB
function generateTCSlug(name: string, dob: string): string {
  const nameSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return `${nameSlug}-${dob}`;
}

export default function TCPage() {
  const [studentName, setStudentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tcData, setTcData] = useState<TCData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTcData(null);
    setSearched(true);

    if (!studentName.trim() || !dateOfBirth) {
      setError("Please enter both student name and date of birth");
      setLoading(false);
      return;
    }

    try {
      // Generate slug from name and DOB
      const slug = generateTCSlug(studentName, dateOfBirth);

      // Fetch TC from Strapi API (Production)
      const response = await fetch(
        `${STRAPI_API_URL}/api/tcs?filters[slug][$eq]=${slug}&populate=*`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch TC");
      }

      const result = await response.json();

      if (result.data && result.data.length > 0) {
        setTcData(result.data[0]);
      } else {
        setError("No Transfer Certificate found for the given details");
      }
    } catch (err) {
      console.error("Error fetching TC:", err);
      setError("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (tcData?.tcDocument?.url) {
      const pdfUrl = tcData.tcDocument.url.startsWith("http")
        ? tcData.tcDocument.url
        : `${STRAPI_API_URL}${tcData.tcDocument.url}`;
      window.open(pdfUrl, "_blank");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#af5f36] to-[#8B4513] py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Transfer Certificate
            </h1>
            <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto">
              Search and download your Transfer Certificate by entering your
              name and date of birth
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Search Your TC
              </h2>

              <form onSubmit={handleSearch} className="space-y-6">
                {/* Student Name */}
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af5f36] focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af5f36] focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#af5f36] hover:bg-[#8B4513] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Searching...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Search TC
                    </>
                  )}
                </button>
              </form>

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-center flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {error}
                  </p>
                </div>
              )}

              {/* TC Result */}
              {tcData && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-2 text-green-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold">TC Found!</span>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-medium">Student Name:</span>
                      <span>{tcData.studentName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-medium">Date of Birth:</span>
                      <span>{formatDate(tcData.dateOfBirth)}</span>
                    </div>
                    {tcData.issueDate && (
                      <div className="flex justify-between items-center py-2 border-b border-green-200">
                        <span className="font-medium">Issue Date:</span>
                        <span>{formatDate(tcData.issueDate)}</span>
                      </div>
                    )}
                    {tcData.remarks && (
                      <div className="py-2 border-b border-green-200">
                        <span className="font-medium">Remarks:</span>
                        <p className="mt-1 text-gray-600">{tcData.remarks}</p>
                      </div>
                    )}
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download TC (PDF)
                  </button>
                </div>
              )}

              {/* No Results */}
              {searched && !loading && !error && !tcData && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-700 text-center">
                    No Transfer Certificate found. Please verify your details
                    and try again.
                  </p>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Important Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#af5f36] mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Enter your name exactly as it appears in school records
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#af5f36] mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Date of birth should match your official school records
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#af5f36] mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    If you cannot find your TC, please contact the school office
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import schoolInfo from '../data/school-info';
import Image from 'next/image';

export default function Management() {
  // Arrange specific roles for the Managing Committee hierarchy
  const president = schoolInfo.managingCommittee.find(m => m.designation === "President");
  const secretary = schoolInfo.managingCommittee.find(m => m.designation === "Secretary");
  const treasurer = schoolInfo.managingCommittee.find(m => m.designation === "Treasurer");
  const vicePresident = schoolInfo.managingCommittee.find(m => m.designation === "Vice President");
  const jointSecretary = schoolInfo.managingCommittee.find(m => m.designation === "Joint Secretary");

  return (
    <section id="management" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Organization Structure
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leadership & Faculty
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals committed to educational excellence
          </p>
        </div>

        {/* Organizational Tree Structure */}
        <div className="bg-linear-to-br from-orange-50 to-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-orange-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#af5f36] to-[#8b4a28] bg-clip-text text-transparent mb-3">
              Organizational Hierarchy
            </h2>
            <p className="text-gray-600 text-lg">{schoolInfo.managingBody}</p>
          </div>

          {/* Tree Structure - Modern Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Tier 1: President & Secretary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {president && (
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#af5f36] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      President
                    </div>
                    <div className="w-28 h-28 rounded-full mx-auto mt-4 mb-4 overflow-hidden border-4 border-[#af5f36] shadow-xl ring-4 ring-orange-100">
                      <Image src="/president.jpg" alt={president.name} width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-1">{president.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-[#af5f36]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-sm">Leadership Head</span>
                    </div>
                  </div>
                </div>
              )}
              {secretary && (
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#af5f36] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Secretary
                    </div>
                    <div className="w-28 h-28 rounded-full mx-auto mt-4 mb-4 overflow-hidden border-4 border-[#af5f36] shadow-xl ring-4 ring-orange-100">
                      <Image src="/secretary.png" alt={secretary.name} width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-1">{secretary.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-[#af5f36]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Administrative Head</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Connector */}
            <div className="flex justify-center my-8">
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#af5f36] to-orange-300 rounded"></div>
                <div className="w-3 h-3 bg-[#af5f36] rounded-full"></div>
                <div className="w-1 h-12 bg-gradient-to-b from-orange-300 to-[#af5f36] rounded"></div>
              </div>
            </div>

            {/* Tier 2: Treasurer */}
            {treasurer && (
              <div className="max-w-sm mx-auto mb-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b4a28] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Treasurer
                    </div>
                    <div className="w-28 h-28 rounded-full mx-auto mt-4 mb-4 overflow-hidden border-4 border-[#8b4a28] shadow-xl ring-4 ring-orange-100">
                      <Image src="/treasurer.png" alt={treasurer.name} width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-1">{treasurer.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-[#8b4a28]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Financial Head</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Connector */}
            <div className="flex justify-center my-8">
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#af5f36] to-orange-300 rounded"></div>
                <div className="w-3 h-3 bg-[#af5f36] rounded-full"></div>
                <div className="w-1 h-12 bg-gradient-to-b from-orange-300 to-[#af5f36] rounded"></div>
              </div>
            </div>

            {/* Tier 3: Vice President & Joint Secretary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {vicePresident && (
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b4a28] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Vice President
                    </div>
                    <div className="w-24 h-24 rounded-full mx-auto mt-4 mb-4 overflow-hidden border-4 border-[#8b4a28] shadow-xl ring-4 ring-orange-100">
                      <Image src="/vicepresident.png" alt={vicePresident.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{vicePresident.name}</h4>
                    <p className="text-sm text-gray-600 text-center">Support Leadership</p>
                  </div>
                </div>
              )}
              {jointSecretary && (
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b4a28] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Joint Secretary
                    </div>
                    <div className="w-24 h-24 rounded-full mx-auto mt-4 mb-4 overflow-hidden border-4 border-[#8b4a28] shadow-xl ring-4 ring-orange-100">
                      <Image src="/jointsec.png" alt={jointSecretary.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{jointSecretary.name}</h4>
                    <p className="text-sm text-gray-600 text-center">Administrative Support</p>
                  </div>
                </div>
              )}
            </div>

            {/* Connector to Principal */}
            <div className="flex justify-center my-8">
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#af5f36] to-orange-300 rounded"></div>
                <div className="w-4 h-4 bg-[#af5f36] rounded-full"></div>
                <div className="w-1 h-12 bg-gradient-to-b from-orange-300 to-[#af5f36] rounded"></div>
              </div>
            </div>

            {/* Principal Level - Enhanced */}
            <div className="text-center mb-12">
              <div className="inline-block relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-3xl p-8 shadow-2xl text-white">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#8b4a28] px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Principal
                  </div>
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 mt-2 overflow-hidden border-4 border-white shadow-2xl ring-4 ring-orange-300">
                    <Image
                      src="/PRINCI.jpg"
                      alt={`${schoolInfo.principal.name} - Principal`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-2xl mb-1">{schoolInfo.principal.name}</h3>
                  <p className="text-orange-200 font-semibold text-lg mb-2">{schoolInfo.principal.title}</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-sm">{schoolInfo.specialStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector to Departments */}
            <div className="flex flex-col items-center my-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#af5f36] to-gray-400 rounded"></div>
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded"></div>
              <div className="grid grid-cols-3 gap-16 w-full max-w-2xl">
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-[#af5f36] rounded"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-[#af5f36] rounded"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-[#af5f36] rounded"></div>
                </div>
              </div>
            </div>

            {/* Department Structure - Modern Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Academic Department */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-full mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-center mb-2 text-lg">Academic Department</h4>
                  <div className="text-4xl font-bold text-[#af5f36] text-center mb-2">
                    {schoolInfo.faculty.filter(f => f.position.includes('Teacher') || f.position === 'Teacher').length}
                  </div>
                  <p className="text-gray-600 text-sm text-center font-medium">Teaching Faculty</p>
                </div>
              </div>

              {/* Administrative Department */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-full mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-center mb-2 text-lg">Administrative</h4>
                  <div className="text-4xl font-bold text-[#af5f36] text-center mb-2">
                    {schoolInfo.nonTeachingStaff.filter(s => s.position.includes('Accountant') || s.position.includes('Assistant') || s.position.includes('Librarian')).length}
                  </div>
                  <p className="text-gray-600 text-sm text-center font-medium">Admin Staff</p>
                </div>
              </div>

              {/* Support Department */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-full mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-center mb-2 text-lg">Support Services</h4>
                  <div className="text-4xl font-bold text-[#af5f36] text-center mb-2">
                    {schoolInfo.nonTeachingStaff.filter(s => s.position.includes('Driver') || s.position.includes('Ayah') || s.position.includes('Peon')).length}
                  </div>
                  <p className="text-gray-600 text-sm text-center font-medium">Support Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Committee */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Executive Committee</h2>
            <p className="text-gray-600">Distinguished members guiding our educational mission</p>
          </div>
          {/* Executive Committee Image */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/management.jpg"
                alt="Executive Committee"
                width={1200}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Member grid removed per request */}
        </div>

        {/* Faculty Directory */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="bg-linear-to-r from-[#af5f36] to-[#8b4a28] p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Faculty Directory</h2>
            <p className="text-orange-100">Our dedicated teaching professionals</p>
            
            {/* Faculty Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/20 border border-white/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{schoolInfo.faculty.length}</div>
                <div className="text-sm text-orange-100">Total Faculty</div>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('M.A.') || f.qualification.includes('M.Sc.') || f.qualification.includes('MCA')).length}
                </div>
                <div className="text-sm text-orange-100">Post Graduates</div>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('B.Ed.')).length}
                </div>
                <div className="text-sm text-orange-100">B.Ed. Qualified</div>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('KTET') || f.qualification.includes('SET') || f.qualification.includes('NET')).length}
                </div>
                <div className="text-sm text-orange-100">Certified</div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">S.No.</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Qualification</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {schoolInfo.faculty.map((member, index) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#af5f36] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{member.name}</div>
                            {member.position === 'Principal' && (
                              <div className="text-xs text-[#af5f36] font-medium">Principal</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{member.qualification}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          member.position === 'Principal' 
                            ? 'bg-[#af5f36] text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {member.position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Non-Teaching Staff */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Support Staff</h2>
            <p className="text-gray-600">Dedicated professionals supporting our educational mission</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolInfo.nonTeachingStaff.map((member, index) => (
              <div key={member.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">{member.name}</p>
                    <p className="text-gray-600 text-xs">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

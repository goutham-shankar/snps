import schoolInfo from '../data/school-info';

export default function Management() {
  return (
    <section id="management" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-[#af5f36] rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
              Management & Faculty
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership & Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who guide our institution towards excellence in education
          </p>
        </div>

        {/* Managing Committee */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-[#af5f36] to-[#8b4a28] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Managing Committee</h2>
            <p className="text-orange-100">{schoolInfo.managingBody}</p>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolInfo.managingCommittee.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#af5f36] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#af5f36] text-lg">{member.designation}</h3>
                      <p className="text-gray-700 font-semibold">{member.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Committee */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Executive Committee</h2>
              <p className="text-gray-600">Distinguished members guiding our educational mission</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {schoolInfo.executiveCommittee.map((member, index) => (
                <div key={member.id} className="bg-gray-50 rounded-xl p-4 hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#af5f36] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {member.id}
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">{member.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principal Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="grid lg:grid-cols-3 gap-0">
            <div className="lg:col-span-1 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] p-8 flex flex-col justify-center text-white">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{schoolInfo.principal.name}</h3>
                <p className="text-orange-200 text-lg">{schoolInfo.principal.title}</p>
                <p className="text-orange-100 text-sm mt-2">{schoolInfo.specialStatus}</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 p-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-[#af5f36] rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#af5f36]">
                  Principal
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Excellence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the visionary leadership of {schoolInfo.principal.name}, our school continues to excel in providing 
                quality education that nurtures both academic achievement and character development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With extensive qualifications and experience in education, our principal leads the institution towards 
                becoming a {schoolInfo.specialStatus}, ensuring that every student receives the best possible education 
                aligned with modern pedagogical approaches and traditional values.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 md:mb-16">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Faculty</h2>
              <p className="text-gray-600">Dedicated educators committed to student success</p>
            </div>
            
            {/* Faculty Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{schoolInfo.faculty.length}</div>
                <div className="text-sm text-blue-700">Total Faculty</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('M.A.') || f.qualification.includes('M.Sc.') || f.qualification.includes('MCA')).length}
                </div>
                <div className="text-sm text-green-700">Post Graduates</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('B.Ed.')).length}
                </div>
                <div className="text-sm text-purple-700">B.Ed. Qualified</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
                <div className="text-2xl font-bold text-[#af5f36]">
                  {schoolInfo.faculty.filter(f => f.qualification.includes('KTET') || f.qualification.includes('SET') || f.qualification.includes('NET')).length}
                </div>
                <div className="text-sm text-[#af5f36]">Certified Teachers</div>
              </div>
            </div>

            {/* Faculty List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">S.No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Qualification</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {schoolInfo.faculty.map((member, index) => (
                    <tr key={member.id} className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#af5f36] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
                      <td className="px-6 py-4 text-sm text-gray-700">{member.qualification}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          member.position === 'Principal' 
                            ? 'bg-[#af5f36] text-white' 
                            : member.position.includes('Physical Education') 
                              ? 'bg-blue-100 text-blue-800'
                              : member.position.includes('Computer')
                                ? 'bg-green-100 text-green-800'
                                : member.position.includes('Dance')
                                  ? 'bg-purple-100 text-purple-800'
                                  : member.position.includes('Music')
                                    ? 'bg-pink-100 text-pink-800'
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
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Non-Teaching Staff</h2>
              <p className="text-gray-600">Supporting our educational mission with dedication</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {schoolInfo.nonTeachingStaff.map((member, index) => (
                <div key={member.id} className="bg-gray-50 rounded-xl p-4 hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-[#af5f36] transition-colors">
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
      </div>
    </section>
  );
}

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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Organizational Hierarchy</h2>
            <p className="text-gray-600">{schoolInfo.managingBody}</p>
          </div>

          {/* Tree Structure */}
          <div className="relative">
            {/* Managing Committee - Structured Layout */}
            <div className="text-center mb-8">
              <div className="inline-block bg-[#af5f36] text-white px-6 py-3 rounded-lg font-bold text-lg mb-4">
                Managing Committee
              </div>

              {/* Row 1: President | Secretary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {president && (
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-3 border-[#af5f36] shadow-lg">
                      <Image src="/president.jpg" alt={president.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#af5f36] text-lg mb-1">President</h4>
                    <p className="text-gray-700 text-base font-medium">{president.name}</p>
                  </div>
                )}
                {secretary && (
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-3 border-[#af5f36] shadow-lg">
                      <Image src="/secretary.png" alt={secretary.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#af5f36] text-lg mb-1">Secretary</h4>
                    <p className="text-gray-700 text-base font-medium">{secretary.name}</p>
                  </div>
                )}
              </div>

              {/* Vertical Connector */}
              <div className="flex justify-center my-6">
                <div className="w-0.5 h-8 bg-gray-400"></div>
              </div>

              {/* Row 2: Treasurer */}
              {treasurer && (
                <div className="max-w-md mx-auto mb-8">
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-3 border-[#af5f36] shadow-lg">
                      <Image src="/treasurer.png" alt={treasurer.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#af5f36] text-lg mb-1">Treasurer</h4>
                    <p className="text-gray-700 text-base font-medium">{treasurer.name}</p>
                  </div>
                </div>
              )}

              {/* Vertical Connector */}
              <div className="flex justify-center my-6">
                <div className="w-0.5 h-8 bg-gray-400"></div>
              </div>

              {/* Row 3: Vice President | Joint Secretary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {vicePresident && (
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-3 border-[#af5f36] shadow-lg">
                      <Image src="/vicepresident.png" alt={vicePresident.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#af5f36] text-lg mb-1">Vice President</h4>
                    <p className="text-gray-700 text-base font-medium">{vicePresident.name}</p>
                  </div>
                )}
                {jointSecretary && (
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-3 border-[#af5f36] shadow-lg">
                      <Image src="/jointsec.png" alt={jointSecretary.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#af5f36] text-lg mb-1">Joint Secretary</h4>
                    <p className="text-gray-700 text-base font-medium">{jointSecretary.name}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center my-6">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>

            {/* Principal Level */}
            <div className="text-center mb-8">
              <div className="inline-block bg-linear-to-br from-[#af5f36] to-[#8b4a28] rounded-lg p-6 shadow-lg text-white">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image
                    src="/PRINCI.jpg"
                    alt={`${schoolInfo.principal.name} - Principal`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-lg">{schoolInfo.principal.name}</h3>
                <p className="text-orange-200 font-semibold">{schoolInfo.principal.title}</p>
                <p className="text-orange-100 text-sm">{schoolInfo.specialStatus}</p>
              </div>
            </div>

            {/* Connection Lines to Departments */}
            <div className="flex justify-center my-4">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>
            <div className="flex justify-center my-4">
              <div className="w-80 h-0.5 bg-gray-400"></div>
            </div>
            <div className="grid grid-cols-3 gap-8 my-4">
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-400"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-400"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-400"></div>
              </div>
            </div>

            {/* Department Structure */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Academic Department */}
              <div className="text-center">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Academic Department</h4>
                  <div className="text-2xl font-bold text-[#af5f36]">
                    {schoolInfo.faculty.filter(f => f.position.includes('Teacher') || f.position === 'Teacher').length}
                  </div>
                  <p className="text-gray-600 text-sm">Teaching Faculty</p>
                </div>
              </div>

              {/* Administrative Department */}
              <div className="text-center">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Administrative</h4>
                  <div className="text-2xl font-bold text-[#af5f36]">
                    {schoolInfo.nonTeachingStaff.filter(s => s.position.includes('Accountant') || s.position.includes('Assistant') || s.position.includes('Librarian')).length}
                  </div>
                  <p className="text-gray-600 text-sm">Admin Staff</p>
                </div>
              </div>

              {/* Support Department */}
              <div className="text-center">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Support Services</h4>
                  <div className="text-2xl font-bold text-[#af5f36]">
                    {schoolInfo.nonTeachingStaff.filter(s => s.position.includes('Driver') || s.position.includes('Ayah') || s.position.includes('Peon')).length}
                  </div>
                  <p className="text-gray-600 text-sm">Support Staff</p>
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

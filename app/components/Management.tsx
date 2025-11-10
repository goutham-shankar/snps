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

        {/* About Sree Narayana Educational Society */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-12 border border-orange-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#af5f36] mb-2">
              SREE NARAYANA EDUCATIONAL SOCIETY, KOLLAM
            </h2>
            <div className="w-20 h-1 bg-[#af5f36] mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-gray-700 space-y-4">
            <p className="text-justify leading-relaxed">
              The Sree Narayana Educational Society, Kollam, established in 1986, stands as a beacon of educational excellence, inspired by Sree Narayana Guru's timeless ideal — "Enlighten through Education." Under the visionary leadership of Er. Mr. Anidharan M. L. and Prof. K. Sasikumar, the Society manages several distinguished CBSE institutions and colleges affiliated with the University of Kerala, embodying our enduring commitment to academic excellence and ethical education.
            </p>
            
            <p className="text-justify leading-relaxed">
              Among our institutions, Sree Narayana Public School, Chathannoor, occupies a special place. Nestled in a serene environment, it provides the ideal setting for holistic growth. The Society envisions elevating this school into an internationally recognized center of learning, with a long-term aspiration to develop it into a Sainik School, fostering discipline, leadership and patriotism in young minds.
            </p>
          </div>
        </div>

        {/* Organizational Hierarchy - New Modern Design */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Organizational Hierarchy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#af5f36] to-[#8b4a28] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{schoolInfo.managingBody}</p>
          </div>

          {/* Modern Card Grid Layout - 3 Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* President */}
            {president && (
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                    <Image 
                      src="/president.jpg" 
                      alt={president.name} 
                      width={400} 
                      height={400} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#af5f36] to-[#8b4a28]">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{president.name}</h3>
                    <p className="text-white font-semibold text-center">President</p>
                  </div>
                </div>
              </div>
            )}

            {/* Secretary */}
            {secretary && (
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                    <Image 
                      src="/secretary.png" 
                      alt={secretary.name} 
                      width={400} 
                      height={400} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#af5f36] to-[#8b4a28]">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{secretary.name}</h3>
                    <p className="text-white font-semibold text-center">Secretary</p>
                  </div>
                </div>
              </div>
            )}

            {/* Treasurer */}
            {treasurer && (
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af5f36] to-[#8b4a28] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                    <Image 
                      src="/treasurer.png" 
                      alt={treasurer.name} 
                      width={400} 
                      height={400} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#af5f36] to-[#8b4a28]">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{treasurer.name}</h3>
                    <p className="text-white font-semibold text-center">Treasurer</p>
                  </div>
                </div>
              </div>
            )}
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

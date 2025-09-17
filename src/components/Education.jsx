import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = ({ education }) => {
  const handleCertificationClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and professional certifications in data engineering and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">{education.degree}</h4>
              <p className="text-lg text-blue-600 font-medium">{education.institution}</p>
              <p className="text-gray-600">{education.duration}</p>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-green-700 font-semibold">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              {education.certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => handleCertificationClick(cert.url)}
                  className="group cursor-pointer p-4 border-2 border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">Microsoft</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-yellow-500 mr-3" />
                <h4 className="font-semibold text-gray-900">Tech Mahindra Excellence</h4>
              </div>
              <p className="text-gray-600">Received Kudos badge for excellence in GE Vernova data engineering project</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-green-500 mr-3" />
                <h4 className="font-semibold text-gray-900">Federal Bank Speak for India</h4>
              </div>
              <p className="text-gray-600">District finalist in Federal Bank Speak for India competition (2019)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
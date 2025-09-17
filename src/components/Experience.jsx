import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4+ years of experience building scalable data solutions across cloud platforms
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

              {/* Experience card */}
              <div className="md:ml-20 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.role}</h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Briefcase size={16} className="mr-2" />
                      {experience.company}
                    </div>
                    {experience.client && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-2" />
                        Client: {experience.client}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 font-medium">
                    <Calendar size={16} className="mr-2" />
                    {experience.duration}
                  </div>
                </div>

                <div className="space-y-3">
                  {experience.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
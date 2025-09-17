import React from 'react';
import { Users, Heart } from 'lucide-react';

const Volunteer = ({ volunteer }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to community development and leadership initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg border-2 border-blue-100">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-900">{volunteer.organization}</h3>
                <p className="text-lg text-blue-600 font-semibold">{volunteer.role}</p>
                <p className="text-gray-600">{volunteer.year}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Heart className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed text-lg">
                {volunteer.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
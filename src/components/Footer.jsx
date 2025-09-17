import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Athena Anil</h3>
            <p className="text-gray-400">Data Engineer</p>
          </div>

          <div className="flex items-center space-x-6">
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and React
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Athena Anil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
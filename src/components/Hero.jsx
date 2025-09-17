import React from 'react';
import { Download, Mail, ArrowDown, Sparkles } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create download link for the resume
    const link = document.createElement('a');
    link.href = data.resumeUrl;
    link.download = 'Athena_Anil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-200">Available for new opportunities</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              {data.name}
            </h1>
            
            <div className="text-2xl lg:text-3xl font-semibold mb-8 text-cyan-300">
              {data.title}
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
              {data.tagline}
            </p>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
              {data.summary}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative flex items-center">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </div>
              </button>
              
              <button
                onClick={handleContactClick}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </div>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              
              {/* Image container with professional crop */}
              <div className="relative bg-gradient-to-r from-cyan-300 to-blue-300 p-1 rounded-3xl">
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-72 h-96 lg:w-80 lg:h-[28rem] object-cover object-center rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{
                    objectPosition: 'center 35%'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.display = 'block';
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.border = '2px dashed #9ca3af';
                    e.target.alt = 'Profile image loading...';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-bounce"
          >
            <ArrowDown className="text-white group-hover:text-cyan-300 transition-colors" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
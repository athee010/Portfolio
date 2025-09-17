import React from 'react';
import { Github, ExternalLink, Star, Zap, Sparkles } from 'lucide-react';

const Projects = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }) => {
    const handleProjectClick = () => {
      window.open(project.githubUrl, '_blank');
    };

    return (
      <div
        onClick={handleProjectClick}
        className={`group relative project-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:transform hover:scale-105 border border-white/50 ${
          featured ? 'lg:col-span-2' : ''
        }`}
      >
        {/* Gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {featured && (
          <div className="relative z-10 flex items-center mb-6">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg">
              <Star className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-bold text-white">Featured Project</span>
            </div>
            <Sparkles className="w-5 h-5 text-yellow-500 ml-3 animate-pulse" />
          </div>
        )}
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Github className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-xl text-sm font-semibold border border-purple-200/50 hover:from-purple-200 hover:to-blue-200 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
              <Zap size={20} className="mr-2" />
              <span className="font-semibold">Explore Project</span>
            </div>
            <ExternalLink size={20} className="text-gray-400 group-hover:text-purple-600 transition-colors duration-300 transform group-hover:scale-110" />
          </div>
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8 shadow-lg">
            <Zap className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-semibold">PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A curated showcase of data engineering projects demonstrating expertise in cloud platforms, 
            AI automation, ETL pipelines, and the modern data stack
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">More Projects</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
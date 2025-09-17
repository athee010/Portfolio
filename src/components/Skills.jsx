import React from 'react';
import { Cloud, Database, Code, BarChart3, Settings, Zap } from 'lucide-react';

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: 'Cloud & Platforms',
      icon: <Cloud className="w-8 h-8" />,
      skills: skills.cloudPlatforms,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Programming',
      icon: <Code className="w-8 h-8" />,
      skills: skills.programming,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Data Engineering',
      icon: <BarChart3 className="w-8 h-8" />,
      skills: skills.dataEngineering,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'AI Automation',
      icon: <Zap className="w-8 h-8" />,
      skills: skills.aiAutomation,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      skills: skills.databases,
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      iconColor: 'text-rose-600'
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="w-8 h-8" />,
      skills: skills.tools,
      gradient: 'from-indigo-500 to-violet-500',
      bgGradient: 'from-indigo-50 to-violet-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL
/2wMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmOWZhZmIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">EXPERTISE</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise spanning cloud-native data engineering, AI automation, and modern analytics platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/50 backdrop-blur-sm`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className={`p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${category.iconColor}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default border border-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default Skills;
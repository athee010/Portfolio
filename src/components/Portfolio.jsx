import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Volunteer from './Volunteer';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    setData(mockData);
  }, []);

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero data={data.hero} />
      <Experience experiences={data.experiences} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
      <Volunteer volunteer={data.volunteer} />
      <Contact contact={data.contact} />
      <Footer />
    </div>
  );
};

export default Portfolio;
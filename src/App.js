import React from 'react';
import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';
import MySocialMedia from './components/MySocialMedia/MySocialMedia';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <MySocialMedia />
    </>
  );
};

export default App;

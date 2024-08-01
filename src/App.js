import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default App;

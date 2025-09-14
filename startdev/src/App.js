import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import Featured from './Featured/Featured.js';
import Footer from './Footer/Footer.js';


function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoMode, setDemoMode] = useState(null);
  const [codeView, setCodeView] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {activeSection === 'home' && (
            <>
                <Hero setActiveSection={setActiveSection} />
                <Featured setDemoMode={setDemoMode} setCodeView={setCodeView} />
            </>
        )}
        
        {/* {activeSection === 'projects' && <ProjectsGrid setSelectedProject={setSelectedProject} />}
        
        {activeSection === 'contact' && <ContactForm />}
        
        <ProjectModal 
            selectedProject={selectedProject} 
            setSelectedProject={setSelectedProject}
            setDemoMode={setDemoMode}
            setCodeView={setCodeView}
        />
        <LiveDemo 
            demoMode={demoMode} 
            setDemoMode={setDemoMode}
            setCodeView={setCodeView}
        />
        <CodeViewer 
            codeView={codeView} 
            setCodeView={setCodeView}
            setDemoMode={setDemoMode}
        /> */}
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ activeSection, setActiveSection }) {

//   const [activeSection, setActiveSection] = useState('home');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationSections = ['home', 'projects', 'contact'];
  const logoText = 'T2P';
  const glowStyle = { textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' };
  
  const handleMobileNavClick = (section) => {
      setActiveSection(section);
      setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-violet-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div 
                    className="flex items-center text-2xl font-bold text-violet-300"
                    style={glowStyle}
                >
                    {logoText}
                </div>
                <div className="hidden md:flex space-x-8">
                    {navigationSections.map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`capitalize transition-all duration-300 ${
                                activeSection === section 
                                    ? 'text-violet-300' 
                                    : 'text-gray-300 hover:text-violet-400'
                            }`}
                            style={activeSection === section ? glowStyle : {}}
                        >
                            {section}
                        </button>
                    ))}
                </div>
                <div className="md:hidden flex justify-end pr-6">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-6 h-6 text-violet-300 text-2xl hover:text-violet-400 transition-colors"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-violet-500/30">
                    <div className="px-4 py-4 space-y-4">
                        {navigationSections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleMobileNavClick(section)}
                                className={`block w-full text-left capitalize py-2 transition-all duration-300 ${
                                    activeSection === section 
                                        ? 'text-violet-300' 
                                        : 'text-gray-300 hover:text-violet-400'
                                }`}
                                style={activeSection === section ? glowStyle : {}}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Header;

// sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm
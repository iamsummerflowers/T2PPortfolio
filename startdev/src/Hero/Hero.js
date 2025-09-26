import React from 'react';
import { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero({ setActiveSection }) {

//   const [activeSection, setActiveSection] = useState('home');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(135deg, #4c1d95 0%, #312e81 25%, #1e1b4b 50%, #581c87 75%, #4c1d95 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease infinite'
            }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                    <span 
                        className="text-violet-300"
                        style={{ textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }}
                    >
                        Think to
                    </span>
                    <span className="text-white"> Prod</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Turn ideas into reality
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => setActiveSection('projects')}
                        className="w-fit px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-md font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className="w-fit px-8 py-3 border-2 border-violet-400 text-violet-300 rounded-md font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 w-fit flex justify-center transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-bounce"></div>
            </div>
        </div>
    </section>
  );
}

export default Hero;

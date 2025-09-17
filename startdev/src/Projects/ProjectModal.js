import React from 'react';
import { useState, useEffect } from 'react';
import './ProjectsGrid.css';
import { Link } from 'react-router-dom';
import { projects } from '../Data/ProjectData';


function ProjectsGrid ({ selectedProject, setSelectedProject, setDemoMode, setCodeView }) {

if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div 
            className="rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border"
            style={{
                backdropFilter: 'blur(10px)',
                background: 'rgba(139, 92, 246, 0.1)',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                >
                    ×
                </button>
            </div>
            <div className="text-6xl mb-6 text-center">{selectedProject.image}</div>
            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-violet-600/30 text-violet-300 rounded-full text-sm border border-violet-500/50"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={() => {
                        const currentProject = selectedProject;
                        setSelectedProject(null);
                        setDemoMode(currentProject);
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
                >
                    Live Demo
                </button>
                <button 
                    onClick={() => {
                        const currentProject = selectedProject;
                        setSelectedProject(null);
                        setCodeView(currentProject);
                    }}
                    className="flex-1 px-6 py-3 border border-violet-400 text-violet-300 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
                >
                    View Code
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProjectsGrid;

// sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm
import React from 'react';
import { useState, useEffect } from 'react';
import './Featured.css';
import { Link } from 'react-router-dom';
import { projects } from '../Data/ProjectData';

function Featured({ setDemoMode, setCodeView }) {

    // const featuredProject = [
    //         {
    //             id: 1,
    //             title: "NeuroSync Dashboard",
    //             description: "AI-powered analytics platform with real-time data visualization and machine learning insights.",
    //             tech: ["React", "D3.js", "Python", "TensorFlow"],
    //             featured: true,
    //             image: "🧠",
    //             color: "from-purple-600 to-indigo-600",
    //             demoContent: {
    //                 title: "Live Neural Network Visualization",
    //                 features: ["Real-time data processing", "Interactive 3D graphs", "AI prediction models", "Custom dashboards"]
    //             },
    //             codeSnippet: `// NeuroSync Core Algorithm
    //             const neuralNetwork = {
    //             layers: [784, 128, 64, 10],
                
    //             predict: async (inputData) => {
    //                 const normalized = normalize(inputData);
    //                 const result = await tf.model.predict(normalized);
    //                 return result.dataSync();
    //             },
                
    //             visualize: (data) => {
    //                 d3.select('#chart')
    //                 .selectAll('circle')
    //                 .data(data)
    //                 .enter()
    //                 .append('circle')
    //                 .attr('r', d => d.confidence * 10)
    //                 .style('fill', '#8b5cf6');
    //             }
    //             };`
    //         }
    //     ];

    const featuredProject = projects.find(p => p.featured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 
                className="text-4xl font-bold text-center mb-16 text-violet-300"
                style={{ textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }}
            >
                Featured Project
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className={`text-8xl mb-6 text-center lg:text-left`}>
                        {featuredProject.image}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProject.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="w-fit px-3 py-1 bg-violet-600/30 text-violet-300 rounded-full text-sm border border-violet-500/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex gap-4">
                        <button 
                            onClick={() => setDemoMode(featuredProject)}
                            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
                        >
                            Live Demo
                        </button>
                        <button 
                            onClick={() => setCodeView(featuredProject)}
                            className="px-6 py-3 border border-violet-400 text-violet-300 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
                        >
                            View Code
                        </button>
                    </div> */}
                    <div className="flex gap-4">
                        <button 
                            onClick={() => {
                                // const currentProject = selectedProject;
                                // setSelectedProject(null);
                                // setDemoMode(currentProject);
                                window.open(featuredProject.siteURL, '_blank', 'noopener,noreferrer');
                            }}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
                        >
                            See for Yourself
                        </button>
                        <button 
                            onClick={() => {
                                // const currentProject = selectedProject;
                                // setSelectedProject(null);
                                // setCodeView(currentProject);
                                window.open(featuredProject.codeURL, '_blank', 'noopener,noreferrer');
                            }}
                            className="flex-1 px-6 py-3 border border-violet-400 text-violet-300 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
                        >
                            Give Me Code!
                        </button>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className={`rounded-2xl h-80`}
                            style={{
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(139, 92, 246, 0.1)',
                                // borderColor: 'rgba(139, 92, 246, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                    >
                        <div className="text-center">
                            {/* <div className="text-6xl mb-4">{featuredProject.featureVideo}</div> */}
                            {/* <div className="text-white/80">Interactive Preview</div> */}
                            <video
                                src={featuredProject.featureVideo} 
                                className="rounded-2xl h-80 border border-violet-400 p-2 flex items-center justify-centerrounded-lg shadow-lg" 
                                controls
                                autoPlay
                                muted
                                loop
                            />
                            {/* <div className="text-white/80">Interactive Preview</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Featured;

// sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm
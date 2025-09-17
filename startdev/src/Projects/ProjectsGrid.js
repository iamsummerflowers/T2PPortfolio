import React from 'react';
import { useState, useEffect } from 'react';
import './ProjectsGrid.css';
import { Link } from 'react-router-dom';
import { projects } from '../Data/ProjectData';

function ProjectsGrid ({ setSelectedProject }) {

// const projects = [
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
//         },
//         {
//             id: 2,
//             title: "Cosmic Commerce",
//             description: "E-commerce platform with AR product visualization and blockchain payment integration.",
//             tech: ["Next.js", "Three.js", "Solidity", "WebXR"],
//             featured: false,
//             image: "🌌",
//             color: "from-indigo-600 to-violet-600",
//             demoContent: {
//                 title: "AR Shopping Experience",
//                 features: ["3D product models", "Virtual try-on", "Blockchain payments", "Spatial commerce"]
//             },
//             codeSnippet: `// AR Product Viewer
//             import { Canvas } from '@react-three/fiber';
//             import { ARButton, XR } from '@react-three/xr';

//             const ProductViewer = ({ product }) => {
//             return (
//                 <div className="ar-container">
//                 <ARButton />
//                 <Canvas>
//                     <XR>
//                     <ProductModel 
//                         url={product.model}
//                         position={[0, 0, -2]}
//                         scale={[0.5, 0.5, 0.5]}
//                     />
//                     <ambientLight intensity={0.5} />
//                     </XR>
//                 </Canvas>
//                 </div>
//             );
//             };`
//         },
//         {
//             id: 3,
//             title: "SoundWave Studio",
//             description: "Web-based music production suite with collaborative features and cloud storage.",
//             tech: ["Vue.js", "Web Audio API", "Node.js", "WebRTC"],
//             featured: false,
//             image: "🎵",
//             color: "from-violet-600 to-purple-600",
//             demoContent: {
//                 title: "Digital Audio Workstation",
//                 features: ["Multi-track recording", "Real-time collaboration", "VST plugin support", "Cloud sync"]
//             },
//             codeSnippet: `// Audio Engine Core
//             class AudioEngine {
//             constructor() {
//                 this.context = new AudioContext();
//                 this.tracks = new Map();
//             }
            
//             createTrack(id) {
//                 const track = {
//                 gainNode: this.context.createGain(),
//                 effects: [],
//                 recording: false
//                 };
                
//                 track.gainNode.connect(this.context.destination);
//                 this.tracks.set(id, track);
//                 return track;
//             }
            
//             record(trackId) {
//                 const track = this.tracks.get(trackId);
//                 navigator.mediaDevices.getUserMedia({ audio: true })
//                 .then(stream => {
//                     const recorder = new MediaRecorder(stream);
//                     track.recording = true;
//                     recorder.start();
//                 });
//             }
//             }`
//         },
//         {
//             id: 4,
//             title: "Quantum Chat",
//             description: "End-to-end encrypted messaging app with quantum-resistant cryptography.",
//             tech: ["React Native", "WebAssembly", "Rust", "Signal Protocol"],
//             featured: false,
//             image: "⚛️",
//             color: "from-purple-600 to-pink-600",
//             demoContent: {
//                 title: "Quantum-Safe Messaging",
//                 features: ["Post-quantum encryption", "Zero-knowledge architecture", "Disappearing messages", "Secure group chats"]
//             },
//             codeSnippet: `// Quantum-Resistant Encryption
//             use kyber::*;
//             use rand::rngs::OsRng;

//             pub struct QuantumChat {
//                 keypair: Keypair,
//                 sessions: HashMap<UserId, SharedSecret>,
//             }

//             impl QuantumChat {
//                 pub fn new() -> Self {
//                     let mut rng = OsRng;
//                     let keypair = keypair(&mut rng);
                    
//                     Self {
//                         keypair,
//                         sessions: HashMap::new(),
//                     }
//                 }
                
//                 pub fn encrypt_message(&self, msg: &str, user_id: UserId) -> Vec<u8> {
//                     let session = self.sessions.get(&user_id).unwrap();
//                     aes_gcm_encrypt(msg.as_bytes(), &session.key)
//                 }
//             }`
//         }
//     ];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 
                className="text-4xl font-bold text-center mb-16 text-violet-300"
                style={{ textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }}
            >
                All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-xl p-6 cursor-pointer border"
                        onClick={() => setSelectedProject(project)}
                        style={{
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(139, 92, 246, 0.1)',
                            borderColor: 'rgba(139, 92, 246, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.background = 'rgba(139, 92, 246, 0.2)';
                            e.target.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0px)';
                            e.target.style.background = 'rgba(139, 92, 246, 0.1)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        <div className="text-4xl mb-4">{project.image}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                            {project.tech.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-violet-600/20 text-violet-300 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-2 py-1 bg-violet-600/20 text-violet-300 rounded text-xs">
                                    +{project.tech.length - 3}
                                </span>
                            )}
                        </div>
                        <div className="text-violet-400 text-sm font-medium">View Details →</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    // <section>
    //     Test
    // </section>
  );
}

export default ProjectsGrid;

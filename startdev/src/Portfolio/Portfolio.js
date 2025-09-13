import React from 'react';
import { useState, useEffect } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {

    const [activeSection, setActiveSection] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [demoMode, setDemoMode] = useState(null);
    const [codeView, setCodeView] = useState(null);

    const projects = [
                {
                    id: 1,
                    title: "NeuroSync Dashboard",
                    description: "AI-powered analytics platform with real-time data visualization and machine learning insights.",
                    tech: ["React", "D3.js", "Python", "TensorFlow"],
                    featured: true,
                    image: "🧠",
                    color: "from-purple-600 to-indigo-600",
                    demoContent: {
                        title: "Live Neural Network Visualization",
                        features: ["Real-time data processing", "Interactive 3D graphs", "AI prediction models", "Custom dashboards"]
                    },
                    codeSnippet: `// NeuroSync Core Algorithm
                        const neuralNetwork = {
                        layers: [784, 128, 64, 10],
                        
                        predict: async (inputData) => {
                            const normalized = normalize(inputData);
                            const result = await tf.model.predict(normalized);
                            return result.dataSync();
                        },
                        
                        visualize: (data) => {
                            d3.select('#chart')
                            .selectAll('circle')
                            .data(data)
                            .enter()
                            .append('circle')
                            .attr('r', d => d.confidence * 10)
                            .style('fill', '#8b5cf6');
                        }
                        };`
                },
                {
                    id: 2,
                    title: "Cosmic Commerce",
                    description: "E-commerce platform with AR product visualization and blockchain payment integration.",
                    tech: ["Next.js", "Three.js", "Solidity", "WebXR"],
                    featured: false,
                    image: "🌌",
                    color: "from-indigo-600 to-violet-600",
                    demoContent: {
                        title: "AR Shopping Experience",
                        features: ["3D product models", "Virtual try-on", "Blockchain payments", "Spatial commerce"]
                    },
                    codeSnippet: `// AR Product Viewer
                        import { Canvas } from '@react-three/fiber';
                        import { ARButton, XR } from '@react-three/xr';

                        const ProductViewer = ({ product }) => {
                        return (
                            <div className="ar-container">
                            <ARButton />
                            <Canvas>
                                <XR>
                                <ProductModel 
                                    url={product.model}
                                    position={[0, 0, -2]}
                                    scale={[0.5, 0.5, 0.5]}
                                />
                                <ambientLight intensity={0.5} />
                                </XR>
                            </Canvas>
                            </div>
                        );
                        };`
                    },
                {
                    id: 3,
                    title: "SoundWave Studio",
                    description: "Web-based music production suite with collaborative features and cloud storage.",
                    tech: ["Vue.js", "Web Audio API", "Node.js", "WebRTC"],
                    featured: false,
                    image: "🎵",
                    color: "from-violet-600 to-purple-600",
                    demoContent: {
                        title: "Digital Audio Workstation",
                        features: ["Multi-track recording", "Real-time collaboration", "VST plugin support", "Cloud sync"]
                    },
                    codeSnippet: `// Audio Engine Core
                    class AudioEngine {
                    constructor() {
                        this.context = new AudioContext();
                        this.tracks = new Map();
                    }
                    
                    createTrack(id) {
                        const track = {
                        gainNode: this.context.createGain(),
                        effects: [],
                        recording: false
                        };
                        
                        track.gainNode.connect(this.context.destination);
                        this.tracks.set(id, track);
                        return track;
                    }
                    
                    record(trackId) {
                        const track = this.tracks.get(trackId);
                        navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(stream => {
                            const recorder = new MediaRecorder(stream);
                            track.recording = true;
                            recorder.start();
                        });
                    }
                    }`
                },
                {
                    id: 4,
                    title: "Quantum Chat",
                    description: "End-to-end encrypted messaging app with quantum-resistant cryptography.",
                    tech: ["React Native", "WebAssembly", "Rust", "Signal Protocol"],
                    featured: false,
                    image: "⚛️",
                    color: "from-purple-600 to-pink-600",
                    demoContent: {
                        title: "Quantum-Safe Messaging",
                        features: ["Post-quantum encryption", "Zero-knowledge architecture", "Disappearing messages", "Secure group chats"]
                    },
                    codeSnippet: `// Quantum-Resistant Encryption
                    use kyber::*;
                    use rand::rngs::OsRng;

                    pub struct QuantumChat {
                        keypair: Keypair,
                        sessions: HashMap<UserId, SharedSecret>,
                    }

                    impl QuantumChat {
                        pub fn new() -> Self {
                            let mut rng = OsRng;
                            let keypair = keypair(&mut rng);
                            
                            Self {
                                keypair,
                                sessions: HashMap::new(),
                            }
                        }
                        
                        pub fn encrypt_message(&self, msg: &str, user_id: UserId) -> Vec<u8> {
                            let session = self.sessions.get(&user_id).unwrap();
                            aes_gcm_encrypt(msg.as_bytes(), &session.key)
                        }
                    }`
                }
    ];

    const featuredProject = projects.find(p => p.featured);

    const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
    };

    const LiveDemo = ({ project }) => {
        const [progress, setProgress] = useState(0);
        
        useEffect(() => {
            const interval = setInterval(() => {
                setProgress(prev => prev >= 100 ? 0 : prev + 1);
            }, 50);
            return () => clearInterval(interval);
        }, []);
    };

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div 
                className="rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border"
                style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.3s ease'
                }}
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 
                        className="text-2xl font-bold text-white"
                        style={{ textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }}
                    >
                        {project.demoContent.title}
                    </h3>
                    <button
                        onClick={() => setDemoMode(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </div>
                
                <div 
                    className="rounded-xl p-6 bg-gradient-to-br from-violet-900/50 to-purple-900/50 mb-6"
                    style={{ animation: 'demoGlow 2s ease-in-out infinite alternate' }}
                >
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{project.image}</div>
                        <div className="text-violet-300 font-semibold">🔴 LIVE DEMO</div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                            <ul className="space-y-2">
                                {project.demoContent.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <span className="text-green-400 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">System Status</h4>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                                        <span>Processing Power</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full transition-all duration-100"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Status:</span>
                                    <span className="text-green-400">● Online</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Users:</span>
                                    <span className="text-violet-300">1,247 active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-black/30 rounded-lg">
                        <div 
                            className="text-green-400 text-sm"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                            <div 
                                style={{
                                    overflow: 'hidden',
                                    borderRight: '2px solid #8b5cf6',
                                    whiteSpace: 'nowrap',
                                    animation: 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite'
                                }}
                            >
                                $ {project.title.toLowerCase().replace(/\s+/g, '-')}-demo --start
                            </div>
                            <div className="mt-2 text-gray-300">
                                ✓ Initializing {project.title}...<br/>
                                ✓ Loading dependencies...<br/>
                                ✓ Starting development server...<br/>
                                <span className="text-violet-400">→ Demo running at localhost:3000</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => {
                            setDemoMode(null);
                            setCodeView(project);
                        }}
                        className="flex-1 px-6 py-3 border border-violet-400 text-violet-300 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
                    >
                        View Source Code
                    </button>
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                        Open Full Demo
                    </button>
                </div>
            </div>
        </div>
  );
}

export default Portfolio;
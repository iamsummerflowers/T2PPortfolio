export const projects = [
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
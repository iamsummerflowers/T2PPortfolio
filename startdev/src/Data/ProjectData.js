import comfortHomeDecorImage from '../assets/comforthd.png';
import chdfeatured from '../assets/chdfeatured.mp4';
import slfeatured from '../assets/slfeatured.mp4';
import bssfeatured from '../assets/bssfeatured.mp4';
import portfeatured from '../assets/portfeatured.mp4';
import hndfeatured from '../assets/hndfeatured.mp4';

export const projects = [
        {
            id: 1,
            title: "Comfort Home Decor",
            description: "Home decor website that offers interior, exterior, and re-design services for residential and commercial owners.",
            tech: ["React.js", "CSS"],
            featured: false,
            featureVideo: chdfeatured,
            image: "🏘️",
            color: "from-purple-600 to-indigo-600",
            siteURL: 'https://comforthomedecor.com/',
            codeURL: 'https://github.com/iamsummerflowers/ComfortHomeDecor',
            // demoContent: {
            //     title: "Live Neural Network Visualization",
            //     features: ["Real-time data processing", "Interactive 3D graphs", "AI prediction models", "Custom dashboards"]
            // },
            // codeSnippet: `// NeuroSync Core Algorithm
            // const neuralNetwork = {
            // layers: [784, 128, 64, 10],
            
            // predict: async (inputData) => {
            //     const normalized = normalize(inputData);
            //     const result = await tf.model.predict(normalized);
            //     return result.dataSync();
            // },
            
            // visualize: (data) => {
            //     d3.select('#chart')
            //     .selectAll('circle')
            //     .data(data)
            //     .enter()
            //     .append('circle')
            //     .attr('r', d => d.confidence * 10)
            //     .style('fill', '#8b5cf6');
            // }
            // };`
        },
        {
            id: 2,
            title: "Slaughter Comedy",
            description: "Veteran owned entertainment website that produces and promotes tailorable comedy shows for small to meium businesses and theaters.",
            tech: ["React.js", "CSS"],
            featured: false,
            featureVideo: slfeatured,
            image: "🎭",
            color: "from-indigo-600 to-violet-600",
            siteURL: 'https://slaughtercomedy.com/',
            codeURL: 'https://github.com/iamsummerflowers/slaughter-comedy',
            // demoContent: {
            //     title: "AR Shopping Experience",
            //     features: ["3D product models", "Virtual try-on", "Blockchain payments", "Spatial commerce"]
            // },
            // codeSnippet: `// AR Product Viewer
            // import { Canvas } from '@react-three/fiber';
            // import { ARButton, XR } from '@react-three/xr';

            // const ProductViewer = ({ product }) => {
            // return (
            //     <div className="ar-container">
            //     <ARButton />
            //     <Canvas>
            //         <XR>
            //         <ProductModel 
            //             url={product.model}
            //             position={[0, 0, -2]}
            //             scale={[0.5, 0.5, 0.5]}
            //         />
            //         <ambientLight intensity={0.5} />
            //         </XR>
            //     </Canvas>
            //     </div>
            // );
            // };`
        },
        {
            id: 3,
            title: "Beyond Sight Solutions",
            description: "Consulting services website that helps small to medium businesses effectively achieve their business goals and objectives.",
            tech: ["React.js", "CSS", "Tailwind"],
            featured: false,
            featureVideo: bssfeatured,
            image: "🏢",
            color: "from-violet-600 to-purple-600",
            siteURL: 'https://beyondsightsolutions.com/',
            codeURL: 'https://github.com/iamsummerflowers/BSS',
            // demoContent: {
            //     title: "Digital Audio Workstation",
            //     features: ["Multi-track recording", "Real-time collaboration", "VST plugin support", "Cloud sync"]
            // },
            // codeSnippet: `// Audio Engine Core
            // class AudioEngine {
            // constructor() {
            //     this.context = new AudioContext();
            //     this.tracks = new Map();
            // }
            
            // createTrack(id) {
            //     const track = {
            //     gainNode: this.context.createGain(),
            //     effects: [],
            //     recording: false
            //     };
                
            //     track.gainNode.connect(this.context.destination);
            //     this.tracks.set(id, track);
            //     return track;
            // }
            
            // record(trackId) {
            //     const track = this.tracks.get(trackId);
            //     navigator.mediaDevices.getUserMedia({ audio: true })
            //     .then(stream => {
            //         const recorder = new MediaRecorder(stream);
            //         track.recording = true;
            //         recorder.start();
            //     });
            // }
            // }`
        },
        {
            id: 4,
            title: "summflowersTLDR",
            description: "Professional portfolio site showcasing experience, accomplishments, and expertise.",
            tech: ["React.js", "CSS", "Tailwind"],
            featured: false,
            featureVideo: portfeatured,
            image: "👩🏿‍💻",
            color: "from-purple-600 to-pink-600",
            siteURL: 'https://summflowerstldr.com/',
            codeURL: 'http://github.com/iamsummerflowers/summflowersTLDR',
            // demoContent: {
            //     title: "Quantum-Safe Messaging",
            //     features: ["Post-quantum encryption", "Zero-knowledge architecture", "Disappearing messages", "Secure group chats"]
            // },
            // codeSnippet: `// Quantum-Resistant Encryption
            // use kyber::*;
            // use rand::rngs::OsRng;

            // pub struct QuantumChat {
            //     keypair: Keypair,
            //     sessions: HashMap<UserId, SharedSecret>,
            // }

            // impl QuantumChat {
            //     pub fn new() -> Self {
            //         let mut rng = OsRng;
            //         let keypair = keypair(&mut rng);
                    
            //         Self {
            //             keypair,
            //             sessions: HashMap::new(),
            //         }
            //     }
                
            //     pub fn encrypt_message(&self, msg: &str, user_id: UserId) -> Vec<u8> {
            //         let session = self.sessions.get(&user_id).unwrap();
            //         aes_gcm_encrypt(msg.as_bytes(), &session.key)
            //     }
            // }`
        },
            {
            id: 5,
            title: "Helping HND Marketing",
            description: "Markting consulting website that provides marketing solutions tailored to drive growth & success.",
            tech: ["React.js", "CSS", "Tailwind"],
            featured: true,
            featureVideo: hndfeatured,
            image: "📺",
            color: "from-purple-600 to-pink-600",
            siteURL: 'https://www.hhndmarketing.com/',
            codeURL: 'https://github.com/iamsummerflowers/HHND',
            // demoContent: {
            //     title: "Quantum-Safe Messaging",
            //     features: ["Post-quantum encryption", "Zero-knowledge architecture", "Disappearing messages", "Secure group chats"]
            // },
            // codeSnippet: `// Quantum-Resistant Encryption
            // use kyber::*;
            // use rand::rngs::OsRng;

            // pub struct QuantumChat {
            //     keypair: Keypair,
            //     sessions: HashMap<UserId, SharedSecret>,
            // }

            // impl QuantumChat {
            //     pub fn new() -> Self {
            //         let mut rng = OsRng;
            //         let keypair = keypair(&mut rng);
                    
            //         Self {
            //             keypair,
            //             sessions: HashMap::new(),
            //         }
            //     }
                
            //     pub fn encrypt_message(&self, msg: &str, user_id: UserId) -> Vec<u8> {
            //         let session = self.sessions.get(&user_id).unwrap();
            //         aes_gcm_encrypt(msg.as_bytes(), &session.key)
            //     }
            // }`
        }
    ];
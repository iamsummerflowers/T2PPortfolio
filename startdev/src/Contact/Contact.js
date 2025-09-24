import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function ContactForm ({ activeSection, setActiveSection }) {
    
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    // if (!validateForm()) return;
    // setIsSubmitting(true);

    emailjs.sendForm(
      'service_ygkfx7s',
      'template_d66swgn',
      form.current,
      'zFLZH29bRNDazrYni'
      ).then((result) => {
        setMessageSent(true);  
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message in error");
      });
    };

    // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // const [formSubmitted, setFormSubmitted] = useState(false);

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     setFormSubmitted(true);
    //     setTimeout(() => setFormSubmitted(false), 3000);
    //     setFormData({ name: '', email: '', message: '' });
    // };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
            <h2 
                className="text-4xl font-bold text-center mb-16 text-violet-300"
                style={{ textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }}
            >
                Let's Connect
            </h2>
            <div 
                className="rounded-2xl p-8 border"
                style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.3s ease'
                }}
            >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-violet-300 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name" 
                        name="user_name" 
                        required
                        // value={formData.name}
                        // onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-black/30 border border-violet-500/50 rounded-lg text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-violet-300 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email" 
                        name="user_email" 
                        required
                        // value={formData.email}
                        // onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-black/30 border border-violet-500/50 rounded-lg text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-violet-300 font-medium mb-2">Message</label>
                    <textarea
                        required
                        id="message" 
                        name="message"
                        rows="5"
                        // value={formData.message}
                        // onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-black/30 border border-violet-500/50 rounded-lg text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20 resize-none"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                    Send Message
                </button>
                {messageSent && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">😁</div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                    </div>
                )}
            </form>
                
            </div>
            <div className="mt-12 text-center">
                <p className="text-gray-300 mb-4">Or connect with me on</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer" className="w-fit text-violet-400 hover:text-violet-300 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/summerflowers/" target="_blank" rel="noopener noreferrer" className="w-fit text-violet-400 hover:text-violet-300 transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ContactForm;

// sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Code Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Alex Morgan</h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-8">Data Analyst & Web Development Enthusiast</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
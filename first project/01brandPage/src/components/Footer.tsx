import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 Alex Morgan. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
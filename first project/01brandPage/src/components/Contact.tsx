import React from 'react';
import { Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div ref={ref} className="max-w-4xl mx-auto text-center slide-in">
        <h2 className="text-3xl font-bold mb-8 text-purple-400">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested in collaboration or have a project in mind? Let's discuss how we can work together.
        </p>
        <a 
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Mail size={20} />
          Get in Touch
        </a>
      </div>
    </section>
  );
}
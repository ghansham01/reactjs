import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Projects() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Featured Projects</h2>
      <div ref={ref} className="grid md:grid-cols-2 gap-8 slide-in">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-purple-500/20 stagger-1">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Data Dashboard"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Sales Analytics Dashboard</h3>
            <p className="text-gray-400 mb-4">Interactive dashboard built with React and D3.js, visualizing sales data and trends.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">D3.js</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-purple-500/20 stagger-2">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="ML Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Customer Segmentation Tool</h3>
            <p className="text-gray-400 mb-4">Machine learning model for customer segmentation with web interface.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Scikit-learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
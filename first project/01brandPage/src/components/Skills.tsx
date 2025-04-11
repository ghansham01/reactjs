import React from 'react';
import { Database, Code, Brain } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Skills & Expertise</h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8 slide-in">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500/20 stagger-1">
            <div className="text-purple-400 mb-4">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Data Analysis</h3>
            <p className="text-gray-400">SQL, Python, Pandas, Tableau, Power BI</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500/20 stagger-2">
            <div className="text-purple-400 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Web Development</h3>
            <p className="text-gray-400">HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500/20 stagger-3">
            <div className="text-purple-400 mb-4">
              <Brain size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Machine Learning</h3>
            <p className="text-gray-400">Scikit-learn, TensorFlow, Statistical Analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
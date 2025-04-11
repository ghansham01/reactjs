import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gray-900 text-gray-300">
      <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">About Me</h2>
      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center slide-in">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-lg shadow-xl ring-2 ring-purple-500/20"
          />
        </div>
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As a passionate data analyst and web development enthusiast, I bridge the gap between data-driven insights and web technologies. With 3+ years of experience in data analysis and a growing expertise in web development, I create solutions that are both analytical and user-friendly.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey involves transforming complex data into actionable insights while building interactive web applications that make data accessible and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
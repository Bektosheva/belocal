import React from 'react';
import { features } from '../data/regions';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Why Choose BeLocal?</h2>
        <p className="section-subtitle text-center">
          Authentic experiences that connect you with the real Uzbekistan
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-accent-gold hover:shadow-lg transition"
            >
              <p className="text-5xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-bold text-primary-500 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
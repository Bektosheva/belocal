import React from 'react';
import { regions } from '../data/regions';

export default function Regions() {
  return (
    <section id="regions" className="py-20 bg-accent-cream">
      <div className="container">
        <h2 className="section-title text-center">Explore Our Cities</h2>
        <p className="section-subtitle text-center">
          Nine incredible Uzbek cities, each with unique local experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-r ${region.color}"><span class="text-6xl">${region.emoji}</span></div>`;
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{region.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-500">{region.name}</h3>
                    <p className="text-sm text-gray-500">{region.uzbekName}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{region.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-primary-500 mb-2 text-sm">Highlights:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {region.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i}>✓ {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="font-semibold text-primary-500">
                    👤 {region.guides} Guides
                  </span>
                  <span className="font-semibold text-accent-gold">
                    🍽️ {region.restaurants} Places
                  </span>
                </div>

                <button className="w-full btn-primary mt-4 text-sm">
                  Explore {region.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
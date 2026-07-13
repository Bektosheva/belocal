import React from 'react';
import { regions } from '../data/regions';

export default function Regions() {
  return (
    <section id="regions" className="py-20 bg-accent-cream">
      <div className="container">
        <h2 className="section-title text-center">Explore Our Cities</h2>
        <p className="section-subtitle text-center">
          Six incredible Uzbek cities, each with unique local experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className={`bg-gradient-to-r ${region.color} text-white p-8 text-center`}>
                <p className="text-6xl mb-2">{region.image}</p>
                <h3 className="text-2xl font-bold">{region.name}</h3>
                <p className="text-sm opacity-90">{region.uzbekName}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{region.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-primary-500 mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {region.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i}>✓ {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-primary-500">
                    {region.guides} Guides
                  </span>
                  <span className="font-semibold text-accent-gold">
                    {region.restaurants} Places
                  </span>
                </div>

                <button className="w-full btn-primary mt-4">
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
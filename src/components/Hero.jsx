import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
      <div className="container text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Experience Uzbekistan Like a Local
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Skip the tourist traps. Live authentic moments with certified local guides, real food, and genuine connections.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-accent-gold text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
            Explore Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-500 transition">
            Become a Guide
          </button>
        </div>
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <p className="text-4xl font-bold">6</p>
            <p className="text-gray-100">Cities</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">200+</p>
            <p className="text-gray-100">Guides</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-gray-100">Experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}
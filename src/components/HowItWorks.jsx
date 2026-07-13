import React from 'react';
import { howItWorks } from '../data/regions';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">How BeLocal Works</h2>
        <p className="section-subtitle text-center">
          Five simple steps to your authentic Uzbek adventure
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {howItWorks.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-lg p-6 text-center h-full">
                <div className="text-4xl font-bold mb-3">{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>

              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 text-accent-gold text-2xl transform -translate-y-1/2">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent-cream rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-500 mb-4">What Makes Us Different?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-accent-gold mb-2">For Tourists:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Authentic local experiences</li>
                <li>✓ Budget-friendly prices</li>
                <li>✓ Real cultural connections</li>
                <li>✓ Verified guides & content</li>
                <li>✓ Community reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-accent-gold mb-2">For Local Guides:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Earn extra income</li>
                <li>✓ Work flexible hours</li>
                <li>✓ Help tourists understand culture</li>
                <li>✓ Build your reputation</li>
                <li>✓ Community support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
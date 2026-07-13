import React from 'react';
import { pricing } from '../data/regions';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-accent-cream">
      <div className="container">
        <h2 className="section-title text-center">Transparent Pricing</h2>
        <p className="section-subtitle text-center">
          No hidden fees, no surprises - fair prices for everyone
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tourists Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-6">For Tourists</h3>
            <div className="space-y-4">
              {pricing.tourists.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-accent-gold hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg">{plan.duration}</h4>
                    <span className="text-2xl font-bold text-accent-gold">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {plan.includes.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary mt-4">Book Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* Guides Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-6">For Local Guides</h3>
            <div className="bg-white rounded-lg p-8 border-2 border-accent-gold">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Earnings Per Session
                </h4>
                <p className="text-3xl font-bold text-accent-gold mb-2">
                  {pricing.guides.commission}
                </p>
                <p className="text-gray-600 text-sm">for a 3-hour experience</p>
              </div>

              <div className="border-t-2 border-gray-200 pt-6">
                <h4 className="font-bold text-gray-800 mb-3">Additional Benefits:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">✓</span>
                    <span>{pricing.guides.bonus}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">✓</span>
                    <span>Flexible schedule - work when you want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">✓</span>
                    <span>Build your reputation and ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">✓</span>
                    <span>{pricing.guides.requirements}</span>
                  </li>
                </ul>
              </div>

              <button className="w-full btn-primary mt-6">Become a Guide</button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 text-center border-2 border-accent-maroon">
          <h3 className="text-2xl font-bold text-primary-500 mb-4">
            How We Make Money
          </h3>
          <p className="text-gray-700 mb-4">
            We take a 20,000 so'm commission from each 3-hour tourist experience. This allows us to verify content, maintain the platform, and support our community.
          </p>
          <p className="text-accent-maroon font-semibold">
            100% transparent. No hidden charges. Fair for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
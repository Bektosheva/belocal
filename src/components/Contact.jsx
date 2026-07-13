import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Authenticity?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of travelers discovering the real Uzbekistan
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button className="bg-accent-gold text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-500 transition">
            Become a Guide
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <p className="text-2xl mb-2">📧</p>
            <p className="font-semibold mb-2">Email</p>
            <p className="opacity-90">hello@belocal.uz</p>
          </div>
          <div>
            <p className="text-2xl mb-2">📱</p>
            <p className="font-semibold mb-2">Phone</p>
            <p className="opacity-90">+998 71 123 45 67</p>
          </div>
          <div>
            <p className="text-2xl mb-2">🌐</p>
            <p className="font-semibold mb-2">Follow Us</p>
            <p className="opacity-90">@BeLocalUZ</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-30">
          <p className="opacity-75">© 2024 BeLocal. Authentic Uzbekistan Experiences. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
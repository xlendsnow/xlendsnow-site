
import React from "react";
import './index.css';

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="XLendsNow" className="w-10 h-10" />
          <span className="text-xl font-bold text-blue-900">XLendsNow</span>
        </div>
        <div className="space-x-6 text-sm text-gray-700 hidden md:block">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#" className="hover:text-blue-700">Loan Options</a>
          <a href="#" className="hover:text-blue-700">FAQs</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </div>
      </nav>

      <section className="relative text-white py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}></div>
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Small Loans. Big Relief.</h1>
            <p className="text-lg lg:text-xl mb-6 max-w-xl">Apply online and get prequalified in minutes. Funding in as little as 24 hours. No fine print.</p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>✓ Loans from $300–$5,000</li>
              <li>✓ Built for Californians</li>
              <li>✓ Trusted & Transparent</li>
              <li>✓ DFPI License Pending</li>
            </ul>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Get Prequalified</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Loan Amount (e.g. $2,000)" className="w-full px-4 py-2 border rounded" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded" />
              <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-2 rounded hover:bg-blue-800 transition">Check My Loan Options</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6 text-sm mt-12">
        <p>Contact: info@xlendsnow.com | (408) 799-8500</p>
        <p className="mt-2 italic">Licensing pending DFPI approval. For preview purposes only.</p>
      </footer>
    </div>
  );
}

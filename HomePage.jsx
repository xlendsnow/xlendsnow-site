
import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
        <div className="text-xl font-bold text-blue-900">XLendsNow</div>
        <div className="space-x-6 text-sm text-gray-700 hidden md:block">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#" className="hover:text-blue-700">How It Works</a>
          <a href="#" className="hover:text-blue-700">Loan Options</a>
          <a href="#" className="hover:text-blue-700">FAQs</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-900 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Your Loan. Your Terms.</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Get fast, trusted personal loans designed for real life — without the bank stress.
        </p>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4 mt-6">
          <input type="text" placeholder="Full Name" className="px-4 py-3 rounded text-gray-900" />
          <input type="email" placeholder="Email Address" className="px-4 py-3 rounded text-gray-900" />
          <input type="text" placeholder="Loan Amount (e.g. $2,000)" className="px-4 py-3 rounded text-gray-900" />
          <input type="tel" placeholder="Phone Number" className="px-4 py-3 rounded text-gray-900" />
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-full shadow">
            Check My Loan Options
          </button>
        </form>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src="/icons/apply.svg" alt="Apply" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold text-lg mb-1">Apply in Minutes</h3>
            <p>Secure online form. No pressure. No obligation.</p>
          </div>
          <div>
            <img src="/icons/review.svg" alt="Review" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold text-lg mb-1">Get Prequalified</h3>
            <p>We’ll review your info and respond fast.</p>
          </div>
          <div>
            <img src="/icons/fund.svg" alt="Fund" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold text-lg mb-1">Receive Your Funds</h3>
            <p>Direct to your account, typically within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Loan Options</h2>
        <p className="mb-4">We offer flexible personal loans for nearly every need:</p>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Emergency Loans</h4>
            <p>Medical, car repairs, urgent needs — get cash fast.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Credit-Builder Loans</h4>
            <p>Establish or rebuild credit while borrowing safely.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Installment Loans</h4>
            <p>Predictable payments, clear terms, no surprises.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">1099 & Self-Employed</h4>
            <p>Loans available for gig workers, small business owners.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-gray-700 italic">
          <p>“I got approved in one day. Super professional.” — Erica, Hollister</p>
          <p>“Didn’t think I’d qualify. They made it happen.” — Jose, Salinas</p>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-blue-900 text-white text-center py-8 px-4 text-sm">
        <p>Contact: info@xlendsnow.com | (408) 799-8500</p>
        <p className="mt-2 italic">Licensing pending DFPI approval. For preview purposes only.</p>
      </footer>
    </div>
  );
}

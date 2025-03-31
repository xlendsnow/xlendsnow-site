
import React from "react";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#003366' }}>Welcome to XLendsNow</h1>
        <p>Your loan, your terms. Fast & trusted personal lending in California.</p>
        <button style={{ marginTop: '1rem', padding: '10px 20px', background: '#0074cc', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Check My Loan Options
        </button>
      </header>

      <section>
        <h2>How It Works</h2>
        <ol>
          <li>Apply online in minutes</li>
          <li>Get prequalified fast</li>
          <li>Receive funds direct to your account</li>
        </ol>
      </section>

      <section>
        <h2>Loan Types</h2>
        <ul>
          <li>Personal Loans</li>
          <li>Credit-Builder Loans</li>
          <li>Short-Term Installment Loans</li>
          <li>Business Loans (1099/Sole Props)</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose XLendsNow</h2>
        <ul>
          <li>Local and personal support</li>
          <li>No hidden fees</li>
          <li>Flexible underwriting</li>
          <li>Licensed and transparent</li>
        </ul>
      </section>

      <section>
        <h2>What Our Clients Say</h2>
        <blockquote>“I got approved in one day. Super professional.” – Erica, Hollister</blockquote>
        <blockquote>“I didn’t think y’all qualify. They made it happen.” – Jose, Salinas</blockquote>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#777' }}>
        <p>Contact: info@xlendsnow.com | (408) 799-8500</p>
        <p><em>For preview and planning purposes only. Licensing pending approval from DFPI.</em></p>
      </footer>
    </div>
  );
}

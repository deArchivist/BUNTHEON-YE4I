import React from 'react';
import { Link } from 'react-router-dom';
// ...existing imports...

const HomePage = () => {
  return (
    <div className="home-container">
      {/* ...existing code... */}
      
      <section className="feature-section">
        <h2 className="section-title">មុខងារសំខាន់ៗ</h2>
        
        <div className="features-grid">
          <Link to="/chat" className="feature-card">
            <div className="feature-icon bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3>AI ជំនួយការ</h3>
            <p>ទទួលបានជំនួយពី AI ក្នុងការរៀន និងដោះស្រាយបញ្ហាផ្សេងៗ</p>
          </Link>
          
          {/* ...existing feature cards... */}
        </div>
      </section>
      
      {/* ...existing code... */}
    </div>
  );
};

export default HomePage;

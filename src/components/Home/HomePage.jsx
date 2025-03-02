import React from 'react';
import { Link } from 'react-router-dom';
// ...existing imports...

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="main-title">BUNTHEON</h1>
        <p className="tagline">ជំនួយការចំណេះដឹងពី AI</p>
      </header>
      
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
          
          <Link to="/courses" className="feature-card">
            <div className="feature-icon bg-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3>មេរៀន និង វគ្គសិក្សា</h3>
            <p>មេរៀនតាមមុខវិជ្ជានីមួយៗ និងវគ្គសិក្សាផ្សេងៗ</p>
          </Link>
          
          <Link to="/exercises" className="feature-card">
            <div className="feature-icon bg-yellow-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3>លំហាត់អនុវត្តន៍</h3>
            <p>លំហាត់ដើម្បីពង្រឹងការយល់ដឹង និងជំនាញបន្ថែម</p>
          </Link>
          
          <Link to="/resources" className="feature-card">
            <div className="feature-icon bg-red-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3>ឯកសារផ្សេងៗ</h3>
            <p>ឯកសារយោង និងធនធានបន្ថែមសម្រាប់ការសិក្សា</p>
          </Link>
        </div>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">អំពីកម្មវិធី BUNTHEON</h2>
        <p className="about-text">
          BUNTHEON គឺជាកម្មវិធីជំនួយការបង្កើតឡើងដើម្បីជួយដល់ការសិក្សារបស់សិស្ស និងនិស្សិតខ្មែរ។ 
          កម្មវិធីនេះប្រើប្រាស់បច្ចេកវិទ្យា AI ដើម្បីផ្តល់នូវការជួយដល់ការសិក្សា និងដោះស្រាយបញ្ហាផ្សេងៗ 
          ក្នុងមុខវិជ្ជាវិទ្យាសាស្ត្រ គណិតវិទ្យា និងមុខវិជ្ជាផ្សេងទៀត។
        </p>
      </section>
      
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} BUNTHEON Education App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

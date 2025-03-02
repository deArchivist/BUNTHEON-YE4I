import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-container bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <header className="home-header text-center py-16 px-4 bg-gradient-to-r from-pink-100 to-pink-50">
        <h1 className="main-title text-4xl md:text-5xl font-bold text-pink-800 mb-3">BUNTHEON</h1>
        <p className="tagline text-xl md:text-2xl text-pink-600 mb-6">ជំនួយការចំណេះដឹងពី AI</p>
        <div className="max-w-md mx-auto">
          <Link to="/chat" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            ចាប់ផ្តើមប្រើប្រាស់
          </Link>
        </div>
      </header>
      
      <section className="feature-section py-16 px-4 max-w-6xl mx-auto">
        <h2 className="section-title text-3xl font-bold text-center text-pink-800 mb-12 relative">
          <span className="relative z-10">មុខងារសំខាន់ៗ</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-300 to-pink-100 transform -translate-y-2"></span>
        </h2>
        
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/chat" className="feature-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-pink-100">
            <div className="feature-icon bg-pink-100 p-3 inline-flex rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-800 mb-2">AI ជំនួយការ</h3>
            <p className="text-gray-600">ទទួលបានជំនួយពី AI ក្នុងការរៀន និងដោះស្រាយបញ្ហាផ្សេងៗ</p>
          </Link>
          
          <Link to="/courses" className="feature-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-pink-100">
            <div className="feature-icon bg-pink-100 p-3 inline-flex rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-800 mb-2">មេរៀន និង វគ្គសិក្សា</h3>
            <p className="text-gray-600">មេរៀនតាមមុខវិជ្ជានីមួយៗ និងវគ្គសិក្សាផ្សេងៗ</p>
          </Link>
          
          <Link to="/exercises" className="feature-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-pink-100">
            <div className="feature-icon bg-pink-100 p-3 inline-flex rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-800 mb-2">លំហាត់អនុវត្តន៍</h3>
            <p className="text-gray-600">លំហាត់ដើម្បីពង្រឹងការយល់ដឹង និងជំនាញបន្ថែម</p>
          </Link>
          
          <Link to="/resources" className="feature-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-pink-100">
            <div className="feature-icon bg-pink-100 p-3 inline-flex rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-800 mb-2">ឯកសារផ្សេងៗ</h3>
            <p className="text-gray-600">ឯកសារយោង និងធនធានបន្ថែមសម្រាប់ការសិក្សា</p>
          </Link>
        </div>
      </section>
      
      <section className="about-section py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-3xl font-bold text-center text-pink-800 mb-8 relative">
            <span className="relative z-10">អំពីកម្មវិធី BUNTHEON</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-300 to-pink-100 transform -translate-y-2"></span>
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
            <p className="about-text text-gray-700 leading-relaxed">
              BUNTHEON គឺជាកម្មវិធីជំនួយការបង្កើតឡើងដើម្បីជួយដល់ការសិក្សារបស់សិស្ស និងនិស្សិតខ្មែរ។ 
              កម្មវិធីនេះប្រើប្រាស់បច្ចេកវិទ្យា AI ដើម្បីផ្តល់នូវការជួយដល់ការសិក្សា និងដោះស្រាយបញ្ហាផ្សេងៗ 
              ក្នុងមុខវិជ្ជាវិទ្យាសាស្ត្រ គណិតវិទ្យា និងមុខវិជ្ជាផ្សេងទៀត។
            </p>
            
            <div className="mt-6 flex justify-center">
              <Link to="/about" className="text-pink-600 hover:text-pink-800 font-medium border-b-2 border-pink-200 hover:border-pink-600 transition duration-300">
                អានបន្ថែម
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="home-footer py-8 px-4 text-center text-gray-600 bg-pink-50 border-t border-pink-100">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">&copy; {new Date().getFullYear()} BUNTHEON Education App. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

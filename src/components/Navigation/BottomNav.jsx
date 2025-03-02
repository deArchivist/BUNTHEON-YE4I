import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center z-10">
      <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H5.625A1.875 1.875 0 013.75 19.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
          </svg>
        </div>
        <div className="label">ទំព័រដើម</div>
      </NavLink>

      <NavLink to="/prompts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v2.25h9V7.5a.75.75 0 00-.75-.75H6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="label">prompts</div>
      </NavLink>

      <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="label">ជំនួយ AI</div>
      </NavLink>

      <NavLink to="/dictionary" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
        </div>
        <div className="label">វចនានុក្រម</div>
      </NavLink>

      <NavLink to="/reminders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0117.25 2.25c.41 0 .75.336.75.75V4.5h1.5c1.03 0 1.864.83 1.865 1.85l.004 12.796c0 1.02-.834 1.85-1.855 1.85H4.495c-1.02 0-1.853-.83-1.852-1.85L2.647 6.35C2.648 5.33 3.48 4.5 4.5 4.5h1.5V3A.75.75 0 016.75 2.25zm-.75 5.25h12V6a.75.75 0 00-.75-.75h-10.5A.75.75 0 006 6v1.5zm0 3V18a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75v-7.5h-12z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="label">កិច្ចការ</div>
      </NavLink>
    </div>
  );
};

export default BottomNav;

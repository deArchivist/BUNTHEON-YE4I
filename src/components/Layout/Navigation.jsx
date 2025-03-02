import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineGlobe, HiOutlineLightBulb, HiOutlineTranslate, HiOutlineBookOpen, HiOutlineBell } from 'react-icons/hi';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: <HiOutlineGlobe className="text-xl" />, label: 'DeepSeek' },
    { to: '/prompts', icon: <HiOutlineLightBulb className="text-xl" />, label: 'Prompts' },
    { to: '/dictionary', icon: <HiOutlineTranslate className="text-xl" />, label: 'Dictionary' },
    { to: '/exam-papers', icon: <HiOutlineBookOpen className="text-xl" />, label: 'Papers' },
    { to: '/reminders', icon: <HiOutlineBell className="text-xl" />, label: 'Reminders' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-paper border-t-2 border-gray-200">
      <div className="flex justify-around items-center">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              flex flex-col items-center py-2 px-4 transition-colors
              ${isActive ? 'text-primary font-semibold' : 'text-gray-500'}
            `}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

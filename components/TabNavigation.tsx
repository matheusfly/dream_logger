
import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, DreamsIcon, ObjectivesIcon, ReportsIcon, CalendarIcon } from './icons';

const tabs = [
    { id: 'tasks', label: 'Daily Tracking', icon: <DashboardIcon className="w-5 h-5" />, path: '/' },
    { id: 'hierarchy', label: 'Hierarchy', icon: <ObjectivesIcon className="w-5 h-5" />, path: '/objectives' },
    { id: 'reports', label: 'Reports', icon: <ReportsIcon className="w-5 h-5" />, path: '/reports' },
    { id: 'calendar', label: 'Calendar', icon: <CalendarIcon className="w-5 h-5" />, path: '/calendar' }
];

const TabNavigation: React.FC = () => {
  const NavItem: React.FC<{ tab: typeof tabs[0] }> = ({ tab }) => (
    <NavLink
      to={tab.path}
      end // Match route exactly
      className={({ isActive }) =>
        `flex-1 lg:flex-none flex flex-col items-center py-3 px-2 lg:px-4 text-center border-b-4 transition-colors duration-200 ${
          isActive
            ? 'border-primary text-primary font-semibold'
            : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-primary hover:bg-primary/5'
        }`
      }
    >
      <span className="mb-1">{tab.icon}</span>
      <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
    </NavLink>
  );

  return (
    <nav className="mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around lg:justify-start lg:space-x-4">
          {tabs.map(tab => (
            <NavItem key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;

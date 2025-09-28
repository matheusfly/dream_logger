
import React from 'react';
import TabNavigation from './TabNavigation';
import WindowControls from './WindowControls';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-dark-bg text-neutral-800 dark:text-neutral-200">
      <div className="relative bg-white dark:bg-dark-card border-b border-neutral-200 dark:border-dark-border z-10">
        {/* This div is for Electron's draggable region */}
        <div className="absolute top-0 left-0 right-0 h-8" style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}></div>
        <WindowControls />
        <div className="pt-8" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
          <div className="flex items-center px-4 sm:px-6 lg:px-8 pt-4">
              <div className="bg-gradient-to-br from-primary to-accent w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Strategic Progress</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">by John Doe</p>
              </div>
          </div>
          <TabNavigation />
        </div>
      </div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppShell;
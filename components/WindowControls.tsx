
import React from 'react';
import { MinimizeIcon, MaximizeIcon, CloseIcon } from './icons';

const WindowControls: React.FC = () => {
  const handleMinimize = () => {
    // In a real Electron app: window.electronAPI.minimizeWindow();
    console.log('Minimize window');
  };

  const handleMaximize = () => {
    // In a real Electron app: window.electronAPI.maximizeWindow();
    console.log('Maximize window');
  };

  const handleClose = () => {
    // In a real Electron app: window.electronAPI.closeWindow();
    console.log('Close window');
  };

  return (
    <div className="absolute top-0 right-0 h-8 flex items-center" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
      <button onClick={handleMinimize} className="px-4 h-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="Minimize window">
        <MinimizeIcon className="w-3 h-3" />
      </button>
      <button onClick={handleMaximize} className="px-4 h-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="Maximize window">
        <MaximizeIcon className="w-3 h-3" />
      </button>
      <button onClick={handleClose} className="px-4 h-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-red-500 hover:text-white dark:hover:text-white transition-colors" aria-label="Close window">
        <CloseIcon className="w-3 h-3" />
      </button>
    </div>
  );
};

export default WindowControls;

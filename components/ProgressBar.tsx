import React from 'react';

interface ProgressBarProps {
  progress: number;
  colorClass: string;
  size?: 'sm' | 'md';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, colorClass, size = 'md' }) => (
    <div className={`w-full bg-neutral-200 dark:bg-neutral-700 rounded-full ${size === 'sm' ? 'h-1.5' : 'h-2'}`}>
        <div className={`${colorClass} ${size === 'sm' ? 'h-1.5' : 'h-2'} rounded-full`} style={{ width: `${progress}%` }}></div>
    </div>
);

export default ProgressBar;

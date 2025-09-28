
import React from 'react';
import { HealthIcon } from './icons';

const DailyHealthMetricsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
      <HealthIcon className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" />
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Health Metrics Input</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mt-1">Track your daily energy, focus, and balance here.</p>
    </div>
  );
};

export default DailyHealthMetricsSection;

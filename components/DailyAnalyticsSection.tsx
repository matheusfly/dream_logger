
import React from 'react';
import { AnalyticsIcon } from './icons';

const DailyAnalyticsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
      <AnalyticsIcon className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" />
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Daily Analytics</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mt-1">This section will provide a deep-dive analysis of your day.</p>
    </div>
  );
};

export default DailyAnalyticsSection;


import React from 'react';
import { SparklesIcon } from './icons';

const ReportFocusAreasSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <SparklesIcon className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" />
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">AI-Generated Focus Areas</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mt-1">This section will highlight key areas for improvement.</p>
    </div>
  );
};

export default ReportFocusAreasSection;

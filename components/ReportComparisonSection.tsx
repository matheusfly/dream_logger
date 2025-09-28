
import React from 'react';
import { ChartBarIcon } from './icons';

interface ReportComparisonSectionProps {
  compareWithPrevious: boolean;
}

const ReportComparisonSection: React.FC<ReportComparisonSectionProps> = ({ compareWithPrevious }) => {
  if (!compareWithPrevious) {
    return (
      <div className="text-center py-16">
        <p className="text-neutral-600 dark:text-neutral-400">Enable "Compare with previous period" in filters to see this view.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <ChartBarIcon className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" />
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Period Comparison</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mt-1">This section will compare current vs. previous period metrics.</p>
    </div>
  );
};

export default ReportComparisonSection;

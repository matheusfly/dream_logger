
import React from 'react';

const ReportActions: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-4 shadow-sm">
      <div className="flex items-center justify-end space-x-2">
        <button className="px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md transition-colors">
          Share
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors">
          Export as PDF
        </button>
      </div>
    </div>
  );
};

export default ReportActions;

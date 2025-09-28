
import React from 'react';
import { LightbulbIcon, SparklesIcon } from './icons';

const focusAreas = [
    "High effort on 'Product Launch' goal, but progress is slow. Consider breaking down tasks.",
    "Burnout risk is low, but 'Focus' dipped on Thursday. Try time-blocking.",
    "You have 3 tasks due tomorrow that are not started.",
];

const FocusAreaCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <SparklesIcon className="w-5 h-5 mr-2 text-primary"/>
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">AI Focus Areas</h3>
      </div>
      <div className="space-y-3">
        {focusAreas.map((area, index) => (
            <div key={index} className="flex items-start">
                <LightbulbIcon className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{area}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FocusAreaCard;

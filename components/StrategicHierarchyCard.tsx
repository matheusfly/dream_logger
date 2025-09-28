
import React from 'react';
import { DreamsIcon } from './icons';

const dreams = [
    { title: 'Launch new software product', progress: 45, color: 'bg-primary' },
    { title: 'Achieve financial independence', progress: 60, color: 'bg-secondary' },
    { title: 'Run a marathon', progress: 25, color: 'bg-accent' },
];

const StrategicHierarchyCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">Hierarchy Overview</h3>
      <div className="space-y-4">
        {dreams.map((dream, index) => (
            <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                    <div className="flex items-center">
                        <DreamsIcon className="w-4 h-4 mr-2 text-neutral-500" />
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">{dream.title}</span>
                    </div>
                    <span className="font-semibold">{dream.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className={`${dream.color} h-2 rounded-full`} style={{ width: `${dream.progress}%` }}></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicHierarchyCard;

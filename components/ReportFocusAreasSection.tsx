
import React from 'react';
import { SparklesIcon, LightbulbIcon } from './icons';

const focusAreas = [
    {
        title: "Improve progress on 'Product Launch Campaign'",
        description: "This goal is at 55% progress with multiple blocked tasks. It's a high-priority item that is falling behind schedule.",
        priority: 'high',
        actions: [
            'Reallocate time from lower-priority tasks to address blockers.',
            'Schedule a review meeting to adjust scope or resources.',
        ]
    },
    {
        title: 'Optimize Afternoon Productivity',
        description: 'Your task completion rate drops by an average of 30% in the afternoon compared to the morning.',
        priority: 'medium',
        actions: [
            'Schedule less demanding tasks for the afternoon.',
            'Incorporate a short break or walk before starting afternoon work.',
        ]
    }
];

const priorityStyles = {
    high: 'border-danger text-danger-800 dark:text-danger-300',
    medium: 'border-warning text-warning-800 dark:text-warning-300',
    low: 'border-primary text-primary-800 dark:text-primary-300',
};

const ReportFocusAreasSection: React.FC = () => {
  return (
    <div className="space-y-6">
        <div className="flex items-center">
            <SparklesIcon className="w-6 h-6 mr-2 text-primary"/>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">AI-Generated Focus Areas</h3>
        </div>
        <div className="space-y-4">
            {focusAreas.map((area, index) => (
                <div key={index} className={`p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border-l-4 ${priorityStyles[area.priority as keyof typeof priorityStyles]}`}>
                    <h4 className="font-bold text-neutral-800 dark:text-neutral-100">{area.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{area.description}</p>
                    <div className="mt-3">
                        <h5 className="text-sm font-semibold mb-2 flex items-center">
                            <LightbulbIcon className="w-4 h-4 mr-2 text-yellow-500" />
                            Recommended Actions
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                            {area.actions.map((action, i) => <li key={i}>{action}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ReportFocusAreasSection;
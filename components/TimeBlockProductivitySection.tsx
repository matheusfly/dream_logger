
import React from 'react';
import { CheckIcon } from './icons';

const timeBlocks = [
    {
        period: 'Morning',
        time: '8am - 12pm',
        tasksCompleted: 3,
        totalTasks: 4,
        keyAccomplishment: "Finalized Q4 budget",
        color: "border-sky-500",
    },
    {
        period: 'Afternoon',
        time: '1pm - 5pm',
        tasksCompleted: 1,
        totalTasks: 2,
        keyAccomplishment: "Onboarding call with client",
        color: "border-amber-500",
    },
    {
        period: 'Evening',
        time: '7pm - 9pm',
        tasksCompleted: 0,
        totalTasks: 1,
        keyAccomplishment: "Research analytics tools",
        color: "border-indigo-500",
    },
];

const TimeBlockProductivitySection: React.FC = () => {
    return (
        <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Time Block Productivity</h3>
            <div className="space-y-4">
                {timeBlocks.map(block => {
                    const progress = block.totalTasks > 0 ? (block.tasksCompleted / block.totalTasks) * 100 : 0;
                    return (
                        <div key={block.period} className={`p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border-l-4 ${block.color}`}>
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">{block.period}</h4>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{block.time}</p>
                                </div>
                                <div className="text-right">
                                     <p className="font-bold text-lg text-neutral-800 dark:text-neutral-100">{block.tasksCompleted}/{block.totalTasks}</p>
                                     <p className="text-xs text-neutral-500 dark:text-neutral-400">Tasks Done</p>
                                </div>
                            </div>
                            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5 mb-2">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                            <div className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                                <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                                <span>{block.keyAccomplishment}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimeBlockProductivitySection;

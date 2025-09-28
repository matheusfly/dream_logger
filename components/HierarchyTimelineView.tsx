import React from 'react';
import type { Dream, Objective, Goal } from '../types';
import { DreamsIcon, ObjectivesIcon, GoalsIcon } from './icons';
import ProgressBar from './ProgressBar';

const hierarchyData: Dream[] = [
  {
    id: 'D-001', title: 'Launch new software product', description: '',
    startDate: new Date(2025, 0, 1), deadline: new Date(2025, 11, 31),
    priority: 'high', progress: 45, objectives: [
      {
        id: 'O-001', title: 'Expand regional sales', description: '',
        startDate: new Date(2025, 0, 1), deadline: new Date(2025, 2, 31),
        priority: 'high', progress: 72.5, goals: [
          {
            id: 'M-07', title: 'Product Launch Campaign', description: '',
            startDate: new Date(2025, 0, 1), dueDate: new Date(2025, 0, 31),
            progress: 55, tasks: [],
          },
        ],
      },
      {
        id: 'O-002', title: 'Achieve Product-Market Fit', description: '',
        startDate: new Date(2025, 3, 1), deadline: new Date(2025, 5, 30),
        priority: 'high', progress: 30, goals: [],
      }
    ],
  },
];

type TimelineItem = (Dream | Objective | Goal) & { type: 'dream' | 'objective' | 'goal' };

const flattenHierarchy = (dreams: Dream[]): TimelineItem[] => {
  const items: TimelineItem[] = [];
  dreams.forEach(dream => {
    items.push({ ...dream, type: 'dream' });
    dream.objectives.forEach(objective => {
      items.push({ ...objective, type: 'objective' });
      objective.goals.forEach(goal => {
        items.push({ ...goal, type: 'goal' });
      });
    });
  });
  return items.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
};

const itemConfig = {
    dream: { icon: <DreamsIcon className="w-5 h-5 text-white" />, color: "bg-primary", borderColor: "border-primary" },
    objective: { icon: <ObjectivesIcon className="w-5 h-5 text-white" />, color: "bg-secondary", borderColor: "border-secondary" },
    goal: { icon: <GoalsIcon className="w-5 h-5 text-white" />, color: "bg-accent", borderColor: "border-accent" },
};

const HierarchyTimelineView: React.FC = () => {
    const timelineItems = flattenHierarchy(hierarchyData);

    const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
            <div className="relative wrap overflow-hidden p-4 h-full">
                <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-neutral-200 dark:bg-neutral-700 h-full"></div>
                {timelineItems.map((item, index) => {
                    const { icon, color, borderColor } = itemConfig[item.type];
                    const deadline = 'dueDate' in item ? item.dueDate : item.deadline;
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={item.id} className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                            <div className="order-1 w-5/12"></div>
                            <div className="z-10 flex items-center order-1 w-10 h-10 rounded-full shadow-xl" style={{ backgroundColor: `var(--color-${item.type === 'dream' ? 'primary' : item.type === 'objective' ? 'secondary' : 'accent'})`}}>
                                {icon}
                            </div>
                            <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-neutral-50 dark:bg-neutral-800 border-t-4 ${borderColor}`}>
                                <h3 className="font-bold text-neutral-800 dark:text-neutral-100 text-lg">{item.title}</h3>
                                <p className="text-sm leading-snug tracking-wide text-neutral-600 dark:text-neutral-400">
                                    {formatDate(item.startDate)} - {formatDate(deadline)}
                                </p>
                                <div className="mt-3">
                                    <ProgressBar progress={item.progress} colorClass={color} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HierarchyTimelineView;
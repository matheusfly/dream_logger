import React from 'react';
import type { Objective, Goal } from '../types';
import ProgressBar from './ProgressBar';
import { ObjectivesIcon, GoalsIcon } from './icons';

type KanbanItem = (Objective | Goal) & { type: 'objective' | 'goal'; status: 'todo' | 'inprogress' | 'done' };

const sampleItems: KanbanItem[] = [
    {
        id: 'O-002', title: 'Achieve Product-Market Fit', description: '',
        startDate: new Date(2025, 0, 1), deadline: new Date(2025, 5, 30),
        priority: 'high', progress: 30, goals: [], status: 'inprogress', type: 'objective'
    },
    {
        id: 'M-07', title: 'Product Launch Campaign', description: '',
        startDate: new Date(2025, 0, 1), dueDate: new Date(2025, 0, 31),
        progress: 55, tasks: [], status: 'inprogress', type: 'goal'
    },
    {
        id: 'M-08', title: 'Onboard 10 Beta Testers', description: '',
        startDate: new Date(2025, 3, 1), dueDate: new Date(2025, 3, 30),
        progress: 100, tasks: [], status: 'done', type: 'goal'
    },
    {
        id: 'O-003', title: 'Secure Seed Funding', description: '',
        startDate: new Date(2025, 6, 1), deadline: new Date(2025, 8, 30),
        priority: 'high', progress: 0, goals: [], status: 'todo', type: 'objective'
    },
];

const itemConfig = {
    objective: { icon: <ObjectivesIcon className="w-4 h-4 mr-2" />, color: "bg-secondary" },
    goal: { icon: <GoalsIcon className="w-4 h-4 mr-2" />, color: "bg-accent" },
};

const KanbanCard: React.FC<{ item: KanbanItem }> = ({ item }) => {
    const { icon, color } = itemConfig[item.type];
    return (
        <div className="bg-white dark:bg-dark-card rounded-lg border border-neutral-200 dark:border-dark-border p-4 shadow-sm mb-4">
            <h4 className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">{item.title}</h4>
            <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 my-2">
                {icon}
                <span className="capitalize">{item.type}</span>
            </div>
            <div className="flex items-center">
                <span className="text-xs font-medium mr-2">{Math.round(item.progress)}%</span>
                <ProgressBar progress={item.progress} colorClass={color} size="sm" />
            </div>
        </div>
    );
};

const KanbanColumn: React.FC<{ title: string; items: KanbanItem[] }> = ({ title, items }) => (
    <div className="flex-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg p-3">
        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-4 px-1">{title}</h3>
        <div>
            {items.map(item => <KanbanCard key={item.id} item={item} />)}
        </div>
    </div>
);

const HierarchyKanbanView: React.FC = () => {
    const columns = {
        todo: sampleItems.filter(i => i.status === 'todo'),
        inprogress: sampleItems.filter(i => i.status === 'inprogress'),
        done: sampleItems.filter(i => i.status === 'done'),
    };

    return (
        <div className="flex gap-4">
            <KanbanColumn title="To Do" items={columns.todo} />
            <KanbanColumn title="In Progress" items={columns.inprogress} />
            <KanbanColumn title="Done" items={columns.done} />
        </div>
    );
};

export default HierarchyKanbanView;
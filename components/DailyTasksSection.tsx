
import React, { useState } from 'react';
import { PlusIcon, MoreVerticalIcon } from './icons';

const initialTasks = [
    { id: 1, title: "Finalize Q4 marketing budget", priority: 'high', completed: false },
    { id: 2, title: "Review product design mockups", priority: 'high', completed: true },
    { id: 3, title: "Draft weekly progress report", priority: 'medium', completed: false },
    { id: 4, title: "Onboarding call with new client", priority: 'medium', completed: false },
    { id: 5, title: "Research new analytics tools", priority: 'low', completed: false },
];

const priorityStyles = {
    high: 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300',
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300',
};

type Filter = 'all' | 'active' | 'completed';

const DailyTasksSection: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState<Filter>('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };
    
    const FilterButton: React.FC<{filterId: Filter, children: React.ReactNode}> = ({ filterId, children }) => (
        <button
          onClick={() => setFilter(filterId)}
          className={`px-3 py-1 text-sm rounded-md ${
            filter === filterId
              ? 'bg-primary/10 text-primary font-semibold'
              : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
          }`}
        >
          {children}
        </button>
    );

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Daily Tasks</h3>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors">
                    <PlusIcon className="w-4 h-4 mr-1" />
                    Add Task
                </button>
            </div>

            <div className="flex items-center space-x-2 border-b border-neutral-200 dark:border-dark-border pb-2 mb-4">
                <FilterButton filterId="all">All</FilterButton>
                <FilterButton filterId="active">Active</FilterButton>
                <FilterButton filterId="completed">Completed</FilterButton>
            </div>
            
            <div className="space-y-2">
                {filteredTasks.map(task => (
                    <div key={task.id} className="flex items-center p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-neutral-700"
                        />
                        <div className="ml-3 flex-1">
                            <p className={`text-sm font-medium ${task.completed ? 'line-through text-neutral-500' : 'text-neutral-800 dark:text-neutral-200'}`}>{task.title}</p>
                        </div>
                        <span className={`text-xs font-medium capitalize px-2 py-0.5 rounded-full ${priorityStyles[task.priority as keyof typeof priorityStyles]}`}>{task.priority}</span>
                        <button className="ml-2 p-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200">
                            <MoreVerticalIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyTasksSection;

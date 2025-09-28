
import React from 'react';

const tasks = [
    { title: "Finalize Q4 marketing budget", due: "Today", completed: false },
    { title: "Review product design mockups", due: "Today", completed: true },
    { title: "Draft weekly progress report", due: "Tomorrow", completed: false },
    { title: "Onboarding call with new client", due: "Tomorrow", completed: false },
    { title: "Plan team offsite event", due: "Sep 18", completed: false },
];

const UpcomingTasksCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">Upcoming Tasks</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
            <div key={index} className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className={`h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary ${task.completed ? '' : 'dark:bg-neutral-700'}`}
                />
                <div className="ml-3 flex-1">
                    <p className={`text-sm font-medium ${task.completed ? 'line-through text-neutral-500' : 'text-neutral-800 dark:text-neutral-200'}`}>{task.title}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${task.due === 'Today' ? 'bg-warning-100 text-warning-800' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'}`}>{task.due}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasksCard;

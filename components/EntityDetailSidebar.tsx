
import React from 'react';
import { HierarchyEntity } from '../types';
import { CloseIcon, EditIcon, DreamsIcon, ObjectivesIcon, GoalsIcon, TasksIcon } from './icons';
import ProgressBar from './ProgressBar';

interface EntityDetailSidebarProps {
  entity: HierarchyEntity | null;
  isOpen: boolean;
  onClose: () => void;
}

const itemConfig = {
    dream: { icon: <DreamsIcon className="w-6 h-6 text-primary" />, colorClass: 'bg-primary', borderColor: 'border-primary' },
    objective: { icon: <ObjectivesIcon className="w-6 h-6 text-secondary" />, colorClass: 'bg-secondary', borderColor: 'border-secondary' },
    goal: { icon: <GoalsIcon className="w-6 h-6 text-accent" />, colorClass: 'bg-accent', borderColor: 'border-accent' },
    task: { icon: <TasksIcon className="w-6 h-6 text-neutral-500" />, colorClass: 'bg-neutral-500', borderColor: 'border-neutral-500' },
};

const DetailItem: React.FC<{ label: string; value: string | React.ReactNode }> = ({ label, value }) => (
    <div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">{label}</p>
        <div className="text-neutral-800 dark:text-neutral-100 font-semibold">{value}</div>
    </div>
);

const EntityDetailSidebar: React.FC<EntityDetailSidebarProps> = ({ entity, isOpen, onClose }) => {
  if (!entity) return null;

  const config = itemConfig[entity.type];
  const deadline = 'deadline' in entity ? entity.deadline : 'dueDate' in entity ? entity.dueDate : null;
  const startDate = 'startDate' in entity ? entity.startDate : null;
  const children = 'objectives' in entity ? entity.objectives : 'goals' in entity ? entity.goals : 'tasks' in entity ? entity.tasks : [];
  const childType = entity.type === 'dream' ? 'Objectives' : entity.type === 'objective' ? 'Goals' : 'Tasks';

  return (
    <div className={`fixed top-0 right-0 h-full bg-white dark:bg-dark-card border-l border-neutral-200 dark:border-dark-border shadow-2xl transition-transform duration-300 ease-in-out z-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{width: '400px'}}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-dark-border flex-shrink-0">
          <div className="flex items-center">
              {config.icon}
              <h2 className="text-lg font-bold ml-2 capitalize">{entity.type} Details</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl font-bold mb-2 ${config.borderColor.replace('border-', 'text-')}`}>{entity.title}</h3>
              <button className="flex items-center text-sm text-primary hover:underline">
                  <EditIcon className="w-4 h-4 mr-1"/> Edit
              </button>
            </div>
            {'description' in entity && <p className="text-neutral-600 dark:text-neutral-400 mb-6">{entity.description}</p>}

            <div className="space-y-4 mb-6">
                <DetailItem label="Progress" value={<ProgressBar progress={entity.progress} colorClass={config.colorClass} />} />
                <div className="grid grid-cols-2 gap-4">
                    {startDate && <DetailItem label="Start Date" value={startDate.toLocaleDateString()} />}
                    {deadline && <DetailItem label="Deadline" value={deadline.toLocaleDateString()} />}
                    {'priority' in entity && <DetailItem label="Priority" value={<span className="capitalize">{entity.priority}</span>} />}
                    <DetailItem label="Status" value={entity.progress === 100 ? "Completed" : "In Progress"} />
                </div>
            </div>

            {/* Children */}
            {children.length > 0 && (
                <div>
                    <h4 className="font-semibold mb-2">{childType} ({children.length})</h4>
                    <div className="space-y-2">
                        {children.map((child: any) => (
                             <div key={child.id} className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg">
                                <p className="font-semibold text-sm">{child.title}</p>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs text-neutral-500">{child.progress}% Complete</span>
                                    <div className="w-1/2">
                                        <ProgressBar progress={child.progress} colorClass={config.colorClass} size="sm" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default EntityDetailSidebar;
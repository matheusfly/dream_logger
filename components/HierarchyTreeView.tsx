import React, { useState } from 'react';
import type { Dream, Objective, Goal, Task, HierarchyEntity } from '../types';
import { DreamsIcon, ObjectivesIcon, GoalsIcon, TasksIcon, ChevronDownIcon, ChevronRightIcon, PlusIcon } from './icons';
import ProgressBar from './ProgressBar';

const hierarchyData: Dream[] = [
  {
    id: 'D-001',
    title: 'Launch new software product',
    description: 'Develop and launch a new productivity software product',
    startDate: new Date(2025, 0, 1),
    deadline: new Date(2025, 11, 31),
    priority: 'high',
    progress: 45,
    objectives: [
      {
        id: 'O-001',
        title: 'Expand regional sales',
        description: 'Increase market presence in the Northeast region',
        startDate: new Date(2025, 0, 1),
        deadline: new Date(2024, 2, 31), // Overdue
        priority: 'high',
        progress: 72.5,
        goals: [
          {
            id: 'M-07',
            title: 'Product Launch Campaign',
            description: 'Execute marketing campaign for product launch',
            startDate: new Date(2025, 0, 1),
            dueDate: new Date(2025, 0, 31),
            progress: 55,
            tasks: [
              { id: 'T-001', title: 'Create marketing materials', progress: 100 },
              { id: 'T-002', title: 'Set up social media accounts', progress: 100 },
              { id: 'T-003', title: 'Develop email campaign', progress: 75 },
            ],
          },
        ],
      },
      {
        id: 'O-002',
        title: 'Achieve Product-Market Fit',
        description: 'Ensure the product meets strong market demand.',
        startDate: new Date(2025, 0, 1),
        deadline: new Date(2025, 5, 30),
        priority: 'high',
        progress: 30,
        goals: [],
      }
    ],
  },
];

const isOverdue = (deadline: Date, progress: number) => {
    return new Date() > deadline && progress < 100;
};

const TreeItem: React.FC<{ 
    level: number;
    title: string;
    description?: string;
    progress: number;
    deadline?: Date;
    icon: React.ReactNode;
    colorClass: string;
    isExpanded: boolean;
    hasChildren: boolean;
    onToggle: () => void;
    onSelect: () => void;
    onAdd: () => void;
    children?: React.ReactNode;
}> = ({ level, title, description, progress, deadline, icon, colorClass, isExpanded, hasChildren, onToggle, onSelect, onAdd, children }) => {
    const overdue = deadline ? isOverdue(deadline, progress) : false;

    return (
        <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="absolute left-0 top-6 h-px w-4 bg-neutral-200 dark:bg-neutral-700"></div>
            <div 
                className="flex items-center py-2 group"
                onClick={() => { onSelect(); }}
            >
                <div className="flex items-center flex-1 cursor-pointer" onClick={(e) => { e.stopPropagation(); onSelect(); }}>
                    <span className="mr-2 text-neutral-500">{icon}</span>
                    <div className="flex-1">
                        <div className="flex items-center">
                            {overdue && <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>}
                            <p className="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary">{title}</p>
                        </div>
                        {description && <p className="text-xs text-neutral-500 dark:text-neutral-400">{description}</p>}
                    </div>
                </div>
                <div className="flex items-center w-32 ml-4">
                    <div className="flex-1 mr-2">
                       <ProgressBar progress={progress} colorClass={colorClass} />
                    </div>
                    <span className="text-sm font-medium w-8 text-right">{Math.round(progress)}%</span>
                </div>
                <div className="w-16 flex items-center justify-center">
                    <button onClick={(e) => { e.stopPropagation(); onAdd(); }} className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                        <PlusIcon className="w-4 h-4" />
                    </button>
                    {hasChildren && (
                        <div className="w-8 text-center cursor-pointer" onClick={(e) => { e.stopPropagation(); onToggle(); }}>
                            {isExpanded ? <ChevronDownIcon className="w-4 h-4 mx-auto" /> : <ChevronRightIcon className="w-4 h-4 mx-auto" />}
                        </div>
                    )}
                </div>
            </div>
            {isExpanded && <div className="mt-1">{children}</div>}
        </div>
    );
};

interface HierarchyTreeViewProps {
  onSelectEntity: (entity: HierarchyEntity) => void;
}

const HierarchyTreeView: React.FC<HierarchyTreeViewProps> = ({ onSelectEntity }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({ 'D-001': true, 'O-001': true });

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const handleAdd = (type: string, parentId: string) => {
    alert(`Add new ${type} under ${parentId}`);
  };

  const renderTasks = (tasks: Task[]) => tasks.map(task => (
    <div key={task.id} className="relative pl-6 cursor-pointer group" onClick={() => onSelectEntity({ ...task, type: 'task' })}>
        <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="absolute left-0 top-4 h-px w-4 bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="flex items-center py-1.5">
            <TasksIcon className="w-4 h-4 mr-2 text-neutral-500" />
            <p className="flex-1 text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-primary">{task.title}</p>
            <div className="flex items-center w-32 ml-4">
                <div className="flex-1 mr-2">
                    <ProgressBar progress={task.progress} colorClass="bg-neutral-400" size="sm" />
                </div>
                <span className="text-xs font-medium w-8 text-right">{task.progress}%</span>
            </div>
            <div className="w-16"></div>
        </div>
    </div>
  ));

  const renderGoals = (goals: Goal[]) => goals.map(goal => (
    <TreeItem
      key={goal.id}
      level={2}
      title={goal.title}
      description={goal.description}
      progress={goal.progress}
      deadline={goal.dueDate}
      icon={<GoalsIcon className="w-5 h-5 text-accent" />}
      colorClass="bg-accent"
      isExpanded={!!expandedItems[goal.id]}
      hasChildren={goal.tasks.length > 0}
      onToggle={() => toggleExpand(goal.id)}
      onSelect={() => onSelectEntity({ ...goal, type: 'goal' })}
      onAdd={() => handleAdd('Task', goal.id)}
    >
      {renderTasks(goal.tasks)}
    </TreeItem>
  ));
  
  const renderObjectives = (objectives: Objective[]) => objectives.map(obj => (
    <TreeItem
      key={obj.id}
      level={1}
      title={obj.title}
      description={obj.description}
      progress={obj.progress}
      deadline={obj.deadline}
      icon={<ObjectivesIcon className="w-5 h-5 text-secondary" />}
      colorClass="bg-secondary"
      isExpanded={!!expandedItems[obj.id]}
      hasChildren={obj.goals.length > 0}
      onToggle={() => toggleExpand(obj.id)}
      onSelect={() => onSelectEntity({ ...obj, type: 'objective' })}
      onAdd={() => handleAdd('Goal', obj.id)}
    >
      {renderGoals(obj.goals)}
    </TreeItem>
  ));
  
  const renderDreams = (dreams: Dream[]) => dreams.map(dream => (
     <TreeItem
      key={dream.id}
      level={0}
      title={dream.title}
      description={dream.description}
      progress={dream.progress}
      deadline={dream.deadline}
      icon={<DreamsIcon className="w-5 h-5 text-primary" />}
      colorClass="bg-primary"
      isExpanded={!!expandedItems[dream.id]}
      hasChildren={dream.objectives.length > 0}
      onToggle={() => toggleExpand(dream.id)}
      onSelect={() => onSelectEntity({ ...dream, type: 'dream' })}
      onAdd={() => handleAdd('Objective', dream.id)}
    >
      {renderObjectives(dream.objectives)}
    </TreeItem>
  ));

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-4 shadow-sm">
      {renderDreams(hierarchyData)}
    </div>
  );
};

export default HierarchyTreeView;
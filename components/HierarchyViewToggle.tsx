
import React from 'react';
import { ObjectivesIcon, TimelineIcon, KanbanIcon } from './icons';

type ViewMode = 'tree' | 'timeline' | 'kanban';

interface HierarchyViewToggleProps {
  currentMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const viewOptions: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
  { id: 'tree', label: 'Tree', icon: <ObjectivesIcon className="w-4 h-4 mr-2" /> },
  { id: 'timeline', label: 'Timeline', icon: <TimelineIcon className="w-4 h-4 mr-2" /> },
  { id: 'kanban', label: 'Kanban', icon: <KanbanIcon className="w-4 h-4 mr-2" /> },
];

const HierarchyViewToggle: React.FC<HierarchyViewToggleProps> = ({ currentMode, onChange }) => {
  return (
    <div className="flex items-center p-1 space-x-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
      {viewOptions.map(option => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`flex items-center px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
            currentMode === option.id
              ? 'bg-white dark:bg-neutral-700 text-primary shadow-sm'
              : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100'
          }`}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default HierarchyViewToggle;

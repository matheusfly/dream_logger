
import React, { useState } from 'react';
import { PlusIcon, ObjectivesIcon, TimelineIcon, KanbanIcon, ReportsIcon } from './icons';
import HierarchyTreeView from './HierarchyTreeView';
import HierarchyTimelineView from './HierarchyTimelineView';
import HierarchyKanbanView from './HierarchyKanbanView';
import HierarchyProgressView from './HierarchyProgressView';
import EntityDetailSidebar from './EntityDetailSidebar';
import { HierarchyEntity } from '../types';

type View = 'tree' | 'timeline' | 'kanban' | 'progress';

const StrategicHierarchySections: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('tree');
  const [selectedEntity, setSelectedEntity] = useState<HierarchyEntity | null>(null);

  const handleNewDream = () => {
    alert('Creating a new Dream...');
  };

  const views: { id: View; label: string; icon: React.ReactNode }[] = [
    { id: 'tree', label: 'Tree', icon: <ObjectivesIcon className="w-5 h-5" /> },
    { id: 'timeline', label: 'Timeline', icon: <TimelineIcon className="w-5 h-5" /> },
    { id: 'kanban', label: 'Kanban', icon: <KanbanIcon className="w-5 h-5" /> },
    { id: 'progress', label: 'Progress', icon: <ReportsIcon className="w-5 h-5" /> }
  ];

  return (
    <div className="flex gap-6">
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">Strategic Hierarchy</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              View and manage your strategic hierarchy from Dreams to Tasks.
            </p>
          </div>
          <button 
            onClick={handleNewDream}
            className="mt-2 sm:mt-0 flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow">
            <PlusIcon className="w-4 h-4 mr-2" />
            New Dream
          </button>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-2 shadow-sm">
          <div className="flex flex-wrap items-center">
            {views.map(view => (
              <button
                key={view.id}
                onClick={() => setCurrentView(view.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === view.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {view.icon}
                <span className="ml-2">{view.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="hierarchy-views">
          {currentView === 'tree' && <HierarchyTreeView onSelectEntity={setSelectedEntity} />}
          {currentView === 'timeline' && <HierarchyTimelineView />}
          {currentView === 'kanban' && <HierarchyKanbanView />}
          {currentView === 'progress' && <HierarchyProgressView />}
        </div>
      </div>
      <EntityDetailSidebar
        entity={selectedEntity}
        isOpen={!!selectedEntity}
        onClose={() => setSelectedEntity(null)}
      />
    </div>
  );
};

export default StrategicHierarchySections;
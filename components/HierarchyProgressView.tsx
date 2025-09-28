
import React from 'react';
import HierarchyTreeView from './HierarchyTreeView';
import { HierarchyEntity } from '../types';

const HierarchyProgressView: React.FC = () => {

    const [selectedEntity, setSelectedEntity] = React.useState<HierarchyEntity | null>(null);

    return (
        <div className="space-y-4">
            <div className="progress-summary p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg. Dream Progress</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-secondary">64%</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg. Objective Progress</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-accent">55%</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg. Goal Progress</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">92%</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg. Task Progress</div>
                </div>
                </div>
            </div>

            <HierarchyTreeView onSelectEntity={setSelectedEntity} />

            <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Progress Legend</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                <div className="flex items-center text-sm"><div className="w-3 h-3 bg-success rounded-sm mr-2"></div><span>70%+ (On Track)</span></div>
                <div className="flex items-center text-sm"><div className="w-3 h-3 bg-warning rounded-sm mr-2"></div><span>50-69% (Needs Attention)</span></div>
                <div className="flex items-center text-sm"><div className="w-3 h-3 bg-danger rounded-sm mr-2"></div><span>Below 50% (At Risk)</span></div>
                </div>
            </div>
        </div>
    );
};

export default HierarchyProgressView;

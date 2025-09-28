
import React from 'react';
import { TrendUpIcon, AlertIcon } from './icons';
import ProgressBar from './ProgressBar';

const summaryData = {
    totalEntities: 15,
    entitiesBelowThreshold: 3,
    averageProgress: 68.4,
    averageHealth: 73.2,
    weekSentiment: 0.05,
    entities: [
        { type: 'Objective', id: 'O-001', title: 'Expand regional sales', progress: 72.5, health: 77.8, status: 'On Track', statusColor: 'bg-success-100 text-success-800' },
        { type: 'Goal', id: 'M-07', title: 'Product Launch Campaign', progress: 55.0, health: 59.0, status: 'Needs Attention', statusColor: 'bg-warning-100 text-warning-800' },
        { type: 'Goal', id: 'M-08', title: 'Team Training Program', progress: 68.3, health: 67.5, status: 'On Track', statusColor: 'bg-success-100 text-success-800' },
    ]
};

const ReportSummarySection: React.FC = () => {

  const getSentimentIndicator = () => {
    if (summaryData.weekSentiment > 0.3) return { emoji: '😊', text: 'Positive', color: 'text-success' };
    if (summaryData.weekSentiment > -0.3) return { emoji: '😐', text: 'Neutral', color: 'text-yellow-500' };
    return { emoji: '😔', text: 'Negative', color: 'text-danger' };
  };

  const sentiment = getSentimentIndicator();

  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="metric-card bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg"><div className="text-sm text-neutral-600 dark:text-neutral-400">Total Entities</div><div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-1">{summaryData.totalEntities}</div></div>
                <div className="metric-card bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg"><div className="text-sm text-neutral-600 dark:text-neutral-400">Below Threshold</div><div className="text-2xl font-bold text-danger mt-1">{summaryData.entitiesBelowThreshold}</div></div>
                <div className="metric-card bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg"><div className="text-sm text-neutral-600 dark:text-neutral-400">Avg Progress</div><div className="text-2xl font-bold text-primary mt-1">{summaryData.averageProgress}%</div></div>
                <div className="metric-card bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg"><div className="text-sm text-neutral-600 dark:text-neutral-400">Avg Health</div><div className="text-2xl font-bold text-secondary mt-1">{summaryData.averageHealth}</div></div>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 flex items-center"><AlertIcon className="w-5 h-5 mr-2 text-warning" /> Key Insights</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Average progress of <span className="font-bold">{summaryData.averageProgress}%</span> indicates moderate execution. <span className="font-bold text-danger">{summaryData.entitiesBelowThreshold} entities</span> are below the 60% progress threshold, requiring focused attention.</p>
            </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Entity Performance Overview</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="text-left text-neutral-600 dark:text-neutral-400">
                    <tr>
                        <th className="p-2">Entity</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Progress</th>
                        <th className="p-2">Health</th>
                        <th className="p-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {summaryData.entities.map(e => (
                        <tr key={e.id} className="border-t border-neutral-200 dark:border-dark-border hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                            <td className="p-2 font-medium">{e.type}</td>
                            <td className="p-2">{e.title}</td>
                            <td className="p-2"><ProgressBar progress={e.progress} colorClass={e.progress > 70 ? 'bg-primary' : e.progress > 50 ? 'bg-secondary' : 'bg-danger'} /></td>
                            <td className="p-2 font-semibold">{e.health}</td>
                            <td className="p-2"><span className={`px-2 py-1 text-xs font-medium rounded-full ${e.statusColor}`}>{e.status}</span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default ReportSummarySection;

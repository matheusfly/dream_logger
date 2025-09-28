
import React from 'react';
import { CheckIcon, StrategicIcon, WarningIcon } from './icons';

const DailyProgressCard: React.FC = () => {
  const dailyData = {
    totalTasks: 5,
    completedTasks: 3,
    strategicTasks: 3,
    completedStrategic: 2,
    effortHours: 6.5,
    blockedTasks: 1,
    healthScore: 72.5,
    sentiment: 0.45,
    focusAreas: [
      "Resolve blocked tasks first thing tomorrow",
      "Prioritize strategic tasks in morning hours",
      "Begin day with strategic alignment questions"
    ]
  };

  const completionRate = dailyData.totalTasks > 0 ? (dailyData.completedTasks / dailyData.totalTasks) * 100 : 0;
  const strategicCompletionRate = dailyData.strategicTasks > 0 ? (dailyData.completedStrategic / dailyData.strategicTasks) * 100 : 0;

  const healthColor = dailyData.healthScore >= 70 ? 'bg-success-100 text-success-800' :
                      dailyData.healthScore >= 50 ? 'bg-warning-100 text-warning-800' :
                      'bg-danger-100 text-danger-800';
  
  const sentimentStatus = dailyData.sentiment > 0.3 ? { text: 'Positive', color: 'bg-success' } :
                          dailyData.sentiment > -0.3 ? { text: 'Neutral', color: 'bg-yellow-400' } :
                          { text: 'Negative', color: 'bg-danger' };

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Daily Progress</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${healthColor}`}>
          Health: {dailyData.healthScore}/100
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span className="text-neutral-600 dark:text-neutral-400">Task Completion</span>
              <span className="font-semibold">{Math.round(completionRate)}%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${completionRate}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <StrategicIcon className="w-4 h-4 mr-2 text-secondary" />
                <span>Strategic Tasks</span>
              </div>
              <span className="font-semibold">{Math.round(strategicCompletionRate)}%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full" style={{ width: `${strategicCompletionRate}%` }}></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{dailyData.completedTasks}</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Completed</div>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{dailyData.effortHours}</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Hours</div>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{dailyData.blockedTasks}</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Blocked</div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
          <div className="flex items-center mb-4">
            <div className={`w-3 h-3 rounded-full mr-2 ${sentimentStatus.color}`}></div>
            <span className="font-medium">{sentimentStatus.text} Day</span>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center text-sm">
              <CheckIcon className="w-4 h-4 mr-2 text-success" /> Key Accomplishments
            </h4>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1 text-sm">
              <li>Completed documentation for new feature</li>
              <li>Resolved API integration issues</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center">
          <WarningIcon className="w-4 h-4 mr-2 text-warning" /> Focus Areas for Tomorrow
        </h4>
        <ol className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 space-y-1 text-sm">
          {dailyData.focusAreas.map((area, index) => <li key={index}>{area}</li>)}
        </ol>
      </div>
    </div>
  );
};

export default DailyProgressCard;

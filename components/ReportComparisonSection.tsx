
import React from 'react';
import { TrendUpIcon, TrendDownIcon } from './icons';

interface ReportComparisonSectionProps {
  compareWithPrevious: boolean;
}

const currentPeriod = { completionRate: 64.6, strategicRate: 65.8, healthScore: 73.2, tasksDone: 28 };
const previousPeriod = { completionRate: 62.1, strategicRate: 63.2, healthScore: 70.5, tasksDone: 25 };

const ComparisonCard: React.FC<{
    label: string;
    current: number;
    previous: number;
    unit: string;
}> = ({ label, current, previous, unit }) => {
    const change = current - previous;
    const isIncrease = change >= 0;

    return (
        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg">
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{label}</p>
            <div className="flex justify-between items-baseline mt-2">
                <div>
                    <p className="text-xs text-neutral-500">Current</p>
                    <p className="text-2xl font-bold">{current.toFixed(1)}{unit}</p>
                </div>
                <div>
                    <p className="text-xs text-neutral-500 text-right">Previous</p>
                    <p className="text-lg font-semibold text-neutral-500">{previous.toFixed(1)}{unit}</p>
                </div>
            </div>
            <div className={`mt-3 flex items-center text-sm font-semibold ${isIncrease ? 'text-success' : 'text-danger'}`}>
                {isIncrease ? <TrendUpIcon className="w-4 h-4 mr-1" /> : <TrendDownIcon className="w-4 h-4 mr-1" />}
                <span>{change.toFixed(1)}{unit} ({((change / previous) * 100).toFixed(1)}%)</span>
            </div>
        </div>
    );
}

const ReportComparisonSection: React.FC<ReportComparisonSectionProps> = ({ compareWithPrevious }) => {
  if (!compareWithPrevious) {
    return (
      <div className="text-center py-16">
        <p className="text-neutral-600 dark:text-neutral-400">Enable "Compare with previous period" in filters to see this view.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Period Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ComparisonCard label="Completion Rate" current={currentPeriod.completionRate} previous={previousPeriod.completionRate} unit="%" />
            <ComparisonCard label="Strategic Rate" current={currentPeriod.strategicRate} previous={previousPeriod.strategicRate} unit="%" />
            <ComparisonCard label="Health Score" current={currentPeriod.healthScore} previous={previousPeriod.healthScore} unit="" />
            <ComparisonCard label="Tasks Done" current={currentPeriod.tasksDone} previous={previousPeriod.tasksDone} unit="" />
        </div>
    </div>
  );
};

export default ReportComparisonSection;

import React from 'react';
import WeeklyReportView from './WeeklyReportView';

interface ReportVisualizationProps {
  type: string;
  dateRange: { start: Date; end: Date };
  compareWithPrevious: boolean;
}

function getReportTitle(type: string): string {
  switch (type) {
    case 'daily': return 'Daily Report';
    case 'weekly': return 'Weekly Report';
    case 'monthly': return 'Monthly Report';
    case 'quarterly': return 'Quarterly Report';
    case 'cycle': return '45-Day Cycle Report (Teste de Fogo)';
    default: return 'Report';
  }
}

function formatDateRange(dateRange: { start: Date; end: Date }): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const startDate = dateRange.start.toLocaleDateString('en-US', options);
  const endDate = dateRange.end.toLocaleDateString('en-US', options);
  return `${startDate} → ${endDate}`;
}

const PlaceholderReportView: React.FC<{type: string}> = ({ type }) => (
    <div className="text-center py-16">
        <p className="text-neutral-600 dark:text-neutral-400">Visualization for <span className="font-semibold capitalize">{type}</span> report would be displayed here.</p>
        <div className="mt-4 text-4xl animate-pulse">📈</div>
    </div>
);


const ReportVisualization: React.FC<ReportVisualizationProps> = ({ type, dateRange, compareWithPrevious }) => {
  const renderReport = () => {
    switch(type) {
        case 'weekly':
            return <WeeklyReportView dateRange={dateRange} compareWithPrevious={compareWithPrevious} />;
        case 'daily':
        case 'monthly':
        case 'quarterly':
        case 'cycle':
            return <PlaceholderReportView type={type} />;
        default:
            return <PlaceholderReportView type="selected" />;
    }
  }

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm min-h-[400px]">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{getReportTitle(type)}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDateRange(dateRange)} {compareWithPrevious && '• Comparing with previous period'}
        </p>
      </div>
      
      {renderReport()}
    </div>
  );
};

export default ReportVisualization;

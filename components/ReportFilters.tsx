
import React from 'react';

interface ReportFiltersProps {
  reportType: string;
  onReportTypeChange: (type: string) => void;
  dateRange: { start: Date; end: Date };
  onDateRangeChange: (range: { start: Date; end: Date }) => void;
  compareWithPrevious: boolean;
  onCompareToggle: (value: boolean) => void;
}

const reportTypes = ['daily', 'weekly', 'monthly', 'quarterly', 'cycle'];

const ReportFilters: React.FC<ReportFiltersProps> = ({
  reportType,
  onReportTypeChange,
  compareWithPrevious,
  onCompareToggle
}) => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Report Type:</span>
          {reportTypes.map(type => (
            <button
              key={type}
              onClick={() => onReportTypeChange(type)}
              className={`px-3 py-1 text-sm rounded-md capitalize transition-colors ${
                reportType === type
                  ? 'bg-primary text-white font-semibold'
                  : 'bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="compare"
            checked={compareWithPrevious}
            onChange={e => onCompareToggle(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="compare" className="ml-2 block text-sm text-neutral-900 dark:text-neutral-200">
            Compare with previous period
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReportFilters;

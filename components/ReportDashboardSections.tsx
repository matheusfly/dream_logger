
import React, { useState } from 'react';
import { ChartBarIcon, ChartLineIcon, ChartPieIcon, CalendarIcon, DownloadIcon, ShareIcon } from './icons';
import ReportFilters from './ReportFilters';
import ReportSummarySection from './ReportSummarySection';
import ReportTrendsSection from './ReportTrendsSection';
import ReportBreakdownSection from './ReportBreakdownSection';
import ReportFocusAreasSection from './ReportFocusAreasSection';
import ReportComparisonSection from './ReportComparisonSection';

const ReportDashboardSections: React.FC = () => {
  const [reportType, setReportType] = useState('weekly');
  const [dateRange, setDateRange] = useState({
    start: new Date(2025, 8, 1),
    end: new Date(2025, 8, 14)
  });
  const [compareWithPrevious, setCompareWithPrevious] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');
  
  const sections = [
    { id: 'summary', label: 'Summary', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'trends', label: 'Trends', icon: <ChartLineIcon className="w-5 h-5" /> },
    { id: 'breakdown', label: 'Breakdown', icon: <ChartPieIcon className="w-5 h-5" /> },
    { id: 'focus', label: 'Focus Areas', icon: <CalendarIcon className="w-5 h-5" /> },
    { id: 'comparison', label: 'Comparison', icon: <ChartBarIcon className="w-5 h-5" /> }
  ];

  return (
    <div className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">Reports</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          View and analyze your progress across different timeframes.
        </p>
      </div>
      
      <ReportFilters
        reportType={reportType}
        onReportTypeChange={setReportType}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        compareWithPrevious={compareWithPrevious}
        onCompareToggle={setCompareWithPrevious}
      />
      
      <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-2 shadow-sm">
        <div className="flex flex-wrap items-center">
           {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="report-content bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
        {activeSection === 'summary' && <ReportSummarySection />}
        {activeSection === 'trends' && <ReportTrendsSection />}
        {activeSection === 'breakdown' && <ReportBreakdownSection />}
        {activeSection === 'focus' && <ReportFocusAreasSection />}
        {activeSection === 'comparison' && <ReportComparisonSection compareWithPrevious={compareWithPrevious} />}
      </div>
      
      <div className="flex justify-end space-x-2">
        <button className="flex items-center px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md transition-colors">
          <ShareIcon className="w-4 h-4 mr-2" />
          Share
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors">
          <DownloadIcon className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportDashboardSections;

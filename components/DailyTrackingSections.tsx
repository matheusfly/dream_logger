
import React, { useState } from 'react';
import { ChecklistIcon, NarrativeIcon, TimeIcon, HealthIcon, AnalyticsIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import DailyTasksSection from './DailyTasksSection';
import NarrativeInputSection from './NarrativeInputSection';
import TimeBlockProductivitySection from './TimeBlockProductivitySection';
import DailyHealthMetricsSection from './DailyHealthMetricsSection';
import DailyAnalyticsSection from './DailyAnalyticsSection';

interface DailyTrackingSectionsProps {
  date: Date;
}

function getDayType(date: Date) {
  const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) return 'workday';
  if (dayOfWeek === 6) return 'analytical';
  return 'review';
}

const DailyTrackingSections: React.FC<DailyTrackingSectionsProps> = ({ date }) => {
  const [activeSection, setActiveSection] = useState('tasks');
  const [currentDate, setCurrentDate] = useState(date);

  const handleDateChange = (days: number) => {
    setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    });
  };

  const sections = [
    { id: 'tasks', label: 'Tasks', icon: <ChecklistIcon className="w-5 h-5" />, badge: 3 },
    { id: 'narrative', label: 'Narrative', icon: <NarrativeIcon className="w-5 h-5" />, badge: null },
    { id: 'time', label: 'Time', icon: <TimeIcon className="w-5 h-5" />, badge: null },
    { id: 'health', label: 'Health', icon: <HealthIcon className="w-5 h-5" />, badge: null },
    { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon className="w-5 h-5" />, badge: null }
  ];

  const dayType = getDayType(currentDate);
  const dayTypeInfo = {
    workday: { text: 'Workday', style: 'bg-primary-50 text-primary-800' },
    analytical: { text: 'Analytical Day', style: 'bg-secondary-100 text-secondary-800' },
    review: { text: 'Review Day', style: 'bg-accent-100 text-accent-800' },
  }[dayType];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center">
            <button onClick={() => handleDateChange(-1)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
                <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mx-2 text-center">
                {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </h2>
            <button onClick={() => handleDateChange(1)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
                <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-center sm:text-left ml-10">
            {currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric' })}
          </p>
        </div>
        <span className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-sm font-medium ${dayTypeInfo.style}`}>
          {dayTypeInfo.text}
        </span>
      </div>

      <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-2 shadow-sm">
        <div className="flex flex-wrap items-center">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                activeSection === section.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {section.icon}
              <span className="ml-2">{section.label}</span>
              {section.badge && (
                <span className="ml-2 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {section.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeSection === 'tasks' && <DailyTasksSection />}
        {activeSection === 'narrative' && <NarrativeInputSection date={currentDate} />}
        {activeSection === 'time' && <TimeBlockProductivitySection />}
        {activeSection === 'health' && <DailyHealthMetricsSection />}
        {activeSection === 'analytics' && <DailyAnalyticsSection />}
      </div>
    </div>
  );
};

export default DailyTrackingSections;
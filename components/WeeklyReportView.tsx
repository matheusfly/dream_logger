
import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface WeeklyReportViewProps {
  dateRange: { start: Date; end: Date };
  compareWithPrevious: boolean;
}

const data = [
  { name: 'Mon', completed: 4, created: 5 },
  { name: 'Tue', completed: 3, created: 4 },
  { name: 'Wed', completed: 6, created: 6 },
  { name: 'Thu', completed: 2, created: 3 },
  { name: 'Fri', completed: 5, created: 5 },
  { name: 'Sat', completed: 1, created: 2 },
  { name: 'Sun', completed: 0, created: 0 },
];

const StatCard: React.FC<{ label: string; value: string; change?: string; changeType?: 'increase' | 'decrease' }> = ({ label, value, change, changeType }) => (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{value}</div>
          {change && (
            <span className={`text-sm font-semibold ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
              {changeType === 'increase' ? '↑' : '↓'} {change}
            </span>
          )}
        </div>
    </div>
);

const WeeklyReportView: React.FC<WeeklyReportViewProps> = ({ compareWithPrevious }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Tasks Done" value="28" change={compareWithPrevious ? "12%" : undefined} changeType="increase"/>
        <StatCard label="Productivity" value="82%" change={compareWithPrevious ? "3%" : undefined} changeType="decrease"/>
        <StatCard label="Focus Hours" value="31.5" change={compareWithPrevious ? "5.2h" : undefined} changeType="increase"/>
        <StatCard label="Strategic %" value="65%" change={compareWithPrevious ? "8%" : undefined} changeType="increase"/>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-300">Task Throughput</h4>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
              <XAxis dataKey="name" tick={{ fill: '#6c757d' }} />
              <YAxis tick={{ fill: '#6c757d' }}/>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 30, 30, 0.8)',
                  borderColor: '#3c3c3c',
                  color: '#f8f9fa'
                }}
              />
              <Legend />
              <Bar dataKey="completed" fill="#1173d4" name="Tasks Completed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="created" fill="#4cc9f0" name="Tasks Created" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReportView;

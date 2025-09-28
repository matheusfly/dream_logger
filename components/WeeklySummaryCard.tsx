
import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 3 },
  { name: 'Wed', tasks: 6 },
  { name: 'Thu', tasks: 5 },
  { name: 'Fri', tasks: 7 },
  { name: 'Sat', tasks: 2 },
  { name: 'Sun', tasks: 1 },
];

const StatCard: React.FC<{label: string; value: string;}> = ({label, value}) => (
    <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg">
        <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
        <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">{value}</div>
    </div>
);

const WeeklySummaryCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">Weekly Summary</h3>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <StatCard label="Tasks Done" value="28" />
        <StatCard label="Avg Health" value="82" />
        <StatCard label="Focus Score" value="91%" />
      </div>
      <div style={{ width: '100%', height: 150 }}>
          <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                      <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1173d4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1173d4" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(30, 30, 30, 0.8)',
                      borderColor: '#3c3c3c',
                      color: '#f8f9fa',
                      borderRadius: '0.5rem'
                    }}
                    labelStyle={{ color: '#adb5bd' }}
                  />
                  <Area type="monotone" dataKey="tasks" stroke="#1173d4" fillOpacity={1} fill="url(#colorTasks)" />
              </AreaChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklySummaryCard;

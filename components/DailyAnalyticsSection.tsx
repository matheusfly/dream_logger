
import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { StrategicIcon, CheckIcon } from './icons';

const dailyAnalytics = {
    completedTasks: 3,
    totalTasks: 5,
    strategicCompletion: 0.67,
    healthScore: 72.5,
    focusHours: 4.5
};

const TaskCompletionChart: React.FC = () => {
    const completed = dailyAnalytics.completedTasks;
    const pending = dailyAnalytics.totalTasks - completed;
    const data = [
        { name: 'Completed', value: completed },
        { name: 'Pending', value: pending }
    ];
    const COLORS = ['#1173d4', '#e9ecef'];
    return (
        <div style={{ width: '100%', height: 150 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend iconType="circle" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; }> = ({ icon, label, value }) => (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg flex items-center">
        {icon}
        <div className="ml-3">
            <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{value}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
        </div>
    </div>
);


const DailyAnalyticsSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Daily Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-center mb-2">Task Completion</h4>
                <TaskCompletionChart />
            </div>
            <div className="space-y-3">
                <StatCard 
                    icon={<StrategicIcon className="w-8 h-8 text-secondary" />} 
                    label="Strategic Completion" 
                    value={`${Math.round(dailyAnalytics.strategicCompletion * 100)}%`}
                />
                <StatCard 
                    icon={<CheckIcon className="w-8 h-8 text-success" />} 
                    label="Health Score"
                    value={dailyAnalytics.healthScore.toString()}
                />
            </div>
        </div>
    </div>
  );
};

export default DailyAnalyticsSection;
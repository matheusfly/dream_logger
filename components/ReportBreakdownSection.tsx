
import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const statusData = [
    { name: 'Completed', value: 400 },
    { name: 'In Progress', value: 300 },
    { name: 'Not Started', value: 300 },
    { name: 'Blocked', value: 200 },
];
const STATUS_COLORS = ['#4ade80', '#4cc9f0', '#ced4da', '#f72585'];

const priorityData = [
    { name: 'High', count: 50 },
    { name: 'Medium', count: 120 },
    { name: 'Low', count: 80 },
];
const PRIORITY_COLORS = ['#f72585', '#facc15', '#1173d4'];


const ReportBreakdownSection: React.FC = () => {
  return (
    <div className="space-y-8">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Report Breakdown</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
                <h4 className="font-semibold text-center mb-2">Breakdown by Status</h4>
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                {statusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                                ))}
                            </Pie>
                             <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                 <h4 className="font-semibold text-center mb-2">Breakdown by Priority</h4>
                 <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <BarChart data={priorityData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" tick={{ fill: '#6c757d' }} />
                            <Tooltip cursor={{fill: 'rgba(233, 236, 239, 0.5)'}} />
                            <Bar dataKey="count" barSize={30}>
                                {priorityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PRIORITY_COLORS[index % PRIORITY_COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default ReportBreakdownSection;

import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendUpIcon, TrendDownIcon } from './icons';


const trendsData = {
    progressTrend: [65, 67, 68, 70, 72, 73, 75],
    healthTrend: [70, 71, 72, 72, 73, 73, 74],
    dates: ['Sep 1', 'Sep 3', 'Sep 5', 'Sep 7', 'Sep 9', 'Sep 11', 'Sep 13']
};

const chartData = trendsData.dates.map((date, index) => ({
  date,
  progress: trendsData.progressTrend[index],
  health: trendsData.healthTrend[index],
}));


const ReportTrendsSection: React.FC = () => {

    const getTrendAnalysis = (trend: number[]) => {
        if (trend.length < 2) return { change: 0, direction: 'neutral', description: 'Not enough data.' };
        const change = trend[trend.length - 1] - trend[0];
        const direction = change >= 0 ? 'up' : 'down';
        const description = `${direction === 'up' ? 'Improved' : 'Declined'} by ${Math.abs(change).toFixed(1)} points.`;
        return { change, direction, description };
    };

    const progressAnalysis = getTrendAnalysis(trendsData.progressTrend);
    const healthAnalysis = getTrendAnalysis(trendsData.healthTrend);

  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Progress Trend</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
                            <XAxis dataKey="date" tick={{ fill: '#6c757d' }} fontSize={12} />
                            <YAxis domain={[60, 80]} tick={{ fill: '#6c757d' }} fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', borderColor: '#3c3c3c', borderRadius: '0.5rem' }} />
                            <Line type="monotone" dataKey="progress" stroke="#1173d4" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-2 flex items-start text-sm">
                    {progressAnalysis.direction === 'up' ? <TrendUpIcon className="w-5 h-5 mr-2 text-success" /> : <TrendDownIcon className="w-5 h-5 mr-2 text-danger" />}
                    <p className="text-neutral-700 dark:text-neutral-300">{progressAnalysis.description} This indicates positive momentum in execution.</p>
                </div>
            </div>
            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Health Trend</h3>
                 <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
                            <XAxis dataKey="date" tick={{ fill: '#6c757d' }} fontSize={12} />
                            <YAxis domain={[60, 80]} tick={{ fill: '#6c757d' }} fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', borderColor: '#3c3c3c', borderRadius: '0.5rem' }} />
                            <Line type="monotone" dataKey="health" stroke="#3f37c9" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                 <div className="mt-2 flex items-start text-sm">
                    {healthAnalysis.direction === 'up' ? <TrendUpIcon className="w-5 h-5 mr-2 text-success" /> : <TrendDownIcon className="w-5 h-5 mr-2 text-danger" />}
                    <p className="text-neutral-700 dark:text-neutral-300">{healthAnalysis.description} This suggests improving sustainability in your workflow.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ReportTrendsSection;

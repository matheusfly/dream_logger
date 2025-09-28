
import React from 'react';
// @ts-ignore - Recharts is loaded from CDN
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const metrics = [
    { name: 'Focus', value: 85, fill: '#1173d4' },
    { name: 'Alignment', value: 92, fill: '#3f37c9' },
    { name: 'Burnout Risk', value: 25, fill: '#4cc9f0' },
];

const HealthMetricsCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">Health Metrics</h3>
      <div className="grid grid-cols-3 gap-2 text-center">
        {metrics.map(metric => (
            <div key={metric.name}>
                <div style={{ width: '100%', height: 100 }}>
                    <ResponsiveContainer>
                        <RadialBarChart
                            innerRadius="70%"
                            outerRadius="100%"
                            data={[{ name: metric.name, value: metric.value }]}
                            startAngle={90}
                            endAngle={-270}
                            barSize={10}
                        >
                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                            <RadialBar
                                background
                                dataKey="value"
                                cornerRadius={5}
                                fill={metric.fill}
                                angleAxisId={0}
                            />
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="text-xl font-bold fill-current text-neutral-800 dark:text-neutral-100"
                            >
                                {`${metric.value}%`}
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">{metric.name}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HealthMetricsCard;

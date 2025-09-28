
import React, { useState } from 'react';

interface HealthMetrics {
    energy: number;
    focus: number;
    mood: number;
}

const HealthSlider: React.FC<{ label: string, value: number, onChange: (value: number) => void, emoji: string }> = 
({ label, value, onChange, emoji }) => (
    <div>
        <label className="flex items-center justify-between text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <span>{label}</span>
            <span className="text-lg">{emoji} <span className="text-base font-bold ml-1">{value}</span></span>
        </label>
        <input
            type="range"
            min="1"
            max="10"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
            style={{accentColor: '#1173d4'}}
        />
    </div>
);

const DailyHealthMetricsSection: React.FC = () => {
    const [metrics, setMetrics] = useState<HealthMetrics>({ energy: 7, focus: 8, mood: 7 });

    const handleMetricChange = (metric: keyof HealthMetrics, value: number) => {
        setMetrics(prev => ({ ...prev, [metric]: value }));
    };

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Daily Health Metrics</h3>
            <div className="space-y-4">
                <HealthSlider 
                    label="Energy Level"
                    value={metrics.energy}
                    onChange={(v) => handleMetricChange('energy', v)}
                    emoji="⚡️"
                />
                <HealthSlider 
                    label="Focus Quality"
                    value={metrics.focus}
                    onChange={(v) => handleMetricChange('focus', v)}
                    emoji="🎯"
                />
                <HealthSlider 
                    label="Overall Mood"
                    value={metrics.mood}
                    onChange={(v) => handleMetricChange('mood', v)}
                    emoji="😊"
                />
            </div>
            <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors">
                    Save Health Metrics
                </button>
            </div>
        </div>
    );
};

export default DailyHealthMetricsSection;
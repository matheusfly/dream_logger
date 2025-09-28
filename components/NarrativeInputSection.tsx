
import React, { useState } from 'react';
import { AlignLeftIcon, SendIcon, SparklesIcon } from './icons';

interface NarrativeInputSectionProps {
  date: Date;
}

function getDayType(date: Date): 'workday' | 'analytical' | 'review' {
  const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) return 'workday';
  if (dayOfWeek === 6) return 'analytical';
  return 'review';
}

const questions = {
  workday: [
    "🔁 What did I do yesterday that I should repeat?",
    "🚫 What did I do yesterday that I should stop doing?",
    "🔄 Which task from yesterday should become a habit?",
    "🏆 What is today's big win?",
  ],
  analytical: [
    "✅ What went well today?",
    "❌ What didn't go well today?",
    "📚 What was the biggest learning of the day?",
    "💡 How can I apply this learning tomorrow?",
  ],
  review: [
    "📊 What were the key metrics for the week?",
    "📈 What trends did I observe in my performance?",
    "🎯 What should I prioritize next week?",
    "🔄 What adjustments should I make to my strategy?",
  ],
};

const NarrativeInputSection: React.FC<NarrativeInputSectionProps> = ({ date }) => {
  const [narrative, setNarrative] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const dayType = getDayType(date);
  const dayTypeInfo = {
    workday: { text: 'Workday', style: 'bg-primary/10 text-primary' },
    analytical: { text: 'Analytical Day', style: 'bg-secondary/10 text-secondary' },
    review: { text: 'Review Day', style: 'bg-accent/10 text-accent' },
  }[dayType];

  const handleNarrativeSubmit = () => {
    if (!narrative.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setNarrative('');
      alert('Daily narrative submitted successfully!');
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Daily Narrative</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">Reflect on your day with guided questions</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${dayTypeInfo.style}`}>
          {dayTypeInfo.text}
        </span>
      </div>

      <div className="mb-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center">
          <AlignLeftIcon className="w-4 h-4 mr-2 text-primary" />
          Guided Reflection Questions
        </h4>
        <div className="space-y-1 pl-6 border-l-2 border-neutral-300 dark:border-neutral-600">
          {questions[dayType].map((q, i) => (
            <p key={i} className="text-sm text-neutral-700 dark:text-neutral-300">{q}</p>
          ))}
        </div>
      </div>

      <div>
        <textarea
          value={narrative}
          onChange={(e) => setNarrative(e.target.value)}
          placeholder="Write your daily narrative here..."
          className="w-full h-32 p-3 border bg-transparent border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          disabled={isSubmitting}
        />
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
            <SparklesIcon className="w-5 h-5" />
            <span className="text-sm">AI can help analyze your narrative</span>
          </div>
          <button
            onClick={handleNarrativeSubmit}
            disabled={!narrative.trim() || isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="animate-spin mr-2">...</span>
            ) : (
              <SendIcon className="w-4 h-4 mr-2" />
            )}
            {isSubmitting ? 'Submitting...' : 'Submit Narrative'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NarrativeInputSection;

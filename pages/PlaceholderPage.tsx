
import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-12 shadow-sm">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">{title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">This page is under construction.</p>
        <div className="mt-6 text-5xl animate-pulse">🚧</div>
      </div>
    </div>
  );
};

export default PlaceholderPage;

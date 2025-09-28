
import React from 'react';
import DailyTrackingSections from '../components/DailyTrackingSections';


const Dashboard: React.FC = () => {
  return (
    <DailyTrackingSections date={new Date()} />
  );
};

export default Dashboard;
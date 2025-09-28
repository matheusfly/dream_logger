
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Dashboard from './pages/Dashboard';
import StrategicHierarchy from './pages/StrategicHierarchy';
import ReportDashboard from './pages/ReportDashboard';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dreams" element={<StrategicHierarchy />} /> 
        <Route path="/objectives" element={<StrategicHierarchy />} />
        <Route path="/goals" element={<StrategicHierarchy />} />
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/reports" element={<ReportDashboard />} />
        <Route path="/calendar" element={<PlaceholderPage title="Calendar" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      </Routes>
    </AppShell>
  );
};

export default App;
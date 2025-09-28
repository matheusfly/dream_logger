import React from 'react';
import StrategicHierarchySections from '../components/StrategicHierarchySections';

const StrategicHierarchy: React.FC = () => {
  return (
    // FIX: Removed `initialView` prop as `StrategicHierarchySections` does not accept it.
    // The component defaults to the 'tree' view internally, so behavior is unchanged.
    <StrategicHierarchySections />
  );
};

export default StrategicHierarchy;
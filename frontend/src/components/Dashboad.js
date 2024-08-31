import React from 'react';
import MyAssessments from './MyAssessments';
import CreateAssessment from './CreateAssessment';
import SearchBar from './SearchBar';
import Filters from './Filters';
import RecentActivities from './RecentActivities';
import AnalyticsSummary from './AnalyticsSummary';

const Dashboard = () => {
  return (
    <div>
      <h1>Assessment Dashboard</h1>
      <SearchBar />
      <Filters />
      <CreateAssessment />
      <MyAssessments />
      <RecentActivities />
      <AnalyticsSummary />
    </div>
  );
};

export default Dashboard;

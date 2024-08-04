import React from 'react';
import UserRequests from './UserRequests';
import CreateRequests from './CreateRequests';

const EmployeeDashboard = () => {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <UserRequests />
      <CreateRequests />
    </div>
  );
};

export default EmployeeDashboard;

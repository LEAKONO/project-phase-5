import React, { useState } from 'react';
import ManageAssets from './ManageAssets'; 
import ViewPendingRequests from './ViewPendingRequests'; 
import ViewCompletedRequests from './ViewCompletedRequests'; 
import RequestUpdate from './RequestUpdate'; 
import UpdateAsset from './UpdateAsset'; 
import DeleteAssets from './DeleteAssets'; 

const ManagerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('manageAssets');

  const renderContent = () => {
    switch (activeComponent) {
      case 'manageAssets':
        return <ManageAssets />;
      case 'viewPending':
        return <ViewPendingRequests />;
      case 'viewCompleted':
        return <ViewCompletedRequests />;
      case 'requestUpdate':
        return <RequestUpdate />; 
      case 'updateAsset':
        return <UpdateAsset />; 
      case 'deleteAsset':
        return <DeleteAssets />;
      default:
        return <ManageAssets />;
    }
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <nav>
        <ul>
          <li><button onClick={() => setActiveComponent('manageAssets')}>Manage Assets</button></li>
          <li><button onClick={() => setActiveComponent('viewPending')}>View Pending Requests</button></li>
          <li><button onClick={() => setActiveComponent('viewCompleted')}>View Completed Requests</button></li>
          <li><button onClick={() => setActiveComponent('requestUpdate')}>Update Request</button></li>
          <li><button onClick={() => setActiveComponent('updateAsset')}>Update Asset</button></li>
          <li><button onClick={() => setActiveComponent('deleteAsset')}>Delete Asset</button></li>
        </ul>
      </nav>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ManagerDashboard;

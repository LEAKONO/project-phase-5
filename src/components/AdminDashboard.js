import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ViewAssets from './ViewAssets';
import AddAsset from './AddAsset';
import UpdateAsset from './UpdateAsset';
import DeleteAsset from './DeleteAsset';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/view">View Assets</Link>
          </li>
          <li>
            <Link to="/admin/add">Add Asset</Link>
          </li>
          <li>
            <Link to="/admin/update">Update Asset</Link>
          </li>
          <li>
            <Link to="/admin/delete">Delete Asset</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/admin/view" component={ViewAssets} />
        <Route path="/admin/add" component={AddAsset} />
        <Route path="/admin/update/:asset_id" component={UpdateAsset} />
        <Route path="/admin/delete/:asset_id" component={DeleteAsset} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;

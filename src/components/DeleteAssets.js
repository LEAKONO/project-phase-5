import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteAsset = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    axios.get('/api/assets')
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
      });
  }, []);

  const handleDelete = () => {
    axios.delete(`/api/assets/${selectedAsset}`)
      .then(response => {
        alert('Asset deleted successfully!');
        setAssets(assets.filter(asset => asset.id !== selectedAsset));
      })
      .catch(error => {
        console.error('Error deleting asset:', error);
      });
  };

  return (
    <div>
      <h3>Delete Asset</h3>
      <select onChange={(e) => setSelectedAsset(e.target.value)} value={selectedAsset}>
        <option value="">Select Asset</option>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete Asset</button>
    </div>
  );
};

export default DeleteAsset;

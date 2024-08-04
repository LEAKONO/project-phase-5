import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAssets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/assets', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div>
      <h3>Assets</h3>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            Name: {asset.name} - Description: {asset.description} - Category: {asset.category} - Image URL: {asset.image_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAssets;

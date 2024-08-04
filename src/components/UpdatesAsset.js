import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateAsset = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image_url: ''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/assets')
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
      });
  }, []);

  const handleAssetChange = (e) => {
    const assetId = e.target.value;
    setSelectedAsset(assetId);
    axios.get(`http://127.0.0.1:5000/api/assets/${assetId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching asset:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:5000/api/assets/${selectedAsset}`, formData)
      .then(response => {
        alert('Asset updated successfully!');
      })
      .catch(error => {
        console.error('Error updating asset:', error);
      });
  };

  return (
    <div>
      <h3>Update Asset</h3>
      <select onChange={handleAssetChange} value={selectedAsset}>
        <option value="">Select Asset</option>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
      {selectedAsset && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
          <button type="submit">Update Asset</button>
        </form>
      )}
    </div>
  );
};

export default UpdateAsset;

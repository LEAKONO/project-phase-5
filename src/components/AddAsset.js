import React, { useState } from 'react';
import axios from 'axios';

const AddAsset = () => {
  const [asset, setAsset] = useState({
    name: '',
    description: '',
    category: '',
    image_url: ''
  });

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/assets', asset, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      alert('Asset added successfully');
    } catch (error) {
      console.error('Error adding asset:', error);
      alert('Failed to add asset');
    }
  };

  return (
    <div>
      <h3>Add Asset</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={asset.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={asset.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={asset.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            value={asset.image_url}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAsset;

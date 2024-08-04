import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateAsset = () => {
  const { asset_id } = useParams();
  const [asset, setAsset] = useState({
    name: '',
    description: '',
    category: '',
    image_url: ''
  });

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/assets/${asset_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setAsset(response.data);
      } catch (error) {
        console.error('Error fetching asset:', error);
      }
    };

    fetchAsset();
  }, [asset_id]);

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5000/api/assets/${asset_id}`, asset, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      alert('Asset updated successfully');
    } catch (error) {
      console.error('Error updating asset:', error);
      alert('Failed to update asset');
    }
  };

  return (
    <div>
      <h3>Update Asset</h3>
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
        <button type="submit">Update Asset</button>
      </form>
    </div>
  );
};

export default UpdateAsset;

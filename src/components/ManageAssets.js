import React, { useState } from 'react';
import axios from 'axios';

const AddAsset = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image_url: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/api/assets', formData)
      .then(response => {
        alert('Asset added successfully!');
      })
      .catch(error => {
        console.error('Error adding asset:', error);
      });
  };

  return (
    <div>
      <h3>Add Asset</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <input type="text" name="image_url" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAsset;

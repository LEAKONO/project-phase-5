import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteAsset = () => {
  const { asset_id } = useParams();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/assets/${asset_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      alert('Asset deleted successfully');
    } catch (error) {
      console.error('Error deleting asset:', error);
      alert('Failed to delete asset');
    }
  };

  return (
    <div>
      <h3>Delete Asset</h3>
      <button onClick={handleDelete}>Delete Asset</button>
    </div>
  );
};

export default DeleteAsset;

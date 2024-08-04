import React, { useState } from 'react';
import axios from 'axios';

const CreateRequest = () => {
  const [assetId, setAssetId] = useState('');
  const [reason, setReason] = useState('');
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      asset_id: assetId,
      reason,
      quantity,
      urgency
    };

    try {
      await axios.post('/api/requests', requestData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      alert('Request submitted successfully');
      // Reset form fields
      setAssetId('');
      setReason('');
      setQuantity('');
      setUrgency('');
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request');
    }
  };

  return (
    <div>
      <h3>Create New Request</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Asset ID</label>
          <input
            type="text"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Reason</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Urgency</label>
          <input
            type="text"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default CreateRequest;

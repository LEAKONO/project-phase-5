import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        console.log("Fetching pending requests...");
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await axios.get('http://127.0.0.1:5000/api/requests/pending', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("Response:", response.data);
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching pending requests:', error);
        setError(error.response?.data?.message || 'Error fetching pending requests');
      }
    };

    fetchPendingRequests();
  }, []);

  return (
    <div>
      <h3>Pending Requests</h3>
      {error && <p>{error}</p>}
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <p>Asset ID: {request.asset_id}</p>
            <p>User ID: {request.user_id}</p>
            <p>Reason: {request.reason}</p>
            <p>Quantity: {request.quantity}</p>
            <p>Urgency: {request.urgency}</p>
            <p>Status: {request.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPendingRequests;

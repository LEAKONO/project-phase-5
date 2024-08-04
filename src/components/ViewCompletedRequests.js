import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewCompletedRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/requests/completed')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching completed requests:', error);
      });
  }, []);

  return (
    <div>
      <h3>Completed Requests</h3>
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

export default ViewCompletedRequests;

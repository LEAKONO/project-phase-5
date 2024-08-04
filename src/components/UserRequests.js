import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/user/requests', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h3>Your Requests</h3>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.reason} - {request.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRequests;

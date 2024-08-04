import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestUpdate = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState({
    status: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/requests/${requestId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setRequest(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch request');
        setLoading(false);
      }
    };

    fetchRequest();
  }, [requestId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest({
      ...request,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:5000/api/requests/${requestId}`, request, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      navigate('/manager-dashboard'); // Redirect to manager dashboard after update
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update request');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Update Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Status:</label>
          <select name="status" value={request.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button type="submit">Update Request</button>
      </form>
    </div>
  );
};

export default RequestUpdate;


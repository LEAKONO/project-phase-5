import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
        <li><Link to="/manager-dashboard">Manager Dashboard</Link></li>
        <li><Link to="/employee-dashboard">Employee Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';
import { useNavigate } from 'react-router-dom';

function User() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data with image from the backend when the component mounts
    axios.get('https://randomuser.me/api/')
      .then(response => {
        // The data is in the response.data.results array
        setUserData(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing local storage, etc.
    // After logout, navigate back to the home page
    navigate('/');
  };

  return (
    <div className="wrapper" id="user-page">
      <div className="logo">
        <img src={userData.picture?.large} alt="Profile" />
      </div>
      <div className="text-center mt-4 name">
        Your Account
      </div>
      <div className="user-details-container p-3 mt-3">
        <div className="user-detail">
          <span className="user-label">Name:</span>
          <span>{userData.name?.first} {userData.name?.last}</span>
        </div>
        <div className="user-detail">
          <span className="user-label">Email:</span>
          <span>{userData.email}</span>
        </div>
        <div className="user-detail">
          <span className="user-label">Phone:</span>
          <span>{userData.phone}</span>
        </div>
        {/* Add more user details as needed */}
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;

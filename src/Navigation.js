// Navigation component
import React from 'react';
import './Navigation.css'; // Include your CSS file

const Navigation = ({ setPage }) => {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => setPage('list')}>
        Timeshare List
      </button>
      <button className="sidebar-button" onClick={() => setPage('create')}>
        Create Timeshare
      </button>
      <button className="sidebar-button" onClick={() => setPage('wallet')}>
        Wallet
      </button>
    </div>
  );
};

export default Navigation;

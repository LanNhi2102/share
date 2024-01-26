import React, { useState } from 'react';
import TimeshareList from './TimeshareList';

const ListTimesharePage = ({ listTimeshare, deleteTimeshare, editTimeshare }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here, e.g., filter the list based on the searchTerm
    // For simplicity, let's assume you have a function called searchTimeshare

    // Replace this with your actual search logic
    const filteredList = searchTimeshare(listTimeshare, searchTerm);

    // Do something with the filteredList, e.g., update state or perform other actions
  };

  return (
    <div>
      <h2>List Timeshare Page</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search Timeshare..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '400px', marginRight: '10px', padding: '10px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <TimeshareList listTimeshare={listTimeshare} deleteTimeshare={deleteTimeshare} editTimeshare={editTimeshare} />
    </div>
  );
};

// Replace this with your actual search logic
const searchTimeshare = (listTimeshare, searchTerm) => {
  // Implement your search logic here, e.g., filter based on the name or other criteria
  return listTimeshare.filter((timeshare) =>
    timeshare.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default ListTimesharePage;

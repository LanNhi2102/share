// TimeshareList.js
import React from 'react';
import TimeshareItem from './TimeshareItem';
import './TimeshareList.css';

const TimeshareList = ({ listTimeshare, deleteTimeshare, editTimeshare }) => {
  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Price</th>
            <th>Timeshare</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTimeshare.map((timeshare) => (
            <TimeshareItem
              key={timeshare.id}
              timeshare={timeshare}
              deleteTimeshare={deleteTimeshare}
              editTimeshare={editTimeshare}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeshareList;

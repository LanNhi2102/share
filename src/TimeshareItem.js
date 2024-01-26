// TimeshareItem.js
import React, { useState } from 'react';
import EditTimeshare from './EditTimeshare';
import './TimeshareItem.css';

const TimeshareItem = ({ timeshare, editTimeshare, deleteTimeshare }) => {
  const [isEditing, setEditing] = useState(false);

  const handleUpdate = (updatedTimeshare) => {
    editTimeshare(updatedTimeshare);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTimeshare(timeshare.id);
  };

  return (
    <tr>
      <td>{timeshare.name}</td>
      <td>{timeshare.address}</td>
      <td>{timeshare.city}</td>
      <td>{timeshare.state}</td>
      <td>{timeshare.price}</td>
      <td>{timeshare.timeshare}</td>
      <td>{timeshare.description}</td>
      <td>
        <img src={timeshare.image} alt={timeshare.name} className="timeshare-image" />
      </td>
      <td>
        {!isEditing ? (
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        ) : (
          <EditTimeshare timeshare={timeshare} updateTimeshare={handleUpdate} cancelEdit={handleCancelEdit} />
        )}
      </td>
    </tr>
  );
};

export default TimeshareItem;

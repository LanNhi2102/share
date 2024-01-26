// EditTimeshare.js
import React, { useState } from 'react';

const EditTimeshare = ({ timeshare, updateTimeshare, cancelEdit }) => {
  const [editedTimeshare, setEditedTimeshare] = useState(timeshare);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setEditedTimeshare({ ...editedTimeshare, [e.target.name]: e.target.files[0] });
    } else {
      setEditedTimeshare({ ...editedTimeshare, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = () => {
    updateTimeshare(editedTimeshare);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={editedTimeshare.name} onChange={handleChange} required />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" value={editedTimeshare.address} onChange={handleChange} required />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={editedTimeshare.city} onChange={handleChange} required />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" value={editedTimeshare.state} onChange={handleChange} required />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value={editedTimeshare.price} onChange={handleChange} required />

      <label htmlFor="timeshare">Timeshare:</label>
      <input type="text" id="timeshare" name="timeshare" value={editedTimeshare.timeshare} onChange={handleChange} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={editedTimeshare.description} onChange={handleChange} required />

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" onChange={handleChange} />

      <button onClick={handleUpdate}>Update</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditTimeshare;

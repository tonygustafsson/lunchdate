import React from 'react';

const PlaceCreate = ({ placesCreateAjaxPost, newPlaceName, placesCreateNewNameChange }) => {
  return (
    <div className="PlaceCreate">
      <h2>Create new place</h2>

      <form method="post" onSubmit={e => {
        e.preventDefault();
        placesCreateAjaxPost(newPlaceName)
      }}
      >
        <input type="text" value={newPlaceName} onChange={e => { placesCreateNewNameChange(e.target.value) }} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default PlaceCreate;

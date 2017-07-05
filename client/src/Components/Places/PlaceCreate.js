import React from 'react';

const PlaceCreate = ({ saveNewPlace, newPlaceName, changeNewPlaceName }) => {
  return (
    <div className="PlaceCreate">
      <h2>Create new place</h2>

      <form method="post" onSubmit={e => {
        e.preventDefault();
        saveNewPlace(newPlaceName)
      }}
      >
        <input type="text" value={newPlaceName} onChange={e => { changeNewPlaceName(e.target.value) }} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default PlaceCreate;

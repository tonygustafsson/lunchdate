import React from 'react';
import { Checkbox, Icon } from 'react-mdl';

const PlacesList = ({ places, placesRemoveAjaxPost, loading, datesCreateNewDataChange, newDateData, placesUploadLogoChange }) => {
  return (
    <div className="place-list">
      {typeof places !== "undefined" && places.map((place) => {
        return (
          <div className="place-list-item" key={place.key} onClick={e => { datesCreateNewDataChange('datePlace', place.name) }}>
            <div className="place-logo-container">
              <img src={place.imageUrl} alt="logo" className="place-logo" />
            </div>

            <Checkbox className="place-list-checkbox" checked={newDateData.datePlace === place.name} name="newDatePlace" value={place.name} ripple />
            {place.name}

            <p className="place-list-action-buttons">
              <label>
                <a><Icon name="photo" /></a>
                <input style={{ display: 'none' }} type="file" accept=".png" onChange={e => { placesUploadLogoChange(place, e.target.files) }} />
              </label>

              <label className="place-delete-container">
                <input type="checkbox" style={{ display: 'none' }} />
                <i className="material-icons place-delete-button">delete</i>
                <span className="place-delete-confirm" onClick={() => placesRemoveAjaxPost(place.key)}>Sure?</span>
              </label>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PlacesList;

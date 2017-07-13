import React from 'react';
import { List, ListItem, ListItemAction, ListItemContent, Checkbox, Icon } from 'react-mdl';

const PlacesList = ({ places, placesRemoveAjaxPost, loading, datesCreateNewDataChange, newDateData, placesUploadLogoChange }) => {
  return (
    <List className="place-list">
      {typeof places !== "undefined" && places.map((place) => {
        return (
          <ListItem className="place-list-item" key={place.key} onClick={e => { datesCreateNewDataChange('datePlace', place.name) }}>
            <ListItemContent>
              <div className="place-logo-container">
                <label style={{ cursor: 'pointer' }}>
                  <img src={place.imageUrl} alt="logo" className="place-logo" />
                  <input style={{ display: 'none' }} type="file" accept=".png" onChange={e => { placesUploadLogoChange(place, e.target.files) }} />
                </label>
              </div>
              <div className="place-name-container">{place.name}</div>
            </ListItemContent>
            <ListItemAction>
              <Checkbox checked={newDateData.datePlace === place.name} name="newDatePlace" value={place.name} ripple /><br />
              <a className="place-delete-icon" onClick={() => placesRemoveAjaxPost(place.key)}><Icon name="delete" /></a>
            </ListItemAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default PlacesList;

import React from 'react';
import { List, ListItem, ListItemAction, ListItemContent, Checkbox, Icon } from 'react-mdl';

const PlacesList = ({ places, placesRemoveAjaxPost, loading, datesCreateNewDataChange, newDateData }) => {
  return (
    <List className="place-list">
      {typeof places !== "undefined" && places.map((place) => {
        return (
          <ListItem key={place.key} onClick={e => { datesCreateNewDataChange('datePlace', place.name) }}>
            <ListItemContent>
              <img width="100" height="100" src={place.imageUrl} alt="logo" className="create-place-logo" />
              {place.name}
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

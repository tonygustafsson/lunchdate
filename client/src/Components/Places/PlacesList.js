import React from 'react';
import './PlacesList.css';

const PlacesList = ({ places, placesRemoveAjaxPost, loading }) => {
  return (
    <div className="PlacesList">
      <h2>Places</h2>

      <ul>
        {typeof places !== "undefined" && places.map((place) => {
          return (
            <li className="PlacesListItem" key={place.key}>
              <img src={process.env.PUBLIC_URL + "/img/places/" + place.identifier + ".png"} alt={place.name + " logo"} className="place-logo" />
              {place.name}
              <a onClick={() => placesRemoveAjaxPost(place.key)}> [del]</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlacesList;

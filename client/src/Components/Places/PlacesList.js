import React from 'react';
import { Checkbox, Icon, Spinner } from 'react-mdl';

export default class PlacesList extends React.Component {
  render() {
    return (
      <div className="place-list">
        <Spinner singleColor style={{ display: this.props.loading ? 'block' : 'none' }} />

        {typeof this.props.places !== "undefined" && this.props.places.map((place) => {
          return (
            <div className="place-list-item" key={place.key} onClick={() => { this.props.changeDateData('place', place.name) }}>
              <div className="place-logo-container">
                <img src={place.imageUrl} alt="logo" className="place-logo" />
              </div>

              <Checkbox className="place-list-checkbox" checked={this.props.selectedPlace === place.name} name="place" value={place.name} ripple />
              {place.name}

              <p className="place-list-action-buttons">
                <label>
                  <a><Icon name="photo" /></a>
                  <input style={{ display: 'none' }} type="file" accept=".png" onChange={e => { this.props.placesUploadLogoChange(place, e.target.files) }} />
                </label>

                <label className="place-delete-container">
                  <input type="checkbox" style={{ display: 'none' }} />
                  <i className="material-icons place-delete-button">delete</i>
                  <span className="place-delete-confirm" onClick={() => this.props.placesRemoveAjaxPost(place.key)}>Sure?</span>
                </label>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

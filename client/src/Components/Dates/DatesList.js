import React from 'react';
import { Icon, Button, Spinner } from 'react-mdl';

const DatesList = ({ dates, places, datesCreateAjaxPost, datesRemoveAjaxPost, user, contactServerError, loading,
  newDateData, datesShowNewDateForm, showNewDateForm, datesAddParticipantAjaxPost, datesRemoveParticipantAjaxPost }) => {
  if (showNewDateForm) {
    return null;
  }

  if (contactServerError) {
    return (
      <div>
        <h2 className="error">Could not contact server</h2>
      </div>
    );
  }

  if (dates.length < 1 && !loading) {
    return (
        <h2>No dates yet.</h2>
    );
  }

  return (
    <div className="date-list-container">
      <Spinner singleColor style={{ display: loading ? 'block' : 'none' }} />

      <div className="dates">
        {typeof dates !== "undefined" && dates.map((date) => {
          let place = places.find(function (place) { return place.name === date.place; }),
            datePlace = date.takeaway ? date.place + ' (takeaway)' : date.place,
            placeImageUrl = typeof place !== "undefined" ? place.imageUrl : "";

          return (
            <div className="date-item" key={date.key}>
              <span className="date-item-title">{datePlace} {date.time}</span>
              <img src={placeImageUrl} alt="Logo" className="date-place-logo" />

              {date.note !== "" &&
                <p className="date-item-note">{date.note}</p>
              }

              {date.participants.length > 0 &&
                <p className="date-item-participants">
                  Participants: <span dangerouslySetInnerHTML={{ __html: date.participants.join(', ').replace(date.user, '<strong>' + date.user + '</strong>') }} />.
                  </p>
              }

              {date.participants.length < 1 &&
                <p className="date-item-participants">No participants.</p>
              }

              <Button className="date-action-button" style={{ display: date.participants.includes(user) ? 'none' : 'block' }} raised accent ripple type="button" onClick={e => { datesAddParticipantAjaxPost(date.key, user) }}>
                <Icon name="restaurant" /> Join
              </Button>

              <Button className="date-action-button" style={{ display: date.participants.includes(user) ? 'block' : 'none' }} raised accent ripple type="button" onClick={e => { datesRemoveParticipantAjaxPost(date.key, user) }}>
                <Icon name="cancel" /> No thanks
              </Button>

              <label className="date-delete-container" style={{
                display: date.user === user && date.participants.length <= 1 ? 'block' : 'none'
              }}>
                <input type="checkbox" style={{ display: 'none' }} />
                <i className="material-icons date-delete-button">delete</i>
                <span className="date-delete-confirm" onClick={() => { datesRemoveAjaxPost(date.key) }}>Sure?</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DatesList;

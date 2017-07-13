import React from 'react';
import { Tooltip, FABButton, Icon, Button } from 'react-mdl';

const DatesList = ({ dates, places, datesCreateAjaxPost, datesRemoveAjaxPost, user,
  newDateData, toggleShowNewDateForm, showNewDateForm, datesAddParticipantAjaxPost, datesRemoveParticipantAjaxPost }) => {
  if (showNewDateForm) {
    return null;
  }

  if (dates.length < 1) {
    return (
      <div>
        <h2>There is no dates today yet :(</h2>

        <FABButton colored ripple className="add-new-date-button" onClick={e => { toggleShowNewDateForm() }}>
          <Icon name="add" />
        </FABButton>
      </div>
    );
  }

  return (
    <div className="date-list-container">
      <div className="dates">
        {typeof dates !== "undefined" && dates.map((date) => {
          let place = places.find(function (place) { return place.name === date.place; }),
              datePlace = date.takeaway ? date.place +  ' (takeaway)' : date.place,
              placeImageUrl = typeof place !== "undefined" ? place.imageUrl : "";

          return (
            <div className="date-item" key={date.key}>
              <span className="date-item-title">{datePlace} {date.time}</span>
              <img src={placeImageUrl} alt="Logo" className="date-place-logo" />

              { date.note !== "" &&
                <p className="date-item-note">{date.note}</p>
              }

              { date.participants.length > 0 &&
                <p className="date-item-participants">Participants: { date.participants.join(', ').replace(date.user, date.user + ' (host)') }.</p>
              }

              { date.participants.length < 1 &&
                <p className="date-item-participants">No participants.</p>
              }

              <Button className="date-action-button" style={{ display: date.participants.includes(user) ? 'none' : 'block' }} raised accent ripple type="button" onClick={e => { datesAddParticipantAjaxPost(date.key, user) }}>
                <Icon name="restaurant" /> Join
              </Button>

              <Button className="date-action-button" style={{ display: date.participants.includes(user) ? 'block' : 'none' }} raised accent ripple type="button" onClick={e => { datesRemoveParticipantAjaxPost(date.key, user) }}>
                <Icon name="cancel" /> No thanks
              </Button>

              <Tooltip label="Delete" className="date-delete-button">
                <i className="material-icons date-delete-button" onClick={() => datesRemoveAjaxPost(date.key)}>delete</i>
              </Tooltip>
            </div>
          );
        })}
      </div>

      <FABButton colored ripple className="add-new-date-button" onClick={e => { toggleShowNewDateForm() }}>
        <Icon name="add" />
      </FABButton>
    </div>
  );
}

export default DatesList;

import React from 'react';
import { DataTable, TableHeader, Tooltip, FABButton, Icon, Button } from 'react-mdl';

const DatesList = ({ dates, places, datesCreateAjaxPost, datesRemoveAjaxPost, user,
                      newDateData, toggleShowNewDateForm, showNewDateForm, datesAddParticipantAjaxPost, datesRemoveParticipantAjaxPost }) => {
  if (showNewDateForm) {
    return null;
  }

  return (
    <div className="DatesList">
      <h2>Todays dates</h2>

      <DataTable className="DateListList" shadow={4} rows={
        dates.map(function (date) {
          let changedDate = Object.assign({}, date),
              place = places.find(function(place) { return place.name === date.place; }),
              placeImageUrl = typeof place !== "undefined" ? place.imageUrl : "";

          changedDate.participants = date.participants.join(', ').replace(date.user, "*" + date.user);
          changedDate.placeImage = <img src={placeImageUrl} alt="Logo" className="date-place-logo" />
          changedDate.takeaway = date.takeaway ? 'Yes' : 'No';
          changedDate.operations = <div className="date-operation-column">
                              <Button style={{ display: date.participants.includes(user) ? 'none' : 'block' }} raised accent ripple type="button" onClick={e => { datesAddParticipantAjaxPost(date.key, user) }}>
                                <Icon name="restaurant" /> Join
                              </Button>

                              <Button style={{ display: date.participants.includes(user) ? 'block' : 'none' }} raised accent ripple type="button" onClick={e => { datesRemoveParticipantAjaxPost(date.key, user) }}>
                                <Icon name="cancel" /> No thanks
                              </Button>

                              <Tooltip label="Delete" className="date-delete-button">
                                <i className="material-icons date-delete-button" onClick={() => datesRemoveAjaxPost(date.key)}>delete</i>
                              </Tooltip>
                            </div>;
          return changedDate;
        })
      }>
        <TableHeader name="placeImage"> </TableHeader>
        <TableHeader name="time" tooltip="When to have lunch">Time</TableHeader>
        <TableHeader name="participants" tooltip="Whos coming?">Participants</TableHeader>
        <TableHeader name="place" tooltip="The place to eat / take away from">Place</TableHeader>
        <TableHeader name="takeaway" tooltip="Is the plan to eat there or take away?">TakeAway</TableHeader>
        <TableHeader name="note" tooltip="Anything more?">Note</TableHeader>
        <TableHeader name="operations" tooltip="Manage this date"> </TableHeader>
      </DataTable>

      <FABButton colored ripple className="add-new-date" onClick={e => { toggleShowNewDateForm() }}>
          <Icon name="add" />
      </FABButton>
    </div>
  );
}

export default DatesList;

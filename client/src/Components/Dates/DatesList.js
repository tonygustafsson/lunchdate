import React from 'react';
import { DataTable, TableHeader, Tooltip, FABButton, Icon, Button } from 'react-mdl';

const DatesList = ({ dates, places, datesCreateAjaxPost, datesRemoveAjaxPost, newDateData, toggleShowNewDateForm, showNewDateForm }) => {
  if (showNewDateForm) {
    return null;
  }

  return (
    <div className="DatesList">
      <h2>Todays dates</h2>

      <DataTable className="DateListList" shadow={0} rows={
        dates.map(function (date) {
          let place = places.find(function(place) { return place.name === date.place; }),
              placeImageUrl = typeof place !== "undefined" ? place.imageUrl : "";

          date.placeImage = <img src={placeImageUrl} alt="Logo" className="date-place-logo" />
          date.takeaway = date.takeaway ? 'Yes' : 'No';
          date.operations = <div className="date-operation-column">
                              <Button raised accent ripple type="button"><Icon name="restaurant" /> Join</Button><br />

                              <Tooltip label="Delete">
                                <i className="material-icons date-delete-button" onClick={() => datesRemoveAjaxPost(date.key)}>delete</i>
                              </Tooltip>
                            </div>;
          return date;
        })
      }>
        <TableHeader name="placeImage"> </TableHeader>
        <TableHeader name="time" tooltip="When to have lunch">Time</TableHeader>
        <TableHeader name="user" tooltip="The host">User</TableHeader>
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

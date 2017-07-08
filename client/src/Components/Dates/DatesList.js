import React from 'react';
import { DataTable, TableHeader, Tooltip } from 'react-mdl';

const DatesList = ({ dates, places, datesCreateAjaxPost, datesRemoveAjaxPost, newDateData }) => {
  return (
    <div className="DatesList">
      <h2>Todays dates</h2>

      <DataTable shadow={0} rows={
        dates.map(function (date) {
          let place = places.find(function(place) { return place.name === date.place; });
          let placeImagePath = typeof place !== "undefined" && typeof place.identifier !== "undefined" ? process.env.PUBLIC_URL + "/img/places/" + place.identifier + ".png" : "";
          date.placeImage = <img src={placeImagePath} alt="Logo" className="date-place-logo" />
          date.takeaway = date.takeaway ? 'Yes' : 'No';
          date.operations = <div>
                              <Tooltip label="Join this date">
                                <i className="material-icons">restaurant</i>
                              </Tooltip>
                              <Tooltip label="Delete">
                                <i className="material-icons" onClick={() => datesRemoveAjaxPost(date.key)}>delete</i>
                              </Tooltip>
                            </div>;
          return date;
        })
      }>
        <TableHeader name="placeImage">Image</TableHeader>
        <TableHeader name="time" tooltip="When to have lunch">Time</TableHeader>
        <TableHeader name="user" tooltip="The host">User</TableHeader>
        <TableHeader name="place" tooltip="The place to eat / take away from">Place</TableHeader>
        <TableHeader name="takeaway" tooltip="Is the plan to eat there or take away?">TakeAway</TableHeader>
        <TableHeader name="note" tooltip="Anything more?">Note</TableHeader>
        <TableHeader name="operations" tooltip="Manage this date">Operations</TableHeader>
      </DataTable>
    </div>
  );
}

export default DatesList;

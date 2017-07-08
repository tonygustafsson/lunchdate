import React from 'react';
import { DataTable, TableHeader, Tooltip } from 'react-mdl';

const DatesList = ({ dates, datesCreateAjaxPost, datesRemoveAjaxPost, newDateData }) => {
  return (
    <div className="DatesList">
      <h2>Dates</h2>

      <DataTable shadow={0} rows={
        dates.map(function (date) {
          date.takeaway = date.takeaway ? 'Yes' : 'No';
          date.operations = <Tooltip label="Delete"><i className="material-icons" onClick={() => datesRemoveAjaxPost(date.key)}>delete</i></Tooltip>;
          return date;
        })
      }>
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

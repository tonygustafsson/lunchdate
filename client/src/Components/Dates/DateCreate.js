import React from 'react';

const DateCreate = ({ datesCreateAjaxPost, datesCreateNewDataChange, newDateData, test }) => {
  return (
    <div className="PlaceDate">
      <h2>Create new date</h2>

      <form method="post" onSubmit={ e => { e.preventDefault(); datesCreateAjaxPost(newDateData) }}>
        <label htmlFor="newDateTime">Time</label>
        <input type="text" id="newDateTime" name="newDateTime" value={newDateData.dateTime} onChange={ e => { datesCreateNewDataChange('dateTime', e.target.value) }} />

        <label htmlFor="newDateUser">User</label>
        <input type="text" id="newDateUser" name="newDateUser" value={newDateData.dateUser} onChange={ e => { datesCreateNewDataChange('dateUser', e.target.value) }} />

        <label htmlFor="newDatePlace">Place</label>
        <input type="text" id="newDatePlace" name="newDatePlace" value={newDateData.datePlace} onChange={ e => { datesCreateNewDataChange('datePlace', e.target.value) }} />

        <label htmlFor="newDateTakeAway">Takeaway</label>
        <input type="checkbox" id="newDateTakeAway" name="newDateTakeAway" checked={newDateData.dateTakeAway} onChange={ e => { datesCreateNewDataChange('dateTakeAway', e.target.checked) }} />

        <label htmlFor="newDateNote">Note</label>
        <input type="text" id="newDateNote" name="newDateNote" value={newDateData.dateNote} onChange={ e => { datesCreateNewDataChange('dateNote', e.target.value) }} />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default DateCreate;

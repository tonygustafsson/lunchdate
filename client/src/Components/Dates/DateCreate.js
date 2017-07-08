import React from 'react';
import { Textfield, Button, Switch } from 'react-mdl';

const DateCreate = ({ datesCreateAjaxPost, datesCreateNewDataChange, newDateData, places }) => {
  return (
    <div className="PlaceDate">
      <h2>Create new date</h2>

      <form method="post" onSubmit={e => { e.preventDefault(); datesCreateAjaxPost(newDateData) }}>
        <Textfield label="Time" id="newDateTime" name="newDateTime" value={newDateData.dateTime} onChange={e => { datesCreateNewDataChange('dateTime', e.target.value) }} />
        <Textfield label="Your name" id="newDateUser" name="newDateUser" value={newDateData.dateUser} onChange={e => { datesCreateNewDataChange('dateUser', e.target.value) }} />

        <label htmlFor="newDatePlace">Place</label>
        <select name="newDatePlace" id="newDatePlace" value={newDateData.datePlace} onChange={e => { datesCreateNewDataChange('datePlace', e.target.value) }}>
          {typeof places !== "undefined" && places.map((place) => {
            return (
              <option key={place.key} value={place.identifier}>{place.name}</option>
            );
          })}
        </select>

        <Switch ripple id="newDateTakeAway" name="newDateTakeAway" checked={newDateData.dateTakeAway} onChange={e => { datesCreateNewDataChange('dateTakeAway', e.target.checked) }}>
          TakeAway
        </Switch>

        <Textfield label="Note" id="newDateNote" name="newDateNote" value={newDateData.dateNote} onChange={e => { datesCreateNewDataChange('dateNote', e.target.value) }} />

        <Button raised type="submit">Save</Button>
      </form>
    </div>
  );
}

export default DateCreate;

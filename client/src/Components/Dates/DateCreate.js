import React from 'react';
import { Textfield, Button, Switch, Icon } from 'react-mdl';
import { PlaceCreateComponent, PlacesListComponent } from '../../containers/Places';

const DateCreate = ({ datesCreateAjaxPost, datesCreateNewDataChange, newDateData, places, showNewDateForm, cancel, toggleShowNewPlaceForm }) => {
  if (!showNewDateForm) {
    return null;
  }

  return (
    <div className="CreatePlaceDate">
      <h2>Create new date</h2>

      <form method="post" onSubmit={e => { e.preventDefault(); datesCreateAjaxPost(newDateData) }}>
        <Textfield label="Time" id="newDateTime" name="newDateTime" value={newDateData.dateTime} onChange={e => { datesCreateNewDataChange('dateTime', e.target.value) }} /><br />

        <PlacesListComponent />

        <Button type="button" raised className="add-new-place-button" onClick={toggleShowNewPlaceForm}><Icon name="add" /> Add new place</Button>

        <Switch ripple className="create-date-switch" id="newDateTakeAway" name="newDateTakeAway" checked={newDateData.dateTakeAway} onChange={e => { datesCreateNewDataChange('dateTakeAway', e.target.checked) }}>
          Take Away
        </Switch>

        <Textfield label="Your name" id="newDateUser" name="newDateUser" value={newDateData.dateUser} onChange={e => { datesCreateNewDataChange('dateUser', e.target.value) }} /><br />

        <Textfield label="Note" id="newDateNote" name="newDateNote" value={newDateData.dateNote} onChange={e => { datesCreateNewDataChange('dateNote', e.target.value) }} />

        <br />
        <Button type="button" raised onClick={cancel}><Icon name="undo" /> Cancel</Button>
        <Button raised accent type="submit"><Icon name="save" /> Save</Button>
      </form>

      <PlaceCreateComponent />
    </div>
  );
}

export default DateCreate;

import React from 'react';
import { Textfield, Button, Switch, Icon } from 'react-mdl';
import { PlaceCreateComponent, PlacesListComponent } from '../../containers/Places';

const DateCreate = ({ datesCreateAjaxPost, datesCreateNewDataChange, newDateData, places, showNewDateForm, cancel, placesToggleNewPlaceForm, user }) => {
  if (!showNewDateForm) {
    return null;
  }

  return (
    <div>
      <h2>Create new date</h2>

      <div className="create-date-container">

        <form method="post" onSubmit={e => {
          e.preventDefault();
          newDateData.dateUser = user;
          datesCreateAjaxPost(newDateData)
        }}>
          <Textfield label="Time" id="newDateTime" name="newDateTime" value={newDateData.dateTime} onChange={e => { datesCreateNewDataChange('dateTime', e.target.value) }} /><br />

          <PlacesListComponent />

          <Button type="button" raised className="add-new-place-button" onClick={placesToggleNewPlaceForm}><Icon name="add" /> Add new place</Button>

          <Switch ripple className="create-date-switch" id="newDateTakeAway" name="newDateTakeAway" checked={newDateData.dateTakeAway} onChange={e => { datesCreateNewDataChange('dateTakeAway', e.target.checked) }}>
            Take Away
          </Switch>

          <Textfield label="Note" id="newDateNote" name="newDateNote" value={newDateData.dateNote} onChange={e => { datesCreateNewDataChange('dateNote', e.target.value) }} />

          <div className="create-date-buttons">
            <Button type="button" raised onClick={cancel}><Icon name="undo" /> Cancel</Button>
            <Button raised accent type="submit"><Icon name="save" /> Save</Button>
          </div>
        </form>

        <PlaceCreateComponent />
      </div>
    </div>
  );
}

export default DateCreate;

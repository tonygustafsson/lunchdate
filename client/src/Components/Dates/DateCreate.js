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
          newDateData.user = user;
          datesCreateAjaxPost(newDateData);
        }}>
          <Textfield type="date" floatingLabel className="date-create-date-input" label="Date" id="date" name="date" value={newDateData.date} onChange={e => { datesCreateNewDataChange('date', e.target.value) }} />
          <Textfield floatingLabel className="date-create-time-input" label="Time" id="time" name="time" value={newDateData.time} onChange={e => { datesCreateNewDataChange('time', e.target.value) }} />

          <PlacesListComponent />

          <Button type="button" raised className="add-new-place-button" onClick={placesToggleNewPlaceForm}><Icon name="add" /> Add new place</Button>

          <Switch ripple className="create-date-switch" id="takeAway" name="takeAway" checked={newDateData.takeAway} onChange={e => { datesCreateNewDataChange('takeAway', e.target.checked) }}>
            Take Away
          </Switch>

          <Textfield floatingLabel label="Note" id="note" name="note" value={newDateData.note} onChange={e => { datesCreateNewDataChange('note', e.target.value) }} />

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

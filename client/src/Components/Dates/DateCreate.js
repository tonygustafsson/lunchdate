import React from 'react';
import { Textfield, Button, Switch, List, ListItem, ListItemAction, ListItemContent, Checkbox, Icon } from 'react-mdl';

const DateCreate = ({ datesCreateAjaxPost, datesCreateNewDataChange, newDateData, places, showNewDateForm, cancel }) => {
  if (!showNewDateForm) {
    return null;
  }

  return (
    <div className="CreatePlaceDate">
      <h2>Create new date</h2>

      <form method="post" onSubmit={e => { e.preventDefault(); datesCreateAjaxPost(newDateData) }}>
        <Textfield label="Time" id="newDateTime" name="newDateTime" value={newDateData.dateTime} onChange={e => { datesCreateNewDataChange('dateTime', e.target.value) }} /><br />

        <List className="new-date-place-list">
          {typeof places !== "undefined" && places.map((place) => {
            return (
              <ListItem key={place.key} onClick={e => { datesCreateNewDataChange('datePlace', place.name) }}>
                <ListItemContent>
                  <img width="100" height="100" src={place.imageUrl} alt="logo" className="create-place-logo" />
                  {place.name}
                </ListItemContent>
                <ListItemAction>
                  <Checkbox checked={ newDateData.datePlace === place.name } name="newDatePlace" value={place.name} ripple />
                </ListItemAction>
              </ListItem>
            );
          })}
        </List>

        <Switch ripple className="create-date-switch" id="newDateTakeAway" name="newDateTakeAway" checked={newDateData.dateTakeAway} onChange={e => { datesCreateNewDataChange('dateTakeAway', e.target.checked) }}>
          Take Away
        </Switch>

        <Textfield label="Your name" id="newDateUser" name="newDateUser" value={newDateData.dateUser} onChange={e => { datesCreateNewDataChange('dateUser', e.target.value) }} /><br />

        <Textfield label="Note" id="newDateNote" name="newDateNote" value={newDateData.dateNote} onChange={e => { datesCreateNewDataChange('dateNote', e.target.value) }} />

        <br />
        <Button raised onClick={cancel}><Icon name="undo" /> Cancel</Button>
        <Button raised accent type="submit"><Icon name="save" /> Save</Button>
      </form>
    </div>
  );
}

export default DateCreate;

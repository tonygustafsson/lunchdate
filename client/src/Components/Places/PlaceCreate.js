import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Icon, Textfield } from 'react-mdl';

const PlaceCreate = ({ placesCreateAjaxPost, newPlaceName, placesCreateNewNameChange, showNewPlaceForm, placesToggleNewPlaceForm }) => {
  return (
    <div className="place-create-container">
      <form method="post" onSubmit={e => {
        e.preventDefault();
        placesCreateAjaxPost(newPlaceName);
        placesToggleNewPlaceForm();
      }}
      >
        <Dialog open={showNewPlaceForm}>
          <DialogContent>
            <Textfield floatingLabel label="Place name" name="new-place" value={newPlaceName} onChange={e => { placesCreateNewNameChange(e.target.value) }} /><br />
          </DialogContent>
          <DialogActions>
            <Button raised accent type="submit"><Icon name="save" /> Save</Button>
            <Button type="button" raised onClick={e => { placesToggleNewPlaceForm() }}><Icon name="undo" /> Cancel</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default PlaceCreate;

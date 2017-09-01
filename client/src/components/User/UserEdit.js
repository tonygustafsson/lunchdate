import React from 'react';
import { Dialog, DialogContent, DialogActions, Textfield, Button } from 'react-mdl';

const UserEdit = ({ user, editMode, newNameChange, userSetName, userSaveNameToLocalStorge, userEditNameChange, userToggleEditMode }) => {
  return (
    <div className="user-edit-container">
      <form onSubmit={e => {
        e.preventDefault();
        userSaveNameToLocalStorge(newNameChange);
        userToggleEditMode();
      }}>
        <Dialog open={editMode}>
          <DialogContent>
            <Textfield floatingLabel value={newNameChange} label="Name" autoFocus onChange={e => { userEditNameChange(e.target.value) }} />
          </DialogContent>
          <DialogActions>
            <Button raised accent type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}

export default UserEdit;

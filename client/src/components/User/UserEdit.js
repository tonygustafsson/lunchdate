import React from 'react';
import { Textfield, Button } from 'react-mdl';

const UserEdit = ({ user, editMode, newNameChange, userSetName, userSaveNameToLocalStorge, userEditNameChange, userToggleEditMode }) => {
  if (!editMode) return null;

  return (
    <div className="UserEdit">
      <form onSubmit={e => {
        e.preventDefault();
        userSaveNameToLocalStorge(newNameChange);
        userToggleEditMode();
      }}>
        <Textfield value={newNameChange} label="Name" autofocus onChange={e => { userEditNameChange(e.target.value) }} />
        <Button raised accent type="submit">Save</Button>
      </form>
    </div>
  );
}

export default UserEdit;

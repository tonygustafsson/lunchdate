import React from 'react';
import { Icon } from 'react-mdl';

const UserList = ({ user, userToggleEditMode, editMode }) => {
    if (editMode) return null;

    return (
        <div className="UserList" onClick={e => { userToggleEditMode(); }}>
            <Icon name="person" /> {user.name}
        </div>
    );
}

export default UserList;

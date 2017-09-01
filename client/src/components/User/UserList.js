import React from 'react';
import { Icon } from 'react-mdl';

const UserList = ({ user, userToggleEditMode }) => {
    return (
        <div className="user-list" onClick={e => { userToggleEditMode(); }}>
            <Icon name="person" /> {user.name}
        </div>
    );
}

export default UserList;

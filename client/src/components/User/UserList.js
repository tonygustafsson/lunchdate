import React from 'react';
import { Icon } from 'react-mdl';

const UserList = ({ name, userToggleEditMode }) => {
    return (
        <div className="user-list" onClick={e => { userToggleEditMode(); }}>
            <Icon name="person" /> {name}
        </div>
    );
}

export default UserList;

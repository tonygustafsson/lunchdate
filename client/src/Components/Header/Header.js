import React from 'react';
import { Button, Icon } from 'react-mdl';

const Header = ({ showNewDateForm, datesShowNewDateForm, name, userToggleEditMode }) => {
  return (
    <div>
      <h1 onClick={() => { datesShowNewDateForm(false) }}>Lunch date</h1>

      {!showNewDateForm &&
        <Button raised accent ripple className="create-date-button" onClick={() => { datesShowNewDateForm(!showNewDateForm) }}>
          <Icon name="add" /> Create new date
        </Button>
      }

      { name.toLowerCase() === 'anonymous' &&
        <div className="anonymous-warning" onClick={() => {userToggleEditMode() }}>
          <p>
            <Icon name="warning" />
            You haven't set your name yet, so you will be known as Anonymous.
            Click here to set your name.
          </p>
        </div>
      }
    </div>
  );
}

export default Header;

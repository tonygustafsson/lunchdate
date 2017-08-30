import React from 'react';
import { Button, Icon } from 'react-mdl';

const Header = ({ showNewDateForm, datesShowNewDateForm }) => {
  return (
    <div>
      <h1  onClick={() => { datesShowNewDateForm(false) }}>Lunch date</h1>

      {!showNewDateForm &&
        <Button raised accent ripple className="create-date-button" onClick={() => { datesShowNewDateForm(!showNewDateForm) }}>
          <Icon name="add" /> Create new date
        </Button>
      }
    </div>
  );
}

export default Header;

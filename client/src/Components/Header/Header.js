import React from 'react';
import { Button, Icon } from 'react-mdl';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 onClick={() => { this.props.datesShowNewDateForm(false) }}>Lunch date</h1>

        {!this.props.showNewDateForm &&
          <Button raised accent ripple className="create-date-button" onClick={() => { this.props.datesShowNewDateForm(!this.props.showNewDateForm) }}>
            <Icon name="add" /> Create new date
        </Button>
        }

        {this.props.name.toLowerCase() === 'anonymous' &&
          <div className="anonymous-warning" onClick={() => { this.props.userToggleEditMode() }}>
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
}

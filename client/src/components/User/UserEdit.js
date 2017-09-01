import React from 'react';
import { Textfield, Button } from 'react-mdl';

export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user.name,
    };
  }

  submitData(e) {
    e.preventDefault();
    
    this.props.userSaveNameToLocalStorge(this.props.newNameChange);
    this.props.userToggleEditMode();
  }

  render() {
    if (!this.props.editMode) return null;

    return (
      <div className="user-edit-container">
        <form onSubmit={ e => this.submitData(e) }>
          <Textfield floatingLabel value={this.state.user} label="Name" autoFocus onChange={e => { this.setState({ user: e.target.value }); }} />
          <Button raised accent type="submit">Save</Button>
        </form>
      </div>
    );
  }
}

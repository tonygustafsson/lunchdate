import React from 'react';
import { Dialog, DialogContent, DialogActions, Textfield, Button } from 'react-mdl';

export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempName: '',
    };
  }

  componentWillReceiveProps() {
    this.setState({
      tempName: this.props.name,
    });
  }

  submitData(e) {
    e.preventDefault();

    this.props.userSaveNameToLocalStorge(this.state.tempName);
    this.props.userToggleEditMode();
  }

  render() {
    return (
      <div className="user-edit-container">
        <form onSubmit={e => this.submitData(e)}>
          <Dialog open={this.props.editMode}>
            <DialogContent>
              <Textfield floatingLabel value={this.state.tempName} label="Name" autoFocus onChange={e => { this.setState({tempName: e.target.value}); }} />
            </DialogContent>
            <DialogActions>
              <Button raised accent type="submit">Save</Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}

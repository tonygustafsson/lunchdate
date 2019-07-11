import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Icon, Textfield } from 'react-mdl';

export default class PlaceCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPlaceName: '',
    }
  }

  render() {
    return (
      <div className="place-create-container">
        <form method="post" onSubmit={e => {
          e.preventDefault();
          this.props.placesCreateAjaxPost(this.state.newPlaceName);
          this.props.placesToggleNewPlaceForm();
        }}
        >
          <Dialog open={this.props.showNewPlaceForm}>
            <DialogContent>
              <Textfield floatingLabel label="Place name" name="new-place" value={this.state.newPlaceName} onChange={e => { this.setState({ 'newPlaceName': e.target.value }); }} /><br />
            </DialogContent>
            <DialogActions>
              <Button raised accent type="submit"><Icon name="save" /> Save</Button>
              <Button type="button" raised onClick={e => { this.props.placesToggleNewPlaceForm() }}><Icon name="undo" /> Cancel</Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
};

import React from 'react';
import { Textfield, Button, Switch, Icon } from 'react-mdl';
import { PlaceCreateComponent, PlacesListComponent } from '../../containers/Places';

export default class DateCreate extends React.Component {
  constructor(props) {
    super(props);

    const currentISODate = new Date().toISOString().split('T')[0];

    this.state = {
      date: currentISODate,
      time: '12:00',
      place: '',
      takeAway: false,
      note: '',
    };
  }

  changeDateData(key, value) {
    this.setState({
      [key]: value,
    });
  }

  submitData(e) {
    e.preventDefault();

    let data = this.state;
    data.user = this.props.user;

    this.props.datesCreateAjaxPost(data);
  }

  render() {
    if (!this.props.showNewDateForm) {
      return null;
    }

    return (
      <div>
        <h2>Create new date</h2>

        <div className="create-date-container">
          <form method="post" onSubmit={e => { this.submitData(e); }}>
            <Textfield type="date" floatingLabel className="date-create-date-input" label="Date" id="date" name="date" value={this.state.date} onChange={e => { this.changeDateData('date', e.target.value) }} />
            <Textfield floatingLabel className="date-create-time-input" label="Time" id="time" name="time" value={this.state.time} onChange={e => { this.changeDateData('time', e.target.value) }} />

            <PlacesListComponent selectedPlace={this.state.place} changeDateData={(key, value) => this.changeDateData(key, value)} />

            <Button type="button" raised className="add-new-place-button" onClick={this.props.placesToggleNewPlaceForm}><Icon name="add" /> Add new place</Button>

            <Switch ripple className="create-date-switch" id="takeAway" name="takeAway" checked={this.state.takeAway} onChange={e => { this.changeDateData('takeAway', e.target.checked) }}>
              Take Away
            </Switch>

            <Textfield floatingLabel label="Note" id="note" name="note" value={this.state.note} onChange={e => { this.changeDateData('note', e.target.value) }} />

            <div className="create-date-buttons">
              <Button type="button" raised onClick={this.props.cancel}><Icon name="undo" /> Cancel</Button>
              <Button raised accent type="submit"><Icon name="save" /> Save</Button>
            </div>
          </form>

          <PlaceCreateComponent />
        </div>
      </div>
    );
  }
}

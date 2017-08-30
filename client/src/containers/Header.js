import { connect } from 'react-redux';
import { datesShowNewDateForm, userToggleEditMode } from '../actions';
import Header from '../Components/Header/Header';
import './Header.css';

const mapStateToProps = (state, ownProps) => {
  return {
    showNewDateForm: state.dates.showNewDateForm,
    name: state.user.name,
  };
};

export const HeaderComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      datesShowNewDateForm: (showNewDateForm) => { dispatch(datesShowNewDateForm(showNewDateForm)); },
      userToggleEditMode: () => { dispatch(userToggleEditMode()); }
    };
  }
)(Header);

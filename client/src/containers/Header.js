import { connect } from 'react-redux';
import { datesShowNewDateForm } from '../actions';
import Header from '../Components/Header/Header';
import './Header.css';

const mapStateToProps = (state, ownProps) => {
  return {
    showNewDateForm: state.dates.showNewDateForm,
  };
};

export const HeaderComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      datesShowNewDateForm: (showNewDateForm) => { dispatch(datesShowNewDateForm(showNewDateForm)); },      
    };
  }
)(Header);

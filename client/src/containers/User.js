import { connect } from 'react-redux';
import { userSaveNameToLocalStorge, userGetNameFromLocalStorge, userSetName, userToggleEditMode } from '../actions';
import UserList from '../components/User/UserList';
import UserEdit from '../components/User/UserEdit';
import './User.css';

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.name,
    editMode: state.user.editMode,
  };
};

export const UserListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    dispatch(userGetNameFromLocalStorge());

    return {
      userToggleEditMode: () => { dispatch(userToggleEditMode()); }
    };
  }
)(UserList);

export const UserEditComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      userSetName: (name) => { dispatch(userSetName(name)); },
      userSaveNameToLocalStorge: (name) => { dispatch(userSaveNameToLocalStorge(name)); },
      userToggleEditMode: () => { dispatch(userToggleEditMode()); }
    };
  }
)(UserEdit);

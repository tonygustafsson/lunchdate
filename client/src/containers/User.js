import { connect } from 'react-redux';
import { userSaveNameToLocalStorge, userGetNameFromLocalStorge, userSetName, userToggleEditMode } from '../actions';
import UserList from '../components/User/UserList';
import UserEdit from '../components/User/UserEdit';
import './User.css';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    editMode: state.user.editMode,
    newNameChange: state.user.newNameChange
  };
};

export const UserListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      onLoad: (() => { dispatch(userGetNameFromLocalStorge()); })(),
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

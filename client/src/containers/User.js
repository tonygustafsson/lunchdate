import { connect } from 'react-redux';
import { userSaveNameToLocalStorge, userGetNameFromLocalStorge, userSetName, userEditNameChange, userToggleEditMode } from '../actions';
import UserList from '../Components/User/UserList';
import UserEdit from '../Components/User/UserEdit';
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
      userEditNameChange: (name) => { dispatch(userEditNameChange(name)); },
      userToggleEditMode: () => { dispatch(userToggleEditMode()); }
    };
  }
)(UserEdit);

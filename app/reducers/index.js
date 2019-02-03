import { combineReducers } from 'redux';
import userReducer from 'app/features/users/reducer/UserReducer';
import userDetailReducer from 'app/features/userdetails/reducer/UserDetailReducer';
import errorAlert from 'app/features/error_alert/reducers/ErrorAlertReducer';

module.exports = combineReducers({
  userReducer,
  userDetailReducer,
  errorAlert
});

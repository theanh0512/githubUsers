import { combineReducers } from 'redux';
import userReducer from 'app/features/users/reducer/UserReducer';
import errorAlert from 'app/features/error_alert/reducers/ErrorAlertReducer';

module.exports = combineReducers({
  userReducer,
  errorAlert
});

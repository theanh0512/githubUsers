import { usersAPI } from 'app/api/index';
import { exceptionHandler } from 'app/common/ExceptionHandler';
import {
  HIDE_LOADING_USERS,
  SAVE_USERS,
  SHOW_LOADING_USERS
} from 'app/features/users/constants';

const showLoadingUserList = () => ({
  type: SHOW_LOADING_USERS
});

const hideLoadingUserList = () => ({
  type: HIDE_LOADING_USERS
});

const saveUserList = users => ({
  type: SAVE_USERS,
  users
});

const getUsers = since => async (dispatch, getState) => {
  try {
    dispatch(showLoadingUserList());
    const response = await usersAPI(since);
    dispatch(saveUserList(response));
    dispatch(hideLoadingUserList());

    return true;
  }
  catch (error) {
    exceptionHandler(error, dispatch);
    return false;
  }
};

module.exports = { getUsers };

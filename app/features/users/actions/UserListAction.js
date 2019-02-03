import { usersAPI } from 'app/api/index';
import { exceptionHandler } from 'app/common/ExceptionHandler';
import {
  HIDE_LOADING_USERS,
  SAVE_USERS,
  SELECT_USER,
  SHOW_LOADING_USERS
} from 'app/features/users/constants';

const showLoadingUserList = since => ({
  type: SHOW_LOADING_USERS,
  since
});

const hideLoadingUserList = () => ({
  type: HIDE_LOADING_USERS
});

const saveUserList = (users, link) => ({
  type: SAVE_USERS,
  users,
  link
});

const setSelectedUser = username => async dispatch => {
  dispatch({
    type: SELECT_USER,
    username
  });
};

const getUsers = since => async (dispatch, getState) => {
  try {
    dispatch(showLoadingUserList(since));
    const response = await usersAPI(since);
    let oldUsers = getState().userReducer.users;
    if (oldUsers && Array.isArray(oldUsers)) {
      dispatch(saveUserList(oldUsers.concat(response.json), response.headers.map.link));
    }
    else dispatch(saveUserList(response.json, response.headers.map.link));
    dispatch(hideLoadingUserList());

    return true;
  }
  catch (error) {
    exceptionHandler(error, dispatch);
    return false;
  }
};

module.exports = { getUsers, setSelectedUser };

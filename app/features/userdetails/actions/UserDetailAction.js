import { userDetailAPI } from 'app/api/index';
import { exceptionHandler } from 'app/common/ExceptionHandler';
import {
  HIDE_LOADING_USER,
  SAVE_USER,
  SHOW_LOADING_USER
} from 'app/features/userdetails/constants';

const showLoadingUserDetail = () => ({
  type: SHOW_LOADING_USER
});

const hideLoadingUserDetail = () => ({
  type: HIDE_LOADING_USER
});

const saveUserDetail = userDetail => ({
  type: SAVE_USER,
  userDetail
});

const getUserDetail = username => async (dispatch, getState) => {
  try {
    dispatch(showLoadingUserDetail());
    const response = await userDetailAPI(username);
    dispatch(saveUserDetail(response));
    dispatch(hideLoadingUserDetail());

    return true;
  }
  catch (error) {
    exceptionHandler(error, dispatch);
    return false;
  }
};

module.exports = { getUserDetail };

import {
  HIDE_LOADING_USER,
  SAVE_USER,
  SHOW_LOADING_USER
} from 'app/features/userdetails/constants';
import { SELECT_USER } from 'app/features/users/constants';

const defaultState = {
  userDetail: undefined,
  loadingUserDetail: false,
  username: undefined
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      return { ...state, userDetail: action.userDetail }
    }
    case SHOW_LOADING_USER: {
      return {
        ...state,
        loadingUserDetail: true
      };
    }
    case HIDE_LOADING_USER: {
      return {
        ...state,
        loadingUserDetail: false
      };
    }
    case SELECT_USER: {
      return {
        ...state,
        username: action.username,
        userDetail: undefined
      };
    }
    default:
      return state;
  }
};

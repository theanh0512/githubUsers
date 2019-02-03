import {
  HIDE_LOADING_USERS,
  SAVE_USERS,
  SHOW_LOADING_USERS
} from 'app/features/users/constants';

const defaultState = {
  users: undefined,
  loadingUserList: false,
  link: undefined
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_USERS: {
      return {
        ...state,
        users: action.users,
        link: action.link
      }
    }
    case SHOW_LOADING_USERS: {
      if (action.since === 0) {
        return {
          ...state,
          loadingUserList: true,
          users: undefined
        };
      }
      else {
        return {
          ...state,
          loadingUserList: true
        };
      }
    }
    case HIDE_LOADING_USERS: {
      return {
        ...state,
        loadingUserList: false
      };
    }
    default:
      return state;
  }
};

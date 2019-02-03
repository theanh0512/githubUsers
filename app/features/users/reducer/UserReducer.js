import {
  HIDE_LOADING_USERS,
  SAVE_USERS,
  SHOW_LOADING_USERS
} from 'app/features/users/constants';

const defaultState = {
  users: [],
  loadingUserList: false
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_USERS: {
      return { ...state, users: action.users }
    }
    case SHOW_LOADING_USERS: {
      return {
        ...state,
        loadingUserList: true
      };
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

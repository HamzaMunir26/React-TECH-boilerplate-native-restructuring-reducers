//import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../Constants/';

const INITIAL_STATE = {
  error: '',
  loading: false,
  user: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return {...state, error: '', loading: true};
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     error: '',
    //     loading: false,
    //     user: action.user,
    //   };
    // case LOGIN_FAILED:
    //   return {...state, loading: false, error: action.message};
    default:
      return state;
  }
};

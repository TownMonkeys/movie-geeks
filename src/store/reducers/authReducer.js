const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    case 'SIGNOUT_ERROR':
      console.log('signout error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'LOGIN_SUCCESS_FACEBOOK':
      console.log('facebook sign in success');
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR_FACEBOOK':
      console.log('facebook login error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'RESET_ERROR':
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}

export default authReducer;
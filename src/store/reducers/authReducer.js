const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: 'Signup failed'
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
        authError: 'Login failed'
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
        authError: 'login failed'
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
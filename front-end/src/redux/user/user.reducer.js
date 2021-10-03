const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  token: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_START':
    case 'SIGN_IN_START':
    case 'FORGET_PASSWORD_START':
    case 'PASSWORD_RESET_START':
    case 'SIGN_OUT_START':
      return { ...state, loading: true, error: null }
    case 'SIGN_UP_FAILED':
    case 'SIGN_IN_FAILED':
    case 'FORGET_PASSWORD_FAILED':
    case 'PASSWORD_RESET_FAILED':
    case 'SIGN_OUT_FAILED':
      return { ...state, loading: false, error: action.payload }
    case 'SIGN_UP_SUCCESS':
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        currentUser: action.payload.user,
        token: action.payload.token,
      }
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        currentUser: null,
        token: null,
      }
    case 'FORGET_PASSWORD_SUCCESS':
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        loading: false,
      }
    case 'CLEAR_ERROR':
      return { ...state, error: null }
    default:
      return state
  }
}

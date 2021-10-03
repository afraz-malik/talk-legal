export const getCurrentUser = () => ({
  type: 'GETTING_USER',
})
// -------------------------------------------------------------
export const signInStart = (payload) => ({
  type: 'SIGN_IN_START',
  payload: payload,
})
export const signInSuccess = (user) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
})
export const signInFailed = (error) => ({
  type: 'SIGN_IN_FAILED',
  payload: error,
})

// -------------------------------------------------------------

export const signUpStart = (payload) => ({
  type: 'SIGN_UP_START',
  payload: payload,
})
export const signUpSuccess = (userData) => ({
  type: 'SIGN_UP_SUCCESS',
  payload: userData,
})
export const signUpFailed = (err) => ({
  type: 'SIGN_UP_FAILED',
  payload: err,
})
// -------------------------------------------------------------

export const signOutStart = () => ({
  type: 'SIGN_OUT_START',
})
export const signOutSuccess = () => ({
  type: 'SIGN_OUT_SUCCESS',
})
export const signOutFailed = (error) => ({
  type: 'SIGN_OUT_FAILED',
  payload: error,
})
// -------------------------------------------------------------

export const forgetPasswordStart = (payload) => ({
  type: 'FORGET_PASSWORD_START',
  payload,
})
export const forgetPasswordSuccess = (payload) => ({
  type: 'FORGET_PASSWORD_SUCCESS',
  payload,
})
export const forgetPasswordFailed = (payload) => ({
  type: 'FORGET_PASSWORD_FAILED',
  payload,
})
// -------------------------------------------------------------
export const passwordResetStart = (payload) => ({
  type: 'PASSWORD_RESET_START',
  payload,
})
export const passwordResetSuccess = (payload) => ({
  type: 'PASSWORD_RESET_SUCCESS',
  payload,
})
export const passwordResetFailed = (payload) => ({
  type: 'PASSWORD_RESET_FAILED',
  payload,
})
// -------------------------------------------------------------

export const clearError = () => ({
  type: 'CLEAR_ERROR',
})
// -------------------------------------------------------------

// export const setCurrentUser = (user) => ({
//     type: 'SET_CURRENT_USER',
//     payload: user
// })
export const getUsers = (payload) => ({
  type: 'GETTING_USERS',
  payload,
})
export const getUsersStart = () => ({
  type: 'GETTING_USERS_START',
})
export const approveUser = (payload) => ({
  type: 'APPROVE_USER',
  payload: payload,
})
export const forgetPassword = (payload) => ({
  type: 'FORGET_PASSWORD',
  payload,
})
export const changePassword = (payload) => ({
  type: 'CHANGE_PASSWORD',
  payload,
})
export const isUserAuthenticated = () => ({
  type: 'CHECKING_USER_PERSISTENCE',
})
export const signInWithGoogleStart = () => ({
  type: 'SIGN_IN_WITH_GOOGLE_START',
})

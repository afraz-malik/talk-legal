import { toast } from 'react-toastify'
import { fetchDbGet } from '../../backend/backend'

export const getCurrentUser = () => ({
  type: 'GETTING_USER',
})
export const refreshingUser = () => {
  return (dispatch, getState) => {
    console.log(getState())
    if (getState().userReducer.token) {
      fetchDbGet(`api/user/data`, getState().userReducer.token).then(
        ({ user }) => {
          if (user) {
            // toast.success('Profile Updated Successfully')
            // sessionStorage.setItem(
            //   'currentUser',
            //   JSON.stringify({
            //     user: payload.user,
            //     token: payload.token,
            //   })
            // )
            dispatch({
              type: 'REFRESHING_USER',
              payload: user,
            })
            return 'success'
          }
        }
      )
    }

    // console.log('putting')
    //  localStorage.setItem(
    //   'currentUser',
    //   JSON.stringify({
    //     user,
    //     token,
    //   })
    // )
  }
}
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

export const changePasswordStart = (payload) => ({
  type: 'CHANGE_PASSWORD_START',
  payload,
})
export const changePasswordSuccess = (payload) => ({
  type: 'CHANGE_PASSWORD_SUCCESS',
  payload,
})
export const changePasswordFailed = (payload) => ({
  type: 'CHANGE_PASSWORD_FAILED',
  payload,
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
export const subscribePlanStart = (payload) => ({
  type: 'SUBSCRIBE_PLAN_START',
  payload,
})
export const subscribePlanSuccess = (payload) => ({
  type: 'SUBSCRIBE_PLAN_SUCCESS',
  payload,
})
export const subscribePlanFailed = (payload) => ({
  type: 'SUBSCRIBE_PLAN_FAILED',
  payload,
})
// -------------------------------------------------------------
export const paymentStart = (payload) => ({
  type: 'PAYMENT_START',
  payload,
})
export const paymentSuccess = (payload) => ({
  type: 'PAYMENT_SUCCESS',
  payload,
})
export const paymentFailed = (payload) => ({
  type: 'PAYMENT_FAILED',
  payload,
})

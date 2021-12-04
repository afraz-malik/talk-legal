import { takeLatest, put, select } from 'redux-saga/effects'
import { fetchDbGet, fetchDbPost } from '../../backend/backend'
import { toast } from 'react-toastify'

import {
  changePasswordFailed,
  changePasswordSuccess,
  forgetPasswordFailed,
  forgetPasswordSuccess,
  passwordResetFailed,
  passwordResetSuccess,
  paymentFailed,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  subscribePlanFailed,
  subscribePlanSuccess,
} from './user.action'
import {
  addingCartItemSuccess,
  clearingCart,
  savingFormToApiAction,
} from '../data/data.action'

// ----------------------------------------------------------
// Helper Functions
export function* refreshingUser(token, local) {
  console.log('token')
  const { user } = yield fetchDbGet(`api/user/data`, token)

  console.log('user')
}

// ----------------------------------------------------------

function* gettingCurrentUserStart() {
  const currentUserFromStorage = yield JSON.parse(
    localStorage.getItem('currentUser')
  )
  const currentUserFromSession = yield JSON.parse(
    sessionStorage.getItem('currentUser')
  )
  if (currentUserFromSession) {
    yield put(
      signInSuccess({
        user: currentUserFromSession.user,
        token: currentUserFromSession.token,
      })
    )
  } else if (currentUserFromStorage) {
    yield put(
      signInSuccess({
        user: currentUserFromStorage.user,
        token: currentUserFromStorage.token,
      })
    )
  } else {
    console.log('No User found')
  }
}
export function* gettingCurrentUser() {
  yield takeLatest('GETTING_USER', gettingCurrentUserStart)
}

export function* signUpStart({ payload }) {
  try {
    const response = yield fetchDbPost('api/register', null, payload)
    if (response.user) {
      toast.success('Register SuccessFully, Kindly Login')
      yield put(signUpSuccess())
      // yield refreshingUser(user.id, access_token.plainTextToken, true);
    } else if (response.error) {
      for (const key in response.error) {
        if (response.error.hasOwnProperty(key)) {
          // console.log(`${key}: ${response.error[key]}`)
          console.log(response.error[key][0])
          toast.error(response.error[key][0])
        }
      }
      yield put(signUpFailed(response.error))
    }
  } catch (err) {
    yield put(signUpFailed(err.message))
  }
}
export function* signUp() {
  yield takeLatest('SIGN_UP_START', signUpStart)
}
// ----------------------------------------------------------

export function* signInStart({ payload }) {
  const state = yield select()
  const cart = state.dataReducer.cart
  const currentUser = state.userReducer.currentUser
  try {
    const response = yield fetchDbPost('api/login', null, {
      email: payload.email,
      password: payload.password,
    })
    if (response.user) {
      yield put(
        signInSuccess({
          user: response.user,
          token: response.access_token.plainTextToken,
        })
      )
      yield sessionStorage.setItem(
        'currentUser',
        JSON.stringify({
          user: response.user,
          token: response.access_token.plainTextToken,
        })
      )
      if (payload.keeplogin) {
        yield localStorage.setItem(
          'currentUser',
          JSON.stringify({
            user: response.user,
            token: response.access_token.plainTextToken,
          })
        )
      }
      if (cart.form) {
        // yield put(
        // savingFormToApiAction({ id: response.user.id, form: cart.form })
        // )

        const newresponse = yield fetchDbPost(
          `api/submit-legal-form/${response.user.id}`,
          // response.access_token.accessToken.plainTextToken,
          null,
          cart.form
        )
        if (newresponse.status) {
          yield put(addingCartItemSuccess(newresponse.user_legal_form))
          if (response.user.subscription_plan) {
            yield toast.success(
              `Welcome ${response.user.name}, Your Form has been submitted successfully`
            )
            yield put(clearingCart())
          } else {
            yield toast.success(`Welcome ${response.user.name}.`)
          }
        } else {
          console.log(newresponse)
          throw Error(newresponse.msg)
        }
        // yield refreshingUser(uid, token, false)
      } else {
        yield toast.success(`Welcome ${response.user.name}`)
      }
    } else if (response.message) {
      toast.error(response.message)
      yield put(signInFailed(response.message))
    } else {
      toast.error(response)
      yield put(signInFailed(response))
    }
  } catch (error) {
    yield put(signInFailed(error))
  }
}
export function* signIn() {
  yield takeLatest('SIGN_IN_START', signInStart)
}
// ----------------------------------------------------------

function* signOutStart() {
  const state = yield select()
  const token = state.userReducer.token
  try {
    localStorage.removeItem('currentUser')
    sessionStorage.removeItem('currentUser')
    toast.success('Logout Successfully')
    yield put(signOutSuccess())
    yield put(clearingCart())
    if (token) {
      yield fetchDbPost('api/logout', token, null)
    }
  } catch (error) {
    yield put(signOutFailed(error))
    yield put(signOutSuccess())
    localStorage.removeItem('currentUser')
    sessionStorage.removeItem('currentUser')
    toast.success('Logout Successfully')
  }
}
export function* signOut() {
  yield takeLatest('SIGN_OUT_START', signOutStart)
}

// ----------------------------------------------------------

function* changePasswordStart({ payload }) {
  const state = yield select()
  const token = state.userReducer.token
  try {
    const response = yield fetchDbPost('api/user/change_pass', token, payload)
    if (response.status) {
      toast.success('Password Changed Successfully')
      yield put(changePasswordSuccess())
    } else {
      throw new Error(response.msg)
    }
    // if (response.response === '200') {
    //   toast.success(response.status)
    //   yield put(forgetPasswordSuccess())
    // } else if (response.response === '500') {
    //   toast.warn(response.message)
    //   yield put(forgetPasswordFailed(response.message))
    // } else {
    //   toast.error('No Email Found')
    //   yield put(forgetPasswordFailed())
  } catch (error) {
    toast.error(error.message)
    yield put(changePasswordFailed(error.message))
  }
}
export function* changePassword() {
  yield takeLatest('CHANGE_PASSWORD_START', changePasswordStart)
}
// ----------------------------------------------------------

function* forgetPasswordStart({ payload }) {
  try {
    const response = yield fetchDbPost('api/forgot-password', null, payload)
    if (response.response === '200') {
      toast.success(response.status)
      yield put(forgetPasswordSuccess())
    } else if (response.response === '500') {
      toast.warn(response.message)
      yield put(forgetPasswordFailed(response.message))
    } else {
      toast.error('No Email Found')
      yield put(forgetPasswordFailed())
    }
  } catch (error) {
    yield put(forgetPasswordFailed(error))
  }
}
export function* forgetPassword() {
  yield takeLatest('FORGET_PASSWORD_START', forgetPasswordStart)
}
// ----------------------------------------------------------

function* passwordResetStart({ payload }) {
  try {
    const response = yield fetchDbPost('api/reset-password', null, payload)
    if (response.response === '500') {
      toast.error('Link Has been expired, Kindly Request a New Link')
      yield put(passwordResetFailed(response.message))
    } else {
      yield put(passwordResetSuccess())
    }
  } catch (error) {
    yield put(passwordResetFailed(error))
  }
}
export function* passwordReset() {
  yield takeLatest('PASSWORD_RESET_START', passwordResetStart)
}
// ----------------------------------------------------------
function* subscribePlanStart({ payload }) {
  const state = yield select()
  const token = state.userReducer.token
  const uid = state.userReducer.currentUser.id
  try {
    const response = yield fetchDbGet(
      `api/user/subscribe-plan/${uid}/${payload.pid}`,
      token
    )
    if (response.response === '200') {
      // yield refreshingUser(uid, token, false)
      yield put(subscribePlanSuccess())
      toast.success('Plan Has Been Updated !')
    } else {
      yield put(subscribePlanFailed())
    }
  } catch (error) {
    yield put(subscribePlanFailed(error))
  }
}
export function* subscribePlan() {
  yield takeLatest('SUBSCRIBE_PLAN_START', subscribePlanStart)
}
// ----------------------------------------------------------

function* paymentInitialize({ payload }) {
  const state = yield select()
  const token = state.userReducer.token
  const uid = state.userReducer.currentUser.id
  try {
    console.log(payload)
    const response = yield fetchDbPost(`api/user/plan-payment`, token, payload)
    console.log(response)
  } catch (error) {
    console.log(error.message)
    yield put(paymentFailed(error.message))
  }
}
export function* paymentStart(payload) {
  yield takeLatest('PAYMENT_START', paymentInitialize)
}
// ----------------------------------------------------------

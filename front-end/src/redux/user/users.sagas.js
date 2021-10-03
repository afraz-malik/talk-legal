import { takeLatest, put, select } from 'redux-saga/effects'
import { fetchDbPost } from '../../backend/backend'
import toast from 'cogo-toast'
import {
  forgetPasswordFailed,
  forgetPasswordSuccess,
  passwordResetFailed,
  passwordResetSuccess,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.action'
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
    const data = yield fetchDbPost('api/register', null, payload)
    console.log(data)
    const { val, error } = data
    if (error) {
      yield put(signUpFailed(data.error))
    } else {
      if (val.error) {
        for (const key in val.error) {
          if (val.error.hasOwnProperty(key)) {
            // console.log(`${key}: ${val.error[key]}`)
            toast.error(val.error[key])
          }
        }
        yield put(signUpFailed(val[0]))
      } else {
        yield put(
          signUpSuccess({
            user: val.user,
            token: val.access_token.plainTextToken,
          })
        )
        localStorage.setItem(
          'currentUser',
          JSON.stringify({
            user: val.user,
            token: val.access_token.plainTextToken,
          })
        )
      }
    }
  } catch (err) {
    alert(err.message)
  }
}
export function* signUp() {
  yield takeLatest('SIGN_UP_START', signUpStart)
}
export function* signInStart({ payload }) {
  try {
    const data = yield fetchDbPost('api/login', null, {
      email: payload.email,
      password: payload.password,
    })
    const { val, error } = data
    if (error) {
      yield put(signInFailed(data.error))
    } else {
      if (val.error) {
        for (const key in val.error) {
          if (val.error.hasOwnProperty(key)) {
            // console.log(`${key}: ${val.error[key]}`)
            toast.error(val.error[key])
          }
        }
        yield put(signInFailed(val[0]))
      } else {
        yield put(
          signInSuccess({
            user: val.user,
            token: val.access_token.plainTextToken,
          })
        )
        sessionStorage.setItem(
          'currentUser',
          JSON.stringify({
            user: val.user,
            token: val.access_token.plainTextToken,
          })
        )
        if (payload.keepLogin) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify({
              user: val.user,
              token: val.access_token.plainTextToken,
            })
          )
        }
      }
    }
  } catch (err) {
    alert(err.message)
  }
}
export function* signIn() {
  yield takeLatest('SIGN_IN_START', signInStart)
}
function* signOutStart() {
  const state = yield select()
  const token = state.userReducer.token

  try {
    if (token) {
      const data = yield fetchDbPost('api/logout', token, null)
      // const { val, error } = data
      console.log(data)
      yield put(signOutSuccess())
      localStorage.removeItem('currentUser')
      sessionStorage.removeItem('currentUser')
    }
  } catch (error) {
    yield put(signOutFailed(error))
  }
}
export function* signOut() {
  yield takeLatest('SIGN_OUT_START', signOutStart)
}
function* forgetPasswordStart({ payload }) {
  try {
    const data = yield fetchDbPost('api/forgot-password', null, payload)
    const { val, error } = data
    console.log(data)
    if (!error) {
      if (val.response === '200') {
        toast.info(val.status)
        yield put(forgetPasswordSuccess())
      }
    }
    if (error) {
      yield put(forgetPasswordFailed(error))
    }
  } catch (error) {
    yield put(forgetPasswordFailed(error))
  }
}
export function* forgetPassword() {
  yield takeLatest('FORGET_PASSWORD_START', forgetPasswordStart)
}
function* passwordResetStart({ payload }) {
  try {
    const data = yield fetchDbPost('api/forgot-password', null, payload)
    const { val, error } = data
    console.log(data)
    if (!error) {
      if (val.response === '200') {
        toast.info(val.status)
        yield put(passwordResetSuccess())
      }
    }
    if (error) {
      yield put(passwordResetFailed(error))
    }
  } catch (error) {
    yield put(passwordResetFailed(error))
  }
}
export function* passwordReset() {
  yield takeLatest('PASSWORD_RESET_START', passwordResetStart)
}

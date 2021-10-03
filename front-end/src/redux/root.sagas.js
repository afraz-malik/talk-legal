import { all, call } from 'redux-saga/effects'
import { getSubscriptionsPlans } from './data/data.sagas'
import {
  signUp,
  gettingCurrentUser,
  signIn,
  signOut,
  forgetPassword,
  passwordReset,
} from './user/users.sagas'
export default function* rootSaga() {
  yield all([
    call(signIn),
    call(signUp),
    call(gettingCurrentUser),
    call(signOut),
    call(forgetPassword),
    call(passwordReset),
    call(getSubscriptionsPlans),
  ])
}

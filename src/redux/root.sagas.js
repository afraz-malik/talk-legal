import { all, call } from 'redux-saga/effects'
import {
  getSubscriptionsPlans,
  gettingForm,
  addingCartItem,
  savingFormInApiStart,
  gettingUserLegalFormsStart,
} from './data/data.sagas'
import {
  // signUp,
  gettingCurrentUser,
  signIn,
  signOut,
  forgetPassword,
  passwordReset,
  subscribePlan,
  paymentStart,
  changePassword,
  addCard,
} from './user/users.sagas'
export default function* rootSaga() {
  yield all([
    call(signIn),
    // call(signUp),
    call(gettingCurrentUser),
    call(signOut),
    call(forgetPassword),
    call(passwordReset),
    call(getSubscriptionsPlans),
    call(gettingForm),
    call(addingCartItem),
    call(subscribePlan),
    call(savingFormInApiStart),
    call(paymentStart),
    call(gettingUserLegalFormsStart),
    call(changePassword),
    call(addCard),
  ])
}

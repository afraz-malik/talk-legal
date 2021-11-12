import { takeLatest, put } from 'redux-saga/effects'
import { fetchDbGet, fetchDbPost } from '../../backend/backend'
// import toast from 'cogo-toast'
import {
  addingCartItemFailed,
  addingCartItemSuccess,
  getSubscriptionsPlansFailed,
  getSubscriptionsPlansSuccess,
  gettingFormFailed,
  gettingFormSuccess,
} from './data.action'
// -------------------------------------------------------------

function* getSubscriptionsPlansStart() {
  try {
    const plans = JSON.parse(localStorage.getItem('subscription_plans'))
    yield put(getSubscriptionsPlansSuccess(plans))
    const response = yield fetchDbPost('api/get-subscription-plans', null, null)
    if (response.response === '200') {
      yield put(getSubscriptionsPlansSuccess(response.data))
      localStorage.setItem('subscription_plans', JSON.stringify(response.data))
    } else {
      yield put(getSubscriptionsPlansFailed())
      console.log('Failed To Fetch Plans From DB')
    }
  } catch (error) {
    yield put(getSubscriptionsPlansFailed(error))
    console.log('Failed To Fetch Plans From DB')
  }
}
export function* getSubscriptionsPlans() {
  yield takeLatest('GET_SUBSCRIPTION_PLANS_START', getSubscriptionsPlansStart)
}
// -------------------------------------------------------------

function* gettingFormStart({ payload }) {
  try {
    const response = yield fetchDbGet(`api/legal-form-detail/${payload}`, null)
    if (response.status) {
      yield put(gettingFormSuccess(response))
    }
  } catch (error) {
    yield put(gettingFormFailed(error))
  }
}
export function* gettingForm() {
  yield takeLatest('GETTING_FORM_START', gettingFormStart)
}
// -------------------------------------------------------------
function* addingCartItemStart(payload) {
  try {
    yield localStorage.setItem('currentForm', JSON.stringify({ ...payload }))
    yield put(addingCartItemSuccess(payload))
  } catch (e) {
    yield put(addingCartItemFailed(e.message))
  }
}
export function* addingCartItem() {
  yield takeLatest('ADDING_CART_ITEM_START', addingCartItemStart)
}

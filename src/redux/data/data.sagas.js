import { takeLatest, put } from 'redux-saga/effects'
import { fetchDbPost } from '../../backend/backend'
// import toast from 'cogo-toast'
import {
  getSubscriptionsPlansFailed,
  getSubscriptionsPlansSuccess,
} from './data.action'

function* getSubscriptionsPlansStart() {
  try {
    const data = yield fetchDbPost('api/get-subscription-plans', null, null)
    const { val, error } = data
    console.log(data)
    if (error) {
      yield put(getSubscriptionsPlansFailed(error))
    } else {
      yield put(getSubscriptionsPlansSuccess(val.data))
    }
  } catch (error) {
    yield put(getSubscriptionsPlansFailed(error))
  }
}
export function* getSubscriptionsPlans() {
  yield takeLatest('GET_SUBSCRIPTION_PLANS_START', getSubscriptionsPlansStart)
}

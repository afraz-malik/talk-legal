import { takeLatest, put } from "redux-saga/effects";
import { fetchDbGet, fetchDbPost } from "../../backend/backend";
// import toast from 'cogo-toast'
import {
    getSubscriptionsPlansFailed,
    getSubscriptionsPlansSuccess,
    gettingMutualNonFailed,
    gettingMutualNonSuccess,
} from "./data.action";

function* getSubscriptionsPlansStart() {
    try {
        const data = yield fetchDbPost(
            "api/get-subscription-plans",
            null,
            null
        );
        const { val, error } = data;
        if (error) {
            yield put(getSubscriptionsPlansFailed(error));
        } else {
            yield put(getSubscriptionsPlansSuccess(val.data));
        }
    } catch (error) {
        yield put(getSubscriptionsPlansFailed(error));
    }
}
export function* getSubscriptionsPlans() {
    yield takeLatest(
        "GET_SUBSCRIPTION_PLANS_START",
        getSubscriptionsPlansStart
    );
}
// -------------------------------------------------------------

function* gettingMutualFormStart() {
    try {
        const data = yield fetchDbGet(
            "api/mutual-non-disclosuer-document/1",
            null
        );
        console.log(data);
        const { val, error } = data;
        if (error) {
            yield put(gettingMutualNonFailed(error));
        } else {
            yield put(
                gettingMutualNonSuccess(
                    val.data[0].mutual_none_disclosure_document
                        .document_description
                )
            );
        }
    } catch (error) {
        yield put(gettingMutualNonFailed(error));
    }
}
export function* gettingMutualForm() {
    yield takeLatest("GET_MUTUAL_FORM_START", gettingMutualFormStart);
}

import { takeLatest, put } from "redux-saga/effects";
import { fetchDbGet, fetchDbPost } from "../../backend/backend";
// import toast from 'cogo-toast'
import {
    getSubscriptionsPlansFailed,
    getSubscriptionsPlansSuccess,
    gettingFormFailed,
    gettingFormSuccess,
    savingFormFailed,
    savingFormSuccess,
} from "./data.action";
// -------------------------------------------------------------

function* getSubscriptionsPlansStart() {
    try {
        const plans = JSON.parse(localStorage.getItem("subscription_plans"));
        yield put(getSubscriptionsPlansSuccess(plans));
        const response = yield fetchDbPost(
            "api/get-subscription-plans",
            null,
            null
        );
        if (response.response === "200") {
            yield put(getSubscriptionsPlansSuccess(response.data));
            localStorage.setItem(
                "subscription_plans",
                JSON.stringify(response.data)
            );
        } else {
            yield put(getSubscriptionsPlansFailed());
            console.log("Failed To Fetch Plans From DB");
        }
    } catch (error) {
        yield put(getSubscriptionsPlansFailed(error));
        console.log("Failed To Fetch Plans From DB");
    }
}
export function* getSubscriptionsPlans() {
    yield takeLatest(
        "GET_SUBSCRIPTION_PLANS_START",
        getSubscriptionsPlansStart
    );
}
// -------------------------------------------------------------

function* gettingFormStart() {
    try {
        const response = yield fetchDbGet(
            "api/mutual-non-disclosuer-document/1",
            null
        );
        if (response.response === "200") {
            yield put(
                gettingFormSuccess({
                    form: response.data[0].mutual_none_disclosure_document
                        .document_description,
                    state: null,
                })
            );
        }
    } catch (error) {
        yield put(gettingFormFailed(error));
    }
}
export function* gettingForm() {
    yield takeLatest("GETTING_FORM_START", gettingFormStart);
}
// -------------------------------------------------------------
function* savingFormStart(payload) {
    try {
        yield localStorage.setItem("currentForm", JSON.stringify({ payload }));
        yield put(savingFormSuccess());
    } catch (e) {
        yield put(savingFormFailed(e.message));
    }
}
export function* savingForm() {
    yield takeLatest("SAVING_FORM_IN_STATE_START", savingFormStart);
}

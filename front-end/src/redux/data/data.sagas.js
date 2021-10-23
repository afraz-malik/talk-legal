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
                    id: "1",
                    title: "Mutual Non disclosurer Agreement",
                    discreption:
                        response.data[0].mutual_none_disclosure_document
                            .document_description,
                    pages: [
                        {
                            title: "In what State would you like to form ________?",
                            desp: "For the purpose of industry regulation, your details are required.",
                            feilds: [
                                {
                                    label: "Enter your agreement brought state",
                                    type: "list",
                                    name: "agreement_brought_state",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter your agreement constructed state",
                                    type: "list",
                                    name: "agreement_constructed_state",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                            ],
                        },
                        {
                            title: "When do you want to start your business?",
                            desp: "For the purpose of industry regulation, your details are required.",
                            feilds: [
                                {
                                    label: "Enter your Date",
                                    type: "date",
                                    name: "date_as_of",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                            ],
                        },
                        {
                            title: "Enter Company 1 Details",
                            desp: "For the purpose of industry regulation, your details are required.",
                            feilds: [
                                {
                                    label: "Enter company 1 name",
                                    type: "text",
                                    name: "company_one_name",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 1 address",
                                    type: "text",
                                    name: "company_one_street_address",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 1 name of representative",
                                    type: "text",
                                    name: "company_one_name_of_representative",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 1 Signature",
                                    type: "text",
                                    name: "company_one_signature",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                            ],
                        },
                        {
                            title: "Enter Company 2 Details",
                            desp: "For the purpose of industry regulation, your details are required.",
                            feilds: [
                                {
                                    label: "Enter company 2 name",
                                    type: "text",
                                    name: "company_two_name",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 2 address",
                                    type: "text",
                                    name: "company_two_street_address",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 2 name of representative",
                                    type: "text",
                                    name: "company_two_name_of_representative",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                                {
                                    label: "Enter company 2 Signature",
                                    type: "text",
                                    name: "company_two_signature",
                                    value: "",
                                    placeholder: "Enter something",
                                },
                            ],
                        },
                    ],
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
        yield localStorage.setItem(
            "currentForm",
            JSON.stringify({ ...payload })
        );
        yield put(savingFormSuccess());
    } catch (e) {
        yield put(savingFormFailed(e.message));
    }
}
export function* savingForm() {
    yield takeLatest("SAVING_FORM_IN_STATE_START", savingFormStart);
}

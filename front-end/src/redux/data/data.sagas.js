import { takeLatest, put } from "redux-saga/effects";
import { fetchDbGet, fetchDbPost } from "../../backend/backend";
// import toast from 'cogo-toast'
import {
    addingCartItemFailed,
    addingCartItemSuccess,
    getSubscriptionsPlansFailed,
    getSubscriptionsPlansSuccess,
    gettingFormFailed,
    gettingFormSuccess,
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
                                    label: "Select your agreement brought state",
                                    type: "list",
                                    name: "agreement_brought_state",
                                    value: "",
                                    placeholder: "Select your state",
                                },
                                {
                                    label: "Enter your agreement constructed state",
                                    type: "list",
                                    name: "agreement_constructed_state",
                                    value: "",
                                    placeholder: "Select your state",
                                },
                            ],
                        },
                        {
                            title: "When do you want to start your business?",
                            desp: "For the purpose of industry regulation, your details are required.",
                            feilds: [
                                {
                                    label: "Select your Date",
                                    type: "date",
                                    name: "date_as_of",
                                    value: "",
                                    placeholder: "Select your date",
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
                                    placeholder: "Enter name",
                                },
                                {
                                    label: "Enter company 1 address",
                                    type: "text",
                                    name: "company_one_street_address",
                                    value: "",
                                    placeholder: "Enter address",
                                },
                                {
                                    label: "Enter company 1 name of representative",
                                    type: "text",
                                    name: "company_one_name_of_representative",
                                    value: "",
                                    placeholder: "Enter representative",
                                },
                                {
                                    label: "Enter company 1 Signature",
                                    type: "text",
                                    name: "company_one_signature",
                                    value: "",
                                    placeholder: "Enter signature",
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
                                    placeholder: "Enter name",
                                },
                                {
                                    label: "Enter company 2 address",
                                    type: "text",
                                    name: "company_two_street_address",
                                    value: "",
                                    placeholder: "Enter address",
                                },
                                {
                                    label: "Enter company 2 name of representative",
                                    type: "text",
                                    name: "company_two_name_of_representative",
                                    value: "",
                                    placeholder: "Enter representative name",
                                },
                                {
                                    label: "Enter company 2 Signature",
                                    type: "text",
                                    name: "company_two_signature",
                                    value: "",
                                    placeholder: "Enter signature",
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
function* addingCartItemStart(payload) {
    try {
        yield localStorage.setItem(
            "currentForm",
            JSON.stringify({ ...payload })
        );
        yield put(addingCartItemSuccess(payload));
    } catch (e) {
        yield put(addingCartItemFailed(e.message));
    }
}
export function* addingCartItem() {
    yield takeLatest("ADDING_CART_ITEM_START", addingCartItemStart);
}

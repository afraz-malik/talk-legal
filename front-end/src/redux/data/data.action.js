export const getSubscriptionsPlansStart = () => ({
    type: "GET_SUBSCRIPTION_PLANS_START",
});
export const getSubscriptionsPlansSuccess = (payload) => ({
    type: "GET_SUBSCRIPTION_PLANS_SUCCESS",
    payload,
});
export const getSubscriptionsPlansFailed = (payload) => ({
    type: "GET_SUBSCRIPTION_PLANS_FAILED",
    payload,
});
// -------------------------------------------------------------
export const gettingFormStart = () => ({
    type: "GETTING_FORM_START",
});
export const gettingFormSuccess = (payload) => ({
    type: "GETTING_FORM_SUCCESS",
    payload,
});
export const gettingFormFailed = (payload) => ({
    type: "GETTING_FORM_FAILED",
    payload,
});
// -------------------------------------------------------------
export const savingForm = (payload) => ({
    type: "SAVING_FORM_IN_STATE_START",
    payload,
});
export const savingFormSuccess = (payload) => ({
    type: "SAVING_FORM_IN_STATE_SUCCESS",
    payload,
});
export const savingFormFailed = (payload) => ({
    type: "SAVING_FORM_IN_STATE_FAILED",
    payload,
});

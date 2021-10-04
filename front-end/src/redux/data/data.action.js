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
export const gettingMutualFormStart = () => ({
    type: "GET_MUTUAL_FORM_START",
});
export const gettingMutualNonSuccess = (payload) => ({
    type: "GET_MUTUAL_FORM_SUCCESS",
    payload,
});
export const gettingMutualNonFailed = (payload) => ({
    type: "GET_MUTUAL_FORM_FAILED",
    payload,
});
// -------------------------------------------------------------

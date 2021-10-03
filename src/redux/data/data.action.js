export const getSubscriptionsPlansStart = () => ({
  type: 'GET_SUBSCRIPTION_PLANS_START',
})
export const getSubscriptionsPlansSuccess = (payload) => ({
  type: 'GET_SUBSCRIPTION_PLANS_SUCCESS',
  payload,
})
export const getSubscriptionsPlansFailed = (payload) => ({
  type: 'GET_SUBSCRIPTION_PLANS_FAILED',
  payload,
})
// -------------------------------------------------------------

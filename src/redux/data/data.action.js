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
export const gettingFormStart = (payload) => ({
  type: 'GETTING_FORM_START',
  payload,
})
export const gettingFormSuccess = (payload) => ({
  type: 'GETTING_FORM_SUCCESS',
  payload,
})
export const gettingFormFailed = (payload) => ({
  type: 'GETTING_FORM_FAILED',
  payload,
})
// -------------------------------------------------------------
export const clearForm = () => ({
  type: 'CLEAR_FORM',
})

// -------------------------------------------------------------
export const savingFormInState = (payload) => ({
  type: 'SAVING_FORM_IN_STATE',
  payload,
})
// -------------------------------------------------------------
export const addingCartItem = (payload) => ({
  type: 'ADDING_CART_ITEM_START',
  payload,
})
export const addingCartItemSuccess = (payload) => ({
  type: 'ADDING_CART_ITEM_SUCCESS',
  payload,
})
export const addingCartItemFailed = (payload) => ({
  type: 'ADDING_CART_ITEM_FAILED',
  payload,
})
// -------------------------------------------------------------

export const clearingCart = (payload) => ({
  type: 'CLEARING_CART',
  payload,
})
// -------------------------------------------------------------

export const savingFormToApiAction = (payload) => ({
  type: 'SAVING_FORM_TO_API',
  payload,
})
// -------------------------------------------------------------

export const gettingUserLegalFormsStart = () => ({
  type: 'GETTING_USER_LEGAL_FORMS_START',
})
export const gettingUserLegalFormsSucces = (payload) => ({
  type: 'GETTING_USER_LEGAL_FORMS_SUCCESS',
  payload,
})
export const gettingUserLegalFormsFailed = (payload) => ({
  type: 'GETTING_USER_LEGAL_FORMS_FAILED',
  payload,
})

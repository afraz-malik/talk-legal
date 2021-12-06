const initialCart = {
  form: null,
}
const initialState = {
  subscription_plans: null,
  error: null,
  loading: false,
  currentForm: null,
  cart: initialCart,
  userLegalForms: null,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUBSCRIPTION_PLANS_SUCCESS':
      return { ...state, subscription_plans: action.payload }
    case 'GET_SUBSCRIPTION_PLANS_FAILED':
    case 'GETTING_FORM_FAILED':
      return { ...state, error: action.payload, loading: false }
    case 'GETTING_FORM_START':
      return { ...state, loading: false, error: null }
    case 'GETTING_FORM_SUCCESS':
      return {
        ...state,
        loading: false,
        currentForm: action.payload,
      }
    case 'SAVING_FORM_IN_STATE':
      return { ...state, currentForm: action.payload }
    case 'ADDING_CART_ITEM_SUCCESS':
      let cart = state.cart
      console.log(action.payload)
      let tempCart = { ...cart, form: action.payload }
      return { ...state, cart: tempCart, currentForm: null }
    case 'ADDING_CART_ITEM_FAILED':
      return { ...state, error: action.payload }
    case 'CLEARING_CART':
      return { ...state, cart: initialCart }
    case 'CLEAR_FORM':
      return { ...state, currentForm: null }
    case 'GETTING_USER_LEGAL_FORMS_SUCCESS':
      return { ...state, userLegalForms: action.payload }
    default:
      return state
  }
}

const initialState = {
  subscription_plans: null,
  error: null,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUBSCRIPTION_PLANS_SUCCESS':
      return { ...state, subscription_plans: action.payload }
    case 'GET_SUBSCRIPTION_PLANS_FAILED':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

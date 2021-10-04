const initialState = {
    subscription_plans: null,
    error: null,
    loading: false,
    mutualForm: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SUBSCRIPTION_PLANS_SUCCESS":
            return { ...state, subscription_plans: action.payload };
        case "GET_SUBSCRIPTION_PLANS_FAILED":
        case "GET_MUTUAL_FORM_FAILED":
            return { ...state, error: action.payload };
        case "GET_MUTUAL_FORM_START":
            return { ...state, loading: false, error: null };
        case "GET_MUTUAL_FORM_SUCCESS":
            return {
                ...state,
                loading: false,
                mutualForm: action.payload,
            };
        default:
            return state;
    }
};

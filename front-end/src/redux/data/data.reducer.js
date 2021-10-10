const initialState = {
    subscription_plans: null,
    error: null,
    loading: false,
    mutualForm: null,
    currentForm: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SUBSCRIPTION_PLANS_SUCCESS":
            return { ...state, subscription_plans: action.payload };
        case "GET_SUBSCRIPTION_PLANS_FAILED":
        case "GETTING_FORM_FAILED":
            return { ...state, error: action.payload };
        case "GETTING_FORM_START":
            return { ...state, loading: false, error: null };
        case "GETTING_FORM_SUCCESS":
            return {
                ...state,
                loading: false,
                mutualForm: action.payload,
            };
        case "SAVING_FORM_IN_STATE_START":
            return { ...state, currentForm: action.payload };
        case "SAVING_FORM_IN_STATE_FAILED":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const initialCart = {
    form: null,
};
const initialState = {
    subscription_plans: null,
    error: null,
    loading: false,
    currentForm: null,
    cart: initialCart,
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
                currentForm: action.payload,
            };
        case "ADDING_CART_ITEM_SUCCESS":
            let cart = state.cart;
            let tempCart = { ...cart, form: action.payload.payload };
            return { ...state, cart: tempCart, currentForm: null };
        case "ADDING_CART_ITEM_FAILED":
            return { ...state, error: action.payload };
        case "CLEARING_CART":
            return { ...state, cart: initialCart };
        default:
            return state;
    }
};

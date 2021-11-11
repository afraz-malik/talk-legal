const initialState = {
    currentUser: null,
    loading: false,
    error: null,
    token: null,
    success: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP_START":
        case "SIGN_IN_START":
        case "FORGET_PASSWORD_START":
        case "PASSWORD_RESET_START":
        case "SIGN_OUT_START":
        case "SUBSCRIBE_PLAN_START":
            return { ...state, loading: true, error: null };

        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                ...state,
                error: null,
                loading: false,
                success: true,
                currentUser: null,
                token: null,
            };
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                error: null,
                loading: false,
                success: true,
                currentUser: action.payload.user,
                token: action.payload.token,
            };
        case "SIGN_OUT_SUCCESS":
            return {
                ...state,
                error: null,
                loading: false,
                currentUser: null,
                token: null,
                success: false,
            };
        case "FORGET_PASSWORD_SUCCESS":
        case "PASSWORD_RESET_SUCCESS":
        case "SUBSCRIBE_PLAN_SUCCESS":
            return {
                ...state,
                loading: false,
                success: true,
            };
        case "SIGN_UP_FAILED":
        case "SIGN_IN_FAILED":
        case "FORGET_PASSWORD_FAILED":
        case "PASSWORD_RESET_FAILED":
        case "SIGN_OUT_FAILED":
        case "SUBSCRIBE_PLAN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            };
        case "CLEAR_ERROR":
            return { ...state, error: null, success: false };
        default:
            return state;
    }
};

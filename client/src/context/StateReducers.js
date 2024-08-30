import { reducerCases } from "./constants";

export const initialState = {
    userInfo: undefined,
    showLoginModal: false,
    showSignpModal: false,
    isSeller: false,
    gigData: undefined,
    hasOrdered: false,
    reloadReviews: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                showLoginModal: action.showLoginModal,
            };
        case reducerCases.TOGGLE_SIGNUP_MODAL:
            return {
                ...state,
                showSignupModal: action.showSignupModal,
            };
        case reducerCases.CLOSE_AUTH_MODAL:
            return {
                ...state,
                showLoginModal: false,
                showSignpModal: false
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SWITCH_MODE:
            return {
                ...state,
                isSeller: !state.isSeller,
            };
        case reducerCases.SET_GIG_DATA:
            return {
                ...state,
                gigData: action.gigData,
            };
        case reducerCases.HAS_USER_ORDERED_GIG:
            return {
                ...state,
                hasOrdered: action.hasOrdered,
            };
        case reducerCases.ADD_REVIEW:
            return {
                ...state,
                gigData: {
                    ...state.gigData,
                    reviews: [...state.gigData.reviews, action.newReview],
                },
            };


        default:
            return state;
    }
}

export default reducer;
import {
    LOGIN_USER,
    LOGOUT_USER,
    SET_USER_FAVOURITES,
    SET_INIT,
    SET_USER,
} from "../actions";

const INIT_STATE = {
    user: JSON.parse(localStorage.getItem("investorWalletUser") || "{}"),
    init: true,
};

export default (state = INIT_STATE, { payload, type }) => {
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                user: payload.user,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: undefined,
            };
        case SET_USER_FAVOURITES:
            return {
                ...state,
                user: {
                    ...state.user,
                    favourites: payload,
                },
            };
        case SET_INIT:
            return {
                ...state,
                init: payload,
            };
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        default:
            return { ...state };
    }
};

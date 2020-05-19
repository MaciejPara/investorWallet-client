import { LOGIN_USER, LOGOUT_USER } from "../actions";

const INIT_STATE = {
    user: JSON.parse(localStorage.getItem("investorWalletUser") || "{}"),
    error: "",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: undefined,
            };
        default:
            return { ...state };
    }
};

import { LOGIN_USER } from "../actions";

const INIT_STATE = {
    user: JSON.parse(localStorage.getItem("investorWalletUser") || "{}"),
    error: "",
    basePath: process.env.PUBLIC_URL,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        default:
            return { ...state };
    }
};

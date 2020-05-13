import { LOGIN_USER } from "../actions";

const INIT_STATE = {
    user: localStorage.getItem("investorWalletUserId"),
    error: "",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: "" };
        default:
            return { ...state };
    }
};

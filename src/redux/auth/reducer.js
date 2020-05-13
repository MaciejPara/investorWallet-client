import { LOGIN_USER } from "../actions";

const INIT_STATE = {
    user: localStorage.getItem("investorWalletUserId"),
    error: "",
    // basePath:
    //     process.env.NODE_ENV === "development" ? "" : "/investorWallet-client",
    basePath: "",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: "" };
        default:
            return { ...state };
    }
};

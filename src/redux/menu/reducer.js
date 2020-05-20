import { MENU_CHANGE } from "../actions";

const INIT_STATE = {
    items: [
        {
            label: "Home",
            name: "home",
            path: "",
        },
        {
            label: "Currencies",
            name: "currencies",
            path: "/currencies",
        },
        {
            label: "Crypto",
            name: "crypto",
            path: "/crypto",
        },
        {
            label: "Metals",
            name: "metals",
            path: "/metals",
        },
    ],
    current: "home",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case MENU_CHANGE: {
            return { ...state, current: action.payload };
        }

        default:
            return { ...state };
    }
};

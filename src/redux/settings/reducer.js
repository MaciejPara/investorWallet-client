import { SET_SETTINGS } from "../actions";
import UserSettingsAdapter from "../../utils/UserSettings";

const settings = {
    ...JSON.parse(localStorage.getItem("investorWalletUserSettings") || "{}"),
};

const INIT_STATE = {
    userSettingsAdapter: new UserSettingsAdapter({
        ...settings,
        ...JSON.parse(localStorage.getItem("investorWalletUser") || "{}"),
    }),
    baseOptions: [
        { value: "USD", label: "USD" },
        { value: "PLN", label: "PLN" },
    ],
    ...settings,
};

export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case SET_SETTINGS: {
            return {
                ...state,
                ...payload,
            };
        }
        default:
            return { ...state };
    }
};

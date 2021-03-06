import { SET_DATA, SET_INIT_FLAG, SET_UPDATE_DATE } from "../actions";
import collections from "./index";

const INIT_STATE = {
    categories: ["currencies", "crypto", "metals", "stocks"],
    initFlag: false,
    ...collections,
};

export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case SET_DATA: {
            return {
                ...state,
                [payload.category]: {
                    ...state[payload.category],
                    data: payload.data,
                },
            };
        }
        case SET_UPDATE_DATE: {
            return {
                ...state,
                [payload.category]: {
                    ...state[payload.category],
                    updateDate: payload.updateDate,
                },
            };
        }
        case SET_INIT_FLAG: {
            return {
                ...state,
                initFlag: !state.initFlag,
            };
        }
        default:
            return { ...state };
    }
};

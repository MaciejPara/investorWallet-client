import { SET_DATA, SET_INIT_FLAG } from "../actions";
import collections from "./index";

const INIT_STATE = {
    categories: ["currencies", "crypto", "metals"],
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
